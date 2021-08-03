var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(`Course count is: ${this.courseCount}`);
    };
};
User.prototype.getFirstName = function() {
console.log(`Your firstName is : ${this.firstName}`);
};

var hitesh = new User("hitesh",2);
hitesh.getCourseCount();


hitesh.getFirstName();
// console.log(hitesh);

var sam = new User("Sam",1);
sam.getCourseCount();
sam.getFirstName();
// console.log(sam);