var question = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 0;
var start = false;
var IntervalId;

$(".startButton").hover(function() {
  $(this).css("background-color", "black");
  $(this).css("color", "white");
	}, 
	function() {
  		$(this).css("background-color", "gray");
  		$(this).css("color", "gold");
});

$(".startButton").on("click", function() {
 	start = true;

 	if ((start = true)) {
 	$(".startButton").hide();
 	question++;
 	time = 30;
 	hoverHighlight();
 	gameOfTrivia();
 	answerSelect();
	countdown();
 }
});

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
	question = 0;
	correct = 0;
	incorrect = 0;
	unanswered = 0;
	time = 30;
	
	question++;
	gameOfTrivia();
	countdown();
	});
}

function countdown() {
	time--;
    $(".timer").html("Time Left: " + time);
    if (time === 0) {
        clearInterval(intervalId);
        noAnswer();
      }
  }

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

function correctAnswer() {
	clearInterval(intervalId);
	resultOfTrivia();
	$(".answer1").html("Correct!");
  	question++;
  	correct++;
	setTimeout(countdown, 1000 * 6);
	setTimeout(gameOfTrivia, 1000 * 6);
	setTimeout(hoverHighlight, 1000 * 6)
	time = 30;
}

function incorrectAnswer() {
	clearInterval(intervalId);
	resultOfTrivia();
	$(".answer1").html("Incorrect!");
  	question++;
  	incorrect++;
	setTimeout(countdown, 1000 * 6);
	setTimeout(gameOfTrivia, 1000 * 6);
	setTimeout(hoverHighlight, 1000 * 6)
	time = 30;
}

function noAnswer() {
	clearInterval(intervalId);
	resultOfTrivia();
	$(".answer1").html("Time's up!");
  	question++;
  	incorrect++;
	setTimeout(countdown, 1000 * 6);
	setTimeout(gameOfTrivia, 1000 * 6);
	setTimeout(hoverHighlight, 1000 * 6)
	time = 30;
}

function question1() {
	$(".timer").html("Time Left: " + time);
	$(".questions").html("1: Who was the Hand of the King before Eddard Stark?");
	$(".answer1").html("A: Jon Arryn");
	$(".answer1").attr("data-status", "true");
	$(".answer2").html("B: Tyrion Lannister");
	$(".answer2").attr("data-status", "false");
	$(".answer3").html("C: Davos Seaworth");
	$(".answer3").attr("data-status", "false");
	$(".answer4").html("D: There was no Hand of<br>the King before Ned Stark");
	$(".answer4").attr("data-status", "false");
	}

function result1() {
	$(".timer").html("");
	$(".answer1").attr("data-status", "none");
	$(".answer2").html("Correct Answer - A: Jon Arryn");
	$(".answer2").attr("data-status", "none");
	$(".answer3").html("<img src='assets/images/jon-arryn.png' height='300px' width='300px'>");
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
	$(".timer").html("");
	$(".answer1").attr("data-status", "none");
	$(".answer2").html("Correct Answer - D: He was fatally injured during a boar hunt.");
	$(".answer2").attr("data-status", "none");
	$(".answer3").html("<img src='assets/images/baratheon.gif' height='250px' width='350px'>");
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
	$(".timer").html("");
	$(".answer1").attr("data-status", "none");
	$(".answer2").html("Correct Answer - C: His oldest son, Joffrey Baratheon.");
	$(".answer2").attr("data-status", "none");
	$(".answer3").html("<img src='assets/images/joffrey.gif' height='300px' width='300px'>");
	$(".answer3").attr("data-status", "none");
	$(".answer4").html("");
	$(".answer4").attr("data-status", "none");
}

function question4() {
	$(".timer").html("Time Left: " + time);
	$(".questions").html("4: Why did Jon Snow 'take the black' and join the Night's Watch?");
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
	$(".timer").html("");
	$(".answer1").attr("data-status", "none");
	$(".answer2").html("Correct Answer - B: He was inspired by his uncle who volunteered for the Night's Watch.");
	$(".answer2").attr("data-status", "none");
	$(".answer3").html("<img src='assets/images/benjen.gif' height='250px' width='300px'>");
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

function question6() {
	$(".timer").html("Time Left: " + time);
	$(".questions").html("6: How did Bran Stark lose the use of his legs?");
	$(".answer1").html("A: He was injured in battle and left for dead.");
	$(".answer1").attr("data-status", "false");
	$(".answer2").html("B: He was tortured after being captured by enemies of the Starks.");
	$(".answer2").attr("data-status", "false");
	$(".answer3").html("C: He was pushed off of the highest tower in Winterfell after witnessing a salacious act.");
	$(".answer3").attr("data-status", "true");
	$(".answer4").html("D: After suffering a light wound, his injury became infected and they were forced to amputate.");
	$(".answer4").attr("data-status", "false");
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

function question8() {
	$(".timer").html("Time Left: " + time);
	$(".questions").html("8: What was the name of the legendary figure who inspired the prophecy of the Prince That Was Promised?");
	$(".answer1").html("A: Azor Ahai");
	$(".answer1").attr("data-status", "true");
	$(".answer2").html("B: Joramun, King Beyond the Wall");
	$(".answer2").attr("data-status", "false");
	$(".answer3").html("C: Bran the Builder, First King in the North");
	$(".answer3").attr("data-status", "false");
	$(".answer4").html("D: Rhaego, the Stallion Who Mounts the World");
	$(".answer4").attr("data-status", "false");
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

function gameOver() {
	clearInterval(intervalId);
	$(".timer").html("");
	$(".questions").html("Game over!<br>Thanks for playing! Check your results below!");
	$(".answer1").html("Correct answers: " + correct);
	$(".answer1").attr("data-status", "none");
	$(".answer2").html("Incorrect answers: " + incorrect);
	$(".answer2").attr("data-status", "none");
	$(".answer3").html("Unaswered: " + unanswered);
	$(".answer3").attr("data-status", "none");
	$(".answer4").html("<h2>Start Over?</h2>");
	$(".answer4").attr("data-status", "startover");
}

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

function backgroundCycle () {
	
}