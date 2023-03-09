let speedo = null;

export default {
  initialize: () => {
    speedo = document.getElementById("speedo");
  },
  update: (speed, noComm) => {
    if (noComm) {
      speedo.textContent = '0';
      return;
    }

    speedo.innerHTML = speed;
  },
};
