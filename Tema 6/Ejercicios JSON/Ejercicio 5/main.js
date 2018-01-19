$(document).ready(function () {

    var clientes = [
        {
            "nombre": "José Carlos",
            "dni": "31021855F",
            "productos": [
                {
                    "referencia": "#00221",
                    "nombre": "Procesador i5-3470",
                    "precio": 112
                },
                {
                    "referencia": "#00237",
                    "nombre": "Gráfica RX 480 8GB",
                    "precio": 220.5
                }
            ]
        },
        {
            "nombre": "Juan Carlos",
            "dni": "84357849C",
            "productos": [
                {
                    "referencia": "#00321",
                    "nombre": "NVIDIA TITAN XP",
                    "precio": 1199.90
                },
                {
                    "referencia": "#03687",
                    "nombre": "Xiaomi Redmi Note 4 SD",
                    "precio": 114
                }
            ]
        },
        {
            "nombre": "José Antonio",
            "dni": "31542367P",
            "productos": [
                {
                    "referencia": "#02341",
                    "nombre": "SSD Crucial MX 300",
                    "precio": 95
                },
                {
                    "referencia": "#32423",
                    "nombre": "Pantall Benq 27",
                    "precio": 220
                }
            ]
        }
    ];

    var info = $("#info");
    console.log(clientes);

    $("#mostrar").click(function () {

        var dni = prompt("Introduce el dni del cliente");
        var datos;

        for (var cliente in clientes) {
            if (dni == clientes[cliente]["dni"]) {
                datos = clientes[cliente];
            }
        }

        var productos = datos["productos"];

        var dinero = 0;

        info.append("<h3>Nombre</h3>");
        info.append("<p>" + datos["nombre"] + "</p>");

        info.append("<h3>Productos</h3>");
        for (var producto in productos) {
            info.append("<p>" + productos[producto]["nombre"] + "</p>");
            dinero += productos[producto]["precio"];
        }

        info.append("<h3>Precio</h3>");

        info.append("<p>" + dinero + " €</p>");

        console.log(datos);

    });

});
