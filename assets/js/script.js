let sex = document.querySelector("#sex");
let age = document.querySelector("#age");
let checkBtn = document.querySelector("#checkBtn");

checkBtn.addEventListener("click", () => {
  if (sex.value === "homme" && age.value > 20) {
    alert("Vous payez l'impôt");
  } else if (sex.value === "femme" && age.value >= 18 && age.value <= 35) {
    alert("Vous payez l'impôt");
  } else {
    alert("Vous ne payez pas d'impôts");
  }
});
