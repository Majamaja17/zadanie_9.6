window.onload = function() {

	var withButtonItems = document.getElementsByClassName('button');
	console.log(withButtonItems);

	//Tab
	//const tab = [withButtonItems];
	//var stringWithTab = tab.toString();
	//console.log(stringWithTab);

	//Lenght
	var ButtonItemsLength = withButtonItems.length;
	console.log(ButtonItemsLength);

	for (var j = 0; j < ButtonItemsLength; j++) {

		var lastButton = document.getElementById('last_button'); //new var 
		var newParagraph = document.createElement('p');

		newParagraph.innerText = withButtonItems;

		lastButton.appendChild(newParagraph);
		console.log(withButtonItems); 
	}
}

