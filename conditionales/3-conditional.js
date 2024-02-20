let i;
let j;
var str = ""


for(j = 97; j <= 122;j++){
    str += String.fromCharCode(j)
}
for (i = 65; i <= 90; i++){
    str += String.fromCharCode(i)
}
console.log(str)