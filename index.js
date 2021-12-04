const first =  Math.floor(Math.random() * 6) + 1;
const second =  Math.floor(Math.random() * 6) + 1;

const done = 'images/dice' + first + '.png';
document.querySelectorAll('img')[0].setAttribute('src',done);

const dtwo = 'images/dice' + second + '.png';
document.querySelectorAll('img')[1].setAttribute('src',dtwo);

if (first < second) {
  console.log("Player 2 Wins");
  document.getElementById("result").innerHTML = " Player 2 Wins";
} else if (first == second) {
  console.log("Draw");
  document.getElementById("result").innerHTML = "Draw";
} else {
  console.log("player 1 wins ");
  document.getElementById("result").innerHTML = "player 1 wins";
}
