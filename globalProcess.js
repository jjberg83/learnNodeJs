// console.log(process.pid);
// console.log(process.versions.node);

// console.log(process.argv)

let [,, firstName, lastName] = process.argv;
console.log(`Your name is ${firstName} ${lastName}`);