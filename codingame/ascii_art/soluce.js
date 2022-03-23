/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const L = parseInt(readline());
 const H = parseInt(readline());
 const T = readline();
 let result = '';
 for (let i = 0; i < H; i++) {
     const ROW = readline();
     let arr = T.split('')
     for (let j=0; j <arr.length; j++) {
         let ASCindex = arr[j].charCodeAt(0)
         let index = 0
         if (ASCindex >= 65 && ASCindex <= 90) {
             index = ((ASCindex - 64) * L) - L
         } else if(ASCindex >= 97 && ASCindex <= 122) {
             index = ((ASCindex -96) * L) - L
         } else {
             index = 104
         }
         for (let k=0; k < L; k++) {
             let ind = index + k
             result += (ROW[ind])
         }
     }
     result += "\n"
 }
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 
 console.log(result);
 