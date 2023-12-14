x=Math.PI;
console.log(x);

x=Math.abs(-8);
console.log(x);

x=Math.log(2);
console.log(x);

x=Math.round(8.7);
console.log(x);

x=Math.sqrt(25);
console.log(x);

x=Math.trunc(12.4);
console.log(x);

var detyra = setInterval(test, 1000);
var count = 0

function test(){
    console.log(count);
    count++;
    if(count == 10)
    clearInterval(detyra)
}
