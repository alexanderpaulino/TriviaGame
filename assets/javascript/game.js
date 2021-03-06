//Listing all relevant variables. After speaking with the instructor and TAs, it became clear I should
//have utilized objects and properties to store my questions and answers to cut this code down in half. I'll 
//have to create a second repository to experiment with that.

var question = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 0;
var start = false;
var IntervalId;

//Start button with appropriate hover styling.

$(".startButton").hover(function() {
  $(this).css("background-color", "black");
  $(this).css("color", "white");
	}, 
	function() {
  		$(this).css("background-color", "gray");
  		$(this).css("color", "gold");
});

//Start button click function, starting the game and calling all necessary functions. Hiding the start button so
//it won't get in the way of the answers.

$(".startButton").on("click", function() {
 	start = true;

 	if ((start = true)) {
 	$(".startButton").hide();
 	question++;
 	time = 31;
 	hoverHighlight();
 	gameOfTrivia();
 	answerSelect();
	countdown();
 }
});

//The onclick function that disables the hover styling for the results page and triggers the incorrect or correct answer
//function that updates the relevant variables. Additionally, the startOver function is called when a button with the
//startover data-attribute is clicked.

function answerSelect() {
	$(document).on("click", "[data-status=false]", function() {
	$("[data-status=true]").unbind("mouseenter");
	$("[data-status=false]").unbind("mouseenter");
	$(this).css("background-color", "#333");
	$(this).css("color", "white");
	incorrectAnswer();
	});

	$(document).on("click", "[data-status=true]", function() {
	$("[data-status=true]").unbind("mouseenter");
	$("[data-status=false]").unbind("mouseenter");
	$(this).css("background-color", "#333");
	$(this).css("color", "white");
	correctAnswer();
	});

	$(document).on("click", "[data-status=startover]", function() {
	$(this).css("background-color", "#333");
	$(this).css("color", "white");
	startOver();
	});
}

//Simple countdown function which manages the clock. In the event that time expires, the clock is stopped and the 
//noAnswer function is called.

function countdown() {
	time--;
    $(".timer").html("Time Left: " + time);
    if (time === 0) {
        clearInterval(intervalId);
        noAnswer();
      }
  }

//The primary game function. This checks to see which question the game is at and calls the relevant function to
//update the game box with the proper questions and answers.

function gameOfTrivia() {
	intervalId = setInterval(countdown, 1000);
	if (question === 1) {
		question1();
	}
	else if (question === 2) {
		question2();
	}
	else if (question === 3) {
		question3();
	}
	else if (question === 4) {
		question4();
	}
	else if (question === 5) {
		question5();
	}
	else if (question === 6) {
		question6();
	}
	else if (question === 7) {
		question7();
	}
	else if (question === 8) {
		question8();
	}
	else if (question === 9) {
		question9();
	}
	else if (question === 10) {
		question10();
	}
	else {
		gameOver();
	}
}

//The primary result function to be run after every question is answered (correctly or incorrectly) or time expires.
//Similar to gameOfTrivia, this calls on the relevant function that updates the gamebox with the answer registered,
//the correct answer to the question, and a relevant gif or image.

function resultOfTrivia() {
	if (question === 1) {
		result1();
	}
	else if (question === 2) {
		result2();
	}
	else if (question === 3) {
		result3();
	}
	else if (question === 4) {
		result4();
	}
	else if (question === 5) {
		result5();
	}
	else if (question === 6) {
		result6();
	}
	else if (question === 7) {
		result7();
	}
	else if (question === 8) {
		result8();
	}
	else if (question === 9) {
		result9();
	}
	else if (question === 10) {
		result10();
	}
}

//This function stops the clock, calls the resultOfTrivia function to update the gamebox with the result page, and increments
//the question and correct variables. Through use of setTimeout, the user is allowed five seconds to read the result and view
//a brief gif related to the question before the clock is reset and the game continues.

function correctAnswer() {
	clearInterval(intervalId);
	resultOfTrivia();
	$(".answer1").html("Correct!");
  	question++;
  	correct++;
	setTimeout(countdown, 1000 * 5);
	setTimeout(gameOfTrivia, 1000 * 5);
	setTimeout(hoverHighlight, 1000 * 5);
	time = 31;
}

//Same as above, but with incorrect variable increment and on-screen message.

function incorrectAnswer() {
	clearInterval(intervalId);
	resultOfTrivia();
	$(".answer1").html("Incorrect!");
  	question++;
  	incorrect++;
	setTimeout(countdown, 1000 * 5);
	setTimeout(gameOfTrivia, 1000 * 5);
	setTimeout(hoverHighlight, 1000 * 5);
	time = 31;
}

//Same as above, but with unanswered variable increment and on-screen message.

function noAnswer() {
	$("[data-status=true]").unbind("mouseenter");
	$("[data-status=false]").unbind("mouseenter");
	clearInterval(intervalId);
	resultOfTrivia();
	$(".answer1").html("Time's up!");
  	question++;
  	unanswered++;
	setTimeout(countdown, 1000 * 5);
	setTimeout(gameOfTrivia, 1000 * 5);
	setTimeout(hoverHighlight, 1000 * 5);
	time = 31;
}

function startOver () {
	question = 0;
	correct = 0;
	incorrect = 0;
	unanswered = 0;
	time = 31;
	
	question++;
	gameOfTrivia();
	hoverHighlight();
	countdown();
}

//Each question and result function, when called, updates the window based on the user's progress through the trivia game.
//Each answer div has a data attribute and value applied to it that determines what functions are called and which variables 
//are changed once they've been clicked. For the result screen between questions, clicking on the answer boxes won't trigger 
//a response because they've been given an unresponsive data-attribute value. Different values are applied during each 
//function to maintain functionality.

function question1() {
	$(".timer").html("Time Left: " + time);
	$(".questions").html("1: Who was the Hand of the King before Eddard Stark?");
	$(".answer1").html("A: Jon Arryn");
	$(".answer1").attr("data-status", "true");
	$(".answer2").html("B: Tyrion Lannister");
	$(".answer2").attr("data-status", "false");
	$(".answer3").html("C: Davos Seaworth");
	$(".answer3").attr("data-status", "false");
	$(".answer4").html("D: There was no Hand of the King before Ned Stark");
	$(".answer4").attr("data-status", "false");
	}

function result1() {
	$(".answer1").attr("data-status", "none");
	$(".answer2").html("Correct Answer: A<br><br>Jon Arryn");
	$(".answer2").attr("data-status", "none");
	$(".answer3").html("<img src='assets/images/jon-arryn.png' style='max-height: 200px; max-width: 300px;'>");
	$(".answer3").attr("data-status", "none");
	$(".answer4").html("");
	$(".answer4").attr("data-status", "none");
}

function question2() {
	$(".timer").html("Time Left: " + time);
	$(".questions").html("2: How did Robert Baratheon's rule come to an end?");
	$(".answer1").html("A: He died in battle against invaders from the sea.");
	$(".answer1").attr("data-status", "false");
	$(".answer2").html("B: He died in his sleep.");
	$(".answer2").attr("data-status", "false");
	$(".answer3").html("C: He was poisoned at a banquet.");
	$(".answer3").attr("data-status", "false");
	$(".answer4").html("D: He was fatally injured during a boar hunt.");
	$(".answer4").attr("data-status", "true");
	}

function result2() {
	$(".answer1").attr("data-status", "none");
	$(".answer2").html("Correct Answer: D<br><br>He was fatally injured during a boar hunt.");
	$(".answer2").attr("data-status", "none");
	$(".answer3").html("<img src='assets/images/baratheon.gif' style='max-height: 200px; max-width: 300px;'>");
	$(".answer3").attr("data-status", "none");
	$(".answer4").html("");
	$(".answer4").attr("data-status", "none");
}

function question3() {
	$(".timer").html("Time Left: " + time);
	$(".questions").html("3: Who was crowned king after Robert Baratheon's death?");
	$(".answer1").html("A: His older brother, Stannis Baratheon.");
	$(".answer1").attr("data-status", "false");
	$(".answer2").html("B: His younger brother, Renly Baratheon.");
	$(".answer2").attr("data-status", "false");
	$(".answer3").html("C: His oldest son, Joffrey Baratheon.");
	$(".answer3").attr("data-status", "true");
	$(".answer4").html("D: His newly discovered oldest son, Gendry Snow.");
	$(".answer4").attr("data-status", "false");
	}

function result3() {
	$(".answer1").attr("data-status", "none");
	$(".answer2").html("Correct Answer: C<br><br>His oldest son, Joffrey Baratheon.");
	$(".answer2").attr("data-status", "none");
	$(".answer3").html("<img src='assets/images/joffrey.gif' style='max-height: 200px; max-width: 300px;'>");
	$(".answer3").attr("data-status", "none");
	$(".answer4").html("");
	$(".answer4").attr("data-status", "none");
}

function question4() {
	$(".timer").html("Time Left: " + time);
	$(".questions").html("4: Why did Jon Snow join the Night's Watch?");
	$(".answer1").html("A: As a bastard, he had no claims to family and had no choice once he reached adulthood.");
	$(".answer1").attr("data-status", "false");
	$(".answer2").html("B: He was inspired by his uncle who volunteered for the Night's Watch.");
	$(".answer2").attr("data-status", "true");
	$(".answer3").html("C: He was framed for a heinous crime and was sent to the Night's Watch as punishment.");
	$(".answer3").attr("data-status", "false");
	$(".answer4").html("D: He heard legend of treasures beyond the Wall and joined the Night's Watch to pursue them.");
	$(".answer4").attr("data-status", "false");
}

function result4() {
	$(".answer1").attr("data-status", "none");
	$(".answer2").html("Correct Answer: B<br><br>He was inspired by his uncle who volunteered for the Night's Watch.");
	$(".answer2").attr("data-status", "none");
	$(".answer3").html("<img src='assets/images/benjen.gif' style='max-height: 200px; max-width: 300px;'>");
	$(".answer3").attr("data-status", "none");
	$(".answer4").html("");
	$(".answer4").attr("data-status", "none");
}

function question5() {
	$(".timer").html("Time Left: " + time);
	$(".questions").html("5: Who first trained Arya Stark in combat?");
	$(".answer1").html("A: Syrio Forel, Braavosi swordmaster.");
	$(".answer1").attr("data-status", "true");
	$(".answer2").html("B: Jaqen H'ghar, the Faceless Man.");
	$(".answer2").attr("data-status", "false");
	$(".answer3").html("C: Sandor Clegane, the Hound.");
	$(".answer3").attr("data-status", "false");
	$(".answer4").html("D: Eddard Stark, Head of House Stark and Arya's father.");
	$(".answer4").attr("data-status", "false");
}

function result5() {
	$(".answer1").attr("data-status", "none");
	$(".answer2").html("Correct Answer: A<br><br>Syrio Forel, Braavosi swordmaster.");
	$(".answer2").attr("data-status", "none");
	$(".answer3").html("<img src='assets/images/syrioforel.gif' style='max-height: 200px; max-width: 300px;'>");
	$(".answer3").attr("data-status", "none");
	$(".answer4").html("");
	$(".answer4").attr("data-status", "none");
}

function question6() {
	$(".timer").html("Time Left: " + time);
	$(".questions").html("6: How did Bran Stark lose the use of his legs?");
	$(".answer1").html("A: He was injured in battle and left for dead.");
	$(".answer1").attr("data-status", "false");
	$(".answer2").html("B: He was tortured after being captured by enemies of the Starks.");
	$(".answer2").attr("data-status", "false");
	$(".answer3").html("C: He was pushed off of the highest tower in Winterfell.");
	$(".answer3").attr("data-status", "true");
	$(".answer4").html("D: After suffering a light wound, his injury became infected and they were forced to amputate.");
	$(".answer4").attr("data-status", "false");
}

function result6() {
	$(".answer1").attr("data-status", "none");
	$(".answer2").html("Correct Answer: C<br><br>He was pushed off of the highest tower in Winterfell.");
	$(".answer2").attr("data-status", "none");
	$(".answer3").html("<img src='assets/images/branfalls.gif' style='max-height: 200px; max-width: 300px;'>");
	$(".answer3").attr("data-status", "none");
	$(".answer4").html("");
	$(".answer4").attr("data-status", "none");
}

function question7() {
	$(".timer").html("Time Left: " + time);
	$(".questions").html("7: Where do they say one should never face the Dothraki horde?");
	$(".answer1").html("A: In the sea.");
	$(".answer1").attr("data-status", "false");
	$(".answer2").html("B: In a desert.");
	$(".answer2").attr("data-status", "false");
	$(".answer3").html("C: In a jungle.");
	$(".answer3").attr("data-status", "false");
	$(".answer4").html("D: In an open plain.");
	$(".answer4").attr("data-status", "true");
}

function result7() {
	$(".answer1").attr("data-status", "none");
	$(".answer2").html("Correct Answer: D<br><br>In an open plain.");
	$(".answer2").attr("data-status", "none");
	$(".answer3").html("<img src='assets/images/dothrakicharge.gif' style='max-height: 200px; max-width: 300px;'>");
	$(".answer3").attr("data-status", "none");
	$(".answer4").html("");
	$(".answer4").attr("data-status", "none");
}

function question8() {
	$(".timer").html("Time Left: " + time);
	$(".questions").html("8: What was the name of the man who inspired the prophecy of the Prince That Was Promised?");
	$(".answer1").html("A: Azor Ahai");
	$(".answer1").attr("data-status", "true");
	$(".answer2").html("B: Joramun, King Beyond the Wall");
	$(".answer2").attr("data-status", "false");
	$(".answer3").html("C: Bran the Builder, First King in the North");
	$(".answer3").attr("data-status", "false");
	$(".answer4").html("D: Rhaego, the Stallion Who Mounts the World");
	$(".answer4").attr("data-status", "false");
}

function result8() {
	$(".answer1").attr("data-status", "none");
	$(".answer2").html("Correct Answer: A<br><br>Azor Ahai.");
	$(".answer2").attr("data-status", "none");
	$(".answer3").html("<img src='assets/images/azorahai.jpg' style='max-height: 200px; max-width: 275px;'>");
	$(".answer3").attr("data-status", "none");
	$(".answer4").html("");
	$(".answer4").attr("data-status", "none");
}

function question9() {
	$(".timer").html("Time Left: " + time);
	$(".questions").html("9: Which of the following is NOT one of the names of Daenerys Targaryen's dragons?");
	$(".answer1").html("A: Drogon");
	$(".answer1").attr("data-status", "false");
	$(".answer2").html("B: Aegon");
	$(".answer2").attr("data-status", "true");
	$(".answer3").html("C: Viserion");
	$(".answer3").attr("data-status", "false");
	$(".answer4").html("D: Rhaegal");
	$(".answer4").attr("data-status", "false");
}

function result9() {
	$(".answer1").attr("data-status", "none");
	$(".answer2").html("Correct Answer: B<br><br>Aegon");
	$(".answer2").attr("data-status", "none");
	$(".answer3").html("<img src='assets/images/3dragons.gif' style='max-height: 200px; max-width: 300px;'>");
	$(".answer3").attr("data-status", "none");
	$(".answer4").html("");
	$(".answer4").attr("data-status", "none");
}

function question10() {
	$(".timer").html("Time Left: " + time);
	$(".questions").html("10: What is the name of Tommen Baratheon's cat?");
	$(".answer1").html("A: Ser Pounce");
	$(".answer1").attr("data-status", "true");
	$(".answer2").html("B: Ser Whiskers");
	$(".answer2").attr("data-status", "false");
	$(".answer3").html("C: Ser Paws");
	$(".answer3").attr("data-status", "false");
	$(".answer4").html("D: Ser Fuzzybottom");
	$(".answer4").attr("data-status", "false");
}

function result10() {
	$(".answer1").attr("data-status", "none");
	$(".answer2").html("Correct Answer: A<br><br>Ser Pounce");
	$(".answer2").attr("data-status", "none");
	$(".answer3").html("<img src='assets/images/serpounce.gif' style='max-height: 200px; max-width: 300px;'>");
	$(".answer3").attr("data-status", "none");
	$(".answer4").html("");
	$(".answer4").attr("data-status", "none");
}

//This function stops the clock and presents the final screen, tallying the user's score based on their correct, incorrect,
//and unanswered questions. The last button allows the user to restart the game, resetting the game variables and prompting
//the user with the first question again.

function gameOver() {
	clearInterval(intervalId);
	$(".timer").html("");
	$(".questions").html("<h2>GAME OVER</h2><br><h3>Thanks for playing! Check your results below!</h3>");
	$(".answer1").html("Correct answers: " + correct);
	$(".answer1").attr("data-status", "none");
	$(".answer2").html("Incorrect answers: " + incorrect);
	$(".answer2").attr("data-status", "none");
	$(".answer3").html("Unaswered: " + unanswered);
	$(".answer3").attr("data-status", "none");
	$(".answer4").html("<h2>Click here to try again!</h2>");
	$(".answer4").attr("data-status", "startover");
}

//This allows the users to see which answer they're clicking on beforehand through a simple style modification. I considered
//adding a box outline to make it appear more button-like, but felt there was enough code as is...

function hoverHighlight () {
	$(".answer1").hover(function() {
	  $(this).css("background-color", "gray");
	  $(this).css("color", "gold");
		}, 
		function() {
	  		$(this).css("background-color", "#333");
	  		$(this).css("color", "white");
		});
	$(".answer2").hover(function() {
	  $(this).css("background-color", "gray");
	  $(this).css("color", "gold");
		}, 
		function() {
	  		$(this).css("background-color", "#333");
	  		$(this).css("color", "white");
		});
	$(".answer3").hover(function() {
	  $(this).css("background-color", "gray");
	  $(this).css("color", "gold");
		}, 
		function() {
	  		$(this).css("background-color", "#333");
	  		$(this).css("color", "white");
		});
	$(".answer4").hover(function() {
	  $(this).css("background-color", "gray");
	  $(this).css("color", "gold");
		}, 
		function() {
	  		$(this).css("background-color", "#333");
	  		$(this).css("color", "white");
		});
}