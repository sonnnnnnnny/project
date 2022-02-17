//function that display value
function dis(val)
{
    document.getElementById("result").value+=val
}

//function that evaluates the digit and return result
function solve()
{
    let z = document.getElementById("result").value
    let w = eval(z)
    document.getElementById("result").value = w
}

//function that clear the display
function clr()
{
    document.getElementById("result").value = ""
}
//exponential symbol ^=**
//sqrt 
//x
let x = parseFloat(document.getElementsById("x"));
//y
let y = parseFloat(document.getElementsById("y"));