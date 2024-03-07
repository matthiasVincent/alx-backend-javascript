import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}

try {
    const c3 = new HolbertonCourse("ES6", 7, 9);
}
catch(err) {
    console.log(err);
}

try {
    const c4 = new HolbertonCourse("ES6", 8, ["Matthias", 90, "James"]);
}
catch(err) {
    console.log(err);
}
