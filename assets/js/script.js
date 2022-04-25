const sex = document.querySelector("#sex");
const age = document.querySelector("#age");
const checkBtn = document.querySelector("#checkBtn");

// checkBtn.addEventListener("click", () => {
//   if (sex.value === "homme" && age.value > 20) {
//     alert("Vous payez l'impôt");
//   } else if (sex.value === "femme" && age.value >= 18 && age.value <= 35) {
//     alert("Vous payez l'impôt");
//   } else {
//     alert("Vous ne payez pas d'impôts");
//   }
// });

checkBtn.addEventListener("click", () => {
  if (
    (age.value >= 20 && sex.value === "homme") ||
    (age.value >= 18 && age.value <= 35 && sex.value === "femme")
  ) {
    result.textContent = "Vous payez l'impôt";
  } else {
    result.textContent = "Vous ne payez pas l'impôt";
  }
});
