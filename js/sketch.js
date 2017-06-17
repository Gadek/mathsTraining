var num1,num2,znak,tura=1,points=0,czas1, czas2, sek,start=false,counting,goodAnswer,badAnswer;
var ile_tur , time, zakres;


$('#restart').click(startGame); //zapis w jQuery

document.getElementById('input').addEventListener("change",count); //zapis w oryginalnym JS


// ----  GRA NA CZAS
function draw() {
    if(start) {
        
        // --- Jeśli czas na odpowiedź minął
        if(timeOver()){
            showFALSE();
            badAnswer.play();
            showCorrectAnswer();
           
           if(!endOfGame()) {
				incrementTura();
				prepareNext();
			} else {
				czas2 = new Date().getTime();
				sumUp();
				start=false;
			}   
        }
    }
}
// ----



//  Kliknięcie w przycisk START
function startGame() {
    tura = 1;
    points = 0;
    pobierzZakres();
    pobierzCzas();
    prepareNext();
    pobierzTury();
    
    offStart();
    czas1 = new Date().getTime();
    counting = czas1;
    start = true;
}



// Kiedy udzielisz odpowiedzi
function count() {
    
    if(correctAnswer()) {
        showTRUE();
        addPoint();
        goodAnswer.play()
    } else {
        showFALSE()
        badAnswer.play();
        showCorrectAnswer();
    }
    
	if(!endOfGame()) {
        incrementTura();
		prepareNext();
    } else {
		czas2 = new Date().getTime();
        sumUp();
        start=false;
	}    
}




// Kiedy skończą się wszystkie tury
function sumUp() {
    select('#all').hide();
    select('#restart').show();
    select('.sumup').show();
    select('#intro').show();
    select('#points').html(points);
    select('.true').hide();
    select('.false').hide();
    var sredniCzas = floor((czas2 - czas1)/(10*ile_tur))/100;
    select('#time').html(sredniCzas);
}


function preload() {
    goodAnswer = loadSound('sound/goodAnswer.mp3');
    badAnswer = loadSound('sound/badAnswer.mp3');
}
