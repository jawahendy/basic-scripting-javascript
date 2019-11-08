/////////////////////////////////////////////////////////////////////
//name : Hendy                                                     //
//from : Celerates                                                 //
/////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
//soal 1 : Convert Celsius to Fahrenheit                        //
//////////////////////////////////////////////////////////////////

function convertF(celsius) {
    var fahrenheit = celsius * (9 / 5) + 32;
  
    if (typeof fahrenheit !== "undefined") {
      return fahrenheit;
    } else {
      return "fahrenheit not defined";
    }
  }
  
  convertF(30);

//little experiment 
const suhu = 33;

function suhu2(cel){
  const conver = (cel-32)*5/9 + " °C";
  return conver;
}
suhu2(suhu);

///////////////////////////////////////////////////////////////////
//soal 2 : Reverse a String                                     //
/////////////////////////////////////////////////////////////////
function reversestr(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }


  
  reversestr("hello");

//little experiment 
const hello = "Hello";

function  revese(str){
   const split = str.split("");
   const cut = split.reverse();
   const gab = cut.join("");
  return gab;
}
revese(hello);


///////////////////////////////////////////////////////////////
//soal 3 : Factorialize a Number                            //
/////////////////////////////////////////////////////////////
function factorialize(num) {
    if (num === 0){
      return 1;
    }
    return num * factorialize(num - 1);
  }
  
  factorialize(5);

//litle experiment
function FirstFactorial(num) { 
  var factorial = 1;
  for (var i = 1; i <= num; i++) {  
    factorial = factorial * i;
  }
  return factorial;   
}
   
FirstFactorial(5);  
  
//////////////////////////////////////////////////////////////
//soal 4 : Find the Longest Word in a String               //
/////////////////////////////////////////////////////////////
function findLongestWordLength(str) {
    return Math.max(
      ...str.split(" ")
      .map(word => 
      word.length));
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

//little experiment 
function myFunction(str) {
    var str2 = str;
    var res = str2.split(" ");
    var tonum = res.length;
    return tonum
  }
  
  myFunction("What is the average airspeed velocity of an unladen swallow");

//experiment again
function myFunction(str) {
    var str2 = str.split(" ").length;
    return str2
  }
  
  myFunction("What is the average airspeed velocity of an unladen swallow");