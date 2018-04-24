// controlY, determina dirección vertical: 1-baja|0-sube
var controlY=Math.floor((Math.random() * 1) + 0);

// controlX, determina dirección vertical: 1-derecha|0-izquierda
var controlX=Math.floor((Math.random() * 1) + 0);

// definimos las variables que contienen la posicion de la pelota
var x=y=0;

// definimos la velocidad de movimiento en pixels
var velocidad=5;

// variable que contiene 
var idSetInterval=1;

// funcion que se ejecuta al pulsar el botón iniciar
function iniciar()
{
idSetInterval=setInterval("mover()",10);
}

// funcion que se ejecuta por cada iteracion del setInterval()
function mover()
{
  // vertical
  if(controlY==1)
  {
  		y+=velocidad;
  }else{
  		y-=velocidad;
  }
  if(y<0)
  {
  		controlY=1;
  y=velocidad;
  }else if(y>=document.getElementById("lienzo").offsetHeight-22){
  		 controlY=0;
  y=document.getElementById("lienzo").offsetHeight-22;
  }
     // horizontal
     if(controlX==1)
  {
  		x+=velocidad;
  }else{
  		x-=velocidad;
  }
  if(x<0)
  {
  		controlX=1;
  X=velocidad;
  }else if(x>=document.getElementById("lienzo").offsetWidth-22){
  		 controlX=0;
  x=document.getElementById("lienzo").offsetWidth-22;
  }
  
  document.getElementById("bola").style.left=String(x)+"px";
  document.getElementById("bola").style.top=String(y)+"px";
 
}
// funcion que se ejecuta para parar
function parar()
{
   clearInterval(idSetInterval);
  idSetInterval=0;
}
// funcion que se ejecta al iniciar
window.onload=function()
{
  y=Math.floor((Math.random() * (document.getElementById("lienzo").offsetHeight-10)) + 1);
  x=Math.floor((Math.random() * (document.getElementById("lienzo").offsetWidth-30)) + 1);
  document.getElementById("bola").style.left=String(x)+"px";
  document.getElementById("bola").style.top=String(y)+"px";

}



