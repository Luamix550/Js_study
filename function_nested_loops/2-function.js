const print_alphabet_x10 = () =>{
    var i;
    var n = 0;
    var str = ""

    for(i = 97; i < 122 ;i++)
    str += String.fromCharCode(i)
        console.log(str)
    for(; n < 10;n++)
        console.log(str)
}
print_alphabet_x10()