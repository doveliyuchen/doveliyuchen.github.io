let scissors,mouse,age,button,gous,university,future,chat;
let back, link;
let stage=0;
let a=0;





function preload(){
	scissors=loadImage('cursor.gif')

	home=loadImage('home.png')
	gous=loadImage('us.png')
	university=loadImage('university.png')
	future=loadImage('future.png')
	chat=loadImage('4.png')
	mySound = loadSound('bkm.mp3');
}


function setup() {
	 createCanvas(windowWidth-100, windowHeight-300);
	 textSize(20);
	 scissorsSprite=createSprite(mouseX,mouseY,10,10)
	 scissorsSprite.addImage('scissors',scissors)
	 scissorsSprite.scale=0.4
	 scissorsSprite.depth=1
	 age=createButton('Born')
	 age.style('background-color','#FF90B0')


  	age.style(' border-radius','4px')

  	age.style('color','black')
  	age.style('left','50%')
  	age.style('font-size','2.5rem')
  	age.style('letter-spacing','2px')

  	age.position(.0*width+200,200)
  	age1=createButton('15 years old')
  	age1.style('background-color','#FFA6B0')

  	age1.style(' border-radius','4px')
  	age1.style('color','#3DE3FC')
  	age1.style('left','50%')
  	age1.style('font-size','2.5rem')
  	age1.style('letter-spacing','2px')

  	age1.position(.25*width+200,200)



  	age2=createButton('20 years old')
  	age2.style('background-color','#FFDBB0')

  	age2.style(' border-radius','4px')
  	age2.style('color','#3DE3FC')
  	age2.style('left','50%')
  	age2.style('font-size','2.5rem')
  	age2.style('letter-spacing','2px')

  	age2.position(.5*width+200,200)

  	age3=createButton('Future')
	age3.style('background-color','#FFFFB0')

  	age3.style(' border-radius','4px')
  	age3.style('color','#3DE3FC')
  	age3.style('left','50%')
  	age3.style('font-size','2.5rem')
  	age3.style('letter-spacing','2px')

  	age3.position(.75*width+200,200)

  	link=createA('../senior_project/','Authority','_blank')
	link.style('font-size','40px')
	link.position(.5*width+500, 0.57*height)
	link.style('visibility', 'hidden')
	//--------------------------------
	music=createButton('Play Music')
	music.style('background-color','#FF90B0')
	music.style('left','50%')
	music.style('color','#3DE3FC')
  	music.style('font-size','1.5rem')
  	music.style('letter-spacing','2px')
  	music.position(.75*width+350,850)

  	

	

}

function draw() {
	clear()

	scissorsSprite.position.x=mouseX-10
  	scissorsSprite.position.y=mouseY-2
  	image(chat,.5*width+120,-30,width/2-100,width/2.3)
  	
	age.mousePressed(stage0)
	age1.mousePressed(stage1)
	age2.mousePressed(stage2)
	age3.mousePressed(stage3)
	music.mousePressed(music1)
	//------------------
	
	if (stage==0) {

		image(home,50,150,width/2-135,width/4)
		chat0()
		stage0()
	} else if (stage==1) {
		image(gous,50,150,width/2-135,width/4)
		chat1()
		stage1()
	} else if (stage==2) {
		image(university,50,150,width/2-135,width/4)
		chat2()
		stage2()
	} else if (stage==3) {
		image(future,50,150,width/2-135,width/4)
		chat3()
		stage3()
	}


		
	drawSprites()
}

function stage0(){

	stage=0
	age1.style('color','#3DE3FC')
	age.style('color','black')
	age2.style('color','#3DE3FC')
	age3.style('color','#3DE3FC')
		link.style('visibility', 'hidden')
}

function stage1(){

	stage=1
	age.style('color','#3DE3FC')
	age1.style('color','black')
	age2.style('color','#3DE3FC')
	age3.style('color','#3DE3FC')
		link.style('visibility', 'visible')


}

function stage2(){

	stage=2
	age.style('color','#3DE3FC')
	age2.style('color','black')
	age1.style('color','#3DE3FC')
	age3.style('color','#3DE3FC')
		link.style('visibility', 'hidden')
}
function stage3(){

	stage=3
	age.style('color','#3DE3FC')
	age3.style('color','black')
	age2.style('color','#3DE3FC')
	age1.style('color','#3DE3FC')
		link.style('visibility', 'hidden')

}

function chat0() {
	textSize(30)
	text('Yuchen Li', .5*width+250,250)
	textSize(20)
	text(' has been controlled by many things, ', .5*width+390, 250)
	text('since she born in this world. She was not allowed to play with her \nfriends after school, and she has to get a good grade.',.5*width+250,275)
	textSize(35)
	text('She wanted to escape these controls!\nShe want freedom! \nCould you please cut a thread for her?',.5*width+250, 350)
	textSize(20)
		
}

function chat1() {

	text('After she finished her middle school, she decided to\nstudy abroad. This decision changed her life, and released her from\nthe control from', .5*width+250, 250)
	textSize(45)


	textSize(20)
	text('She could argue with her teacher, instructor, and others equally.', .5*width+250, 370)
		
}

function chat2() {

	text('After she finished her high school in US, she has to\napply a university by herself. That was the time she would be the ', .5*width+250, 250)
	textSize(45)
	text('Decision maker',.5*width+380, 330)
	textSize(20)
	text('She transfered from Clarkson University to New York University to \npursue her true insterests. But she must override her parents\' ', .5*width+250, 370)
	textSize(45)
	text('Prototypes',.5*width+400, 450)
	textSize(20)
	text('which they don\'t believe that she could be a good programmer. ', .5*width+250, 490)

}

function chat3() {

	text('Yuchen, a Shanghai-based interactive media artist. \nShe will continue studying interactive media arts in NYU to pursue a \nMaster degree, and achieve herself on her chosed ', .5*width+250, 260)
	textSize(45)
	text('Future',.5*width+480, 365)
	text('\nFreely',.5*width+480, 365)
	textSize(20)
		
}

function mouseClicked(){
	print(scissorsSprite.position.x)

	if (stage<3){
		if (scissorsSprite.position.x<650) {
			if (200<=scissorsSprite.position.y){
				print(scissorsSprite.position.x,stage)
				stage +=1
			
			}
			

		}
	}else if (stage==3){
		stage =3
	}


	else {
		stage=0
	}

	
}

function music1() {
	mySound.setLoop(false);
    mySound.setVolume(0.2)
  //mySound.delayTime(3)
    mySound.playMode('restart')
	if (a==0){
		mySound.play()
		a=1
	} else{
		mySound.pause()
		a=0
	}



    
}