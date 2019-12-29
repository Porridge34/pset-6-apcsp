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
  span.className = "exclamation";
  span.appendChild(exclamation);
  li.appendChild(span);

  var close = document.getElementsByClassName("remove");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.className === 'exclamation') {
      console.log("DDD");
      ev.target.parentElement.classList.toggle('priority');
      ev.target.classList.toggle('priority');
      if (ev.target.class == 'priority exclamation' || ev.target.class == 'exclamation priority'){
        document.getElementByType("ul").prepend(ev.target);
        console.log("EEEE");
      }
    }
  }, false);
}
