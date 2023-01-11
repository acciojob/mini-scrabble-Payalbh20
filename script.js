//your code here
"use strict";

const input = document.getElementById("evaluatedText");
const counter = document.getElementById("letterCount");

input.addEventListener("keyup", getLength);

function getLength() {
  const value = (input.value || "").length;
  counter.textContent = value;
}
getLength();