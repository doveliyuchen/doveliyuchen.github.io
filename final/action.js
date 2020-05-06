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

var fliesClicked = 0;

document.addEventListener('mousedown', function(e) {
    var x = (e.touches ? e.touches[0] : e).clientX,
        y = (e.touches ? e.touches[0] : e).clientY,
        distance = getDistance(fly.x, fly.y, x, y);

    if (distance < 12) {
        fliesClicked++;
        fly.flying = false;
        fly.to(3, {
            y: scene.height * 2
        }, {
            ease: canvallax.ease.inQuad,
            onComplete: function() {
                flyPosX = scene.width * Math.random(), //( Math.random() < 0.5 ? scene.width + 100 : -100 );
                    flyPosY = (Math.random() < 0.5 ? scene.height + 100 : -100);

                fly.flying = true;
            }
        });
    }
});