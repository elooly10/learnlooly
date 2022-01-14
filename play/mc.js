var basearr = [
['Rhode Island', 'Providence'],
['Alaska', 'Juneau'],
['Arizona', 'Phoenix'],
['Arkansas', 'Little Rock'],
['California', 'Sacramento'],
['Neveda', 'Carson City'],
['Oregon', 'Salem'],
['Washigton', 'Olympia'],
['Idaho', 'Boise'],
['Utah', 'Salt Lake City'],
['New Mexico', 'Santa Fe'],
['Colorado', 'Denver'],
['Wyoming', 'Cheyenne'],
['Montana', 'Helena'],
['North Dakota', 'Bismark'],
['South Dakota', 'Pierre'],
['Nebraska', 'Lincoln'],
['Kansas', 'Topeka'],
['Oklahoma', 'Oklahoma City'],
['Texas', 'Austin'],
['Louisiana', 'Baton Rouge'],
['Hawaii', 'Honolulu'],
['Missouri', 'Jefferson City'],
['Iowa', 'Des Moines'],
['Minnesota', 'St. Paul'],
['Michigan', 'Lansing'],
['Mississippi', 'Jackson'],
['Alabama', 'Montgomery'],
['Georgia', 'Alanta'],
['Florida', 'Tallahassee'],
['Tennesse', 'Nashville'],
['Kentucky', 'Frankfort'],
['Illinois', 'Springfield'],
['Indiana', 'Indianapollis'],
['Wisconsin', 'Madison'],
['Ohio', 'Colombus'],
['South Carolina', 'Colombia'],
['North Carolina', 'Raleigh'],
['Virginia', 'Richmond'],
['West Virginia', 'Charleston'],
['Pennsylvania', 'Harrisburg'],
['New York', 'Albany'],
['New Jersey ', 'Trenton'],
['Maryland', 'Annapolis'],
['Delaware', 'Dover'],
['Massachusetts', 'Boston'],
['Maine', 'Augusta'],
['Vermont', 'Montpelier'],
['New Hampshire', 'Concord'],
['Connecticut', 'Hartford']
] // Somehow someday needs to be createable
function MCimportstack(l, ca){
  var lg = l.length;
  var alla = [ca[1]];
  for(var i = 0; i < 3; i++){
    //pick a random answer
    var p = l[Math.floor(Math.random()*lg)];

    var a = p[1];

  /*  console.log('P: '+p);
    console.log(`Answer: `+a); */
    while(alla.includes(a)){

      p = l[Math.floor(Math.random()*lg)];

      a = p[1];
  //console.log(a);
    }
    alla.push(a);
  }
    return [ca[0],alla[0],alla[1],alla[2],alla[3]];
}
function getMCitems(l)  {
  var allar = [];
  for(var i = 0; i < basearr.length; i++){
    var par = [];
  var barr = basearr[i];
  allar[i] = MCimportstack(l, barr);
}
return allar;
}
