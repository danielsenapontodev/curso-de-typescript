class Gretter {
    constructor(public greeting: string) { }

    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
}

var greeter = new Gretter("Hello World");
var str = greeter.greet();
document.body.innerHTML = str;