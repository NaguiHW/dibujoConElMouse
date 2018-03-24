var villa = document.getElementById("canva");
var lienzo = villa.getContext("2d");
document.addEventListener("keydown", moverTeclado);

var fondo = {
    url: "tile.png",
    cargaOk: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOk: false,
    x: 210,
    y: 210
};

var pollo = {
    url: "pollo.png",
    cargaOk: false,
    cantidad: aleatorio(1, 5)
}

var vaca = {
    url: "vaca.png",
    cargaOk: false,
    cantidad: aleatorio(1, 5)
}

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar();
}

function cargarCerdo()
{
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollo()
{
    pollo.cargaOk = true;
    pollo.x = [];
    pollo.y = [];
    for(var p=0; p<pollo.cantidad; p++)
    {
        pollo.x[p] = aleatorio(0, 7) * 60;
        pollo.y[p] = aleatorio(0, 7) * 60;
    }
    dibujar();
}

function cargarVaca()
{
    vaca.cargaOk = true;
    vaca.x = [];
    vaca.y = [];
    for(var v=0; v<vaca.cantidad; v++)
    {
        vaca.x[v] = aleatorio(0, 7) * 60;
        vaca.y[v] = aleatorio(0, 7) * 60;
    }
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOk)
    {
        lienzo.drawImage(fondo.imagen, 0, 0);
    }
    if(pollo.cargaOk)
    {
        for(var p2=0; p2<pollo.cantidad; p2++)
        {
            lienzo.drawImage(pollo.imagen, pollo.x[p2], pollo.y[p2]);
        }
    }
    if(vaca.cargaOk)
    {
        for(var v2=0; v2<vaca.cantidad; v2++)
        {
            lienzo.drawImage(vaca.imagen, vaca.x[v2], vaca.y[v2]);
        }
    }
    if(cerdo.cargaOk)
    {
        lienzo.drawImage(cerdo.imagen, cerdo.x, cerdo.y);
    }
}

function moverTeclado(evento)
{
    var movimiento = 5;
    switch(evento.keyCode)
    {
        case teclas.UP:
            cerdo.y = cerdo.y - movimiento;
            dibujar(cerdo.x, cerdo.y);
        break;
        case teclas.DOWN:
            cerdo.y = cerdo.y + movimiento;
            dibujar(cerdo.x, cerdo.y);
        break;
        case teclas.LEFT:
            cerdo.x = cerdo.x - movimiento;
            dibujar(cerdo.x, cerdo.y);
        break;
        case teclas.RIGHT:
            cerdo.x = cerdo.x + movimiento;
            dibujar(cerdo.x, cerdo.y);
        break;
    }
}

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1) ) + min;
    return resultado;
}