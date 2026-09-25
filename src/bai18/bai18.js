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

//Mảng khác bắt đầu từ mảng i+1
console.log("=====================");
console.log("Đây là mảng khác với mảng bên trên");
for (let i = 1; i <= myClass.length; i++) {
  console.log(" i = ", i, "and value = ", myClass[i - 1]);
}

//for - each loop : Vòng lặp hiện đơn hơn, dùng để thao tác với đói tượng
console.log("===================");
console.log("This is for-each loop");
myClass.forEach(function (value, index) {
  console.log("Value = ", value, "Index = ", index);
});
