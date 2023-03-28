// src/util.js

// Return a randomly oriented vector with the given length.
export function randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return scale([Math.sin(deg), Math.cos(deg)], length);
  }
  
// Scale the length of a vector by the given amount.
export function scale(vec, m) {
return [vec[0] * m, vec[1] * m];
}
  
export function distance(pos1, pos2) {
  return Math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2);
}