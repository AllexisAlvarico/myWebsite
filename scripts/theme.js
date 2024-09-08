
function blueText(){
    let target = document.getElementById("text1");
    let elt = document.getElementsByTagName('body').item(0);
    elt.style.backgroundColor = 'blue';
    target.style.color= "blue";
    target.style.fontFamily = "Impact,Charcoal,sans-serif"
}

function redText(){

    let target = document.getElementById("text1");
    let elt = document.getElementsByTagName('body').item(0);
    elt.style.backgroundColor = 'red';
    target.style.color= "red";
    target.style.fontFamily = "Trebuchet MS, sans-serif"
}

function greenText(){

    let target = document.getElementById("text1");
    let elt = document.getElementsByTagName('body').item(0);
    elt.style.backgroundColor = 'green';
    target.style.color= "green";
    target.style.fontFamily = "Times New Roman, serif"
}

function reset(){
    let target = document.getElementById("text1");
    let elt = document.getElementsByTagName('body').item(0);
    elt.style.backgroundColor = 'white';
    target.style.color= "black";
    target.style.fontFamily = "Times New Roman, serif"
}

function darkMode(){
    let target = document.getElementById("text1");
    let elt = document.getElementsByTagName('body').item(0);
    elt.style.backgroundColor = 'black';
    target.style.color= "white";
    target.style.fontFamily = "Times New Roman, serif"
}

function changeThemeMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}