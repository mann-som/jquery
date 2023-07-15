$(document).ready(function() {
    // Stopwatch
    let stopwatchInterval;
    let stopwatchRunning = false;
  
    function updateStopwatch() {
      let hours = parseInt($("#hours").text());
      let minutes = parseInt($("#minutes").text());
      let seconds = parseInt($("#seconds").text());
  
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }
  
      $("#hours").text(hours < 10 ? "0" + hours : hours);
      $("#minutes").text(minutes < 10 ? "0" + minutes : minutes);
      $("#seconds").text(seconds < 10 ? "0" + seconds : seconds);
    }
  
    $("#startBtn").click(function() {
      if (!stopwatchRunning) {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
        stopwatchRunning = true;
      }
    });
  
    $("#stopBtn").click(function() {
      if (stopwatchRunning) {
        clearInterval(stopwatchInterval);
        stopwatchRunning = false;
      }
    });
  
    $("#resetBtn").click(function() {
      clearInterval(stopwatchInterval);
      stopwatchRunning = false;
      $("#hours").text("00");
      $("#minutes").text("00");
      $("#seconds").text("00");
    });
  
    // BMI Calculator
    $("#calculateBtn").click(function() {
      let weight = parseFloat($("#weight").val());
      let height = parseFloat($("#height").val()) / 100; // convert height to meters
  
      if (isNaN(weight) || isNaN(height)) {
        $("#result").text("Please enter valid weight and height.");
      } else {
        let bmi = weight / (height * height);
        $("#result").text("Your BMI is " + bmi.toFixed(2));
      }
    });
  
    // Random Quote Generator
    let quotes = [
      "Be yourself; everyone else is already taken. - Oscar Wilde",
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
      "So many books, so little time. - Frank Zappa",
      "Be the change that you wish to see in the world. - Mahatma Gandhi",
      "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
      "No one can make you feel inferior without your consent. - Eleanor Roosevelt",
      "You only live once, but if you do it right, once is enough. - Mae West"
    ];
  
    function getRandomQuote() {
      return quotes[Math.floor(Math.random() * quotes.length)];
    }
  
    $("#newQuoteBtn").click(function() {
      $("#quote").text(getRandomQuote());
    });
  
    // Initial random quote
    $("#quote").text(getRandomQuote());
  });
  