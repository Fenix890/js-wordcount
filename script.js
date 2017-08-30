/* OLD WAY
var print = function(msg) {
    document.getElementById("output").innerHTML = "Length is " + msg;
}

document.getElementById("btn").onclick = function(event) {
    print(document.getElementById('str').value.length);
}
*/

//Improved code
document.getElementById("btn").onclick = function(event) {
    var value = document.getElementById('str').value.length;
    document.getElementById("output").innerHTML = "Length is " + value;
}