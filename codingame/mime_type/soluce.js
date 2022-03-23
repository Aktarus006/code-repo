/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const N = parseInt(readline()); // Number of elements which make up the association table.
 const Q = parseInt(readline()); // Number Q of file names to be analyzed.
 
 let exts = []
 for (let i = 0; i < N; i++) {
     var inputs = readline().split(' ');
     const EXT = inputs[0].toUpperCase(); // file extension
     const MT = inputs[1]; // MIME type.
     exts[EXT] = MT
 }
 console.error(exts)
 
 let res = ''
 
 for (let i = 0; i < Q; i++) {
     var files = readline().split('.');
     if (files.length > 1) {
         var ext = files[files.length-1].toUpperCase()
         var file = exts[ext] ? exts[ext] : 'UNKNOWN'
     } else {
         var file = 'UNKNOWN'
     }
     
     res = res + file + "\n"
 }
 
 console.log(res)
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 
 
 // For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
 