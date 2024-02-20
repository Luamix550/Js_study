const _islower = (letter) =>{
    
    if(letter > String.fromCharCode(97) && letter < String.fromCharCode(122))
    {
        console.log("is lower")
    }
    else if (letter > String.fromCharCode(65) && letter < String.fromCharCode(90))
    {
        console.log("is uppercase")
    }
    else
        console.log("error")
}
_islower('d')