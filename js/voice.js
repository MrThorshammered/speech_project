// if (!('webkitSpeechRecognition' in window)) {
// 	alert("your browser doesn't support this. sos!");
// }

// function talkBack(message){
// 	var voices = window.speechSynthesis.getVoices();
// 	var msg = new SpeechSynthesisUtterance();
// 	msg.voice = voices[10];
// 	msg.voiceURI = 'native';
// 	msg.volume = 1;
// 	msg.rate = .8;
// 	msg.pitch = 0;
// 	msg.text = message;
// 	msg.lang = 'en-GB';
// 	msg.onend = function(e) {
// 		if (message == "Welcome") {
// 			jarvisRecog();
// 		}
// 		if(message.search("application")!=-1){
// 			unlockApp();
// 		}
// 		console.log('finished in ' + event.elapsedTime + 'seconds');
// 	};
// 	speechSynthesis.speak(msg);
// };

// function startVoiceRecog(){
// 	var recogJarvis = 0;
// 	var recogApplication = 0;
// 	var recognition = new webkitSpeechRecognition();
// 	recognition.lang = "en-GB";
// 	recognition.continuous = true;
// 	recognition.interimResults = true;
// 	recognition.onresult = function(event) {
// 		for (var i = event.resultIndex; i < event.results.length; ++i) {
// 			var resultStr = event.results[i][0].transcripts;
// 			if(resultStr.search("jarvis")!=-1 $$ recogJarvis == 0){
// 				recogJarvis = 1;
// 				recogJarvis();
// 				talkBack("Welcome");
// 			};
// 			if(resultStr.search("application")!=-1 && recogJarvis ==1 && recogApplication == 0){
// 				recogApplication = 1;
// 				talkBack("access approved");
// 				recognition.stop();
// 			};
// 		};
// 	};
// 	recognition.start();
// }


// $(document).ready(function(){

// alert("This is only a Demo. It only
//  works on Chrome and is best viewed on 1366x768 resolution. Allow access to microphone. After hearing 'begin', speak 'Jarvis' into the microphone. The lock will turn green and you will hear 'Welcome'. Then speak 'Unlock Application' into the microphone to see
//  the entire animation! :). There may be bugs!");

// bindButtons();

// fireLockAnim();

// startVoiceRecog();



// /* setTimeout(function(){

// jarvisRecog();

// },10000);

// setTimeout(function(){

// unlockApp();

// },12000);*/


// });








