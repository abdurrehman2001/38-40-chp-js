// Q # 1
function power(base,power)
{
    var a = 1;
    for (var i=0; i<power; i++) {
        a *= base;
    }
  return a;
}

alert(power(5,3));


// Q # 2
var year = prompt("Enter year :");
if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
{
    alert("Correct year");
}
else {
    alert("Incorrect year");
}


// Q # 3
function sidesofTriangle(a,b,c)
{
    var Sum = (a + b + c)/2;
    return Sum;
}

function Area(S,a,b,c) {
    var area = S * ((S-a) * (S-b) * (S-c));
    return area;
}

let side1 = +prompt('Enter side 1: ');
let side2 = +prompt('Enter side 2: ');
let side3 = +prompt('Enter side 3: ');

var S = sidesofTriangle(side1,side2,side3);
var A = Area(S,side1,side2,side3);
alert("The area of Triangle is : " + A);


// Q # 5
let str = prompt('Enter the String: ');
let findchar = prompt('Enter the Character to find: ');
var found = findIndex(str,findchar);
alert("The value found at index : " + found);

function findIndex(myStr, findchar)
{
    for(var index=0; index < myStr.length; index++)
    {
        if(myStr[index] === findchar)
        {
            return index;
        }
    }
    return -1;
}


// Q # 6
var originalSentence = prompt("Enter the sentence : ");
var sentence = removeVowels(originalSentence);
alert(sentence);

function removeVowels(sentence) 
{
    sentence = sentence.replace(/[aeiou]/ig, '');
    return sentence;
}


// Q # 7
function findVowelOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let seenVowel = false;
  
    for (const letter of str.toLowerCase()) 
    {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (seenVowel) {
              count++;
              seenVowel = false;
            } 
            else {
              seenVowel = true;
            }
            break;
          }
        default:
          seenVowel = false;
      }
    }
    return count;
}

var count = findVowelOccurrences();
alert("The number of vowels occurence is : " + count);

