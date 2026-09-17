console.log("This is fourteenth lecture");

// const sum = (a, b, c) => {
//   console.log("run before");
//   return a + b + c; //Hàm này chạy đến đây là ngưng => kết thúc kết quả của hàm
//   console.log("run after"); // Lệnh này không được chạy
// };

const sum = (a, b, c) => {
  console.log("run before");
  if (typeof a !== "number") {
    console.log("run empty return");
    return;
  }
  console.log("run after");
  return a + b + c;
};

console.log(sum("nguyen van a", 2, 3));
