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

