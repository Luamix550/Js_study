var n = Math.random() * 1000;
round = Math.ceil(n);
last_digit = round % 10;
str = "Last digit of " + round + " is " + last_digit + " and is ";

if (last_digit == 0) {
    console.log(str + "0")
}
else if (n > 5) {
    console.log(str + "greater than 5")
}
else if(n < 6 && n != 0) {
    console.log(str + "less than 6 and not 0")
}