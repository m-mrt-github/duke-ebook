//sketch.js内にあるであろう変数

var Width;
var Height;

var novel = [9];

var novelNumber = 0;

var h1;
var w1;


//------------------ProgressBarで使用する変数------------------

function preload() {
    　for (let i = 0; i < 10; i++) {
        novel[i] = loadImage('duke_jpg/duke_' + i + '.jpg');
    }
}


function setup() {

    Width = windowWidth;
    Height = windowHeight;
    createCanvas(Width, Height);

    w1 = novel[0].width * Width / novel[0].width;
    h1 = novel[0].height * height / novel[0].height;

}

function draw() {


imageMode(CENTER);
image(novel[novelNumber], Width/2, Height/2, w1, h1);


}

function keyPressed() {

   
        if (keyCode === ENTER) {
            novelNumber = novelNumber + 1;
        }
     
    
}



