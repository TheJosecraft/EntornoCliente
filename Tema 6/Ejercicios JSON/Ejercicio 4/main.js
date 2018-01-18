$(document).ready(function () {

    var diccionario = {
        "A": "·-",
        "B": "-···",
        "C": "-·-·",
        "D": "-··",
        "E": "·",
        "F": "··-·",
        "G": "--·",
        "H": "····",
        "I": "··",
        "J": "·---",
        "K": "-·-",
        "L": "·-··",
        "M": "--",
        "N": "-·",
        "O": "---",
        "P": "·--·",
        "Q": "--·-",
        "R": "·-·",
        "S": "···",
        "T": "-",
        "U": "··-",
        "V": "···-",
        "W": "·--",
        "X": "-··-",
        "Y": "-·--",
        "Z": "--··",
        "1": "·----",
        "2": "··---",
        "3": "···--",
        "4": "····-",
        "5": "·····",
        "6": "-····",
        "7": "--···",
        "8": "---··",
        "9": "----·",
        "0": "-----"
    };

    $("#traducir").click(function () {

        var texto = $("#entrada").val().split(" ");
        var resultado = "";

        for (var i = 0; i < texto.length; i++) {
            for (var j = 0; j < texto[i].length; j++) {
                for (var letra in diccionario) {
                    if (texto[i][j].toUpperCase() == letra) {
                        console.log(letra);
                        resultado += diccionario[letra];
                        
                    }

                }
                resultado += " ";
            }

        }
        
        console.log(resultado);
        
        $("#salida").val(resultado);

    });

});
