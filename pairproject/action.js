var calories=1200

var sauce2= 0
var cheese2=0
var pepperoni2=0
var mushroom2=0
var pineapple2=0
var beef2=0
var chicken2=0


$("#sauce1").click(function() {
 if ( $('#sauce1').prop('checked')) {
	$("#sauce").css("opacity","1");
	sauce2=1
	calories=sauce2*1280+cheese2*1360+beef2*480+chicken2*160+pepperoni2*280+pineapple2*80+1200
$("#other").text($("#other").text().replace("#other", calories));
} else{

	$("#sauce").css("opacity","0");
	sauce2=0
	calories=sauce2*1280+cheese2*1360+beef2*480+chicken2*160+pepperoni2*280+pineapple2*80+1200
$("#other").text($("#other").text().replace("#other", calories));
	}
 })
$("#cheese1").click(function() {
	if ( $('#cheese1').prop('checked')) {
$("#cheese").css("opacity","1")
cheese2=1
calories=sauce2*1280+cheese2*1360+beef2*480+chicken2*160+pepperoni2*280+pineapple2*80+1200
$("#other").text($("#other").text().replace("#other", calories));
}else{
$("#cheese").css("opacity","0")
}
cheese2=0
calories=sauce2*1280+cheese2*1360+beef2*480+chicken2*160+pepperoni2*280+pineapple2*80+1200
$("#other").text($("#other").text().replace("#other", calories));
 })

$("#pepperoni1").click(function() { 
	if ( $('#pepperoni1').prop('checked')) {
$("#pepperoni").css("opacity","1")
pepperoni2=1
calories=sauce2*1280+cheese2*1360+beef2*480+chicken2*160+pepperoni2*280+pineapple2*80+1200
$("#other").text($("#other").text().replace("#other", calories));
}else{
$("#pepperoni").css("opacity","0")
pepperoni2=0
calories=sauce2*1280+cheese2*1360+beef2*480+chicken2*160+pepperoni2*280+pineapple2*80+1200
$("#other").text($("#other").text().replace("#other", calories));
}
})
$("#mushroom1").click(function() {
	if ( $('#mushroom1').prop('checked')) {
$("#mushroom").css("opacity","1")
mushroom2=1
calories=sauce2*1280+cheese2*1360+beef2*480+chicken2*160+pepperoni2*280+pineapple2*80+1200
$("#other").text($("#other").text().replace("#other", calories));
}else{
$("#mushroom").css("opacity","0")
mushroom2=0
calories=sauce2*1280+cheese2*1360+beef2*480+chicken2*160+pepperoni2*280+pineapple2*80+1200
$("#other").text($("#other").text().replace("#other", calories));
}
})
$("#pineapple1").click(function() {
	if ( $('#pineapple1').prop('checked')) {
$("#pineapple").css("opacity","1")
pineapple2=1
calories=sauce2*1280+cheese2*1360+beef2*480+chicken2*160+pepperoni2*280+pineapple2*80+1200
$("#other").text($("#other").text().replace("#other", calories));
}else{
$("#pineapple").css("opacity","0")
pineapple2=0
calories=sauce2*1280+cheese2*1360+beef2*480+chicken2*160+pepperoni2*280+pineapple2*80+1200
$("#other").text($("#other").text().replace("#other", calories));
}
 })
$("#beef1").click(function() { 
	if ( $('#beef1').prop('checked')) {
$("#beef").css("opacity","1")
beef2=1
calories=sauce2*1280+cheese2*1360+beef2*480+chicken2*160+pepperoni2*280+pineapple2*80+1200
$("#other").text($("#other").text().replace("#other", calories));
}else{
$("#beef").css("opacity","0")
beef2=0
calories=sauce2*1280+cheese2*1360+beef2*480+chicken2*160+pepperoni2*280+pineapple2*80+1200
$("#other").text($("#other").text().replace("#other", calories));
}
})
$("#chicken1").click(function() {
	if ( $('#chicken1').prop('checked')) {
$("#chicken").css("opacity","1")
chicken2=1
calories=sauce2*1280+cheese2*1360+beef2*480+chicken2*160+pepperoni2*280+pineapple2*80+1200
$("#other").text($("#other").text().replace("#other", calories));
}else{
$("#chicken").css("opacity","0")
chicken2=0
calories=sauce2*1280+cheese2*1360+beef2*480+chicken2*160+pepperoni2*280+pineapple2*80+1200
$("#other").text($("#other").text().replace("#other", calories));
}
 })

