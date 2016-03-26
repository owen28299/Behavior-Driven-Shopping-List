function ShoppingListItem(name, description){
  this.name = name;
  this.description = description;
  this.is_done = false;

  this.check = function(){
    this.is_done = true;
  };

  this.uncheck = function(){
    this.is_done = false;
  };

  this.render = function(index){
    var output =
      "<li class=" + " \"completed_" + this.is_done + "\"" + ">" +
        "<h3 class=\"list-name\">" + this.name + "</h3>" +
        "<div class=\"checkboxdiv\"><input type=\"checkbox\" value=\"off\" class=\"checkbox\" data-index=\"" + index + "\">" + "</div>" +
        "<p class=\"list-description\">" + this.description + "</p>" +
        "<div class=\"deletediv\"><button class=\"delete\" data-index=\"" + index +"\">x</button>" + "</div>" +
      "</li>";

      return output;
  };

}

