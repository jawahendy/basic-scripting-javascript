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

/////////////////////////////////////////////////////////////////
//soal no 5 : Return Largest Numbers in Arrays                //
///////////////////////////////////////////////////////////////

function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//little exercise
function findAll(needles, haystack){ 
  for(var i = 0 , len = needles.length; i < len; i++){
     if($.inArray(needles[i], haystack) == -1) return false;
  }
  return true;
}

findAll([34, 78, 89], [78, 67, 34, 99, 56, 89]);

//////////////////////////////////////////////////////////////
//soal no 6 : Confirm the Ending                           //
/////////////////////////////////////////////////////////////
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

//litte exercise
var str = "Hello Hendy you are awesome.";
str.endsWith("awesome.");

////////////////////////////////////////////////////////////
//soal 7 : Repeat a String Repeat a String               //
//////////////////////////////////////////////////////////
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else if (num === 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

repeatStringNumTimes("abc", 3);

//little experiment
var name = "hendy";
name.repeat(4);

////////////////////////////////////////////////////////////
//soal 8 : Truncate a String                              //
////////////////////////////////////////////////////////////
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//little exercise
function turncat(str, num) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

turncat("Hello my name is Hendy ,Im from another planet", 25);

/////////////////////////////////////////////////////////////////
//soal 9 : Finders Keepers                                    //
////////////////////////////////////////////////////////////////
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//litte exercise 
function findElement(arr, func) {
  return arr.find(func);
}

console.log(findElement([1, 2, 5, 8, 9, 10], num => num % 3 === 0));

/////////////////////////////////////////////////////////////////
//soal 10 : Boo who                                            //
////////////////////////////////////////////////////////////////

function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);

//litte exercise 
function findtype(bool) {
  if( typeof bool === "boolean"){
    bool = true;
  } else {
    bool = false;
  };
}

findtype(null);

/////////////////////////////////////////////////////////////////
//soal 11 : Title Case a Sentence                              //
/////////////////////////////////////////////////////////////////
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

titleCase("I'm a little tea pot");

//litte exercise
function lowandupper(str) { 
  return str.toLowerCase().split(' ').map(function(word) { 
    return (word.charAt(0).toUpperCase() + word.slice(1)); 
  }).join(' '); 
} 

lowandupper("HELLO MY NAME HENDY I'M FROM ANOTHER PLANET")