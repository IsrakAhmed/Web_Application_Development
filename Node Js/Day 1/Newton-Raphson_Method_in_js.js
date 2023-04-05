function f(x){
    return x*x*x - 2*x -5;
}
function df(x){
    return 3*x*x - 2;
}

console.log("The value of a is 2 and b is 3\n");

var a = 2;
var b = 3;

var f_a = f(a);
var f_b = f(b);

if(f_a * f_b > 0){
    console.log("\n\nThe value of a or b is not valid\n");
}
else{
    var xn = a;
    var f_xn = f(xn);
    var df_xn = df(xn);
    var xn1 = xn - (f_xn / df_xn);

    while(Math.abs(f(xn)) > 0.001){
        xn = xn1;
        f_xn = f(xn);
        df_xn = df(xn);
        xn1 = xn - (f_xn / df_xn);
    }
    console.log("The root is " + xn1.toPrecision(3));
}