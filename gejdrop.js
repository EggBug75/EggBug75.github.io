var skrzynie = [
    { nazwa: "TECH", cena: 3 },
    { nazwa: "ADVANCE", cena: 2 },
    { nazwa: "MILSPEC", cena: 1.15 },
    { nazwa: "ICE BLAST", cena: 1.60 },
    { nazwa: "KICK", cena: 2 },
    { nazwa: "TEETH", cena: 2.80 },
    { nazwa: "STACK", cena: 2 },
    { nazwa: "BEAST", cena: 3 }
];

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
script.onload = function() {
    var mozliwe = $("*:contains('Możliwe do dołączenia'):last");
    mozliwe.click();
    mozliwe.css("color", "green");
    Lista();
};
document.head.appendChild(script);

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function Lista() {
    var listContainer = document.createElement('div');
    listContainer.style.position = 'fixed';
    listContainer.style.top = '0';
    listContainer.style.left = '0';
    listContainer.style.right = '0';
    listContainer.style.padding = '10px';
    listContainer.style.background = 'black';
    listContainer.style.border = '1px solid #ccc';
    listContainer.style.maxHeight = '100%';
    listContainer.style.overflowY = 'auto';
    listContainer.style.zIndex = '9999';
    listContainer.style.color = 'white';

    listContainer.innerHTML = '<h1>Skrzynki do otworzenia:</h1><br>';
    document.body.appendChild(listContainer);

    var ul = document.createElement('ul');
    ul.style.listStyleType = 'none';
    ul.style.padding = '0';
    listContainer.appendChild(ul);

    skrzynie.forEach(function (skrzynia) {
        var li = document.createElement('li');
        li.textContent = `${skrzynia.nazwa} - ${skrzynia.cena} zł`;
        li.style.cursor = 'pointer';

        li.addEventListener('click', function () {
            if (li.style.backgroundColor === 'red') {
                li.style.backgroundColor = 'black';
            } else {
                li.style.backgroundColor = 'red';
            }
        });

        ul.appendChild(li);
    });

    var separator = document.createElement('div');
    separator.style.height = '20px';
    listContainer.appendChild(separator);

    var button = document.createElement('button');
    button.textContent = 'Start';
    button.onclick = Save;
    listContainer.appendChild(button);

    function Save() {
        skrzynie = [];
        var zaznaczoneSkrzynie = [];
        var lis = ul.querySelectorAll('li');

        lis.forEach(function (li) {
            if (li.style.backgroundColor === 'red') {
                var [nazwa, cena] = li.textContent.split(' - ');
                cena = parseInt(cena);
                var skrzynia = { nazwa, cena };
                zaznaczoneSkrzynie.push(skrzynia);
                skrzynie.push(skrzynia); 
                li.style.backgroundColor = 'black';
            }
        });
        listContainer.remove();
        Start();
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

function check() {
    if (document.querySelector('.css-d45wua').querySelectorAll('.w-fit')[0].getElementsByTagName('svg').length) {
        var element = document.querySelector('.css-d45wua').querySelectorAll('.my-10')[0];
        if (skrzynie.some(skrzynia => element.textContent.includes(skrzynia.nazwa))) {
            document.getElementsByClassName("button ml-1 mr-5 h-12 w-auto flex-1 button-green-dimmed")[0].click();
        }
    }
}
