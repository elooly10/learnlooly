var points = 0;
var CP = ["#EE334E","#396","#60F","#2299E4","#333", /* Txt */ "#FFF","#FFF","#FFF","#FFF","#FFF"];
function CorrectAnswer(qid){
points += 3;
var txt = "<p id='cans'>You Got it correct! You currently have "+ points +" points</p>";
txt +="<button id='cnext'onclick='randomQuestion(basearr,{type: 0, color:CP})'> Next </button>";
document.getElementById('body').innerHTML = txt
}
function WrongAnswer(qid){
points --;
var txt = "<p id='wans'>You Got it wrong! You currently have "+ points +" points</p>";
txt +="<button id='wnext'onclick='  randomQuestion(MClist,{type: 1, color:CP});'> Next </button>";
document.getElementById('body').innerHTML = txt
}
