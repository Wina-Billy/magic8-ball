$(document).ready(function() {
	var magic8Ball = {};
magic8Ball.listofAnswers = [ "As I see it, yes", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "It is certain", "It is decidedly so", "Most likely", "My reply is no", "My sources say no", "Outlook not so good", "Outlook good", "Reply hazy, try again", "Signs point to yes", "Very doubtful", "Without a doubt, Yes", "Yes-definitely,You may rely on it" ];
$("#answer").hide();
magic8Ball.askQuestion = function(question) {
	$ ("#answer") .fadeIn(4000);
	var randomNumber = Math.random();
	var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers;
	var randomIndex = Math.floor(randomNumberForListOfAnswers);
	var answer = this.listOfAnswers[randomIndex];
	console.log(question);
	console.log(answer);
};
var question = prompt("ASK A YES/NO QUESTION!");

document.getElementById();

var answerElement.innerText = answerText;

magic8Ball.askQuestion();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
$("#answer").hide();
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
 
   setTimeout(
       function() {
           var question = prompt("ASK A YES/NO QUESTION");
           magic8Ball.askQuestion(question);
       }, 500);
});

	
	