// function init() {
//     var firstName ="hitesh";
//     console.log("I am init");
//     function sayFirstName() {
//         console.log(firstName);
//     }
//     return sayFirstName();
// }
// var value = init();

// value();  //closure


function doAddition(x) {
return function(y){
    return x + y;
}
}
var add5 = doAddition(5);
console.log(add5(5));
console.log(doAddition(3)(5));
// doAddition()()() --> closure also known as curring 