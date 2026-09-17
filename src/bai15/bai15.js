console.log("This is fifteenth lecture");

//Biến toàn cục
let globalVar = "Tôi là biến toàn cục";
function show() {
  console.log(globalVar); // Truy cập được
}
show();
console.log(globalVar); //Truy cập được

//Phạm vi hàm
function sayHi() {
  let name1 = "hoidanit";
  console.log("Hi " + name1);

  //Phạm vi khối
  if (true) {
    let x = 10;
    const y = 20;
    console.log(x, y); // ✅ Truy cập được
  }

  console.log(x); //Lỗi: x is not defined
}

sayHi();
console.log(name1);
