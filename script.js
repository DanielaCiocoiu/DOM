var input=document.getElementById("userinput");
var button=document.getElementById("enter");
var ul=document.querySelector("ul");
var listItems=document.getElementsByTagName("li"); 


function inputLength(){
	return input.value.length;
}

// To add a new element to the HTML DOM, you must create the element 
//(element node) first, and then append it to an existing element. 
function createListElement(){
var li=document.createElement("li");//This code creates a new <li> element
	li.appendChild(document.createTextNode(input.value));//To add text to the <li> element, you must create a text node first. This code creates a text node:
	ul.appendChild(li);//Then you must append the text node to the <li> element:
	input.value="";
//To remove an HTML element, you must know the parent of the element:
		var btn = document.createElement("button");
     	btn.appendChild(document.createTextNode("Delete!"));
 		li.appendChild(btn);//atasez butonul la elementul listei
 		btn.onclick = removeParent;
}

//aduc noul element in lista dupa ce am dat click
function addListAfterClick(){
    if (inputLength()>0){
    	createListElement();

    }
}

//aduc noul element in lista dupa keypress
function addListAfterKeypress(event){
	  if (inputLength()>0 && event.keyCode===13){
	  	createListElement();
	  }
}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);


ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

function listLength(){
	return listItems.length;
}

function deleteButton(){
	var btn=document.createElement("button");
btn.appendChild(document.createTextNode("Delete!"));
listItems[i].appendChild(btn);
btn.onclick=removeParent;
}

for( i=0;i<listLength();i++){

deleteButton();
}

function removeParent(evt){
	evt.target.parentNode.remove();
} 


var d = new Date();
document.getElementById("demo").innerHTML = d;

var titulo = document.querySelector("h1");

titulo.addEventListener("click", function(titulo) {
  titulo.target.classList.toggle("coolTitle");
});