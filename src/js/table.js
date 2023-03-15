let hvbatvolts = null;
let invertertemp = null;
let motortemp = null;
let invertererror = null;
let inverteramps = null;
let invertermaxamps = null;

const inverrorcodes = {
  0: "NONE", 1: "OVERCURRENT", 2: "THROTTLE1", 3: "THROTTLE2", 4: "CANTIMEOUT", 5: "EMCYSTOP", 6: "MPROT", 7: "DESAT", 8: "OVERVOLTAGE", 9: "ENCODER", 10: "PRECHARGE", 11: "TMPHSMAX", 12: "CURRENTLIMIT", 13: "PWMSTUCK", 14: "HICUROFS1", 15: "HICUROFS2", 16: "HIRESOFS", 17:"LORESAMP", 18: "TMPMMAX"
}

export default {
  initialize: () => {
    hvbatvolts = document.getElementById("hv_bat_volts");
    invertertemp = document.getElementById("inverter_temp");
    motortemp = document.getElementById("motor_temp");
    invertererror = document.getElementById("inv_error");
    inverteramps = document.getElementById("inv_amps");
    invertermaxamps = document.getElementById("inv_max_amps");
  },
  update: (battv, invt, motort, inverror, invamps, noComm) => {
    if (noComm) {
      // error communicating to the ECU handler
      hvbatvolts.textContent = 'comms error'
      invertertemp.textContent = 'comms error'
      motortemp.textContent = 'comms error'
      invertererror.textContent = 'comms error'
      inverteramps.textContent = 'comms error'
      invertermaxamps.textContent = 0
      return
    }

    hvbatvolts.textContent = battv + ' v'
    invertertemp.textContent = +parseFloat((invt*1.8)+32).toFixed(1)
    motortemp.textContent = +parseFloat((motort*1.8)+32).toFixed(1)
    invertererror.textContent = inverrorcodes[inverror]
    inverteramps.textContent = invamps
    if (invamps > parseInt(invertermaxamps.textContent)){
      invertermaxamps.textContent = invamps
    }
  },
};
