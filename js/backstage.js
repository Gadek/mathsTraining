// --- Sprawdza, czy udzieliłeś poprawną odpowiedź
function correctAnswer() {
    num1 = Math.floor(document.getElementById('num1').innerHTML);
    num2 = Math.floor(document.getElementById('num2').innerHTML);
    znak = document.getElementById('znak').innerHTML;
    wynik = Math.floor(document.getElementById('input').value);

   if(znak=='+' && wynik==num1+num2 ||
      znak=='-' && wynik==num1-num2) {
       return true;
   }
}

// ---  Pokazuje poprawną odpowiedź
function showCorrectAnswer() {
    num1 = Math.floor(document.getElementById('num1').innerHTML);
    num2 = Math.floor(document.getElementById('num2').innerHTML);
    znak = document.getElementById('znak').innerHTML;

    var poprawny;
    if(znak=='-') poprawny = num1-num2;
    if(znak=='+') poprawny = num1+num2;
    document.getElementById('correct').innerHTML = poprawny;
}


// ---  Przygotowuje równania i resetuje czas
function prepareNext() {
    document.getElementById('input').value = '';
    document.getElementById('tura').innerHTML = tura;

    document.getElementById('num1').innerHTML = Math.floor(Math.random()*zakres);
    document.getElementById('num2').innerHTML = Math.floor(Math.random()*zakres);
    if(Math.random()<0.5) document.getElementById('znak').innerHTML = '+'
    else document.getElementById('znak').innerHTML = '-'

    counting = new Date().getTime();
}

// radio  input - wybór zakresu liczb
function pobierzZakres() {
    if(document.getElementById('n1').checked) zakres = Math.floor(document.getElementById('n1').value);
    if(document.getElementById('n2').checked) zakres = Math.floor(document.getElementById('n2').value);
    if(document.getElementById('n3').checked) zakres = Math.floor(document.getElementById('n3').value);
    if(document.getElementById('n4').checked) zakres = Math.floor(document.getElementById('n4').value);
    if(document.getElementById('n5').checked) zakres = Math.floor(document.getElementById('n5').value);
}

// radio  input - wybór czasu na turę
function pobierzCzas() {
    if(document.getElementById('m1').checked) time = Math.floor(document.getElementById('m1').value);
    if(document.getElementById('m2').checked) time = Math.floor(document.getElementById('m2').value);
    if(document.getElementById('m3').checked) time = Math.floor(document.getElementById('m3').value);
    if(document.getElementById('m4').checked) time = Math.floor(document.getElementById('m4').value);
    if(document.getElementById('m5').checked) time = Math.floor(document.getElementById('m5').value);
}

// radio  input - wybór ilości tur
function pobierzTury() {
    if(document.getElementById('l1').checked) ile_tur = Math.floor(document.getElementById('l1').value);
    if(document.getElementById('l2').checked) ile_tur = Math.floor(document.getElementById('l2').value);
    if(document.getElementById('l3').checked) ile_tur = Math.floor(document.getElementById('l3').value);
    if(document.getElementById('l4').checked) ile_tur = Math.floor(document.getElementById('l4').value);
    if(document.getElementById('l5').checked) ile_tur = Math.floor(document.getElementById('l5').value);

    document.getElementById('ile_tur').innerHTML = ile_tur;
}

// --- Pokazanie ekranu z rozgrywką i schowanie początku
function offStart() {
    document.getElementById('stylizing').style.display = 'none';
    document.getElementById('all').style.display = 'block';
    document.getElementById('restart').style.display = 'none';
    document.getElementById('sumUp').style.display = 'none';
    document.getElementById('intro').style.display = 'none';
}

// --- Pokazuje informacje o błednej odpowiedzi
function showFALSE() {
    document.getElementsByClassName('false')[0].style.display = 'block';
    document.getElementsByClassName('true')[0].style.display = 'none';
}

// --- Pokazuje informacje o prawidłowej odpowiedzi
function showTRUE() {
    document.getElementsByClassName('false')[0].style.display = 'none';
    document.getElementsByClassName('true')[0].style.display = 'block';
}

// --- Dodaje punkt, gdy udzieliłeś poprawnej odpowiedzi
function addPoint() {
    points++;
}

// --- Zwiększa liczbę tur
function incrementTura() {
    tura++;
}

// --- Sprawdza, czy to jest ostatnia tura
function endOfGame() {
    if(tura == ile_tur) return true;
    else return false;
}


// --- Sprawdza, czy czas na pojedynczą odpowiedź minął
 function timeOver() {
     var c = new Date().getTime();
     if(c - counting > time) return true;
     else return false;
 }

// --- Zaczyna odmierzać czas
function startCountingDown() {
    czas1 = new Date().getTime();
    counting = czas1;
    go=true
    setInterval(countDown,1)
}

// --- Zatrzymuje odliczanie czasu
function stopCountingDown() {
    czas2 = new Date().getTime();
}

// --- Pokazuje ekran z podsumowaniem
function sumUp() {
    document.getElementById('all').style.display = 'none';
    document.getElementById('restart').style.display = 'block';
    document.getElementById('sumUp').style.display = 'block';
    document.getElementById('intro').style.display = 'block';
    document.getElementsByClassName('true')[0].style.display = 'none';
    document.getElementsByClassName('false')[0].style.display = 'none';
    
    
    // --- Napisz ile otrzymanych punktów
    document.getElementById('points').innerHTML = points;
    if(points==1) {
        document.getElementById('word-points').innerHTML = 'punkt'
    } else if(points>1 && points<5) {
        document.getElementById('word-points').innerHTML = 'punkty'
    } else if(points==0 || points>=5) {
        document.getElementById('word-points').innerHTML = 'punktów'
    }
    
    // --- Napisz średni czas
    var averageTime = Math.floor((czas2 - czas1)/(10*ile_tur))/100;
    document.getElementById('time').innerHTML = averageTime;
}

// --- Odgrywa dźwięk na złą odpowiedź
function playBadAnswer() {
    badAnswer.currentTime = 0;
    badAnswer.play();
}
