let hangman1, hangman2, hangman3, hangman4, hangman5, hangman6, hangman7;
let rabbits,chickens,me,chat;
let game,game1,game2,back,next;
let cage, covered_cage,right,left;
let chat_num=0;
let stage=0;
let space=['-','-','-','-','-']
let wrong_lst=[]
let wrong=0;
let alert=false;
let game_status=1;
function preload() {
	me=loadImage('me.png');
	me2=loadImage('me2.png')
	chat=loadImage('chat.png');
	//-------------hangman
	hangman=loadImage('0.png');
	hangman1=loadImage('1.png');
	hangman2=loadImage('2.png');
	hangman3=loadImage('3.png');
	hangman4=loadImage('4.png');
	hangman5=loadImage('5.png');
	hangman6=loadImage('6.png');
	hangman7=loadImage('7.png');
	end=loadImage('end.png');
	win=loadImage('win.png');
	//rabbits and chickens
	rabbits=loadImage('rabbit.png');
	chickens=loadImage('chicken.png');
	covered_cage=loadImage('coveredcage.png');
	cage=loadImage('cage.png');
	right=loadImage('right.png');
	left=loadImage('left.png');

}
function setup() {
	 createCanvas(windowWidth-10, windowHeight-80);


	 textSize(20);
	 hangman_array=[hangman,hangman1,hangman2,hangman3,hangman4,hangman5,hangman6,hangman7,end]


	 game=createButton('English')
	 game.style('background-color','#D4DCFF')
	 game.style('padding','8px')
  	 game.style(' border-radius','6px')
  	 game.style('color','#A89459')
  	 game.style('left','50%')
  	 game.style('font-size','2rem')
  	 game.style('letter-spacing','2px')
  	 game.position(.33*width-100,height*0.1)
  	 //-----------------------------
  	 game1=createButton('Math')
	 game1.style('background-color','#B3C0F5')
	 game1.style('padding','8px')
  	 game1.style(' border-radius','6px')
  	 game1.style('color','#F5E4B3')
  	 game1.style('left','50%')
  	 game1.style('font-size','2rem')
  	 game1.style('letter-spacing','2px')
  	 game1.position(.66*width-50,height*0.1)
  	 //-----------------------------
  	 //-----------------------------
  	 next_but=createButton('Next')
  	 next_but.style('padding','15px')
  	 next_but.style('font-size','2rem')
  	 next_but.position(width*0.83,height*0.92)

  	 back_but=createButton('Back')
  	 back_but.style('padding','15px')
  	 back_but.style('font-size','2rem')
  	 back_but.position(width*0.53,height*0.92)
  	 //-----

	}

function draw() {
	clear()

	game.mouseClicked(stage0)
	game1.mouseClicked(stage1)

	next_but.mouseClicked(chat_switch)
	back_but.mouseClicked(chat_back)
	if (stage==0) {

		stage0()
		if (chat_num==0){
			chat0()
		} else if (chat_num==1){
			chat1()
		}
	} else if (stage==1) {
	
	
		stage1()
	} else if (stage==2) {

		stage2()
	}
}
function stage0(){
	

	stage=0
	game1.style('color','#F5E4B3')
	game.style('color','#A89459')

	if (chat_num==0){
		chat0()
		if (game_status==0){
		game_status=1
		space=['-','-','-','-','-']
 		wrong_lst=[]
 		wrong=0;
 		alert=false;

		}
	} else if (chat_num==1){
		chat1()
	
		


	}



}
function stage1(){

	back_but.style('visibility', 'hidden')
	next_but.style('visibility','hidden')
	stage=1
	game1.style('color','#A89459')
	game.style('color','#F5E4B3')

	if (chat_num==0){
		chat0()
		if (game_status==0){
		game_status=1
		space=['-','-','-','-','-']
 		wrong_lst=[]
 		wrong=0;
 		alert=false;

		}
	}else if (chat_num==1){
		chat1()
	}


}
function stage2(){

	back_but.style('visibility', 'hidden')
	next_but.style('visibility','visible')
	stage=2
	game1.style('color','#F5E4B3')
	game.style('color','#F5E4B3')


}
function chat0(){

	if (stage==0){
	back_but.style('visibility', 'hidden')
	image(hangman,width/10,height/3+10,width/1.5,height/1.5)
	image(me,width/1.9,height*0.54,300,300)
	image(chat,width*0.55,height*0.2,600,450)
	next_but.style('visibility','visible')

	next=image(right,width*0.82,height*0.82,100,100)

	textSize(20);
	text('Hi,there! Hangman is my favorite',width*0.61,height*0.36)
	text('game! When I was young, I learned many', width*0.595,height*0.4)
	text('words from this game. I hope you also', width*0.595,height*0.44)
	text('enjoy it!',width*0.6,height*0.48)
	text('click heart to next page', width*0.68,height*0.59)
	textSize(60)
	fill('#383838')
	text('Hangman',width/2-50-80,height*0.2)
	}else if (stage==1) {
		next=image(right,width*0.82,height*0.82,100,100)
		next_but.style('visibility','visible')

		image(covered_cage,width/10,height*0.2,width/1.5,height/1.5)
		image(chat,width*0.55,height*0.2,600,450)
		image(me2,width*0.54,height*0.56,300,300)
		
		textSize(20);
		text('When I was only 5 years old, I have ',width*0.61,height*0.36)
		text('already learned math. Math problems in', width*0.595,height*0.4)
		text('contexts make them interesting. Here is', width*0.595,height*0.44)
		text('an example of a contextual question, ',width*0.6,height*0.48)
		text('enjoy it!',width*0.63,height*0.52)
		text('click heart to next page', width*0.68,height*0.59)
		textSize(60)
		fill('#383838')
		text('Cage Math',width/2-50-130,height*0.2)
	}

}

function chat_switch(){

	chat_num+=1
	


}
function chat_back(){
	if (chat_num>0){
		chat_num-=1
	}
	
}

function chat1() {

	//-----hangman
	if (stage==0){
		if (game_status==1){
	image(hangman,width/10,height/3+10,width/1.5,height/1.5)

	image(hangman_array[wrong],width/10,height/3+10,width/1.5,height/1.5)
	back=image(left,width/1.9,height*0.82,100,100)
	back_but.style('visibility', 'visible')
	next_but.style('visibility','hidden')

	textSize(60)
	fill('#383838')
	text('Hangman',width/2-50-80,height*0.2)
	textSize(40) 
	text('It has 5 letters.',width/1.6-37,height/2.2)

	text(join(space,'  '),width/1.6+20,height*0.82)
	if (wrong>0){
		text('It is a fruit.',width/1.6,height/2.2+60)
		
	}
	if (wrong>1){
		text('It is red.',width/1.6+23,height/2.2+120)
	}

	if (alert == true ){
		text('You have tried this!',width/1.6-133,height/2.2+180 )
	}
	else
	{ text('Press your guessed letter!',width/1.6-133,height/2.2+180)
	}
	text('Wrong list:'+ join(wrong_lst,', '),width/1.6-133,height/2.2+240,500)
	


	}
	

	
	image(hangman,width/10,height/3+10,width/1.5,height/1.5)

	
	back=image(left,width/1.9,height*0.82,100,100)
	back_but.style('visibility', 'visible')
	next_but.style('visibility','hidden')

	textSize(60)
	fill('#383838')
	text('Hangman',width/2-50-80,height*0.2)
	textSize(40) 
	text('It has 5 letters.',width/1.6-37,height/2.2)

	text(join(space,'  '),width/1.6+20,height*0.82)

	if (wrong>0){
		text('It is a fruit.',width/1.6,height/2.2+60)
		
	}
	if (wrong>1){
		text('It is red.',width/1.6+23,height/2.2+120)
	}

	if (alert == true ){
		text('You have tried this!',width/1.6-133,height/2.2+180 )
	}
	else
	{ text('Press your guessed letter!',width/1.6-133,height/2.2+180)
	}
	text('Wrong list:'+ join(wrong_lst,', '),width/1.6-133,height/2.2+240,500)

	if (space.includes('-')==false){
	image(win,width/10,height/3+10,width/1.5,height/1.5)
	game_status=0
	} else if (wrong>=7){
		image(end,width/10,height/3+10,width/1.5,height/1.5)
		game_status=0
	}

	}
	//------------math
	if (stage==1){
		//if (game_status==1){
	back=image(left,width/1.9,height*0.82,100,100)
	back_but.style('visibility', 'visible')
	next_but.style('visibility','hidden')
	textSize(60)
	fill('#383838')
	text('Cage Math',width/2-50-130,height*0.2)
	image(cage,width/10,height*0.2,width/1.5,height/1.5)
	textSize(35) 
	text('Rabbits and chickens are in the same cage. There are 35 heads, and 94 feet. How many rabbits are in the cage? How many chickens there? If there are ★ rabbits and ❤ chickens in the cage.',width/2.2,height*0.3,width/2)

	text('      = 4 legs,        = 2 legs',width/2.2,height*0.5,width/2)
	text('★         +❤         = 35',width/2.2,height*0.55,width/2)
	text('★·        +❤·        = 94  ---▶ ★·    4   +❤·    2   = 94',width/2.2,height*0.6,width/2)
	text('---▶ (★·    4   +❤·    2)÷ 2  =94 ÷ 2',width/2.2,height*0.65,width/2)
	text('---▶  ★·    2   +❤  = 57   and   ★  +   ❤  = 35',width/2.2,height*0.7,width/2)
	text(' ★= 57 - 35 = 12 rabbits',width/2.2,height*0.75,width/2)
	text(' ❤= 35 - ★ = 35 - 12 = 23 chickens',width/2.2,height*0.8,width/2)
	image(rabbits,width/2.11,height*0.57,80,80)
	image(rabbits,width/2.23,height*0.468,80,80)
	image(chickens,width/1.85,height*0.58,140,80)
	image(chickens,width/1.85,height*0.47,140,80)
//}


	}
	
	
	


}

function keyPressed() {
		alert=false
	if (chat_num==1 && game_status==1){

		if (keyCode==65){
			
			space[0]='A'

		} else if (keyCode==80){
			space[1]='P'
			space[2]='P'
		} else if (keyCode==76){
			space[3]='L'
		} else if (keyCode==69){
			space[4]='E'
		} else{
			if (wrong >=8){
				wrong=wrong
				game_status=0
			} else {
				if (wrong_lst.includes(key)) {
					wrong=wrong
					alert=true


					} else{
						wrong+=1
						wrong_lst.push(key)
					}


			}
			
		
			
		}

	}
}