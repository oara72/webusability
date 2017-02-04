(function(){
	var commentButton = document.getElementById('submit_comment');
	commentButton.addEventListener('click', commentSubmit, false);
	commentButton.addEventListener('click', commentCounter, false);
	var textarea = document.getElementById('new_comment_text');
	textarea.addEventListener('input', charCounter, false);

	textarea.addEventListener('open', function(){
		document.body.className = 'dark';
	}, false);
	textarea.addEventListener('blur', function(){
		document.body.className = '';
	}, false);

	textarea.addEventListener('keydown', function(e){
		if(e.keyCode == 13) {
			e.preventDefault();
			commentSubmit();
			commentCounter();
		}
	}, false);
	
	function commentSubmit() {
		var comment = textarea.value;
		var commentDiv = document.getElementById('comments');
		if(comment) {
			var placeholder = document.querySelector('p.placeholder');
			if(placeholder) {
				placeholder.parentNode.removeChild(placeholder);
			}
			var newPara = document.createElement('p');
			commentDiv.appendChild(newPara);
			newPara.textContent = comment;
			textarea.value = '';
			charCounter();
		}
	}
	function commentCounter() {
		var commentCount = document.getElementById('comment_count');
		var count = commentCount.textContent;
		count++;
		commentCount.textContent = count;
	}
	
	function charCounter() {
		var characterCount = document.getElementById('character_count');
		characterCount.textContent = textarea.value.length;
	}

}());
