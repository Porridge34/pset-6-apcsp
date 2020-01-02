//adds element to list
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

  li.addEventListener('click', function(ev) {
    if (ev.target.id == "exclamation") {
      ev.target.classList.toggle('priority');
      if (ev.target.className == 'priority'){
        document.getElementById("unorderList").prepend(ev.target.parentElement);
      }else{
        document.getElementById("unorderList").append(ev.target.parentElement);
      }
    }
  }, false);

  li.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI'){
      ev.target.classList.toggle('checked');//breathe if dumb
    }
  }, false);

}
