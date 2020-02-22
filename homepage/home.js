var total = 5;
var singlePage = 1;
var width = 60;
var height = 70;
var fontSize = 2;
var noOfPages = 5;
for(var i=0;i<noOfPages;i++){
    var num = i+1
    var className = 'c'+ num;
    var newPage = document.createElement('div');
    newPage.className = 'page ' + className;
    for(var j=0;j<singlePage;j++){
        var newBox = document.createElement('div');
        newBox.className = 'box';
        newBox.style.width = width + 'vw';
        newBox.style.height = height + 'vh';
        newBox.style.fontSize = fontSize + 'rem';
        var numBox = i*singlePage + j + 1;
        newBox.innerHTML = numBox;
        newPage.appendChild(newBox);
    }
    document.getElementsByClassName("carousal")[0].appendChild(newPage);
}
var slider = document.getElementsByClassName('slider')[0];
for ( i = 0; i < noOfPages; i++) {
    let newDot = document.createElement('div');
    newDot.className = "dot";
    var num = i+1;
    newDot.id = num;
    slider.appendChild(newDot);
}
document.querySelectorAll('.dot')[0].style.background = 'white';
var  activePage = 1;
function animation(){
    var carousal = document.getElementsByClassName('carousal')[0];
    carousal.style.transform = "translate(" + (-100*( activePage-1)) + "%)";
    for(let i=0;i<noOfPages;i++){
        if(i != ( activePage-1)){
            document.querySelectorAll('.dot')[i].style.background = 'none';
        }
        else{
            document.querySelectorAll('.dot')[i].style.background = 'white';
        }
    }
}
document.addEventListener("keyup",e=>{
    if (e.keyCode == 39){
        left();
    }
    else if(e.keyCode == 37){
        right();
    }
})
function left(){
    if(activePage>1)
        activePage--;
    else
        activePage=noOfPages;
    animation();
}
function right(){
    if(activePage<noOfPages)
        activePage++;
    else
        activePage=1;
    animation();
}
function carousel_active()
{
    document.getElementById('outer').style.transform = "translateY(0vh)";
    document.getElementById('menu-tab').style.zIndex = "0";
}
function carousel_deactive()
{
    document.getElementById('outer').style.transform = "translateY(100vh)";
    document.getElementById('menu-tab').style.zIndex = "1";
}
function menu_active()
{
    document.getElementById('menu').style.display= "flex";
    document.getElementById('menu').style.opacity= "1";
    document.getElementById('mobile-path-2').style.zIndex = "1000";
}
function menu_deactive()
{
    document.getElementById('menu').style.display= "none";
    document.getElementById('menu').style.opacity= "0";
    document.getElementById('mobile-path-2').style.zIndex = "-1";
}