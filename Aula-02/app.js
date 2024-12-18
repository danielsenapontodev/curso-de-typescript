var Gretter = /** @class */ (function () {
    function Gretter(greeting) {
        this.greeting = greeting;
    }
    Gretter.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Gretter;
}());
var greeter = new Gretter("Hello World");
var str = greeter.greet();
document.body.innerHTML = str;
