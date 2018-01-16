
var randArray = [];
var playerTurn = 1;

// suffling images(creating random data atribute)
for(i=0;i<16;i++) {
    var currentImg = document.getElementById('img'+i);

    do { 
    var found = 0;
    var rand = Math.floor((Math.random() * 8) );
    
    for(j=0;j<16;j++) {
        if(rand == randArray[j]) {
            found++;
        }
    }

    if(found<2) {
        randArray.push(rand);
        currentImg.setAttribute('data-random', rand );
    }

    } while(found>1);

    currentImg.addEventListener('click', turnImg);
            console.log(currentImg);
}

var clickCount = 0;
var shown = [];
var wrap = document.getElementById("wrap");
var allowed;
var score1 = 0;
var score2 = 0; 
var scoreShow1  = document.getElementById('player1score');
var scoreShow2  = document.getElementById('player2score');
var guessedDiv1 = document.getElementById('guessedImg1');
var guessedDiv2 = document.getElementById('guessedImg2');
scoreShow1.innerHTML = score1;
scoreShow2.innerHTML = score1;

function turnImg(){
    if(this.getAttribute('src') != 'back.png' || allowed == false){
      return 1;
    }
    clickCount++;
    
    var found = 0;
    shown.push(this);
    
    this.src = 'img' + this.dataset.random + '.png';

     if(clickCount == 2) {
           compare();
     }
}

function compare() {
    
    
    if(shown[0].src == shown[1].src){
        shown[0].classList.add('disabled');
        shown[1].classList.add('disabled');

        if(playerTurn == 1){
            score1++;
            scoreShow1.innerHTML = score1;
            guessedDiv1.appendChild(shown[0]);
        }

        else {
            score2++;
            scoreShow2.innerHTML = score2;
        }
    }

    else {
        allowed = false;
        setTimeout(turnBack, 1000);
    }

    clickCount = 0;
    shown = [];
             
}

function turnBack(){
    var player1Div = document.getElementById('player1');
    var player2Div = document.getElementById('player2');
    var imgSpot1 = document.getElementById('imgSpot1');
    var imgSpot2 = document.getElementById('imgSpot2');

    for(i=0;i<16;i++){
        if(wrap.children[i].src != 'back.png' && wrap.children[i].className != 'disabled'){
            wrap.children[i].src = 'back.png';
         }
    }

    if(playerTurn == 1){
        player1Div.classList.remove('active');
        player2Div.classList.add('active');
        imgSpot2.appendChild(arrow);
        playerTurn = 2;
    }
    else{
        player2Div.classList.remove('active');
        player1Div.classList.add('active');
        imgSpot1.appendChild(arrow);
        playerTurn = 1;
    }
    console.log(playerTurn);
      allowed = true;
    }



