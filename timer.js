
//some jquery for you - you can ignore for now. This will trigger your button clicks
$( "#reset" ).click(Reset);
$( "#start" ).click(Start);
$( "#pause" ).click(Pause);

// Call this function to update the text display
function UpdateText( seconds ) {
    $( "#timeDisplay" ).text("Time elapsed: " + seconds);
}

var timerId= window.setInterval(updateTime, 1000);

var seconds = 0

function updateTime() {
  seconds++
  $('#timer').text("Stop Watch:" + seconds+'s');

function Reset() {
    console.log("Reset Clicked");

}

function Start() {
    console.log("Start Clicked");
}

function Pause() {
    console.log("Pause Clicked");
}
function updateTime() {
  return updateText
}
