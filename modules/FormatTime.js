var os = require('os');

function formatTime(seconds) {
  var hours = (seconds / 3600).toFixed(0);
  seconds = seconds - hours * 3600;
  var minutes = (seconds / 60).toFixed(0);
  seconds = seconds - minutes * 60;

  var result = "";
  if (hours > 0) {
    result += hours + " godz. ";
  }

  if (hours > 0 || minutes > 0) {
    result += minutes + " min. ";
  }

  result += seconds + " sek. ";

  return result
}


exports.formatTime = formatTime;