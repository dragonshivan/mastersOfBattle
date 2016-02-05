ObjectUtilsTestCase = TestCase("ObjectUtilsTestCase");

ObjectUtilsTestCase.prototype.testCloneFields = function() {
	function MyObject(stringField, intField, floatField) {
		this.stringField = stringField;
		this.intField = intField;
		this.floatField = floatField;
	}
	
	var myObject = new MyObject("s1", 3, 3.23);
	assertEquals("s1", myObject.stringField);
	assertEquals(3, myObject.intField);
	assertEquals(3.23, myObject.floatField);
	
	var objectUtils = new GAME_LOOP.ObjectUtils();
	
	var clone = objectUtils.cloneFields(myObject);
	assertEquals("s1", clone.stringField);
	assertEquals(3, clone.intField);
	assertEquals(3.23, clone.floatField);
	
	myObject.stringField = "s2";
	assertEquals("s2", myObject.stringField);
	assertEquals("s1", clone.stringField);
	
	clone.stringField = "cs2";
	assertEquals("s2", myObject.stringField);
	assertEquals("cs2", clone.stringField);
	
	assertEquals(typeof clone, typeof myObject);
	assertEquals(clone.constructor.name, myObject.constructor.name);
};

ObjectUtilsTestCase.prototype.testUpdateNonEmptyFields = function() {
	function MyObject(stringField, intField, floatField) {
		this.stringField = stringField;
		this.intField = intField;
		this.floatField = floatField;
	}
	
	var target = new MyObject("s1", 3, 3.23);
	assertEquals("s1", target.stringField);
	assertEquals(3, target.intField);
	assertEquals(3.23, target.floatField);
	
	var objectUtils = new GAME_LOOP.ObjectUtils();
	
	var source = new MyObject("s2", null);
	
	objectUtils.updateNonEmptyFields(source, target);
	
	assertEquals("s2", target.stringField);
	assertEquals(3, target.intField);
	assertEquals(3.23, target.floatField);
	
};