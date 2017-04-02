var Module = (function () {

  var privateMethod = function () {
    // private
    document.getElementById('demo').innerHTML = "This is a private method";
  };

  var someMethod = function () {
    // public
    document.getElementById('demo').innerHTML = "someMethod";
  };

  var anotherMethod = function () {
    // public
    document.getElementById('demo').innerHTML = "anotherMethod";
    //Call private method
    privateMethod();
  };
  
  return {
    someMethod: someMethod,
    anotherMethod: anotherMethod
  };

})();

//Add another method to Module; note this method cannot access private method of Module
Module.thirdMethod = function () {
	// public
    //document.getElementById('demo').innerHTML = "thirdMethod";
    console.log(Module);
    var Person = function(){}
    var x = Person;
    var y = new Person();
    console.log(typeof(Person)); //return "function"
    console.log(typeof(x)); //return "function"
    console.log(typeof(y)); //return "object"
    console.log(y instanceof Person); //return "true"
    //document.write(Module.anotherMethod());
    Module.anotherMethod();
}