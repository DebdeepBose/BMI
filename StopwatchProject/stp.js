let timer;
let seconds = 0;
let running = false;
let stopped = false;
const checkbox = document.querySelector(".container input");
const timeDisplay = document.querySelector(".time-box h1");

function updateTime() {
  let hrs = Math.floor(seconds / 3600).toString().padStart(2, "0");
  let mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
  let secs = (seconds % 60).toString().padStart(2, "0");

  timeDisplay.innerHTML = `${hrs}<span>:</span>${mins}<span>:</span>${secs}`;
}

function startResumeStopwatch() {
  if (!running && !stopped) { 
    running = true;
    timer = setInterval(() => {
      seconds++;
      updateTime();
    }, 1000);
  }
}

function pauseStopwatch() {
  running = false;
  clearInterval(timer);
}

function stopStopwatch() {
  running = false;
  stopped = true;
  clearInterval(timer);
  checkbox.checked = false; 
}

function resetStopwatch() {
  stopStopwatch();
  seconds = 0;
  stopped = false; 
  updateTime();
  checkbox.checked = false; 
}

checkbox.addEventListener("change", function () {
  if (this.checked) {
    startResumeStopwatch(); 
  } else {
    pauseStopwatch();
  }
});

updateTime();
