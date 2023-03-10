let inverterErrorLight = null;     // Inverter error light
let serverConnectionLight = null;  // Backend server connection

export default {
  initialize: () => {
    inverterErrorLight = document.getElementById("wl-error");
    serverConnectionLight = document.getElementById("wl-backend");
  },
  update: (inverterError, noComm) => {
    if (inverterError || inverterError === undefined) {
      inverterErrorLight.classList.remove("text-black");
      return;
    }
    if (noComm || noComm === undefined) {
      serverConnectionLight.classList.remove("text-black");
      return;
    }

    inverterErrorLight.classList.add("text-black");
    serverConnectionLight.classList.add("text-black");
  },
};
