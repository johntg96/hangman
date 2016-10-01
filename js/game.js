// game.js

var numWrong = 0;

// start a new game
$('#new-game').on('click', function() {
    $('.game').removeClass('hide');
    $(this).addClass("hide");
    $('#reset').removeClass('hide');
    randomWord();
});

// reset game
function reset() {
    $('.drawing').html("");
    $('#num-wrong').text("");
    $('.letter').removeClass('letter-disable');
    numWrong = 0;
    randomWord();
}

$('#reset').on('click', function() {
    reset();
});

// request random word from CDN
function randomWord() {
        var requestStr = "http://randomword.setgetgo.com/get.php";

        $.ajax({
            type: "GET",
            url: requestStr,
            dataType: "jsonp",
            jsonpCallback: 'guessWord'
        });
    }

function guessWord(data) {
    var word = data.Word.toUpperCase();
    console.log(word);
    var wordLetters = word.split("");

    for (var i = 0; i < wordLetters.length; i++) {
        var letterSpace = "<span class='letter-spaces letter-" + wordLetters[i] + "'>_</span>";
        $('.drawing').append(letterSpace);
    }

    $('#num-wrong').text("# wrong guesses: " + numWrong);

    // disable letters when clicked
    $('.letter').on('click', function() {
        $(this).addClass('letter-disable');
        // if letter exists in word
        console.log(numWrong);
        var guessLetter = word.indexOf($(this).text());
        var letterPick = $(this).text();
        var letterPickID = ".letter-" + letterPick;
        if (($('letter-spaces').has(letterPickID)) && (guessLetter !== -1) && (numWrong <= word.length + 4)) {
            $(letterPickID).text(letterPick);
        } else if (numWrong >= word.length + 4) {
            $('.drawing').append("<h2 id='game-over'>Game Over!</h2>");
            endGame();
        }
        else {
            console.log("Wrong");
            numWrong++;
            $('#num-wrong').text("# wrong guesses: " + numWrong);
        }
    });
}

function endGame() {
    console.log("YOU LOST LOSER.");
}