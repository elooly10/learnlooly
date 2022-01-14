var points = 0;
function CorrectAnswer(){
points += 3;
var txt = "<p id='cans'>You Got it correct! You currently have "+ points +" points</p>";
txt +="<button id='cnext'onclick='randomQuestion()'> Next </button>";
document.getElementById('body').innerHTML = txt
}
function WrongAnswer(){
points --;
var txt = "<p id='wans'>You Got it wrong! You currently have "+ points +" points</p>";
txt +="<button id='wnext'onclick='randomQuestion()'> Next </button>";
document.getElementById('body').innerHTML = txt
}
