class Figura {
    constructor(nombre, color, area, perimetro) {
        this.nombre = nombre;
        this.color = color;
        this.area = area;
        this.perimetro = perimetro;
    }

    nuevoNombre(n) {
        this.nombre = n;
    }

    get verNombre() {
        return this.nombre;
    }

    nuevoColor(c) {
        this.color = c;
    }

    get verColor() {
        return this.color;
    }

    get verArea() {
        return this.area;
    }

    get verTodo() {
        return "Nombre: " + this.nombre + "<br>" +
            "Color: " + this.color + "<br>" +
            "Perímetro: " + this.perimetro + " cm<br>" +
            "Área: " + this.area + " cm2<br>";
    }
}

class Circulo extends Figura{
    constructor(nombre, color, area, perimetro, radio) {
        super(nombre, color, area, perimetro);
        this.radio = radio;
        this.diametro = radio * 2;
        this.area = Math.PI * (radio * radio);
    }
    
    get verTodo(){
        return super.verTodo + 
        "Radio: " + this.radio + " cm<br>" +
            "Diámetro: " + this.diametro + " cm<br>";
    }
}

class Rectangulo extends Figura{
    constructor(nombre, color, area, perimetro, base, altura) {
        super(nombre, color, area, perimetro);
        this.base = base;
        this.altura = altura;
        this.area = base * altura;
        this.perimetro = (base * 2) + (altura * 2); 
        
    }
    
    get verTodo(){
        return super.verTodo + 
        "Base: " + this.base + " cm<br>" +
            "Altura: " + this.altura + " cm<br>";
    }
}

class Cuadrado extends Figura{
    constructor(nombre, color, area, perimetro, lado) {
        super(nombre, color, area, perimetro);
        this.lado = lado;
        this.perimetro = lado * 4;
        this.area = lado * lado;
    }
    
    get verTodo(){
        return super.verTodo + 
        "Lado: " + this.lado + "<br>";
    }
}

var figura1 = new Figura("Figura 1", "Verde", 25, 20);

document.write(figura1.verTodo + "<br>");

var circulo1 = new Circulo("Circulo1", "Rojo", 40, 200, 15, 30);

document.write(circulo1.verTodo + "<br>");

var rectangulo1 = new Rectangulo("Rectangulo1", "Azul", 40, 200, 10, 20);

document.write(rectangulo1.verTodo + "<br>");

var cuadrado1 = new Cuadrado("Cuadrado1", "Amarillo", 20, 20, 20);

document.write(cuadrado1.verTodo);
