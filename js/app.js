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
      if (priority != null){
        let itemToAdd = Object.create({
          "item": task,
          "priority": priority,
          "complete": false
        });
        (priority == "yes")? theList.unshift(itemToAdd) : theList.push(itemToAdd);
        //adding the edit button
        let editButton = document.createElement("BUTTON");
        editButton.innerHTML = "click to edit";
        function checkIndex(item){
          item == itemToAdd;
        }
        editButton.id = theList.findIndex(checkIndex);
        document.getElementById("items-in-list").appendChild(editButton);
        printObject(itemToAdd); //debug
        //adding the exclamation mark
        if (priority == "yes"){
          let exclamation = document.createElement("IMG");
          exclamation.src = "images\\exclamation.jpg";
          exclamation.id = theList.findIndex(checkIndex);
          document.getElementById("items-in-list").appendChild(exclamation);
        }
        //adding the text
        let theTask = document.createElement("p");
        theTask.innerHTML = task;
        theTask.id = theList.findIndex(checkIndex);
        document.getElementById("items-in-list").appendChild(theTask);
        document.getElementById("items-in-list").style.pageBreakAfter = "always";
      }
      run = false;
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
