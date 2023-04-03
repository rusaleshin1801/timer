const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");
const timerEl = document.querySelector("span");

let intervalId; // объявление переменной

const createTimerAnimator = () => {
  clearInterval(intervalId); // добавляем очистку интервала перед запуском нового

  return (seconds) => {
    let remainingSeconds = seconds;

    intervalId = setInterval(() => {
      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const seconds = remainingSeconds % 60;

      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      timerEl.textContent = formattedTime;

      remainingSeconds--;

      if (remainingSeconds < 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/[^\d]/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});

stopButton.addEventListener("click", () => {
  clearInterval(intervalId);
});

resetButton.addEventListener("click", () => {
  clearInterval(intervalId);
  timerEl.textContent = "00:00:00";
});
