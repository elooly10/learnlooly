
function MCimportstack(list, listitem){ //Makes answer
  var anslist = [listitem[1]];
  for(var i = 0; i < 3; i++){
    //pick a random answer
    var choiceFull = list[Math.floor(Math.random()*list.length)];

    var choice = choiceFull[1];

  /*  console.log('P: '+p);
    console.log(`Answer: `+a); */
    while(anslist.includes(choice)){ //No Duplicates!

      choiceFull = list[Math.floor(Math.random()*list.length)];

      choice = choiceFull[1];
  //console.log(a);
    }
    anslist.push(choice);
  }
    return [listitem[0],anslist[0],anslist[1],anslist[2],anslist[3]];
}
function getMCitems(list)  {
  var MClist = [];
  for(var i = 0; i < list.length; i++){
    var listitem = list[i];
    MClist[i] = MCimportstack(list, listitem);
}
return MClist;
}

function shuffleArray(array){
  for(var i = array.length - 1; i > 0; i--){
    var j = Math.floor(Math.random()*(i+1));
    var tempArI = array[i];
    array[i] = array[j];
    array[j] = tempArI;
  }
  return array;
}
function randomQuestion(options, details){
  if(!details){
    return {error: "No Specified Details", specs: details};
  }
  var Qid = Math.floor(Math.random() * options.length);
  var Question = options[Qid];
  if(details.type == 0){
    var Answer = Question[1];
    var Question_Only = Question[0]
    var txt="<label for='W'><h1 id='q'>"+Question[0]+"</h1></label>";
    txt +="<div id='WDIV'><input id='W' name='W' placeholder='Written Input'/>"
    txt+="<button id='bw' style='background:"+details.color[4]+"; color:"+details.color[9]+"'onclick=\" if(document.getElementById('W').value=='"+Answer+"'){CorrectAnswer("+Qid+","+Answer+");} else{WrongAnswer("+Qid+",document.getElementById('W').value)}\">Check</button></div>"
  }
  else if(details.type == 1){
  var Answers = [Question[1],Question[2],Question[3],Question[4]];
  var QuestionTxt = Question[0];
  var CorrectAns = Question[1];
  var ShuffledAns = shuffleArray(Answers);
  var txt="<h1 id='q'>"+QuestionTxt+"</h1>";
for(var i = 0;  i<4; i++){
  var AnsButtonClick = "WrongAnswer("+i+","+ShuffledAns[i]+")"
  if(ShuffledAns[i] === CorrectAns){
    AnsButtonClick = "CorrectAnswer("+i+","+ShuffledAns[i]+")"
  }

  txt+= "<button id='b"+i+"' style='background:"+details.color[i]+";color:"+details.color[(i+5)]+"'"
  txt += "onclick='" + AnsButtonClick+ "'>" + ShuffledAns[i] +"</button>"
}}
else{
  return {error: "Not A Valid Type", specs: details}
}
document.getElementById('body').innerHTML = txt;
}
