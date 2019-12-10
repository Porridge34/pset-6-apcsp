window.onload = function() {
    document.getElementById("add-item").onclick = addItem;
    document.getElementById("remove-item").onclick = removeItem;
}
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
        (priority == "yes" || priority == "no")? runCheckPriority = true : runCheckPriority = false;
      }
      run = false;
      let itemToAdd = {
        item: "task",
        priority: "priority",
        complete: false
      }
      alert(itemToAdd[prop]);
      (itemToAdd.priority == "yes")? theList.unshift(itemToAdd) : alert("it worked");
      alert(theList[0]);
    }
  }
};

const removeItem = function() {

};
