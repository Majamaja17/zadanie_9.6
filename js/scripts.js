var list = document.getElementById("list");
var add = document.getElementById("addElem");
var item = 0;

add.addEventListener("click", function() {
	var element = document.createElement("li");
	var itemsByTagName = document.getElementsByTagName("list");

	console.log(list.length);
	var addNumber = list.length;
	var newElem = document.createElement("li");
	item += 1;
	newElem.innerHTML = ("item" + item);

	list.appendChild(newElem);
});
