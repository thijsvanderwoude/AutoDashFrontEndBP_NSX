let amperageBarGauge = null;
let amperageNumberGauge = null;
let maxAmps = 261; // Max amperage seen in Instagram video

export default {
  initialize: () => {
    amperageBarGauge = document.getElementById("amperageBar");
    amperageNumberGauge = document.getElementById("amperageNumber");
  },
  update: (inverterAmps, noComm) => {
    if (noComm) {
      return;
    }

    if (inverterAmps > maxAmps) {
      maxAmps = inverterAmps;     // In case amperage gets higher than 261
      console.log(maxAmps);       // Spam it in the log just in case!
    }

    var barGauge = '';
    if (inverterAmps < 0) {
      barGauge = '<div style="width: 12%" aria-valuenow="12" class="progress-bar bg-charging" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><div style="width: 88%" aria-valuenow="88" class="progress-bar bg-black" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>';
    } else {
      barGauge = '<div style="width: 12%" aria-valuenow="12" class="progress-bar bg-charging-feint" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>';

      var percentageFactorOfMaxAmps = inverterAmps / maxAmps;   // Percentage but divided by 100
      var amountOfBars = Math.round(22 * percentageFactorOfMaxAmps);  // 22 is the amount of bars (4% width per bar, 1% black 3% red)
      for (var i = 0; i < amountOfBars; i++) {
        barGauge += '<div style="width: 1%" aria-valuenow="1" class="progress-bar bg-black" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><div style="width: 3%" aria-valuenow="3" class="progress-bar bg-race" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>';
      }

      var barRemainder = (22 - i) * 4;
      barGauge += '<div style="width:' +  barRemainder + '%" aria-valuenow="' +  barRemainder + ' " class="progress-bar bg-black" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>';
    }

    if (inverterAmps === undefined) {
      amperageNumberGauge.textContent = '0A';
      return;
    }
    amperageBarGauge.innerHTML = barGauge; 
    amperageNumberGauge.textContent = inverterAmps + 'A';
  },
};
