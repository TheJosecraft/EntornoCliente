function Figura(n, c, a, p){
    var nombre = n;
    var color = c;
    var area = a;
    var perimetro = p;
    
    this.getNombre = function(){
        return nombre;
    }
    
    this.setNombre = function(nuevo){
        nombre = nuevo;
    }
    
    this.getColor = function(){
        return color;
    }
    
    this.setColor = function(nuevo){
        color = nuevo;
    }
    
    this.getArea = function(){
        return area;
    }
    
    this.setArea = function(nuevo){
        area = nuevo;
    }
    
    this.getPerimetro = function(){
        return perimetro;
    }
    
    this.setPerimetro = function(nuevo){
        perimetro = nuevo;
    }
    
    this.verTodo = function(){
        return "Nombre: " + this.getNombre() + "<br>" +
            "Color: " + this.getColor() + "<br>" +
            "Perímetro: " + this.getPerimetro() + " cm<br>" +
            "Área: " + this.getArea() + " cm2<br>";
    }
}

function Circulo(n, c, a, p, r){
    Figura.call(this, n, c, a, p);
    var radio = r;
    
    this.getRadio = function(){
        return radio;
    }
    
    this.setRadio = function(nuevo){
        radio = nuevo;
    }
    
    this.verMas = function(){
        return "Radio: " + this.getRadio() + " cm<br>";
    }
    
}

function Rectangulo(n, c, a, p, b, al){
    Figura.call(this, n, c, a, p);
    var base = b;
    var altura = al;
    
    this.getBase = function(){
        return base;
    }
    
    this.setBase = function(nuevo){
        base = nuevo;
    }
    
    this.getAltura = function(){
        return altura;
    }
    
    this.setAltura = function(nuevo){
        altura = nuevo;
    }
    
    this.verMas = function(){
        return "Base: " + this.getBase() + " cm<br>" +
            "Altura: " + this.getAltura() + " cm<br>";
    }
    
}

function Cuadrado(n, c, a, p, l){
    Figura.call(this, n, c, a, p);
    var lado = l;
    
    this.getLado = function(){
        return lado;
    }
    
    this.setLado = function(nuevo){
        lado = nuevo;
    }
    
    this.verMas = function(){
        return "Lado: " + this.getLado() + " cm<br>";
    }
    
}

var figura1 = new Figura("Figura 1", "Verde", 25, 20);

document.write(figura1.verTodo() + "<br>");

Circulo.prototype = new Figura;

var circulo1 = new Circulo("Circulo1", "Rojo", 40, 200, 15);

document.write(circulo1.verTodo() + circulo1.verMas() + "<br>");

Rectangulo.prototype =  new Figura;

var rectangulo1 = new Rectangulo("Rectangulo1", "Azul", 40, 200, 10, 20);

document.write(rectangulo1.verTodo() + rectangulo1.verMas() + "<br>");

Cuadrado.prototype = new Figura;

var cuadrado1 = new Cuadrado("Cuadrado1", "Amarillo", 20, 20, 20);

document.write(cuadrado1.verTodo() + cuadrado1.verMas());
