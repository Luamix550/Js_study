const change = (name) =>{
    let Mayus = name.toUpperCase();
    let Minus = name.toLowerCase();
    name = Mayus == name ? Minus: Mayus
    console.log(name)
}
change("LUIS")