var div = document.querySelector("#print-table");
function printTable() {
    var num = +tableNumber.value
    for (var i=1; i <= 10; i++){
        console.log( num + " * " + i + "=" + num * 1);
        div.innerHTML="<p> </P>"
    }

}