window.onload = function () {
  var milliseconds = 00;
  var seconds = 00;
  var minutes = 00;

  var appendMilliseconds = document.getElementById("milliseconds");
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes");

  var buttonStart = this.document.getElementById("button-start");
  var buttonStop = this.document.getElementById("button-stop");
  var buttonReset = this.document.getElementById("button-reset");

  var Interval;

  // Function for starting timer

  function startTimer() {
    milliseconds++;

    // Milliseconds Counter

    if (milliseconds < 10) {
      appendMilliseconds.innerHTML = "0" + milliseconds;
    }
    if (milliseconds > 10) {
      appendMilliseconds.innerHTML = milliseconds;
    }
    if (milliseconds > 100) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      milliseconds = 0;
      appendMilliseconds.innerHTML = "0" + milliseconds;
    }
    if (seconds > 10) {
      appendSeconds.innerHTML = seconds;
    }
    if (seconds > 60) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + seconds;
    }
    if (minutes > 10) {
      appendMinutes.innerHTML = minutes;
    }
  }

  // Button to start timer
  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 8);
  };

  // Button to stop timer
  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  // Button to reset timer
  buttonReset.onclick = function () {
    clearInterval(Interval);
    milliseconds = "00";
    seconds = "00";
    minutes = "00";
    appendMilliseconds.innerHTML = milliseconds;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
  };
};
