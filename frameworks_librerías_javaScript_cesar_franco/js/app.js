var game = (function (window, undefined) {
    //objeto a retornar
    var result = {};
    //Propiedades
    this._img = [1, 2, 3, 4];
    this._col = 7;
    this._filas = 7;
    this.matriz = [];
    this.contadorElemntos = 0;
    this.color = true;


    //Funciones privadas   
    function DragAndDrop(elem) {
        $(elem).draggable({
            revert: "invalid",
            cursor: "move",
            helper: "clone",
            start: function (e, ui) {
                console.log(ui.helper);
            },
            stop: function (e, ui) {

            }
        });
        $(elem).droppable({
            drop: function (event, ui) {
                console.log(ui);
                var from = $(ui.draggable),
                    to = $(this);
                var $dragElem = from.clone().replaceAll(to);
                to.replaceAll(from);
                DragAndDrop(this);
                DragAndDrop($dragElem);
                movimientos();
            }
        });
    }

    function movimientos() {
        var total = Number($('#movimientos-text').text());
        total += 1;
        $('#movimientos-text').text(total);
    }

    function removeItems(element) {
        for (let i = 0; i < element.length; i++) {
            var item = $(element[i]);
            item.addClass('glow').animate({
                marginTop: 40,
                marginLeft: 40,
                height: 0,
                width: 0
            }, 800, function () {
                $(this).remove();
                ScoreUpdate(100);
            });
        }
    }

    function newitemline() {
        var tablero = $('div.panel-tablero').children();
        for (let i = 0; i < tablero.length; i++) {
            var Column = tablero[i].children;
            var limit = 7 - Column.length;
            if (limit > 0) {
                for (let z = 0; z < limit; z++) {
                    var index = _img[Math.floor(Math.random() * _img.length)];
                    var elemento = document.createElement('img');
                    elemento.setAttribute('src', 'image/' + index + '.png');
                    elemento.setAttribute('data-value', index.toString());
                    elemento.setAttribute('data-position', i.toString() + ',' + contadorElemntos.toString());
                    elemento.setAttribute('id', contadorElemntos);
                    $(tablero[i]).prepend(elemento);
                    DragAndDrop("#" + contadorElemntos.toString());
                    contadorElemntos += 1;
                }
            }
        }
        result.checklines();
    }

    function ScoreUpdate(Score) {
        var total = Number($('#score-text').text());
        total += Score;
        $('#score-text').text(total);
    }

    //Funciones publicas
    result.randomImage = function () {
        var conR = 1;
        var conF = 1;
        for (let i = 0; i < _col; i++) {
            for (let j = 0; j < _filas; j++) {
                var index = _img[Math.floor(Math.random() * _img.length)];
                var elemento = document.createElement('img');
                elemento.setAttribute('src', 'image/' + index + '.png');
                elemento.setAttribute('data-value', index.toString());
                elemento.setAttribute('data-position', i.toString() + ',' + j.toString());
                elemento.setAttribute('id', conF);
                document.getElementById('c' + conR.toString()).appendChild(elemento);
                DragAndDrop("#" + conF.toString());
                conF += 1;
                contadorElemntos += 1;
            }
            conR += 1;
        }

    };

    result.checklines = function () {
        var tablero = $('div.panel-tablero').children();
        for (let i = 0; i < tablero.length; i++) {
            // console.log(tablero[i]);
            var Column = tablero[i].children;
            for (let z = 0; z < Column.length; z++) {
                var type = $(Column[z]);
                var type2 = $(Column[z + 1]);
                var type3 = $(Column[z - 1]);
                //validacion vertical
                if (type.data('value') === type2.data('value') && type.data('value') === type3.data('value')) {
                    removeItems([type, type2, type3]);
                }

                //validacion horizontal
                if (i != 0 && i != 6) {
                    type2 = $(tablero[i + 1].children[z]);
                    type3 = $(tablero[i - 1].children[z]);
                    if (type.data('value') === type2.data('value') && type.data('value') === type3.data('value')) {
                        removeItems([type, type2, type3]);
                    }

                }
            }
        }
        setTimeout($.proxy(newitemline, this), 1000);
    }

    result.changeColor = function () {        
        if (color) {
            $('h1.main-titulo').css({
                'color': '#DCFF0E'
            });
            color = false;
        } else {
            $('h1.main-titulo').css({
                'color': '#fff'
            });
            color = true;
        }
    }


    $('#btn-reinicio').on('click', function () {
        $(this).text('Reiniciar');
        location.reload();
    });


    return result;
})(window);

//Document ready
$(document).ready(function () {
    game.randomImage();
    game.checklines();
    setTimeout(Timer.Decrement(), 3000);
    newFunction();
});


function newFunction() {
    setInterval(function () {
        game.changeColor();
    }, 2000);
}
// $(function () {

// });
// setTimeout(game.checklines(), 1000);