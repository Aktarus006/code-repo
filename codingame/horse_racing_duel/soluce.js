/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const N = parseInt(readline());

 let arr = []
 for (let i = 0; i < N; i++) {
     const pi = parseInt(readline());
     arr.push(pi)
 }
 
 arr = arr.sort(function (a, b) {
     return a -b
 })
 
 let prev = arr[0] ;
 let delta = 1000000000;
 
 for (let j = 1; j < arr.length ; j++) {
     let res = arr[j] - prev
     delta = delta > res ? res : delta
     prev = arr[j]
 }
 
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 
 console.log(delta);
 