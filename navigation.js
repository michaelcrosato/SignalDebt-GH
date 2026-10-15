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
  const ax=near(a.x,roads.xs),az=near(a.z,roads.zs),bx=near(b.x,roads.xs),bz=near(b.z,roads.zs);
  const start=Math.abs(a.x-ax)<Math.abs(a.z-az)?point(ax,a.z):point(a.x,az);
  return [start,point(ax,az),point(bx,az),point(bx,bz),point(b.x,bz),point(b.x,b.z)].filter((p,i,arr)=>!i||distance(p,arr[i-1])>2);
}
