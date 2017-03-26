var Module = (function () {

  var privateMethod = function () {
    // private
  };

  var someMethod = function () {
    // public
    document.getElementById('demo').innerHTML = "someMethod";
  };

  var anotherMethod = function () {
    // public
    document.getElementById('demo').innerHTML = "anotherMethod";
  };
  
  return {
    someMethod: someMethod,
    anotherMethod: anotherMethod
  };

})();

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