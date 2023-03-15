let motorTemperatureGauge = null;
let inverterTemperatureGauge = null;
let averageTemperatureGauge = null;

export default {
  initialize: () => {
    motorTemperatureGauge = document.getElementById("motorTemperature");
    inverterTemperatureGauge = document.getElementById("inverterTemperature");
    averageTemperatureGauge = document.getElementById("averageTemperature");
  },
  update: (motorTemp, inverterTemp, noComm) => {
    if (noComm) {
      return;
    }

    // All based on assumptions...
    // Assuming fahrenheit because value calculated in table.js is 32F = 0C!
    // Internet suggests max temp for a Tesla drive unit is 185deg F.
    // Anything above it and we should warn the driver...?

    // motortemp.textContent = (+parseFloat((motorTemp*1.8)+32).toFixed(1));   // MAN THIS IS BAD... SORRY FOR WHO IS READING THIS
    // I'm not saying what I'm doing is better haha, most of this should be in a function or something...
    var motorTempF = (motorTemp * 1.8) + 32;  // Convert to Fahrenheit
    var motorTempPercentage = parseInt(motorTempF.toFixed()) / 185 * 100; // Convert temp in F to a % of 185F
    var motorTempAngle = 180 * motorTempPercentage / 100;                 // Adjust temp% to a scale of 180 degrees

    motorTemperatureGauge.style.setProperty("--rotation", motorTempAngle + "deg");

    // Inverter    
    var inverterTempF = (inverterTemp * 1.8) + 32;  // Convert to Fahrenheit
    var inverterTempPercentage = parseInt(inverterTempF.toFixed()) / 185 * 100; // Convert temp in F to a % of 185F
    var inverterTempAngle = 180 * inverterTempPercentage / 100;                 // Adjust temp% to a scale of 180 degrees

    inverterTemperatureGauge.style.setProperty("--rotation", inverterTempAngle + "deg");

    var avgTemp = (motorTempF + inverterTempF) / 2;
    if (Number.isNaN(avgTemp)) {
      averageTemperatureGauge.innerHTML = '0';
      return;
    }
    averageTemperatureGauge.innerHTML = Math.round(avgTemp);
  },
};
