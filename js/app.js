window.onload = function() {
    document.getElementById("add-item").onclick = addItem;
    document.getElementById("remove-item").onclick = removeItem;
}
let theList = [];
const addItem = function() {
  alert("this is running");
  while (run == true){
    let task = prompt("Enter a task: ");
    if (task == null){
      run = false;
    }else {
      do {
        let priority = "";
        let runCheckPriority = false;
      } while (runCheckPriority == false){
        priority = prompt("Is this high priority? Type yes or no.");
        priority = priority.toLowerCase();
        (priority == "yes" || priority == "no")? runCheckPriority = true : runCheckPriority = false;
      }
      run = false;
      let itemToAdd = {
        item: task,
        priority: priority,
        complete: false
      }
      (itemToAdd.priority == "yes")? theList.unshift(itemToAdd) : theList.push(itemToAdd);
      alert(theList);
    }
  }
};

const removeItem = function() {

};
