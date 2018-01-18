$(document).ready(function () {

    var clientes = {
        "cliente1": {
            "nombre": "José Carlos",
            "dni": "31021855F",
            "productos": {
                "producto1": {
                    "referencia": "#00221",
                    "nombre": "Procesador i5-3470",
                    "precio": "112"
                },
                "producto2": {
                    "referencia": "#00237",
                    "nombre": "Gráfica RX 480 8GB",
                    "precio": "220"
                }
            }
        },
        "cliente2": {
            "nombre": "Juan Carlos",
            "dni": "84357849C",
            "productos": {
                "producto1": {
                    "referencia": "#00321",
                    "nombre": "NVIDIA TITAN XP",
                    "precio": "1250"
                },
                "producto2": {
                    "referencia": "#03687",
                    "nombre": "Xiaomi Redmi Note 4 SD",
                    "precio": "114"
                }
            }
        },
        "cliente3": {
            "nombre": "José Antonio",
            "dni": "31542367P",
            "productos": {
                "producto1": {
                    "referencia": "#02341",
                    "nombre": "SSD Crucial MX 300",
                    "precio": "95"
                },
                "producto2": {
                    "referencia": "#32423",
                    "nombre": "Pantall Benq 27",
                    "precio": "220"
                }
            }
        }
    }

    var dni = prompt("Introduce el dni del cliente");
    var datos;

    for (var cliente in clientes) {
        if (dni == clientes[cliente]["dni"]) {
            datos = clientes[cliente];
        }
    }
    
    var info = $("#info");
    
    var productos = datos["productos"];
    
    var dinero = 0;
    
    info.append("<h3>Nombre</h3>");
    info.append("<p>" + datos["nombre"] + "</p>");
    
    info.append("<h3>Productos</h3>");
    for(var producto in productos){
        info.append("<p>" + productos[producto]["nombre"] + "</p>");
        dinero += parseInt(productos[producto]["precio"]);
    }
    
    info.append("<h3>Precio</h3>");
    
    info.append("<p>" + dinero + " €</p>");
    
    console.log(datos);

});
