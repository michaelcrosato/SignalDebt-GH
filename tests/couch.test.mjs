import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,symlink,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import http from 'node:http';
import couch from '../scripts/couch.cjs';

function get(port,path='/',{method='GET',host=`127.0.0.1:${port}`}={}){
 return new Promise((resolve,reject)=>{const request=http.request({hostname:'127.0.0.1',port,path,method,headers:{Host:host}},response=>{let body='';response.setEncoding('utf8');response.on('data',part=>body+=part);response.on('end',()=>resolve({status:response.statusCode,headers:response.headers,body}));});request.on('error',reject);request.end();});
}
const stop=server=>new Promise(resolve=>{server.close(resolve);server.closeAllConnections?.();});

test('couch origin and normal profiles are fixed and separate from ordinary Chrome',()=>{
 assert.equal(couch.ORIGIN,'http://127.0.0.1:8127');
 assert.equal(couch.profilePath('win32',{LOCALAPPDATA:'C:\\Users\\Fixture\\AppData\\Local'},'C:\\Users\\Fixture'),'C:\\Users\\Fixture\\AppData\\Local\\SignalDebt\\CouchProfile');
 assert(couch.profilePath('linux',{XDG_DATA_HOME:'/example/data'},'/example/home').endsWith('/SignalDebt/CouchProfile'));
 assert(couch.profilePath('darwin',{},'/example/home').includes('Library/Application Support/SignalDebt/CouchProfile'));
});

test('local static server serves the game but rejects traversal, aliases and private directories',async t=>{
 const temp=await mkdtemp(join(tmpdir(),'signal-couch-server-')),root=join(temp,'game');await mkdir(join(root,'assets'),{recursive:true});await mkdir(join(root,'.git'));
 await writeFile(join(root,'index.html'),'<h1>Signal Debt fixture</h1>');await writeFile(join(root,'game.js'),'export const ready=true;');await writeFile(join(root,'assets','mesh.glb'),'fixture mesh');await writeFile(join(root,'.git','config'),'not served');await writeFile(join(temp,'outside.js'),'not served');
 await symlink(join(temp,'outside.js'),join(root,'assets','outside.js'));
 const server=await couch.createLocalServer({root,port:0}),port=server.address().port;
 t.after(async()=>{await stop(server);await rm(temp,{recursive:true,force:true});});
 assert.equal((await get(port)).status,200);assert.match((await get(port)).body,/Signal Debt fixture/);
 const js=await get(port,'/game.js?cache=1');assert.equal(js.status,200);assert.match(js.headers['content-type'],/javascript/);
 assert.equal((await get(port,'/assets/mesh.glb')).status,200);
 const head=await get(port,'/game.js',{method:'HEAD'});assert.equal(head.status,200);assert.equal(head.body,'');assert(Number(head.headers['content-length'])>0);
 for(const path of ['/%2e%2e/outside.js','/assets/%2e%2e/index.html','/assets/%5c..%5coutside.js','/.git/config','/node_modules/package.json','/scripts/couch.cjs','/game.js:alternate','/assets/outside.js'])assert.equal((await get(port,path)).status,403,path);
 assert.equal((await get(port,'/assets')).status,404);assert.equal((await get(port,'/missing.js')).status,404);
 assert.equal((await get(port,'/',{method:'POST'})).status,405);
 assert.equal((await get(port,'/',{host:'unrelated.example'})).status,421);
 assert.equal((await get(port,'/%GG')).status,400);
});

test('occupied port fails clearly and shutdown releases it',async()=>{
 const temp=await mkdtemp(join(tmpdir(),'signal-couch-port-'));await writeFile(join(temp,'index.html'),'ready');
 const first=await couch.createLocalServer({root:temp,port:0}),port=first.address().port;
 try{await assert.rejects(couch.createLocalServer({root:temp,port}),/already in use/);}finally{await stop(first);}
 const reopened=await couch.createLocalServer({root:temp,port});assert.equal(reopened.address().port,port);await stop(reopened);await rm(temp,{recursive:true,force:true});
});
