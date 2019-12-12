window.onload = function() {
    document.getElementById("add-item").onclick = addItem;
    document.getElementById("remove-item").onclick = removeItem;
}

const printObject = function(objectHere) {
  for (prop in objectHere){
    console.log(objectHere[prop]);
  }
};

let theList = [];
const addItem = function() {
  let run = true;
  let task = "";
  while (run == true){
    task = prompt("Enter a task: ");
    if (task == null){
      run = false;
    }else {
      let priority = "";
      let runCheckPriority = false;
      while (runCheckPriority == false){
        priority = prompt("Is this high priority? Type yes or no.");
        priority = priority.toLowerCase();
        (priority == "yes" || priority == "no" || priority == null)? runCheckPriority = true : runCheckPriority = false;
      }
      run = false;
      let itemToAdd = Object.create({
        "item": task,
        "priority": priority,
        "complete": false
      });
      var editButton = document.createElement("BUTTON");
      editButton.innerHTML = "click to edit";
      editButton.id = "edit-button";
      document.body.appendChild(editButton);
      printObject(itemToAdd);
      (priority == "yes")? theList.unshift(itemToAdd) : theList.push(itemToAdd);
    }
  }
};

const removeItem = function() {
  printObject(theList[0]);
  let itemToRemove = "";
  let run = true;
  let storeSplice = [];
  while (run == true){
    itemToRemove = prompt("Enter the number of the item to be removed.");
    if (itemToRemove == null){
      run = false;
    }else if (itemToRemove <= 0 || isNaN(itemToRemove) || itemToRemove > theList.length){
      alert("Invalid response, try again."); //this was coded by ivy ng pls dont steal the code
    }else{
      document.body.firstChild.remove();
      storeSplice = theList.splice(itemToRemove-1, 1);
      run = false;
    }
  }
};

const markAsDone = function() {

}
