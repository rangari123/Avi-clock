// // // JavaScript date object , Using data attributes as selectors in JavaScript

setInterval(setClock, 1000);

// //selectors
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-seconds-hand]');

// function
function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
  // calling setRotation
  setRotation(secondHand,secondsRatio);
  setRotation(minuteHand,minuteRatio);
  setRotation(hourHand,hourRatio);
  
}

// function for rotation take element we want rotate , rotateon which type

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation' ,rotationRatio*360 )
}
 setClock()

