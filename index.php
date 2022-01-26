<?php
session_start();

?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <style>
    #playbutton {
      background-color: #9933F0;
      border-radius: 10px;
      padding: 20px;
      color: #E4E4E4;
      font-family: sans-serif;
      font-size: 40px;
      text-decoration: none;
    }
    *{font-family: sans-serif;}
    h1{font-size: 40px;}
    purple{
      color: #FF33B1;
    }
    sky{
      color: #0099F0;
    }
    green{
      color: #66B180;
    }
    red{
      color: #FF3333;
    }
    orange{
      color: #FF8000;
    }
    forest{
      color: #362
    }
    yellow{
      color: #993;
    }
    #header{
      padding: 10px;
      margin: 10px;
    }
    code{
      font-weight: bold;
    }
    h1{
      font-size: 36px
    }
    h2{
      font-size: 30px
    }
    h3{
      font-size: 24px
    }
    h4{
      font-size: 18px
    }
    p{
      text-indent:40px;
    }
    div.body{
      outline-color: #000;
      outline-style: solid;
      outline-width: 2px;
      outline-offset: 5px;
      margin: 10px;
    }
    </style>
    <title>Learnlooly Docs</title>
  </head>
  <body>
  <div id='header'>  
  <h1>  Welcome To Learnlooly's API Docs for 0.2</h1>
    <a id="playbutton" href="play"> Try It Out ▶︎</a>
  </div>
  <div class="body">
  <h2> <purple>function</purple> <yellow>randomQuestion</yellow>(<sky>options</sky>, <sky>details</sky>) </h2>
  <p><sky>randomQuestion</sky> <red>generates</red> & <red>displays</red> <forest>sets</forest></p>
  <p><sky>randomQuestion</sky> automaticly <red>shuffles</red> <red>questions</red> in <red>multiple choice</red></p>
  <p><sky>randomQuestion</sky> <red>returns</red> <yellow>CorrectAnswer</yellow>(<green>Qid</green>, <orange>EnteredAnswer</orange>)</p>
  <p><sky>randomQuestion</sky> <red>also returns</red> <yellow>WrongAnswer</yellow>(<green>Qid</green>, <orange>EnteredAnswer</orange>)</p>
  <p><sky>randomQuestion</sky> <red> on fail</red>, <red>returns</red> {<sky>error</sky>:<green>Error Explanation</green>,<sky>specs</sky>:<sky>details</sky>}
  <h4> <sky>options</sky>: [<orange>Question</orange>,<orange>Answer</orange>,<orange>Wrong Answer 1</orange>, <orange>Wrong Answer 2</orange>, <orange>Wrong Answer 3</orange>]
  <p> <red>Question</red>/<red>answers</red> set. <forest>Wrong answers</forest> do not need specfication in <red>written questions</red></p>
  <h3> <sky>details</sky> </h3>
      <h4><sky>type</sky>: <green>0<green></h4>
        <p>  Sets <sky>type</sky> to <red>Multiple Choice</red></p>
      <h4><sky>type</sky>: <green>1<green></h4>
        <p>  Sets <sky>type</sky> to <red>Written</red></p>
      <h4> <sky>color</sky>: [
        <orange>TopRightBgColor</orange>,
        <orange>TopLeftBgColor</orange>,
        <orange>BottomLeftBgColor</orange>,
        <orange>BottomRightBgColor</orange>,
        <orange>WrittenBgColor</orange>,
        <orange>TopRightColor</orange>,
        <orange>TopLeftColor</orange>,
        <orange>BottomLeftColor</orange>,
        <orange>BottomRightColor</orange>,
        <orange>WrittenColor</orange>]</h4>
        <p>  Specifys <red> Color </red> and <red> BackgroundColor</red> For <forest>Buttons</forest></p>
  </div>
  <div class="body">
  <h2> <purple>function</purple> <yellow>shuffleArray</yellow>(<sky>array</sky>) </h2>
  <p>Can <red> shuffle </red> <forest>anything</forest></p>
  <p>There is <red>no reason</red> to <red>use</red> <forest>this</forest> when <red>interacting</red> with <forest>Learnlooly API</forest>, but <forest>it</forest> can be <red>useful</red></p>
  <p><red>Returns</red> a <red>shuffled</red> <forest>array</forest></p>
  <h3><sky>Array</sky></h3>
  <p><sky>Array</sky> can be a <forest>list</forest> of <forest>anything</forest> you want to <red>shuffle</red>.</p>
  </div>
  <div class="body">
  <h2> <purple>function</purple> <yellow>getMCitems</yellow>(<sky>list</sky>) </h2>
  <p><red>Returns</red> a <forest>array</forest> with <forest> other answers </forest> for <red>Multiple Choice</red></p>
  <p>the <forest>returned array</forest> is arranged <wbr/>[<orange>Question</orange>, <orange>Answer</orange>, <orange>Fake Answer A</orange>, <orange>Fake Answer B</orange>, <orange>Fake Answer C</orange>]
  <h3><sky>list</sky></h3>
  <p><sky>list</sky> should be  a <forest>array</forest> of <forest>Question/Answer sets</forest> you want to <red>Make Into</red> a <red>MC list</red>.</p>
  <h3><purple>function</purple> <yellow>MCimportstack</yellow>(<sky>listitem</sky>, <sky>list</sky>) </h3>
  <p> Turns an indvidual item into A MC list </p>
  </div>
  <div class="body">
    <h2><purple>function</purple> <yellow>CorrectAnswer</yellow>(<green>Qid</green>, <orange>EnteredAnswer</orange>)</h2>
    <h2><purple>function</purple> <yellow>WrongAnswer</yellow>(<green>Qid</green>, <orange>EnteredAnswer</orange>)</h2>
    <p><sky>randomQuestion</sky> <red>returns</red> <yellow>CorrectAnswer</yellow>(<green>Qid</green>, <orange>EnteredAnswer</orange>) if the <red> correct answer</red> is given</p>
    <p><sky>randomQuestion</sky> <red>also returns</red> <yellow>WrongAnswer</yellow>(<green>Qid</green>, <orange>EnteredAnswer</orange>) if the <red> wrong answer</red> is given </p>
    <p>Neither <forest>answer function</forest> is <red>defined</red> and both must be <red>defined</red></p>
      </div>
  </body>
</html>
