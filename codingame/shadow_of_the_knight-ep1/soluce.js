/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 var inputs = readline().split(' ');
 const W = parseInt(inputs[0]); // width of the building.
 const H = parseInt(inputs[1]); // height of the building.
 const N = parseInt(readline()); // maximum number of turns before game over.
 var inputs = readline().split(' ');
 const X0 = parseInt(inputs[0]);
 const Y0 = parseInt(inputs[1]);
 
 let batX = X0
 let batY = Y0
 
 let minX = 0
 let maxX = W
 
 let minY = 0
 let maxY = H
 
 // game loop
 while (true) {
     let deltaX = 0
     let deltaY = 0
     const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
 
     let dir = bombDir.split('');
     for (let i = 0 ; i < dir.length; i++) {
         switch(dir[i]) {
             case 'U':
                 maxY = batY
                 deltaY = newD(maxY,minY)
                 batY = batY - deltaY
                 break;
             case 'D':
                 minY = batY
                 deltaY = newD(maxY,minY)
                 batY = batY + deltaY
                 break;
             case 'L':
                 maxX = batX
                 deltaX = newD(maxX,minX)
                 batX = batX - deltaX
                 break;
             case 'R':
                 minX = batX
                 deltaX = newD(maxX,minX)
                 batX = batX + deltaX
                 break;
         }
     }
 
     function newD (max, min) {
         result = Math.round((max - min) / 2)
         return result > 0 ? result : 1
     }

     // Write an action using console.log()
     // To debug: console.error('Debug messages...');
 
     // the location of the next window Batman should jump to.
     console.log(batX + ' ' + batY);
 }
 