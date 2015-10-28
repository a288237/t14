var manzana = {nombre: "Manzana", precio: 3.75,};

var leche = {nombre: "Leche", precio: 15.99};

//var producto1 = {nombre:  prompt("producto: "), precio: prompt("precio: ")};

function addProducto(producto) {
  var carrito = document.getElementById("carrito").tBodies[0];
  var nuevoProducto = carrito.insertRow();
  var nombre = document.createTextNode(producto.nombre);
  nuevoProducto.insertCell().appendChild(nombre);
  var precio = document.createTextNode(producto.precio);
  nuevoProducto.insertCell().appendChild(precio);

  calcularTotal();
}

function addOtroProducto(){
  var carrito = document.getElementById("carrito").tBodies[0];
var nombre = prompt("producto: ");
var precio = prompt("precio: ");
   var nuevoProducto = carrito.insertRow();
    var nombre1 = document.createTextNode(nombre);
    nuevoProducto.insertCell().appendChild(nombre1);
    var precio1 = document.createTextNode(precio);
    nuevoProducto.insertCell().appendChild(precio1);

  calcularTotal();
}

function calcularTotal() {
  var carrito = document.getElementById("carrito").tBodies[0];
  var listaProductos = carrito.rows;
  var total = 0;

  for (var i = 0; i < listaProductos.length; i++) {
    total += Number(listaProductos[i].cells[1].innerHTML);
  }

  var totalCelda = document.getElementById("carrito").tFoot.rows[0].cells[1];
  totalCelda.innerHTML = total.toFixed(2);
}
