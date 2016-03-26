function ShoppingList(){
  this.items = [];

  this.addItem = function(item){
    if(!(item instanceof ShoppingListItem)){
      throw new Error("Not an Object from Shopping List Items");
    }
    this.items.push(item);
  };

  this.removeItem = function(item){
    var index = this.items.indexOf(item);

    if(index !== -1){
      this.items.splice(index,1);
    }

  };

  this.render = function(){
    var renderedList = this.items.map(function(element, index){
      return element.render(index);
    });

    return renderedList.join('');
  };

}

