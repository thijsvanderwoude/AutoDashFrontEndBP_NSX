import moment from "moment/moment";

let clock = null;  // Backend server connection

export default {
  initialize: () => {
    clock = document.getElementById("clock");
  },
  update: () => {
    const now = moment();
    clock.textContent = now.format("HH:mm");
  },
};
