/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n===0) return 1
  if (n<=3) return n
  // const newArray = new Array(n+1).fill(1)
  // for (let i=2; i<=n; i++){
  //   newArray[i] = newArray[i-1] + newArray[i-2]
  //   // console.log(newArray)
  // }
  // return newArray[n]
/*
Math:
an = [Phin – (phi)n] / Sqrt[5].
where Phi = (1 + Sqrt[5]) / 2 is the so-called golden mean, and
phi = (1 – Sqrt[5]) / 2 is an associated golden number, also equal to (-1 / Phi). This formula is attributed to Binet in 1843, though known by Euler before him.
*/
  const Phi = (1 + Math.sqrt(5))/2
  return (Math.pow(Phi,n+1)-Math.pow((-1/Phi),n+1))/Math.sqrt(5)
};


/*
1 = [1]         = 1
2 = [1,1]       = 2
    [2]
3 = [1,1,1]     = 3
    [1,2]
    [2,1]
4 = [1,1,1,1]   = 5
    [1,2,1]
    [2,1,1]
    [1,1,2]
    [2,2]
5 = [1,1,1,1,1] = 8
    [2,1,1,1]
    [1,2,1,1]
    [1,1,2,1]
    [1,1,1,2]
    [2,2,1]
    [1,2,2]
    [2,1,2]
*/