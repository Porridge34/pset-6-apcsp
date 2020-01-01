var myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  var removeButton = document.createElement("BUTTON");
  removeButton.className = "remove";
  removeButton.innerHTML = "remove";
  myNodelist.appendChild(removeButton);
  var span2 = document.createElement("SPAN");
  var exclamation2 = document.createTextNode("!");
  span2.id = "exclamation";
  span2.appendChild(exclamation2);
  myNodelist.appendChild(span2);
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  console.log("this is running");
  if (ev.target.tagName === 'LI'){
    ev.target.classList.toggle('checked');
  }
}, false);

list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.id == "exclamation") {
    console.log(ev.target.id);
    ev.target.classList.toggle('priority');
    console.log(ev.target.className);
    if (ev.target.className == 'priority'){
      document.getElementById("unorderList").prepend(ev.target.parentElement);
      console.log("EEEE");
    }else{
      document.getElementById("unorderList").append(ev.target.parentElement);
      console.log("FFFFF");
    }
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("unorderList").appendChild(li);
  }
  document.getElementById("input").value = "";
//removal button
  var remove = document.createElement("BUTTON");
  remove.innerHTML = "remove";
  remove.className = "remove";
  li.appendChild(remove);
 //exclamation
  var span = document.createElement("SPAN");
  var exclamation = document.createTextNode("!");
  span.id = "exclamation";
  span.appendChild(exclamation);
  li.appendChild(span);

  var close = document.getElementsByClassName("remove");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
    }
  }

}
