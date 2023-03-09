let tpsBar = null;

export default {
  initialize: () => {
    tpsBar = document.getElementById("tpsBar");
  },
  update: (tpsPercentage, noComm) => {
    if (noComm || tpsPercentage === undefined) {
      tpsBar.innerHTML = '<div style="width: 0%" aria-valuenow="0" class="progress-bar bg-white" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><div style="width: 100%" aria-valuenow="100" class="progress-bar bg-black" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>';
      return;
    }

    /*

    Generate a Bootstrap progress bar according to the number given.

    Example:

    <div style="width: 65%" aria-valuenow="65" class="progress-bar bg-white" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
    <div style="width: 35%" aria-valuenow="35" class="progress-bar bg-black" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
    */
    const tpsDifference = 100 - tpsPercentage;
    tpsBar.innerHTML = '<div style="width: '
      + tpsPercentage + '%" aria-valuenow="'
      + tpsPercentage + '" class="progress-bar bg-white" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><div style="width: '
      + tpsDifference + '%" aria-valuenow="'
      + tpsDifference + '" class="progress-bar bg-black" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>';
  },
};
