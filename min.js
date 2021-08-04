// functions des operations



let operations;
let firstinput;

// func d'addition PART 1
function add(){
    let elem = document.getElementById("insertNum");
    firstinput = parseInt(elem.value);
    elem.value  = "" 
    console.log("firstINput", firstinput)
    operations = "addition"
}

// REMOVE ALL OF IT
function ce(){
    document.getElementById("insertNum").value = '';
    //let elem = document.getElementById("insertNum");
}

function soustraction(){
    let elem = document.getElementById("insertNum");
    firstinput = parseInt(elem.value);
    elem.value  = "" 
    console.log("firstINput", firstinput)
    operations = "soustraction"
}


function division(){
    let elem = document.getElementById("insertNum");
    firstinput = parseInt(elem.value);
    elem.value  = "" 
    console.log("firstINput", firstinput)
    operations = "division"
}

function multiplication(){
    let elem = document.getElementById("insertNum");
    firstinput = parseInt(elem.value);
    elem.value  = "" 
    console.log("firstINput", firstinput)
    operations = "multiplication"
}

function resultat(){
    let elem = document.getElementById("insertNum");
    let secondInput = parseInt(elem.value);
    if (operations === "addition"){
        let resultat = firstinput+secondInput
        //console.log("ffdfdf", resultat)
        elem.value  = resultat.toString()
        //document.getElementById("insertNum").value = resultat.toString();
    }