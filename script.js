// Access html elements
const scecondHand = document.querySelector(".scecond");
const minutedHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

// create function for set position
function setTime() {
  //get time
  const now = new Date();

  //assign time for scecond,minute and hour
  const scecond = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  //   set rotation
  const scecondRotation = scecond * 6; //360/60 * scecond count
  const minuteRotation = minute * 6; //360/60 * minute count
  const hourRotation = (hour % 12) * 30 + 0.5 * minute; //--24h time

  //Apply rotation to styles
  scecondHand.style.transform = `rotate(${scecondRotation}deg)`;
  minutedHand.style.transform = `rotate(${minuteRotation}deg)`;
  hourHand.style.transform = `rotate(${hourRotation}deg)`;
}

//Call function
setInterval(setTime, 1000); //Call every 1s
