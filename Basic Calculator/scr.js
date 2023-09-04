function add(){
    out=Number(document.forms["cal"]["num1"].value)+Number(document.forms["cal"]["num2"].value)
    document.getElementById("out").innerHTML=out
}
function sub(){
    out=Number(document.forms["cal"]["num1"].value)-Number(document.forms["cal"]["num2"].value)
    document.getElementById("out").innerHTML=out
}
function mul(){
    out=Number(document.forms["cal"]["num1"].value)*Number(document.forms["cal"]["num2"].value)
    document.getElementById("out").innerHTML=out
}
function div(){
    out=Number(document.forms["cal"]["num1"].value)/Number(document.forms["cal"]["num2"].value)
    out=out.toFixed(2)
    document.getElementById("out").innerHTML=out
}