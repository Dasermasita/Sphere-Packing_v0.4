// Update clock hands
function updateClock() {
    const hourHand = document.querySelector(".hour");
    const minHand = document.querySelector(".min");
    const secHand = document.querySelector(".sec");
  
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;
    const minDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const secDeg = (seconds / 60) * 360;
  
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    secHand.style.transform = `rotate(${secDeg}deg)`;
  }
  
  // Start the clock
  setInterval(updateClock, 1000);
  updateClock();
  