function suma(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    x = parseFloat(num1);
    y = parseFloat(num2);

    z = x+y;

    document.getElementById("demo").innerHTML=z;
    console.log(z);
}