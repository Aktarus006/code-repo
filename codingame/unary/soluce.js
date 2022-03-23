/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const MESSAGE = readline();

 let line= ''
 let arr = MESSAGE.split('')
 
 for (let i = 0 ; i < arr.length; i++) {
     let num = arr[i].charCodeAt()
     let code = num.toString(2);
     while (code.length < 7) {
         code = "0" + code
     }
     console.error(code)
     line = line + code
 }
 
 let res = '';
 
 let bin = line.split('')
 let model = bin[0] === '1' ? '0' : '00'
 console.error(model)
 let time = '0'
 
 for (let j = 1; j < bin.length; j++) {
     let t = bin[j] === '1' ? '0' : '00';
     if (t === model) {
         time = time + '0'
     } else {
         res = res + " " + model + " " + time
         time = '0'
         model = model === '0' ? '00' : '0' 
     }
    
 }
 res = res + " " + model + " " + time
 
 console.log(res.substring(1))
 
 
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 
 