var list = document.getElementById("list");
var add = document.getElementById("addElem");

addElem.addEventListener(addElem, function(e) {});

add.addEventListener("click", function() {
	var element = document.createElement("li");
	element.innerHTML = "item";
	var itemsByTagName = document.getElementsByTagName("list");

	console.log(list.length);
	var addNumber = list.length;
	var newElem = document.createElement("li");
	
	newElem.innerHTML = addNumber;

	list.appendChild(newElem);
});
