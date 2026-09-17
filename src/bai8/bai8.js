console.log("This is eighth lecture");

//if/if else / else-if
const age = 20;
//neflix app
if (age > 18) {
  //true
  console.log("You can watch this movie");
}

if (age < 18) {
  //true
  console.log("You cannot watch this movie");
}

if (age > 18) {
  console.log("You can watch this movie");
} else {
  console.log("You cannot watch this movie");
}

//score => A, B, C, D, F. Giỏi, Khá, Trung bình, Yếu, Kém.
const score = 9;
if (score > 8) {
  console.log("Giỏi");
} else if (score > 6 && score <= 8) {
  console.log("Khá");
} else if (score > 4 && score <= 6) {
  console.log("Trung bình");
} else if (score > 2 && score <= 4) {
  console.log("Yếu");
} else {
  console.log("Kém");
}
