let imgdoFundo;
let imgdoBird;
let imgdosCanos1;
let imgdosCanos2;
let imgdosCanosMaior1;
let imgdosCanosMaior2;

function preload() {
    imgdoFundo = loadImage(imgfundo.png);
    imgdoBird = loadImage(imgpassaro2.png);
    imgdoBirdJump = loadImage(imgpassaro1.png);
    imgdoBirdFall = loadImage(imgpassaro3.png)
    imgdosCanos1 = loadImage(imgcano_baixo.png);
    imgdosCanos2 = loadImage(imgcano_topo.png);
    imgdosCanosMaior1 = loadImage(imgcano_baixo_maior.png);
    imgdosCanosMaior2 = loadImage(imgcano_topo_maior.png);
    
    imgdosCanos =[imgdosCanos1, imgdosCanosMaior1, imgdosCanos2, imgdosCanosMaior2]
    
    

}