console.log("This is first JS of lecter 1");
var name = "Nguyen Van A";
const name1 = "Nguyen Van B";
let name2 = "Nguyen Van C";
console.log(name);
console.log(name1);
console.log(name2);

const age = 20;
let myAge = 30;

console.log(age);
console.log(myAge);

function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar); // Foo Bar

  {
    var moo = "Mooo";
    let baz = "Bazz";
    console.log(moo, baz); // Mooo Bazz
  }

  console.log(moo); // Mooo
  console.log(baz); // ReferenceError
}

run();
