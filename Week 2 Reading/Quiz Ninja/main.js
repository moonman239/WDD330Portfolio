alert("Welcome to Quiz Ninja!");

const quiz = [
["What is Superman's real name?","Clark Kent"],
["What is Wonder Woman's real name?","Diana Prince"],
["What is Batman's real name?","Bruce Wayne"]];



function start(quiz) {
let score = 0;
for (const[question,answer] of quiz) {
		const response = ask(question);
		check(response,answer);
}
gameOver();
function gameOver()
{
var s = score == 1 ? '' : 's';
alert('Game over! You scored ' + score + 'point' + s);
}
function ask(question)
{
return prompt(question);
}

function check(response,answer) {
if (response == answer){
		alert("Correct!");
		score++;
	} else {
		alert('Wrong! The correct answer was ' + answer);
}
}
}


start(quiz);

