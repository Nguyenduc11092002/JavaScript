console.log("This is seventh lecture");

const name = "Nguyen Van A";
const age = 20;

//Nối chuỗi
const instructor = "My name is " + name + "\n and I am " + age + " years old.";
console.log(instructor);

//Template Literals là cách khai báo chuỗi bằng dấu ``
//Xuống dòng không cần \n
//Chèn biểu thức JS trong chuỗi
//Chèn trực tiếp bằng ${biểu thức}
//Thêm được ký tự đặc biệt
const intro = `My name is "test" 'abc' ${name} 
and I am ${age} years old.`;
console.log(intro);
