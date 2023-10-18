function rotateClockHands() {
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.second-hand');

  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12; // Convert to 12-hour format

  // Calculate rotation angles for clock hands
  const secondAngle = (seconds / 60) * 360;
  const minuteAngle = ((minutes + seconds / 60) / 60) * 360;
  const hourAngle = ((hours + minutes / 60) / 12) * 360;

  // Apply rotation transforms to the clock hands
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
}

// Update clock hands every second
setInterval(rotateClockHands, 1000);

// Call the function once to set the initial clock position
rotateClockHands();
