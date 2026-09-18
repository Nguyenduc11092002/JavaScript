console.log("This is seventeenth lecture");

//Đây là bài tập truy cập, chỉnh sửa, thêm, xóa phần tử mảng
const names = ["Nguyen Van A", "Nguyen Van B", "Tran Van C", "Pham Thi D"];

console.log(names[0]);
console.log(names[3]);
console.log(names[10]);

//Update mảng
names[2] = "Nguyen Thi E";
console.log("Đây là mảng nguyên chưa thêm gì");
console.log(names);

//Thêm phần tử vào mảng
//Cuối mảng
console.log("Sau khi thêm phần tử vào mảng");
names.push(true, 12345);
console.log(names);

//Đầu mảng
names.unshift(undefined);
console.log("Thêm vào đầu mảng: ", names);

//Xóa phần tử ỏ cuối cùng trong array
names.pop();
console.log("Sau khi xóa phẩn tử cuối cùng trong mảng: ", names);

//Xóa phần tử đầu tiên trong mảng
names.shift();
console.log("Sau khi xóa phần tử đầu tiên trong mảng: ", names);
