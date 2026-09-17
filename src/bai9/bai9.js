console.log("This is ninth lecture");

// score: Giỏi, Khá, Trung bình, Yếu, Kém
const score = 10;
// Cách 1
switch (score) {
  case 10:
  case 9:
    console.log("Giỏi");
    break;
  case 8:
    console.log("Khá");
    break;
  case 6:
  case 7:
    console.log("Trung bình");
    break;
  case 4:
  case 5:
    console.log("Yếu");
    break;
  default:
    console.log("Kém");
    break;
}

// Cách 2
switch (true) {
  case score > 8 && score <= 10: //Giá trị trả ra là true
    console.log("Giỏi");
    break;
  case score > 6 && score <= 8:
    console.log("Khá");
    break;
  case score > 4 && score <= 6:
    console.log("Trung bình");
    break;
  case score > 2 && score <= 4:
    console.log("Yếu");
    break;
  default:
    console.log("Kém");
    break;
}
