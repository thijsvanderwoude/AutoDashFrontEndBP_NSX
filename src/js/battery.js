let batHand = null;
let batText = null;

// MAX bat level in gauge
const maxPercent = 404;
const minPercent = 355;

//////// rotation degree of sweep needle:
// const offset = 264;
// degree when bat disconnected (no data)
const offSweep = -100;
// degree @ 0% charge
const minSweep = -90;
// degree @ 100% charge 
const maxSweep = 90;

export default {
  initialize: () => {
    batHand = document.getElementById("bat_needle");
    batText = document.getElementById("bat_text");
    batHand.style.transform = `rotate(${offSweep}deg)`;
  },
  update: (batp, noComm) => {
    if (noComm) {
      // error communicating to the ECU handler
      batHand.style.transform = `rotate(${offSweep}deg)`;
      return
    }

    // set rotation of hand
    console.log(batp)
    batText.textContent = 'HV battery: ' + batp + 'V'
    batHand.style.transform = `rotate(${((batp - minPercent) / (maxPercent - minPercent)) * (maxSweep - minSweep) + minSweep}deg)`;
  },
};
