console.log("This is eighteenth lecture");

//Đây là bài học về duyệt mảng
const myClass = [
  "Nguyen Van A",
  "Nguyen Van B",
  "Tran Thi C",
  "Ly Thi D",
  "Bui Thi E",
  "Pham Van F",
  "Le Thi G",
  "Ho Thi H",
];

//length là chiều dài của mảng
console.log(myClass, myClass.length);

//Duyệt mảng bằng for loop
for (let i = 0; i < myClass.length; i++) {
  console.log("i = ", i, "and value = ", myClass[i]);
}
