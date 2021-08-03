// create an application with following roles
// admin - gets full access 
// subadmin - gets access to create/delete courses 
// testprep - gets access to create/delete test
// user - gets access to consume content


var user = "admin";
 
switch(user) {
    case "admin":
        console.log("You get Full access");
        // break;
        case "subadmin":
        console.log("You get Full access");
        // break;
        case "testprep":
        console.log("gets access to create/delete tests");
        // break;
        case "users":
        console.log("gets access to consume content");
        // break;
        default:
            console.log("trial User");
            break;
}
