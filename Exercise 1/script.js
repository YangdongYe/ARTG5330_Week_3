/**
 * Week Class In-Class Exercise 1: Playing with Objects
 */

console.log("Start...");

var me = {
        name:"Siqi Zhu",
        student:false,
        class:"ARTG5330",
        id:"siqizhu",
        age:"29",
        school:{
            name:"NEU",
            fullName:"Northeastern University",
            studentPop:30000
        }
    };

//Part 1: Log out a sentence in the form of:
//"Siqi Zhu is an instructor in course ARTG5330, and has an ID# of ..."
console.log(me.name + " is a student in course " + me.class + ", and has an ID of " + me.id );

//Part 2: add a property on the fly, and log out the object
me.age = +me.age;
me.favoriteFood = "cookies";

//Part 3: delete a property on the fly, and log out the object
delete(me.student);

console.log(me.school.name);
console.log("End...");
console.log();