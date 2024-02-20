var i;
var str = ""
for(i = 97; i <= 122 ;i++){
    if (i != 101 && i != 113)
        str += String.fromCharCode(i)
}
console.log(str)