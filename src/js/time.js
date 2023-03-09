let clock = null;  // Backend server connection

export default {
  initialize: () => {
    clock = document.getElementById("clock");
  },
  update: () => {
    const d = new Date();
    clock.textContent = d.getHours() + ':' + d.getMinutes();
  },
};
