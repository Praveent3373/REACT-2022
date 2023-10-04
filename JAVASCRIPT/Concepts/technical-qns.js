
// 1 Check for repeated characters in a string Javascript

// var text = "test".split("");
// var out = text.some(function(v,i,a){
//   return a.lastIndexOf(v)!=i;
// });
// console.log(out);

// var texts = ["test", "rest", "why", "puss"];
// for(var idx in texts){
//     var text = texts[idx].split("");
//     document.write(text + " -> " + text.some(function(v,i,a){return a.lastIndexOf(v)!=i;}) +"<br/>");
    
//   }



// 2 how to remove duplicate characters from string in javascript” 

// const stringValue = 'Sangareddy';
// let stringValueOutput = stringValue.split('').filter((function(value, index, arr) {
//        return arr.indexOf(value) !== index;
// })).join('');

// console.log(stringValueOutput);

// function removeDuplicateCharacters(string) {
//     return string
//       .split('')
//       .filter(function(item, pos, self) {
//         return self.indexOf(item) == pos;
//       })
//       .join('');
//   }
//   console.log(removeDuplicateCharacters('baraban'));




// 3 reverse string

// var name = 'praveen kumar';
// let newName = name.split('').reverse().join('');
// console.log(newName);

// let newArr = [];
// for(var i = name.length; i>=0; i--){
//    newArr.push(name[i])
// }
// console.log(newArr.join(''));



// 4 print fizbaz program

// for(var i = 0; i< 10; i++){
//     let output = '';
//     if(i % 3 === 0) output += 'fizz'; 
//     if(i % 5 === 0) output += 'bazz'; 
//     console.log(output || i)
// }


