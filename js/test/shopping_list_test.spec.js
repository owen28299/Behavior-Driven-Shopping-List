describe('ShoppingListItem', function(){

  var myList;

  beforeEach(function(){
    myList = new ShoppingListItem("cheese", "buy triple cream brie");
  });

  it("should be a function", function(){
    expect(ShoppingListItem).to.be.a('function');
  });

  it("should have a property named `name`", function(){
    myList.should.have.property('name');
  });

  it("should have a property named `description`", function(){
    myList.should.have.property('description');
  });

  it("should have a property named `is_done` defaulting to false", function(){
    myList.should.have.property('is_done');
    expect(myList.is_done).to.equal(false);
  });

  it("should accept `name` and `description` as arguments", function(){
    expect(myList.name).to.equal("cheese");
    expect(myList.description).to.equal("buy triple cream brie");

  });

  it('should have a method named check that will set the is_done property to true', function(){
    myList.should.have.property('check');
  });

});