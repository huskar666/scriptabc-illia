const timer1Display = document.getElementById('timer1');
const message1 = document.getElementById('message1');

let totalMinutes1 = 60;

const timer1 = setInterval(() => {
  totalMinutes1--;

  const minutes = Math.floor(totalMinutes1);
  const seconds = 0;
  timer1Display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  if (totalMinutes1 === 30) {
    message1.style.display = 'block';
  }

  if (totalMinutes1 <= 0) {
    clearInterval(timer1);
  }
}, 60000); 


const timer2Display = document.getElementById('timer2');
const animation = document.getElementById('animation');
const restartBtn = document.getElementById('restart');

let timeLeft = 30000; 

const timer2 = setInterval(() => {
  timeLeft -= 10; 

  const seconds = Math.floor(timeLeft / 1000);
  const ms = timeLeft % 1000;

  timer2Display.textContent = `${String(seconds).padStart(2, '0')}.${String(ms).padStart(3, '0')}`;

  if (timeLeft <= 10000) {
    animation.style.display = 'block';
  }

  if (timeLeft <= 0) {
    clearInterval(timer2);
    restartBtn.disabled = false;
    timer2Display.textContent = '00.000';
  }
}, 5); 
