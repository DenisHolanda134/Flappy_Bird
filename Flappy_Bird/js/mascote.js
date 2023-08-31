let yBird = 350;
let xBird = 100;


function showtheBird() {
    image(imgdoBird, xBird, yBird, 70, 50);
}

function birdMov(){
    if (keyIsDown(UP_ARROW)) {
        yBird -=3;
        imgdoBird = loadImage("img/passaro1.png");
    }
    if (keyIsDown(DOWN_ARROW)) {
        yBird +=3;
    }

}
