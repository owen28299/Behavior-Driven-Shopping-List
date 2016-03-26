function add_to_shopping_list(){

  var title = document.getElementById('title').value;
  var description = document.getElementById('description').value;
  var newListItem = new ShoppingListItem(title, description);

  return newListItem;
}

function clearInputs(){
  document.getElementById('description').value = "";
  document.getElementById('title').value = "";
}

function changeCheckedStatus(idx, checkbox){
  if(checkbox.value === "off"){
    checkbox.value = "on";
    myList.items[idx].check();
  }
  else{
   checkbox.value = "off";
   myList.items[idx].uncheck();
  }

}

function removeItemButtonClicked(idx){
  myList.removeItem(myList.items[idx]);
  render();
  addEventListeners();
}

function render(){
  var listItems = myList.render();
  document.getElementById('content').innerHTML = listItems;
  clearInputs();
}

document.getElementById('add_shopping_list_item_button').addEventListener('click', function(){

  var newItem = add_to_shopping_list();
  myList.addItem(newItem);

  render();

  addEventListeners();

});

function addEventListeners(){
  var checkboxes = document.querySelectorAll(".checkbox");

  Array.prototype.forEach.call(checkboxes, function(element){

    element.addEventListener("click", function(event){
      var idx = event.target.dataset.index;
      var checkbox = event.target;

      changeCheckedStatus(idx, checkbox);
    });
  });

  var deleteItem = document.querySelectorAll(".delete");

  Array.prototype.forEach.call(deleteItem, function(element){

    element.addEventListener("click", function(event){
      var idx = event.target.dataset.index;
      console.log('idx', idx);
      removeItemButtonClicked(idx);
    });
  });
}



var myList = new ShoppingList();



