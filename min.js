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
