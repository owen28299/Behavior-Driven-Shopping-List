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
        "<div class=\"checkboxdiv\"><input type=\"checkbox\" value=\"off\" class=\"checkbox\" data-index=\"" + index + "\">" + "</div>" +
        "<div class=\"list-text\">" +
        "<h3 class=\"list-name\">" + this.name + "</h3>" +
        "<p class=\"list-description\">" + this.description + "</p>" +
        "</div>" +
        "<div class=\"deletediv\"><input type=image src=\"../img/trash.svg\" class=\"delete\" data-index=\"" + index +"\">" + "</div>" +
      "</li>";

      return output;
  };

}

