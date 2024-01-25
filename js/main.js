document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var targetDate = new Date("2024-03-19T12:00:00+09:00");
  var timestampSeconds = Math.floor(targetDate.getTime() / 1000);

  // Set up FlipDown
  var flipdown = new FlipDown(timestampSeconds)
    .start()

    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  var interval = setInterval(() => {
    let body = document.body;
  }, 1000);

  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});
