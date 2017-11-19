//create an array of words
var word =['january',
'february', 
'march', 
'april',
'may',
'june',
'july',
'august',
'september',
'october',
'november',
'december'];
//choose word randomly
var randNum = Math.floor(Math.random() * word.length);
var choosenWord = word[randNum];
var underScore =[];
var rightWord =[];
var wrongWord =[];



var docUnderScore = document.getElementsByClassName("underscore");
var docRightGuess = document.getElementsByClassName("rightGuess");
var docWrongGuess = document.getElementsByClassName("wrongGuess");

console.log(choosenWord);

//create underscore based on the length of the random word
var generateUnderscore = () => {
for(var i = 0; i < choosenWord.length; i++) {
    underScore.push("_");

}
    return underScore;
}


// get users guess
document.addEventListener('keypress', (event) => {  
  var keyword = String.fromCharCode(event.keyCode); 
//check the guess is right
    if(choosenWord.indexOf(keyword) > -1){
//if right push to right array
      rightWord.push(keyword); 
//replace underscore with the letter
      underScore[choosenWord.indexOf(keyword)] = keyword;
      docUnderScore[0].innerHTML = underScore.join(" ");
      docRightGuess[0].innerHTML = rightWord.join(" ");

      if (underScore.join("") == choosenWord) {
        alert("You Win");
      }
//if wrong, push to wrong array
     else (wrongWord.push(keyword));
     docWrongGuess[0].innerHTML = wrongGuess.join(" ");
     
    }
});

 





