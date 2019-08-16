
function sayHello() {
    alert("Hello");
}

function displayCube() {
    var isOk = confirm("Do you want to continue?");
    if (isOk === false)
       { return }

    var x = prompt("Enter a value", 0)

    if (x === null) 
       { return;}

    alert(x + " cubed = " + x * x * x);
    
}

function cube(x)
{
    return x * x * x;
}

function times(x, y) {
    alert(x + " times " + y + " = " + x * y);
}

function buttonReport(buttonId, buttonName, buttonValue) {
    var userMessage1 = "Button Id: " + buttonId + "\n";
    var userMessage2 = "Button Name: " + buttonName + "\n";
    var userMessage3 = "Button Value: " + buttonValue + "\n";
    alert(userMessage1 + userMessage2 + userMessage3);
}

function accessDiv1Element() {
    var div1Element = document.getElementById("div1");
    div1Element.innerHTML = "Updated Content.";
}

function checkBrowserHistory() {
    alert("You've visited " + history.length + " web pages in this browser session.");
}