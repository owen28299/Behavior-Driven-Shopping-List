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

document.getElementById('add_shopping_list_item_button').addEventListener('click', function(){

  var newItem = add_to_shopping_list();
  myList.addItem(newItem);

  var listItems = myList.render();

  document.getElementById('content').innerHTML = listItems;

  clearInputs();

});

var myList = new ShoppingList();

