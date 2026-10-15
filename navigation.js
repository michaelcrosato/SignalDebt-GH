// Shared geometric queries; patrols use the actual solid building footprints.
export const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
export const distance = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
export const point = (x, z, y = 0) => ({ x, y, z });
export const angleDelta = (a, b) => Math.atan2(Math.sin(a - b), Math.cos(a - b));

export function segmentHitsRect(a, b, r, margin = 0) {
  const minX = r.x - r.w / 2 - margin, maxX = r.x + r.w / 2 + margin;
  const minZ = r.z - r.d / 2 - margin, maxZ = r.z + r.d / 2 + margin;
  let low = 0, high = 1;
  for (const [origin, delta, min, max] of [[a.x,b.x-a.x,minX,maxX],[a.z,b.z-a.z,minZ,maxZ]]) {
    if (Math.abs(delta) < 1e-8) { if (origin < min || origin > max) return false; }
    else {
      let t1 = (min-origin)/delta, t2=(max-origin)/delta;
      if(t1>t2) [t1,t2]=[t2,t1];
      low=Math.max(low,t1);high=Math.min(high,t2);if(low>high)return false;
    }
  }
  return high > 0.015 && low < 0.985;
}

export function visible(a,b,buildings) {
  return !buildings.some(r => r.h > Math.min(a.y??1,b.y??1)+0.5 && segmentHitsRect(a,b,r));
}

export function roadRoute(a,b,roads) {
  const near = (n, list) => list.reduce((p,c)=>Math.abs(c-n)<Math.abs(p-n)?c:p);
  const connector = p => {
    const x=near(p.x,roads.xs),z=near(p.z,roads.zs);
    return Math.abs(p.x-x)<Math.abs(p.z-z)?point(x,p.z):point(p.x,z);
  };
  const start=connector(a),end=connector(b),nodes=[];
  const add=p=>{let i=nodes.findIndex(n=>n.x===p.x&&n.z===p.z);if(i<0){i=nodes.length;nodes.push(p);}return i;};
  const first=add(start),last=add(end);
  for(const x of roads.xs)for(const z of roads.zs)add(point(x,z));
  const costs=nodes.map(()=>Infinity),from=nodes.map(()=>-1),visited=new Set();costs[first]=0;
  while(visited.size<nodes.length){
    let current=-1;
    for(let i=0;i<nodes.length;i++)if(!visited.has(i)&&(current<0||costs[i]<costs[current]))current=i;
    if(current===last||!Number.isFinite(costs[current]))break;
    visited.add(current);const p=nodes[current];
    for(let i=0;i<nodes.length;i++){
      const q=nodes[i];
      if(visited.has(i)||!(p.x===q.x&&roads.xs.includes(p.x)||p.z===q.z&&roads.zs.includes(p.z)))continue;
      const cost=costs[current]+distance(p,q);if(cost<costs[i]){costs[i]=cost;from[i]=current;}
    }
  }
  const path=[];for(let i=last;i>=0;i=from[i]){path.unshift(nodes[i]);if(i===first)break;}
  path.push(point(b.x,b.z,b.y??0));
  const result=[];
  for(const p of path){
    if(result.length&&distance(result.at(-1),p)<1e-6)continue;
    if(result.length>1){const u=result.at(-2),v=result.at(-1);if(u.x===v.x&&v.x===p.x||u.z===v.z&&v.z===p.z)result.pop();}
    result.push(p);
  }
  return result;
}
