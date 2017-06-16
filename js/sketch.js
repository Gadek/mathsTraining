var num1,num2,znak,correctAnswer,tura=1,points=0,czas1, czas2, sek,start=false,counting,okS,not_okS;
var ile_tur = 3 ; time = 4000;
function setup() {
    noCanvas();
    select('#restart').mouseReleased(startGame);
    select('#input').changed(count);
    prepareNext();
}


// ----  GRA NA CZAS
function draw() {
    if(start) {
        var c = new Date().getTime();
        if(c-counting>time){
            counting = new Date().getTime();
            showCorrectAnswer();
            showFALSE();
            prepareNext();
            incrementTura();
            not_okS.play();
            if(endOfGame()) {
                czas2 = new Date().getTime();
                sumUp();
                start = false; 
            }
        }
    }
}
// ----

function startGame() {
    offStart();
    showAndHideWhatNecessary();
    czas1 = new Date().getTime();
    start = true;
    counting = czas1;
}

function count() {
    counting = new Date().getTime();
    checkAnswer();
    if(correctAnswer) {
        showTRUE();
        addPoint();
        okS.play()
    } else {
        showFALSE()
        showCorrectAnswer();
        not_okS.play();
    }
    prepareNext();
    incrementTura();
    
    if(endOfGame()) {
        czas2 = new Date().getTime();
        sumUp();
        start=false;
    } 
}

function sumUp() {
    select('#all').hide();
    select('#restart').show();
    select('.sumup').show();
    select('#points').html(points);
    tura = 1;
    points = 0;
    var czas = floor((czas2 - czas1)/(10*ile_tur))/100;
    select('#time').html(czas);
}

function checkAnswer() {
    num1 = floor(select('#num1').html());
    num2 = floor(select('#num2').html());
    znak = select('#znak').html();
    wynik = floor(select('#input').value());
   if(znak=='+' && wynik==num1+num2 ||
      znak=='-' && wynik==num1-num2) {
       correctAnswer = true;
   } else {
       correctAnswer = false;
   }
}



function endOfGame() {
    if(tura>ile_tur) return true;
    else return false;
}

function showCorrectAnswer() {
    var poprawny;
    num1 = floor(select('#num1').html());
    num2 = floor(select('#num2').html());
    znak = select('#znak').html();
    if(znak=='-') poprawny = num1-num2;
    if(znak=='+') poprawny = num1+num2;
    select('#correct').html(poprawny);
}

function preload() {
    okS = loadSound('sound/goodAnswer.mp3');
    not_okS = loadSound('sound/badAnswer.mp3');
}