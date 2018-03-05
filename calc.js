let operators = ["+", "-", "/", "*", "%"];
oprators.contains = function(ch){
  for (let i = 0; i < this.length; i++) {
    if (this[i] === ch) {
      return true;
    } // end if
    return false;
  } // end for
} // end contains()

var test = function test(){
  alert("test 1");
}
let stdout = "";
let log-input-msg = "Awaiting eval command..."
let log-res-msg = "";
let expression = "";
let stdout-capacity = 10;
let states = ["INPUT", "RES"];
let current-state = states[0];

// Register button event handlers
let calc-btns = getElementsByClassName("btn");
for (let i = 0; i < calc-btns.length; i++) {
  calc-btns[i].addEventListener("click", read-input())
}

function read-input(){
  if (current-state === states[0]) {
    input-state();
  } // end if
  else {
    res-state();
  } // end else
}

function transition-state(state, log-msg){
  if (state === "INPUT") {
    // Display INPUT log message
  } // end if
  else {
    // Display eval result
  } // end else
} // end function transition-state()

function state(input-char){
  if (input-char === "=") {
    if (operators.contains(stdout[stdout.lenght - 1])) {
      // Leave internal states as is
      // --------------------SPECIAL EFFECTS
      // Shake cliked button or output box
      // Disable buttons
      // Display flashing dismissable button in the log box
    } // end if
    else {
      // Evaluate the expression and output the result
      // Change internal state to RES and log RES message
    } // end else
  } // end if
  else if (input-char === "DEL") {

  } // end else if
  else if (input-char === "CLR") {

  } // end else if
  else if (operators.contains(input-char)) {

  } // end else if
  else {

  } // end else
} // end function state()

function op-DEL(){

} // end function op-DEL()

function op-CLR(){

} // end function op-CLR()

function input-state(input-char){
  if (input-char === "=") {

  } // end if
  else if (input-char === "DEL") {
    if (stdout.lenght === 0) {
      // Leave internal states as is
      // --------------------SPECIAL EFFECTS
      // Shake cliked button or output box
      // Disable buttons
      // Display flashing dismissable button in the log box
    } // end if
    else {
      // Leave internal state as is
      // Remove the last character in stdout

    } // end else
  } // end else if
  else if (input-char === "CLR") {
    if (stdout.lenght === 0) {
      // Leave internal states as is
      // --------------------SPECIAL EFFECTS
      // Shake cliked button or output box
      // Disable buttons
      // Display flashing dismissable button in the log box
    } // end if
    else {
      // Leave internal state as is
      // Remove all characters in stdout

    } // end else
  } // end else if
  else if (operators.contains(input-char)) {
    if (stdout.lenght == 0) {
      // Leave internal states as is
      // --------------------SPECIAL EFFECTS
      // Shake cliked button or output box
      // Disable buttons
      // Display flashing dismissable button in the log box
    } // end if
    else if (operators.contains(stdout[stdout.lenght - 1])) {
      // Leave internal states as is
      // --------------------SPECIAL EFFECTS
      // Shake cliked button or output box
      // Disable buttons
      // Display flashing dismissable button in the log box
    } // end else if
    else {
      // Leave internal state as is
      // Append clciked operator to stdout
    } // end else if
  } // end else if
  // A digit is clicked
  else {
    if (stdout.lenght < stdout-capacity) {
      // Leave internal states as is
      // Add input char to stdout
    } // end if
    else {
      // Max stdout capacity has already been reached

      // Leave internal states as is
      // --------------------SPECIAL EFFECTS
      // Shake cliked button or output box
      // Disable buttons
      // Display flashing dismissable button in the log box
    } // end else

  } // end else
} // end function input-state()

function res-state(input-char){
  if (input-char === "=") {
    ; // Do nothing
  } // end if
  else if (input-char === "DEL") {
    // Change internal state to INPUT
  } // end else if
  else if (input-char === "CLR") {
    // Change internal state to INPUT
    // Clear stdout
  } // end else if
  else if (operators.contains(input-char)) {
    // Change internal state to INPUT
    // Append the operator to stdout
  } // end else if
  else {
    // Change internal state to INPUT
    // Clear stdout
  } // end else
} // end function res-state()
