//if numbers are equals, don't print
var f_number = 0;
var s_number;
var str = "";

for (; f_number < 10; f_number++) {
    for(s_number = 1; s_number < 10; s_number++){
        if (f_number > s_number)
            continue;
        else if (f_number == 8 && s_number == 9)
            str += ("" + f_number + s_number)
        else if (f_number == s_number)
            continue;
        else
            str += ("" + f_number + s_number + ", ")
    }
    
}
console.log(str)
