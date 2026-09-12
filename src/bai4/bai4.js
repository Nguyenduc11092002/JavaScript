//Toán tử trong javascript
const a = 5;
const b = 10,
  c = 15;
const sum = a + b * c;
console.log(sum);
console.log(c / b);
console.log(c % b);

//Phép cộng trừ tăng giảm 1
console.log("Đây là toán tử tăng giảm 1 đơn vị");
let d = 5;
let e = d++; // tăng thêm  đơn vị
//++d => tăng ngay lập tức
//d++ => tăng sau khi thực hiện xong câu lệnh

//Dấu trừ sẽ ngược lại với dấu cộng
// let f = d--; // giảm đi 1 đơn vị
console.log("d: " + d);
console.log("e: " + e);
// console.log("f: " + f);

console.log("This is bai 4");

//Vòng lặp
console.log("Vòng lặp for cho i++");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("Vòng lặp for cho ++i");
for (let i = 0; i < 5; ++i) {
  console.log(i);
}

let f = 5;
let g = f++;
let h = ++f;
console.log("f: " + f);
console.log("g: " + g);
console.log("h: " + h);
let result = g + h;
console.log("result: " + result);
