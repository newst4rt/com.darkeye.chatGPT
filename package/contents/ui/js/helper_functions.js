document.userScripts={saveData:{},config:{}};


document.userScripts.getMainInput = function() {
		return document.querySelector('textarea.m-0');
}

document.userScripts.getSendButton = function() {
		return document.querySelector('textarea.m-0 + button.p-1');
}


document.userScripts.setInputFocus = function () {
	let inputElement = document.userScripts.getMainInput();
	if(inputElement) {
		inputElement.focus();
	}
	console.log('setInputFocus');
}


function loadCSS() {
   var styles = 'button { background-color: #212121; }';
   var styleSheet = document.createElement("style");
   styleSheet.innerText = styles;
   document.head.appendChild(styleSheet);
	console.log('loadCSS');
}


                

document.userScripts.setSendOnEnter = function () {
	let inputElement =  document.userScripts.getMainInput();
	if(inputElement && !document.userScripts.saveData.oldOnPress) {
		document.userScripts.saveData.oldOnPress = inputElement.onkeypress;
		inputElement.onkeypress = function(e) {
			if(	e.keyCode == 13  && 
				!e.shiftKey && !e.ctrlKey && 
				document.userScripts.config.sendOnEnter) {
                     document.querySelector('[data-testid=send-button]').click();
					return false;
			}
		}
	}
	console.log('setSendOnEnter');
}

document.userScripts.setTheme = function (theme) {
	if( document.userScripts.config && document.userScripts.config.matchTheme && theme ) {
		localStorage.setItem('theme', theme);
		console.log('setTheme');
	}
}

document.userScripts.getTheme = function () {	
	return localStorage.getItem('theme');
}

document.userScripts.removeSendOnEnter = function () {
	let inputElement =  document.userScripts.getMainInput();
	if(inputElement) {
		inputElement.onkeypress = document.userScripts.saveData.oldOnPress;
		document.userScripts.saveData.oldOnPress = null;
	}
	console.log('removeSendOnEnter');
}

document.userScripts.setConfig = function (configuration) {
	document.userScripts.config = configuration;
	console.log('setConfig : ' + JSON.stringify(configuration));
}

console.log('Helper Functions loaded');
