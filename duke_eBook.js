//sketch.js内にあるであろう変数

var Width;
var Height;

var novel = [10];

var novelNumber = 0;

var h1;
var w1;


//------------------ProgressBarで使用する変数------------------

function preload() {
    　for (let i = 0; i < 11; i++) {
        novel[i] = loadImage('image/duke_' + i + '.jpg');
    }
}


function setup() {

    Width = windowWidth;
    Height = windowHeight;
    createCanvas(Width, Height);

    w1 = novel[0].width * Width / novel[0].width;
    //h1 = novel[0].height * height / novel[0].height;
    h1 = novel[0].height * Width / novel[0].width;

}

function draw() {


imageMode(CENTER);
image(novel[novelNumber], Width/2, Height/2, w1, h1);



}

function touchStarted() {

   
        
            novelNumber = novelNumber + 1;
       
     
    
}

// do this prevent default touch interaction
function mousePressed() {
    return false;
}

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});



