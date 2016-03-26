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
    var output = "<ul>" +
      "<li class=" + " \"completed_" + this.is_done + "\"" + ">" +
        "<span><b>" + this.name + "</b></span>" + "<br>" +
        "<span>" + this.description + "</span>" +
        "<input type=\"checkbox\" value=\"off\" class=\"checkbox\" data-index=\"" + index + "\">" +
        "<button class=\"delete\" data-index=\"" + index +"\">x</button>" +
      "</li>" +
      "</ul>";

      return output;
  };

}

