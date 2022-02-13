let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

const again = document.querySelector(".again");
const check = document.querySelector(".check");

let score = 10;
 let attempt = 0;
check.addEventListener("click", () => {
 
  const guess = Number(document.querySelector(".guess").value);
  const msg = document.querySelector(".msg");

  if (!guess) {
    msg.textContent = "Please Enter Your Guess";
  } else if (guess === randomNumber) {
    attempt++;
    msg.textContent = `Congrulations  🎉 you find ${attempt}. attempt  `;

    if (score > topScore) {
      document.querySelector(".top-score").textContent = score;
    }
    //? if  quess is incorrect
  } else {
    if (score > 1) {
      score--;
      attempt++;
      console.log(score);
      guess < randomNumber
        ? (msg.textContent = " 📈 Increase")
        : (msg.textContent = " 📉 Decrease");
    } else {
      msg.textContent = `Sorry, you lost.😞 Number was ${randomNumber} `;
    }
  }
});

//? When again button is clicked
again.addEventListener("click", () => {
  score = 10;
  attempt = 0;
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);

  document.querySelector(".msg").textContent = "Starting..";

  document.querySelector(".guess").value = "";
});
