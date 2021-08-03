 function isEven(element) {
//     // if (element%2 === 0) {
//     //     return true;  ---> multi-line checking
//     // }
//     // return false;
    return element%2 === 0;// --> single line conditionchecking
 }
// console.log(isEven(3));
//CALL BACK FUNCTION
 var result = [2,4,6,8].every(isEven);
 console.log(result);
//ARROW FUNCTION
// var result = [2,4,6,8].every((e)=>{return e%2 === 0;});
// console.log(result);
// //remove {} when return is not used
// var result = [2,4,6,8].every((e)=> e%2 === 0);
// console.log(result);