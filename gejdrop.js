var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
script.onload = function() {
  var elementZTekstem = $("*:contains('Możliwe do dołączenia'):last");
  elementZTekstem.click();
  elementZTekstem.css("color", "green");
  setTimeout(Start, 500);
};
document.head.appendChild(script);

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function check() {
    if (document.querySelector('.css-d45wua').querySelectorAll('.w-fit')[0].getElementsByTagName('svg').length) {
        document.getElementsByClassName("button ml-1 mr-5 h-12 w-auto flex-1 button-green-dimmed")[0].click();
    }
}

function Start() {
    var petle = 50000;
    var opoznienie = 0;
    var przerwa = 10;
    for (let i = 0; i < petle; i++) {
        delay(opoznienie).then(() => check());
        opoznienie += przerwa;
    }
}