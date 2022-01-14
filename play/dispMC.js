var options = getMCitems(basearr);
var ql = options.length;
function shuffleArray(array){
  for(var i = array.length - 1; i > 0; i--){
    var j = Math.floor(Math.random()* (i+1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
function randomQuestion(){
  var QCAN = Math.floor(Math.random() * ql);
  var QCA = options[QCAN];
  var QCAS = [QCA[1],QCA[2],QCA[3],QCA[4]];
  var Q = QCA[0];
  var A = QCA[1];
  var SAL = shuffleArray(QCAS);
  var txt="<h1 id='q'>"+Q+"</h1>";
for(var i = 0;  i<4; i++){
  var OM = "WrongAnswer()";
  if(SAL[i] === A){OM = "CorrectAnswer()"}
  txt+= "<button id='b"+i+"' onclick='" + OM + "'>" + SAL[i] +"</button>"
}
document.getElementById('body').innerHTML = txt;
}
