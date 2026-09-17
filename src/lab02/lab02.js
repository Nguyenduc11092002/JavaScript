console.log("This is Lab 02");

const tinhTrungBinh = (toan, van, anh) => {
  return (toan + van + anh) / 3;
};

const xepLoai = (diemTB) => {
  if (diemTB >= 9) {
    console.log("Xuất sắc");
  } else if (diemTB >= 8 && diemTB < 9) {
    console.log("Giỏi");
  } else if (diemTB >= 6.5 && diemTB < 8) {
    console.log("Khá");
  } else {
    console.log("Trung bình");
  }
};

//Cho các biến sau
const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

//Avg score
const AvgScore = tinhTrungBinh(diemToan, diemVan, diemAnh);

console.log("Diem TB: ", AvgScore);
xepLoai(AvgScore);
