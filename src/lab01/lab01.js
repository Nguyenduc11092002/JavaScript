console.log("This is Lab 01");

const fullName = "Nguyen Van A";
let birthYear = 2000;
let isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();
console.log(`Current Year: ${currentYear}`, typeof currentYear);

const currentAge = currentYear - birthYear;

//In ra màn hình với các thông tin đã khai báo
//Cách 1
console.log(`Tên : ${fullName}
Tuổi: ${currentAge}
Sinh viên: ${isStudent}`);

console.log("--------------------------------------------------");
//Cách 2
console.log("Tên: " + fullName);
console.log("Tuổi: " + currentAge);
console.log("Sinh viên: " + isStudent);
