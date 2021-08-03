// var num = 2;

// function sayMe(){
//     console.log("Say me");
// }
// sayMe();
//Function declaration are scanned and made available
tipper("80");
function tipper(a){
    var bill =parseInt(a);
    console.log(bill + 5);
}
function bigTipper(a){
    var bill = parseInt(a);
    console.log(bill+ 15);
}
bigTipper("200");

//variable declaration are scanned and made undefined
console.log(name);
var name = "poorani";

function sayName(){
    var name = "MR.A";
    console.log(name);
}
sayName();
console.log(name);