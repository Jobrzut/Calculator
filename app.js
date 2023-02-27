var textadd = document.getElementById('textadd')
var textsub = document.getElementById('textsub')
var textmul = document.getElementById('textmul')
var textdiv = document.getElementById('textdiv')


function calcbutton() {
    adding()
    subtracting()
    multiplying()
    dividing()
}

function adding() {
    var addone = parseInt(document.getElementById('addone').value)
    var addtwo = parseInt(document.getElementById('addtwo').value)

    var gross = addone + addtwo
    textadd.innerText = gross
}

function subtracting() {
    var subone = parseInt(document.getElementById('subone').value)
    var subtwo = parseInt(document.getElementById('subtwo').value)
    
    var sub = subone - subtwo
    textsub.innerText = sub
}

function multiplying() {
    var mulone = parseInt(document.getElementById('mulone').value)
    var multwo = parseInt(document.getElementById('multwo').value)
    
    var mul = mulone * multwo
    textmul.innerText = mul
}

function dividing() {
    var divone = parseInt(document.getElementById('divone').value)
    var divtwo = parseInt(document.getElementById('divtwo').value)
    
    var div = divone / divtwo
    textdiv.innerText = div
}


