var readlineSync = require("readline-sync");

var userName = readlineSync.question("Tell me your name: ");
var welcomeMsg = "Hey " + userName + "!" + " Lets see how much you know Dhwani Vora.. "

console.log("\n" + welcomeMsg );

console.log("\nThere will be some MCQ questions where you have to enter your answer(num only)..")
console.log("\nYou get +1 for every right answer.")

var score = 0;
var level=1;

function checkLevel(result){
  if (result == 't') {
    level+=1;
  }
  else if(level>1 && result == 'f'){
    level-=1
  }
}

function question(que, options, corAns){
  console.log("\n" + que)
	for (var i = 0; i < options.length; i++) {
		console.log(i + 1 + "."   + options[i]);
	}
	usrAns = readlineSync.question("Your Choice: ");
	if (usrAns == corAns) {
		score += 1;
		checkLevel('t');
		console.log('\nCongratulations..! You are right');
	}

	else {
		// level -= 1;
		checkLevel('f')
		console.log(`\nDamn..! You are wrong..! Correct Answer is ${options[corAns - 1]}.`);
	}
	console.log(`Your current Score: ${score}\nYour current Level: ${level}`)
}

question("What is my Age ?",[22,23,24,25], 3)
question("Where am I staying currently ?",["Mumbai","Pune","Mysore","Gujarat"], 2)
question("What is my fav fast-food ?",["Burger", "PavBhaji", "Pizza", "Vadapav"], 4)
question("What is my fav drink ?",["Chai","Coffee","Red-Wine","Lemon Iced-Tea"], 1)
question("What is my fav desert ?",["cake","moti-choor ladoo","Chocolate-brownie","Ice-cream"],2)
question("What genre of books I like ?",["Fiction","Romance","Self-Help","Sci-Fi"], 3)
question("A Sport I played in College ?",["Football","Baseball","Cricket","Badminton"],2)
question("Which SuperPower would I want ?",["Time-Travelling","Be Invisible","Read minds of the people","Teleportation"],4)



function finres(score){
  if(score>=5){
    console.log("\n\nHmmm... You know me quite well");
  }
  else{
    console.log("\n\nHmmm... It seems you dont know me well")
  }
console.log(`\nYou scored ${score}/8.\n
And,managed to reach level ${level}.\nGoodBye ${userName}..!\nSee You Again!..!`)
}

finres(score)