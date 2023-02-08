let hvbatvolts = null;
let invertertemp = null;
let motortemp = null;

export default {
  initialize: () => {
    hvbatvolts = document.getElementById("hv_bat_volts");
    invertertemp = document.getElementById("inverter_temp");
    motortemp = document.getElementById("motor_temp");
  },
  update: (battv, invt, motort, noComm) => {
    if (noComm) {
      // error communicating to the ECU handler
      hvbatvolts.textContent = 'error'
      return
    }

    hvbatvolts.textContent = battv + ' v'
    invertertemp.textContent = +parseFloat((invt*1.8)+32).toFixed(1)
    motortemp.textContent = +parseFloat((motort*1.8)+32).toFixed(1)
    console.log(motort)
  },
};
