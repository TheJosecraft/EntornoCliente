$(document).ready(Inicio);

var base_juego = [{
        "palabra": "Monumento",
        "definicion": "Construccion historica que refleja un hecho",
        "estado": 0,
        "moneda": 0
    },
    {
        "palabra": "Salida",
        "definicion": "Por donde se sale de un lugar",
        "estado": 0,
        "moneda": 0
    },
    {
        "palabra": "Excelente",
        "definicion": "Mejor que bien",
        "estado": 0,
        "moneda": 0
    },
    {
        "palabra": "Bañador",
        "definicion": "Prenda acuatica",
        "estado": 0,
        "moneda": 0
    },
    {
        "palabra": "Plastico",
        "definicion": "Material derivado del petroleo",
        "estado": 0,
        "moneda": 0
    },
    {
        "palabra": "Ordenador",
        "definicion": "Dispositivo programable",
        "estado": 0,
        "moneda": 0
    },
    {
        "palabra": "Chaqueta",
        "definicion": "Prenda de vestir",
        "estado": 0,
        "moneda": 0
    },
    {
        "palabra": "Coche",
        "definicion": "Vehiculo propulsado a motor",
        "estado": 0,
        "moneda": 0
    },
    {
        "palabra": "Avion",
        "definicion": "Vehiculo con alas",
        "estado": 0,
        "moneda": 0
    }
];

var tablero_json = [];
var puntuacion = 0;
var contadorMonedas = 0;

function Inicio() {
    var fila;
    var tabla = $("<table></table>");
    var celda;
    var palabra_aleatoria;
    var utilizadas = [];
    var monedas = [];

    var contador = 1;
    var asigMonedas = 0;

    $("#jugar").click(function() {
        location.reload();
    });

    do {

        var aleatorio = Math.floor(Math.random() * base_juego.length + 1);
        if (monedas.indexOf(aleatorio) == -1) {
            monedas[asigMonedas] = aleatorio;
            asigMonedas++;
        }

    } while (asigMonedas < 3)

    for (var i = 1; i <= 3; i++) {
        fila = $("<tr></tr>");
        for (var j = 1; j <= 3; j++) {
            posicion = CogeAleatoria(base_juego, utilizadas);
            celda = $("<td id='casilla" + contador + "'>" + base_juego[posicion]["palabra"][0] + "</td>");

            fila.append(celda);
            celda.click(Mostrar);
            json_celda = {};
            json_celda["id"] = "casilla" + contador;
            json_celda["palabra"] = base_juego[posicion]["palabra"];
            json_celda["definicion"] = base_juego[posicion]["definicion"];
            json_celda["estado"] = base_juego[posicion]["estado"];
            if (monedas.indexOf(contador) != -1) {
                json_celda["moneda"] = 1;
            } else {
                json_celda["moneda"] = base_juego[posicion]["moneda"];
            }

            tablero_json.push(json_celda);
            contador++;
        }
        tabla.append(fila);
    }


    $("body").append(tabla);
}

function Mostrar() {
    var id = $(this).attr("id");
    var respuesta;
    for (var i in tablero_json) {
        if (tablero_json[i]["id"] == id) {
            if (tablero_json[i]["estado"] < 2) {
                respuesta = prompt(tablero_json[i]["definicion"]);
                if (respuesta == tablero_json[i]["palabra"]) {
                    tablero_json[i]["estado"] = 3;
                    if (tablero_json[i]["moneda"] == 1) {
                        $(this).addClass("moneda");
                        $(this).text("");
                        contadorMonedas++;
                    } else {
                        $(this).addClass("correcto");
                    }

                    if (contadorMonedas == 3) {
                        $("td").off();
                        $("#resultado").text("¡HAS GANADO!");
                        $("#jugar").css("display", "block");
                    }

                    puntuacion = puntuacion + 5;
                    $("#puntuacion").text("Puntuación: " + puntuacion);
                } else {
                    tablero_json[i]["estado"]++;
                    if (tablero_json[i]["estado"] == 1) {
                        $(this).addClass("peligro");
                    } else if (tablero_json[i]["estado"] == 2) {
                        $(this).addClass("pierde").removeClass("peligro");
                        if (tablero_json[i]["moneda"] == 1) {
                            $("td").off();
                            $("#resultado").text("¡HAS PERDIDO!");
                            $("#jugar").css("display", "block");
                        }
                    }

                    puntuacion = puntuacion - 3;
                    $("#puntuacion").text("Puntuación: " + puntuacion);
                }
            }
        }
    }
}

function CogeAleatoria(juego, utilizadas) {
    var posicion;
    do {
        posicion = Math.floor(Math.random() * juego.length);
    } while (utilizadas.indexOf(posicion) != -1);

    utilizadas.push(posicion);
    return posicion;
}