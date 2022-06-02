var colors = "cdb4db-ffc8dd-ffafcc-bde0fe-a2d2ff".split("-").map(a=>"#"+a)
class Ball{
	constructor(args){ //參數預設值(工廠)
		this.r = args.r || random(100)  //圓的半徑 ||符號主要設定優先使用args.r,如果沒有args.r參數，採用符號後面的值
		this.p = args.p || {x:width/2,y:height/2}//物件的位置
		this.v = args.v || {x:random(-2,2),y:random(-2,2)}//物件的移動速度
		this.a = args.a || {x:0,y:0.2}
		this.color = random(colors)
 }
	draw(){  //繪製函數
		push()
		  translate(this.p.x,this.p.y)
		  fill(this.color)
		  ellipse(0,0,this.r)
		  ellipse(-this.r/2,-this.r/2,this.r/2)
		  ellipse(this.r/2,-this.r/2,this.r/2)
		  fill(255)
		  ellipse(this.r/4,-this.r/4,this.r/8)
		  ellipse(-this.r/4,-this.r/4,this.r/8)
		  fill(255)
		  //arc(0,0,this.r/2,this.r/2,0,PI)//弧度
		  ellipse(0,0,this.r/2)
		  fill(0)
		  //arc(0,0,this.r/3,this.r/3,0,PI)//弧度
		  ellipse(0,0,this.r/3)
		  noFill()
		  arc(0,this.r/15,this.r*2/3,this.r*2/3,0,PI)
		pop()
	}
	update(){//動作(移動)
		this.p.x = this.p.x + this.v.x
		this.p.y+= this.v.y
		this.v.x = this.v.x+this.a.x
		this.v.y = this.v.y+this.a.y
		this.v.x = this.v.x*0.999
		this.v.y = this.v.y*0.999
		if(this.p.y>height){
			this.v.y = -abs(this.v.y)
		}
	}
}

var ball
var balls=[] //宣告一個陣列
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for(var i =0;i<100;i++){
	ball= new Ball({a:{x:0,y:0.1},p:{x:width/2,y:height/2}})//產生一個新的物件
	balls.push(ball)
	}
}

function draw() {
	background(0)
	//for(var i=0;i<balls.length;i++){
	//  let ball=balls[i]
	for(let ball of balls){
		ball.draw()//繪製
		ball.update()////動作(移動)
	}
}




