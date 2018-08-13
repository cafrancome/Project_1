(function (dateController, window, undefined) {

    //varibles privadas
    var btn0 = document.getElementById("0");
    var btn1 = document.getElementById("1");
    var btn2 = document.getElementById("2");
    var btn3 = document.getElementById("3");
    var btn4 = document.getElementById("4");
    var btn5 = document.getElementById("5");
    var btn6 = document.getElementById("6");
    var btn7 = document.getElementById("7");
    var btn8 = document.getElementById("8");
    var btn9 = document.getElementById("9");
    var btnPunto = document.getElementById("punto");
    var btnDisplay = document.getElementById("display");
    var btnOn = document.getElementById("on");
    var btnSuma = document.getElementById("mas");
    var btnResta = document.getElementById("menos");
    var btnDivision = document.getElementById("dividido");
    var btnMulti = document.getElementById("por");
    var btnIgual = document.getElementById("igual");
    var btnSign = document.getElementById("sign");
    var variable1 = 0,
        variable2 = 0,
        operador = "";
        contadorP = 0;

    //Varibles Publicas      
    dateController.result;


    //Funciones privadas
    function PrimerDigito(firstVal) {
        var valueDisplay = btnDisplay.innerHTML;
        if (valueDisplay == "0" && firstVal == ".") {
            btnDisplay.innerHTML = valueDisplay;
            return false;
        } else if (valueDisplay == "0") {
            btnDisplay.innerHTML = firstVal;
            return true;
        } else if (valueDisplay != "0") {
            return false;
        }

    }

    function TamañoDisplay(Tamaño) {
        if (Tamaño.length <= 7) {
            return true;
        } else {
            return false;
        }
    }

    function typeNumber(val) {
        if (typeof val == "string") {
            if (val.indexOf("." != -1)) {
                return parseFloat(val);
            }
            return parseInt(val);
        } else if (typeof val != 'number') {
            return parseInt(val);
        } else {
            return val;
        }

    }

    function operacionesBasicas(operador, Valor, valor_2) {
        debugger;
        switch (operador) {
            case "+":
                dateController.result = Valor + valor_2;

                break;
            case "-":
                dateController.result = Valor - valor_2;
                break;
            case "*":
                dateController.result = Valor * valor_2;
                break;
            case "/":
                dateController.result = Valor / valor_2;
                break;
            default:
                break;
        }
    }
    //Funciones publicas 


    //Eventos 
    btnOn.addEventListener("click", function (params) {
        btnDisplay.innerHTML = "0";
        dateController.result = 0;
        variable1 = 0;
        variable2 = 0;
        contadorP = 0;
    })

    btn0.addEventListener("click", function (event) {
        if (PrimerDigito("0") == false) {
            if (TamañoDisplay(btnDisplay.innerHTML)) {
                btnDisplay.innerHTML += "0";
            }
        }
    });

    btn1.addEventListener("click", function (event) {
        if (PrimerDigito("1") == false) {
            if (TamañoDisplay(btnDisplay.innerHTML)) {
                btnDisplay.innerHTML += "1";
            }
        }
    });

    btn2.addEventListener("click", function (event) {
        if (PrimerDigito("2") == false) {
            if (TamañoDisplay(btnDisplay.innerHTML)) {
                btnDisplay.innerHTML += "2";
            }
        }
    });

    btn3.addEventListener("click", function (event) {
        if (PrimerDigito("3") == false) {
            if (TamañoDisplay(btnDisplay.innerHTML)) {
                btnDisplay.innerHTML += "3";
            }
        }
    });

    btn4.addEventListener("click", function (event) {
        if (PrimerDigito("4") == false) {
            if (TamañoDisplay(btnDisplay.innerHTML)) {
                btnDisplay.innerHTML += "4";
            }
        }
    });

    btn5.addEventListener("click", function (event) {
        if (PrimerDigito("5") == false) {
            if (TamañoDisplay(btnDisplay.innerHTML)) {
                btnDisplay.innerHTML += "5";
            }
        }
    });

    btn6.addEventListener("click", function (event) {
        if (PrimerDigito("6") == false) {
            if (TamañoDisplay(btnDisplay.innerHTML)) {
                btnDisplay.innerHTML += "6";
            }
        }
    });

    btn7.addEventListener("click", function (event) {
        if (PrimerDigito("7") == false) {
            if (TamañoDisplay(btnDisplay.innerHTML)) {
                btnDisplay.innerHTML += "7";
            }
        }
    });

    btn8.addEventListener("click", function (event) {
        if (PrimerDigito("8") == false) {
            if (TamañoDisplay(btnDisplay.innerHTML)) {
                btnDisplay.innerHTML += "8";
            }
        }
    });

    btn9.addEventListener("click", function (event) {
        if (PrimerDigito("9") == false) {
            if (TamañoDisplay(btnDisplay.innerHTML)) {
                btnDisplay.innerHTML += "9";
            }
        }
    });

    btnPunto.addEventListener("click", function (event) {
        if (PrimerDigito(".") == false) {
            if (TamañoDisplay(btnDisplay.innerHTML)) {
                if(contadorP < 1){
                    contadorP += 1;
                    btnDisplay.innerHTML += ".";
                }


            }
        }
    });

    btnSuma.addEventListener("click", function (e) {
        variable1 = typeNumber(btnDisplay.innerHTML);
        operador = "+";
        btnDisplay.innerHTML = "";
    });

    btnResta.addEventListener("click", function (e) {
        variable1 = typeNumber(btnDisplay.innerHTML);
        operador = "-";
        btnDisplay.innerHTML = "";
    });

    btnDivision.addEventListener("click", function (e) {
        variable1 = typeNumber(btnDisplay.innerHTML);
        operador = "/";
        btnDisplay.innerHTML = "";
    });

    btnMulti.addEventListener("click", function (e) {
        variable1 = typeNumber(btnDisplay.innerHTML);
        operador = "*";
        btnDisplay.innerHTML = "";
    });

    btnSign.addEventListener("click", function (e) {
        variable1 = typeNumber(btnDisplay.innerHTML);        
        btnDisplay.innerHTML = "-";
    });
    btnIgual.addEventListener("click", function (e) {        
        variable2 = btnDisplay.innerHTML;
        operacionesBasicas(operador, typeNumber(variable1), typeNumber(variable2));
        var r = dateController.result;
        btnDisplay.innerHTML = r.toString().length > 8 ? r.toString().slice(0, 8) : r;
    });

})(window.dateController = window.dateController || {}, window);