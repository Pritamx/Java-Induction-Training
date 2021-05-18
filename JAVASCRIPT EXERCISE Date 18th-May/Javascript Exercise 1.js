function temp_conversion(celcius,cbfn){
    var f = (celcius*9/5)+32
    cbfn(f)
    return f
}

function display(x){
    console.log("Temperature in fahrenheit is "+x)
}

temp_conversion(32,display)