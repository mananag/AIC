var total = 4;
var singlePage = 1;
var fontSize = 2;
var noOfPages = 4;
for(var i=0;i<noOfPages;i++){
    var num = i+1
    var className = 'c'+ num;
    var newPage = document.createElement('div');
    newPage.className = 'page ' + className;
    for(var j=0;j<singlePage;j++){
        var newBox = document.createElement('div');
        var logoBox = document.createElement('div');
        var companyName = document.createElement('div');
        var cashPrize = document.createElement('div');
        var download = document.createElement('div');
        var d2c = document.createElement('div');
        var numBox = i*singlePage + j + 1;
        newBox.className = 'box ' + numBox;
        logoBox.className = 'logo ' + numBox;
        d2c.className = 'd2c ' + numBox;
        companyName.className = 'company ' + numBox;
        cashPrize.className = 'cash ' + numBox;
        download.className = 'download ' + numBox;
        newPage.appendChild(newBox);
        newBox.appendChild(logoBox);
        newBox.appendChild(companyName);
        newBox.appendChild(cashPrize);
        newBox.appendChild(download);
        newBox.appendChild(d2c);
    }
    document.getElementsByClassName("carousal")[0].appendChild(newPage);

}
document.getElementsByClassName("company")[0].innerHTML="ZULIP";
document.getElementsByClassName("logo")[0].innerHTML='<img src="zulip.jpg" style="width:auto;height:10vw;">';
document.getElementsByClassName("cash")[0].innerHTML="Rs.50,000/- + Certification by Zulip CEO";
document.getElementsByClassName("d2c")[0].innerHTML="<a href='https://dare2compete.com/o/aic-zulip-apogee-birla-institute-of-technology-science-bits-pilani-98699' style='text-decoration: none;'>Link for Dare to Compete Challenge</a>";
document.getElementsByClassName("download")[0].innerHTML="<a href='zulip.pdf' style='text-decoration: none; font-family: " + 'Bahnschrift ' + ";'>Download Problem Statement</a>"
document.getElementsByClassName("company")[1].innerHTML="GE HEALTHCARE";
document.getElementsByClassName("logo")[1].innerHTML='<img src="ge.jfif" style="width:auto;height:10vw;">';
document.getElementsByClassName("cash")[1].innerHTML="Company signed certificates + summer internship opportunity";
document.getElementsByClassName("d2c")[1].innerHTML="<a href='https://dare2compete.com/o/aic-yamaha-apogee-birla-institute-of-technology-science-bits-pilani-99997/amp' style='text-decoration: none;'>Link for Dare to Compete Challenge</a>";
document.getElementsByClassName("download")[1].innerHTML="Download Problems: <a href='ge.pptx' style=' font-family: " + 'Bahnschrift ' + ";'>1</a>+<a href='ge.pptx' style=' font-family: " + 'Bahnschrift ' + ";'>2</a>"
document.getElementsByClassName("company")[2].innerHTML="YAMAHA";
document.getElementsByClassName("logo")[2].innerHTML='<img src="yamaha.jpg" style="width:auto;height:10vw;">';
document.getElementsByClassName("cash")[2].innerHTML="Rs.50,000/-";
document.getElementsByClassName("d2c")[2].innerHTML="<a href='https://dare2compete.com/o/aic-ge-healthcare-apogee-birla-institute-of-technology-science-bits-pilani-100473' style='text-decoration: none;'>Link for Dare to Compete Challenge</a>";
document.getElementsByClassName("download")[2].innerHTML="<a href='yamaha.pdf' style='text-decoration: none;;font-family: " + 'Bahnschrift ' + ";'>Download Problem Statement</a>"
document.getElementsByClassName("company")[3].innerHTML="CLUSTR";
document.getElementsByClassName("logo")[3].innerHTML='<img src="clustr.png" style="width:auto;height:10vw;">';
document.getElementsByClassName("cash")[3].innerHTML="Rs.40,000/- + Paid internship for 2 months";
document.getElementsByClassName("d2c")[3].innerHTML="<a href='https://dare2compete.com/o/apogee-innovation-challenge-2020-clustr-apogee-birla-institute-of-technology-science-bits-pilani-96379' style='text-decoration: none;'>Link for Dare to Compete Challenge</a>";
document.getElementsByClassName("download")[3].innerHTML="<a href='clustr.doc' style='text-decoration: none;font-family: " + 'Bahnschrift ' + ";'>Download Problem Statement</a>"
var  activePage = 1;
function animation(){
    var carousal = document.getElementsByClassName('carousal')[0];
    carousal.style.transform = "translate(" + (-100*( activePage-1)) + "%)";
}
document.addEventListener("keyup",e=>{
    if (e.keyCode == 39){
        right();
    }
    else if(e.keyCode == 37){
        left();
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
    document.getElementById('menu').style.opacity= "1";
    document.getElementById('mobile-path-2').style.zIndex = "1000";
    document.getElementById('menu').style.transform= "translateX(-100vw)";
}
function menu_deactive()
{
    document.getElementById('menu').style.opacity= "0";
    document.getElementById('mobile-path-2').style.zIndex = "-1";
    document.getElementById('menu').style.transform= "translateX(0vw)";
}