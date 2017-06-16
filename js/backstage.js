function showAndHideWhatNecessary() {
    select('.tura').html(tura);
    select('.true').hide();
    select('.false').hide();
}

function incrementTura() {
    tura++;
    select('.tura').html(tura);
}


function prepareNext() {
    select('#input').value('');
    select('#num1').html(floor(random(100)));
    select('#num2').html(floor(random(100)));
    if(random(1)<0.5) select('#znak').html('+')
    else select('#znak').html('-');
}


function addPoint() {
    points++;
}


function showFALSE() {
    select('.false').show();
    select('.true').hide();
}

function showTRUE() {
    select('.true').show();
    select('.false').hide();
}

function offStart() {
    select('#all').show();
    select('#restart').hide();
    select('.sumup').hide();
}
