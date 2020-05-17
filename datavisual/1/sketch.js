let data;
let numofCheck;
let date;
let dateCol = [];
let val;

function preload() {
	data = loadTable('https://docs.google.com/spreadsheets/d/e/2PACX-1vRHuN1ctvcPi-tcLeI4CmKKdiht3co754xbfZp_l-eJkisAUY9fn3dVOvGVYwlUts3MPD-T4ZdPwnFB/pub?output=csv', 'csv', 'header')


}


function setup() {
	createCanvas(windowWidth, windowHeight);
	numofCheck = data.getRowCount()
	numofColum = data.getColumnCount()
	for (i = 0; i < numofCheck; i++) {
		//print(data.get(i,0))
		date = data.get(i, 0)
		dateCol[i] = dataConvert(date);

	}
}





function draw() {

	background(0)
	randomSeed(2);
	spaceHolder();




}



function spaceHolder() {


	let rotation = map(90, 1, 90, 0, 2 * PI)
	translate(width / 2, height / 2)

	stroke('white')
	for (i = 0; i < numofCheck; i++) {
		for (j = 0; j < numofColum - 3; j++) {
			val = data.get(i, j)
			
			//strokeWeight(random(0, 10));
			stroke(dateCol[i])
			circle(0,j*55+55,1)
			
			drawCircle(0, j * 55+55, val)

		}
	rotate(2 * PI / numofCheck)
	}

}


function drawCircle(xposition, yposition, num) {
	//print(data.getRow(1))



	if (num==='TRUE') {
		push()
		noStroke()
		fill(255)
		circle(xposition, yposition, 6)

		pop()

	} else if (num==='FALSE' ) {
		push()
		noStroke()
		fill(100)
		circle(xposition, yposition, 6)
		pop()
	}
else if (num==='0' ) {
		push()
		noStroke()
		fill(100)
		circle(xposition, yposition, 6)
		pop()
	}
else if (num==='1' ) {
		push()
		noStroke()
		fill(255)
		circle(xposition, yposition, 6)
		pop()
		push()
		noStroke()
		fill(100)
		circle(xposition, yposition, 2)
		pop()	
	
	}
else if (num==='2 ') {
		push()
		noStroke()
		fill(255)
		circle(xposition, yposition, 6)
		pop()
	}else if (num==='3 ') {
		push()
		noStroke()
		fill(100)
		circle(xposition, yposition, 4)
		pop()
	}


}

function dataConvert(date) {


	if (date.indexOf('2/4/') !== -1) {
		return color('#FF6E3D')
	} else if (date.indexOf('2/5/') !== -1) {
		return color('#FFE000')
	} else if (date.indexOf('2/6/') !== -1) {
		return color('#ADEFFF')
	} else if (date.indexOf('2/7/') !== -1) {
		return color('#F0A3C4')
	} else if (date.indexOf('2/8/') !== -1) {
		return color('#FFFA5D')
	} else if (date.indexOf('2/9/') !== -1) {
		return color('#53C0ED')
	} else if (date.indexOf('2/10/') !== -1) {
		return color('#FF1450')
	} else if (date.indexOf('2/11/') !== -1) {
		return color('#FFF8BB')
	} else if (date.indexOf('2/12/') !== -1) {
		return color('#0DC5FF')
	} else if (date.indexOf('2/13/') !== -1) {
		return color('#FF4AB4')
	} else if (date.indexOf('2/14/') !== -1) {
		return color('#E3FF32')
	} else if (date.indexOf('2/15/') !== -1) {
		return color('#BC43FF')
	} else if (date.indexOf('2/16/') !== -1) {
		return color('#F0A373')
	} else if (date.indexOf('2/17/') !== -1) {
		return color('#80FF4D')
	} else if (date.indexOf('2/18/') !== -1) {
		return color('#0191F0')
	} else if (date.indexOf('2/19/') !== -1) {
		return color('#FF9787')
	} else if (date.indexOf('2/20/') !== -1) {
		return color('#F0D737')
	} else if (date.indexOf('2/21/') !== -1) {
		return color('#4C24F0')
	} else if (date.indexOf('2/22/') !== -1) {
		return color('#FF9787')
	} else if (date.indexOf('2/23/') !== -1) {
		return color('#FDFF92')
	} else if (date.indexOf('2/24/') !== -1) {
		return color('#689FFF')
	} else if (date.indexOf('2/25/') !== -1) {
		return color('#FF2F21')
	} else if (date.indexOf('2/26/') !== -1) {
		return color('#F0A629')
	}



}