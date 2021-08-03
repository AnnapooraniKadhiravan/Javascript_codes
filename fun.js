// function sayHello(name){
//     console.log("Hello there, Poorani");
//     console.log(`Hello there, ${name},How are you?`);
// }
// // sayHello("pooja");
// // sayHello("Annapoorani");
// function namstey() {
//     return "Hello in India";
// }
// var greetings  = namstey();
// console.log(greetings);
// console.log(namstey());
/* 
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with all access tosubadmin - with access to create/delete courses
testprep - with access to create/delete tests
user - consume all content 
other -trail user.
Input: getuserRole(name,role) */

var getUserRole = function (name, role){
    switch(role){
        case "admin":
            return `${name} is admin with all access`;
            break; //this is not necessary
            case "subadmin":
            return `${name} is sub-admin with to create and delete`;
            break;
            case "testprep":
            return `${name} is a test prep with access to create and delete tests`;
            break;
            case "user":
            return `${name} is a user to consume content`;
            break;
            default:
                return `${name} is a trail user`;
                break;
    }
}
console.log(getUserRole("Poorani","testprep"));

var getRole = getUserRole("sammy","user");
console.log(getRole);