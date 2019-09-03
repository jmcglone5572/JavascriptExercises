const ClickEvent = "click";

function addEventHandler(elementId, eventType, handlerFunction) {
    var element = document.getElementById(elementId);

    // implement cross-browser support (WC3 has addEventListener, Older Internet Explorer has attachEvent)...
    if (element.addEventListener) {
        element.addEventListener(eventType, handlerFunction, false);
    }
    else if (element.attachEvent) {
        element.attachEvent('on' + eventType, handlerFunction);
    }
}

function removeEventHandler(elementId, eventType, handlerFunction) {
    var element = document.getElementById(elementId);

    // implement cross-browser support (WC3 has removeEventListener, Older Internet Explorer has detachEvent)
    if (element.removeEventListener) {
        element.removeEventListener(eventType, handlerFunction, false);
    }
    else if (element.detatchEvent) {
        element.detachEvent('on' + eventType, handlerFunction);
    }
}

function appendText(e) {

    // cross-browser support to get 
    // the event(either from paramter passed to the handler, or from the window.event property)...
    if (!e) e = window.event;
    var element = (e.target) ? e.target : e.srcElement;
    document.getElementById("div1").innerHTML += element.id + "<br/>";
}

function removeOnClickA() {
    removeEventHandler("buttonA", ClickEvent, appendText);
}

function removeOnClickB() {
    removeEventHandler("buttonB", ClickEvent, appendText);
}

function reset() {
    addEventHandler("buttonA", ClickEvent, appendText);
    addEventHandler("buttonB", ClickEvent, appendText);
}

window.onload = function() {
    addEventHandler("button-a", ClickEvent, removeOnClickA);
    addEventHandler("button-b", ClickEvent, removeOnClickB);
    addEventHandler("reset", ClickEvent, reset);

    reset();
}