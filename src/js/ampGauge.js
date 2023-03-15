let amperageBarGauge = null;
let amperageNumberGauge = null;

export default {
  initialize: () => {
    amperageBarGauge = document.getElementById("amperageBar");
    amperageNumberGauge = document.getElementById("amperageNumber");
  },
  update: (inverterAmps, noComm) => {
    if (noComm) {
      return;
    }

    const maxAmps = 261;    // Max amperage seen in Instagram video
    if (inverterAmps > maxAmps) {
      inverterAmps = maxAmps;
    }

    var barGauge = '';
    if (inverterAmps < 0) {
      barGauge = '<div style="width: 12%" aria-valuenow="12" class="progress-bar bg-charging" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><div style="width: 88%" aria-valuenow="88" class="progress-bar bg-black" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>';
    } else {
      barGauge = '<div style="width: 12%" aria-valuenow="12" class="progress-bar bg-charging-feint" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>';

      var percentageFactorOfMaxAmps = inverterAmps / maxAmps;   // Percentage but divided by 100
      var amountOfBars = Math.round(22 * percentageFactorOfMaxAmps);  // 22 is the amount of bars (4% width per bar, 1% black 3% red)
      var i = 0;
      for (i = 0; i < amountOfBars; i++) {
        barGauge += '<div style="width: 1%" aria-valuenow="1" class="progress-bar bg-black" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><div style="width: 3%" aria-valuenow="3" class="progress-bar bg-race" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>';
      }

      for (i = i; i < 22; i++) {
        barGauge += '<div style="width: 4%" aria-valuenow="4" class="progress-bar bg-black" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>';
      }
    }

    if (inverterAmps === undefined) {
      amperageNumberGauge.textContent = '0A';
      return;
    }
    amperageBarGauge.innerHTML = barGauge; 
    amperageNumberGauge.textContent = inverterAmps + 'A';
  },
};
