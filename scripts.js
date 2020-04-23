let color = 'purple';
let number = 10;
let word = 'cool';

if (color === 'purple') {
    $('.n').css('background-color', color);
}

if (number > 100) {
    $('.e').text("whoah, that's a big number.");
} else {
    $('.e').text("just a regular number, please.");
}