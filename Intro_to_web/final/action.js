var img=document.getElementById("img");
document.onmousemove = function(event){

    event = event;

    var st=document.documentElement.scrollTop;
    var sl=document.documentElement.scrollLeft;

    var X=event.clientX-50;
    var Y=event.clientY-200;

    img.style.left=X+sl+"px";
    img.style.top=Y+st+"px";
}



document.addEventListener('mousedown', function(e) {

    window.location.href="1/index.html";

    
});