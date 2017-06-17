// Sprawdza, czy udzieliłeś poprawną odpowiedź
function correctAnswer() {
    num1 = floor(select('#num1').html());
    num2 = floor(select('#num2').html());
    znak = select('#znak').html();
    wynik = floor(select('#input').value());
	
   if(znak=='+' && wynik==num1+num2 ||
      znak=='-' && wynik==num1-num2) {
       return true;
   } else 
       return false;
}


// Pokazuje poprawną odpowiedź
function showCorrectAnswer() {
    num1 = floor(select('#num1').html());
    num2 = floor(select('#num2').html());
    znak = select('#znak').html();
    
    var poprawny;
    if(znak=='-') poprawny = num1-num2;
    if(znak=='+') poprawny = num1+num2;
    select('#correct').html(poprawny);
}


// Przygotowanie równania, resetowanie czasu
function prepareNext() {
    select('#input').value('');   
    select('.tura').html(tura);
    
    select('#num1').html(floor(random(15,zakres)));
    select('#num2').html(floor(random(5,zakres)));
    if(random(1)<0.5) select('#znak').html('+')
    else select('#znak').html('-');
    
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
    
    select('.ile_tur').html(ile_tur);
}


//  Pokazanie ekranu z rozgrywką
function offStart() {
    select('#all').show();
    select('#restart').hide();
    select('.sumup').hide();
    select('#intro').hide();
}

function showFALSE() {
    select('.false').show();
    select('.true').hide();
}

function showTRUE() {
    select('.true').show();
    select('.false').hide();
}

function addPoint() {
    points++;
}


function incrementTura() {
    tura++;
}

function endOfGame() {
    if(tura>ile_tur) return true;
    else return false;
}

 function timeOver() {
     var c = new Date().getTime();
     if(c - counting > time) return true;
     else return false;
 }
