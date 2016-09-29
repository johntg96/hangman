// game.js

var mainTitle = document.querySelector('#big-title');
var newGameBtn = document.querySelector('#new-game');

mainTitle.addEventListener('mouseover', function() {
    this.style.color = "blue";
});

mainTitle.addEventListener('mouseleave', function() {
    this.style.color = "black";
});

