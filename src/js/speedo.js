let speedo = null;
const tireDiameter = 26.3;    // https://tiresize.com/calculator/ to calculate diameter of the rear tire
const gearRatio = 9.73;       // Tesla large drive unit gear ratio according to https://www.edmunds.com/tesla/model-s/2012/road-test-specs1.html

export default {
  initialize: () => {
    speedo = document.getElementById("speedo");
  },
  update: (rpm, noComm) => {
    if (noComm || rpm === undefined) {
      speedo.textContent = '0';
      return;
    }

    /*
     Vehicle speed (mph) = wheel RPM × tire diameter × π × 60 / 63360
     Wheel RPM = engine RPM / gear ratio / diff ratio
    */
    
    var wheelRPM = rpm / gearRatio;
    var vehicleSpeed = wheelRPM * tireDiameter * Math.PI * 60 / 63360;
    speedo.innerHTML = Math.round(vehicleSpeed);
  },
};
