var f_num;
var s_num;
var t_num;

var str = "";

for (f_num = 0; f_num < 10; f_num++) {
    for (s_num = 1; s_num < 10; s_num++) {
        for (t_num = 2; t_num < 10; t_num++) {
            if (f_num > s_num || s_num > t_num)
                continue;

            else if (f_num == s_num || s_num == t_num)
                continue;

            else if (f_num == 7 && s_num == 8 && t_num == 9)
                str += "" + f_num + s_num + t_num

            else
                str += "" + f_num + s_num + t_num + ", "
        }
    }
}
console.log(str)