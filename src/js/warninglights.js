let inverterErrorLight = null;     // Inverter error light
let serverConnectionLight = null;  // Backend server connection

export default {
  initialize: () => {
    inverterErrorLight = document.getElementById("wl-error");
    serverConnectionLight = document.getElementById("wl-backend");
  },
  update: (inverterError, noComm) => {
    console.log(inverterError);
    if (inverterError) {
      inverterErrorLight.classList.remove("d-none");
      return;
    }
    if (noComm) {
      serverConnectionLight.classList.remove("d-none");
      return;
    }

    inverterErrorLight.classList.add("d-none");
    serverConnectionLight.classList.add("d-none");
  },
};
