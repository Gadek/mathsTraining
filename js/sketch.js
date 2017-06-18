// --- Zarezerwuj zmienne
var num1,num2,znak,tura=1,points=0,czas1, czas2, sek,start=false,counting,goodAnswer,badAnswer,go=false;
var ile_tur , time, zakres;

// --- Wczytaj dźwięki
badAnswer = new Audio("sound/badAnswer.mp3");
goodAnswer = new Audio("sound/goodAnswer.mp3");

// --- Ustaw zdarzenia
document.getElementById('restart').addEventListener("click",restartButton);
document.getElementById('input').addEventListener("change",count);




// ----  GRA NA CZAS
function countDown() {
    if(go) {

    // --- Jeśli czas na odpowiedź minął
        if(timeOver()) {
            showFALSE();
            playBadAnswer();
            showCorrectAnswer();

            if(!endOfGame()) {
                incrementTura();
                prepareNext();
            } else {
                stopCountingDown();
                go=false;
                sumUp();
            }
        }
    }
}



//  Kliknięcie w przycisk START
function restartButton() {
    tura = 1;
    points = 0;
    pobierzZakres();
    pobierzCzas();
    pobierzTury();
    prepareNext();
    
    offStart();
    startCountingDown();
}



// Kiedy udzielisz odpowiedzi
function count() {

    if(correctAnswer()) {
        showTRUE();
        goodAnswer.play();
        addPoint();
    } else {
        showFALSE();
        playBadAnswer();
        showCorrectAnswer();
    }

	if(!endOfGame()) {
        incrementTura();
        prepareNext();
    } else {
        stopCountingDown();
        sumUp();
        go=false;
	}
}
