const imtApp = document.querySelector(".imt-app");
const inputWeight = imtApp.querySelector(".weight");
const inputHeight = imtApp.querySelector(".height");
const resultBtn = imtApp.querySelector(".imt-app__result-btn");
const resultImt = imtApp.querySelector(".imt-app__result")

function calculateBMI() {
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightNumber = Number(weight);
  const heightNumber = Number(height);

  const result = weightNumber / Math.pow (heightNumber / 100, 2 );

  resultImt.textContent = ("Индекс массы тела (ИМТ): " + result.toFixed(2));
}

resultBtn.addEventListener('click', calculateBMI);