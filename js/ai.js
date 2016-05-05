console.log('yo yo yo')

var speakText;

	// options for voice recognition
	document.getElementById('button').addEventListener('click',
	function(){
		console.log('click');
		
	var recognition = new webkitSpeechRecognition();
		recognition.continuous = true;
		recognition.interimResults = true;
		recognition.onresult = function(event) { 
			speakText = event.results[0][0].transcript
  		console.log(event.results[0][0].transcript);
  		document.getElementById('inText').innerHTML(speakText)
		};
		recognition.start();
});



//takes input from input
//@param textField HTML Where input is being taken from
function takeInput(e) {
	//e.which == 13 -> ENTER
 if(e.which != 13){
	return false
}
	var question = this.value;
	appendOutput("<p class='us'><b>User &raquo;</b>" + question + "</p>", out);
	appendOutput("<p class='hal'><b>Bot &raquo;</b>" + processInput(question) + "</p>", out);
	appendOutput("<hr/>", out);
	talkBack(answer)
	

	this.focus();
	this.select();

	// out.scrollTop(+100);
};

var answer = "I'm sorry Dave, I'm afraid I can't do that";

//process input
function processInput(question) {
	

	//first options is lots of conditionals
	// that's not very efficient
	// second option is to use a dictionary
	if(dictionary[question.toUpperCase()]){
		var randKey = parseInt(Math.random() * dictionary[question.toUpperCase()].length);
		answer = dictionary[question.toUpperCase()][randKey];
		console.log(randKey)
	}
	return answer;
}


	// voice options for the robot to talk
	function talkBack(message){
	var voices = window.speechSynthesis.getVoices();
	var msg = new SpeechSynthesisUtterance();
	msg.voiceURI = 'Google UK English Male';
	msg.volume = 1;
	msg.rate = .8;
	msg.pitch = .1;
	msg.text = message;
	msg.lang = 'en-GB';
	msg.onend = function(e) {
		if (message == "Welcome") {
			jarvisRecog();
		}
		if(message.search("application")!=-1){
			unlockApp();
		}
		console.log('finished in ' + event.elapsedTime + 'seconds');
	};
	speechSynthesis.speak(msg);
};

//displays output
//@param message string Message to be displayed
//@param dest HTML Element where message is to be displayed
function appendOutput(message, dest) {
	dest.innerHTML += message;

};


//init code
var input = document.getElementById("inText");
input.onkeyup = takeInput;


var out = document.getElementById("dialog");

$(document).ready(function(){
	// startVoiceRecog();
	input.focus();
	input.select();
})

