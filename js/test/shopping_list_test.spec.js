describe('ShoppingListItem', function(){

  var myListItem;

  beforeEach(function(){
    myListItem = new ShoppingListItem("cheese", "buy triple cream brie");
  });

  it("should be a function", function(){
    expect(ShoppingListItem).to.be.a('function');
    expect(myListItem).to.be.an('object');
  });

  it("should have a property named `name`", function(){
    myListItem.should.have.property('name');
  });

  it("should have a property named `description`", function(){
    myListItem.should.have.property('description');
  });

  it("should have a property named `is_done` defaulting to false", function(){
    myListItem.should.have.property('is_done');
    expect(myListItem.is_done).to.equal(false);
  });

  it("should accept `name` and `description` as arguments", function(){
    expect(myListItem.name).to.equal("cheese");
    expect(myListItem.description).to.equal("buy triple cream brie");

  });

  describe("check", function(){

    it('should exist and be a function', function(){
      myListItem.should.have.property('check');
      expect(myListItem.check).to.be.a("function");
    });

    it('should set is_done to true when invoked', function(){
      myListItem.check();
      expect(myListItem.is_done).to.be.true;
    });

  });

  describe("uncheck", function(){

    it('should exist and be a function', function(){
      myListItem.should.have.property('uncheck');
      expect(myListItem.uncheck).to.be.a("function");
    });

    it('should set is_done to true when invoked', function(){
      myListItem.check();
      myListItem.uncheck();
      expect(myListItem.is_done).to.be.false;
    });

  });


  describe("render", function(){

    it('should exist and be a function', function(){
      myListItem.should.have.property('render');
      expect(myListItem.render).to.be.a("function");
    });

    it('should return a string', function(){
      expect(myListItem.render()).to.be.a('string');
      expect(myListItem.render()).to.equal('<ul><li class= "completed_false"><span><b>cheese</b></span><br><span>buy triple cream brie</span><input type="checkbox" value="off" class="checkbox" id="undefined"></li></ul>');
    });

  });


});

describe("Shopping List", function(){

  var myList;
  var newItem;

  beforeEach(function(){
    myList = new ShoppingList();
    newItem = new ShoppingListItem("chocolate", "2 Lindt Bunnies");
    newItem2 = new ShoppingListItem("banana", "Ripe yellow ones");
    newItem3 = new ShoppingListItem("milk", "coconut almond milk");
  });

  it("should be a function", function(){
    expect(ShoppingList).to.be.a('function');
    expect(myList).to.be.an('object');
  });

  it("should have a property named items set to an empty array", function(){
    expect(myList.items).to.exist;
    expect(myList.items).to.be.an('array');
    expect(myList).to.have.property('items')
      .that.is.an('array')
      .with.length.of(0);
  });

  describe("addItem", function(){

    it("should exist and be a function", function(){
      myList.should.have.property('addItem');
      expect(myList.addItem).to.be.a("function");
    });

    it("should add items to the items array", function(){

      myList.addItem(newItem);

      expect(myList.items).to.have.length.of(1);
      expect(myList.items[0]).to.equal(newItem);
    });

    it("should only be able to add instances of the ShoppingListItem object", function(){
      expect(myList.addItem.bind(myList, "frog")).to.throw(Error);
      expect(myList.addItem.bind(myList, {"hello" : "world"})).to.throw(Error);
      expect(myList.addItem.bind(myList, true)).to.throw(Error);
    });


  });

  describe("removeItem", function(){

    it('should exist and be a function', function(){
      myList.should.have.property('removeItem');
      expect(myList.removeItem).to.be.a("function");
    });

    it('should remove items from the items that exist in array', function(){
      myList.addItem(newItem);
      myList.addItem(newItem2);
      myList.addItem(newItem3);

      myList.removeItem(newItem2);

      expect(myList.items).to.have.length.of(2);
      expect(myList.items[0]).to.equal(newItem);
      expect(myList.items[1]).to.equal(newItem3);

    });

    it('should do nothing if item not found in items array', function(){
      myList.addItem(newItem);
      myList.addItem(newItem2);
      myList.addItem(newItem3);

      myList.removeItem("frogs");

      expect(myList.items).to.have.length.of(3);
      expect(myList.items[0]).to.deep.equal(newItem);
      expect(myList.items[1]).to.deep.equal(newItem2);
      expect(myList.items[2]).to.deep.equal(newItem3);

      newItem4 = new ShoppingListItem("ice cream", "magnus");
      myList.removeItem(newItem4);

      expect(myList.items).to.have.length.of(3);
      expect(myList.items[0]).to.deep.equal(newItem);
      expect(myList.items[1]).to.deep.equal(newItem2);
      expect(myList.items[2]).to.deep.equal(newItem3);

      myList.removeItem(newItem2);

      expect(myList.items).to.have.length.of(2);
      expect(myList.items[0]).to.equal(newItem);
      expect(myList.items[1]).to.equal(newItem3);

      myList.removeItem(newItem2);

      expect(myList.items).to.have.length.of(2);
      expect(myList.items[0]).to.equal(newItem);
      expect(myList.items[1]).to.equal(newItem3);

    });

  });

  describe("render", function(){
    it('should exist and be a function', function(){
      myList.should.have.property('render');
      expect(myList.render).to.be.a("function");
    });

    it('should return a string', function(){
      myList.addItem(newItem);
      myList.addItem(newItem2);
      myList.addItem(newItem3);

      expect(myList.render()).to.equal('<ul><li class= "completed_false"><span><b>chocolate</b></span><br><span>2 Lindt Bunnies</span><input type="checkbox" value="off" class="checkbox" id="0"></li></ul><ul><li class= "completed_false"><span><b>banana</b></span><br><span>Ripe yellow ones</span><input type="checkbox" value="off" class="checkbox" id="1"></li></ul><ul><li class= "completed_false"><span><b>milk</b></span><br><span>coconut almond milk</span><input type="checkbox" value="off" class="checkbox" id="2"></li></ul>');
    });


  });

});