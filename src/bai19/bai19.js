console.log("This is nineteenth lecture");

//For-each này không hỗ trợ việc hưngts giá trị
const scores = [10, 8, 7, 6, 4, 5];
scores.forEach((value, index) => {
  console.log("Value = ", value, " and Index = ", index);
});

//Map lecture
console.log("===========");
console.log("This is map lecture");

//Bắt buộc phải ứng với giá trị trả ra khỏi map
/*Map dùng để duyệt từng phần tử trong mảng để tạo ra một mảng mới mà
mỗi phân tử là kết quả biến đổi của phần tử tương ứng trong mảng đầu*/
const scores2 = scores.map((value, index) => {
  //   console.log("Value = ", value, " and Index = ", index);
  return value * 2;
});
console.log("scores = ", scores);
console.log("scores2 = ", scores2);
