var counter = 0;

function moreFields() {
	counter++;
	var newFields = document.getElementById('PersonalInfo').cloneNode(true);
	newFields.id = 'PersonalInfo';
	newFields.style.display = 'block';
	var newField = newFields.childNodes;
	for (var i=0;i<newField.length;i++) {
		var theName = newField[i].name
		if (theName)
			newField[i].name = theName + counter;
	}
	var insertHere = document.getElementById('newPerson');
	insertHere.parentNode.insertBefore(newFields,insertHere);
}