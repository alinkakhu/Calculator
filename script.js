function insert(number){
    document.form.textview.value = document.form.textview.value + number
}
function clean(){
    document.form.textview.value = "";
}

function delet(){
var del = document.form.textview.value;
document.form.textview.value = del.substring(0, del.length-1);
}
function equal(){
    var del = document.form.textview.value;
    if(del){
        document.form.textview.value = eval(del)
    }
}