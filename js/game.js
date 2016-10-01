// game.js

// start a new game
$('#new-game').on('click', function() {
    $('.game').removeClass('hide');
    $(this).text("Reset");
    randomWord();
});

// disable letters when clicked
$('.letter').on('click', function() {
    $(this).addClass('letter-disable');
});

// request random word from CDN
function randomWord() {
        var requestStr = "http://randomword.setgetgo.com/get.php";

        $.ajax({
            type: "GET",
            url: requestStr,
            dataType: "jsonp",
            jsonpCallback: 'randomWordComplete'
        });
    }

function randomWordComplete(data) {
    var word = data.Word;
    alert(word); // testing
    var spaces = word.length;
    alert(spaces); // testing
}