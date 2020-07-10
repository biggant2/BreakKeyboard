let interval;

function start() {
    $(document).unbind("keypress");
    $('#start-container').hide();
    $('#text').show();

    interval = setInterval(updateTimer, 1000);

    document.onkeypress = (e) => {
        e = e || window.event;
        let character = String.fromCharCode(e.charCode);
        updateCharacters();
    
        let area = $('#area');
        area.append(character);

        area = area[0]
        if(area.selectionStart == area.selectionEnd) {
            area.scrollTop = area.scrollHeight;
         }
    };
}

function updateTimer() {
    let currNum = parseInt($('#timer').html());
    if(currNum === 60) {
        clearInterval(timer);
        return document.onkeypress = null;
    }
    currNum++;

    $('#timer').html(currNum);
}

function updateCharacters() {
    let characterString = $('#words').text();
    let currNum = parseInt(characterString.match(/([0-9]+?)( characters?)/)[0]);
    currNum++;

    let newNum = (currNum === 1) ? `${currNum} character` : `${currNum} characters`;
    $('#words').html(newNum);
}

$(document).keypress((event) => { 
    if (event.keyCode === 13) { 
        $("#start").click(); 
    } 
}); 