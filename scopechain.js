var name = "Anna";
console.log("Line number 3",name);

function sayName(){
    // var name = "My A"
    console.log("Line number 7",name);
    sayNameTwo();
    function sayNameTwo(){
        // var name = "Mr.AK"
        console.log("Line number 11",name);
    }
}
sayName();