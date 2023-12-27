let productos = [
  {
    id: 1,
    nombre: "Producto 1",
    descripcion: "Descripción del Producto 1",
    precio: 19.99
  },
  {
    id: 2,
    nombre: "Producto 2",
    descripcion: "Descripción del Producto 2",
    precio: 29.99
  },
  {
    id: 3,
    nombre: "Producto 3",
    descripcion: "Descripción del Producto 3",
    precio: 14.99
  }
];

localStorage.setItem('productos', JSON.stringify(productos));

class Producto {
  constructor(id, nombre, descripcion, precio) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }

  agregarProducto(nuevoProducto){
    productos.push(nuevoProducto);
    this.guardarProductos();
  }

  guardarProductos(){
    localStorage.setItem("productos", JSON.stringify(productos));
  }
}

const nombreProducto = document.getElementById("nombreProducto");
const precioProducto = document.getElementById("precioProducto");
const descriProducto = document.getElementById("lblDescripcion");
const idProducto = document.getElementById("lblId");
const botonAgregarProducto = document.getElementById("botonProducto");

botonAgregarProducto.addEventListener("click", (e) => {
  let producto = nombreProducto.value;
  let precio = parseFloat(precioProducto.value);
  let descripcion = descriProducto.value;
  let id = parseInt(idProducto.value);

  if (producto === "" || isNaN(precio) || isNaN(id)) {
    alert("No se puede agregar porque hay campos vacíos o valores no válidos.");
  } else {
    let nuevoProducto = new Producto(id, producto, descripcion, precio);
    nuevoProducto.agregarProducto(nuevoProducto);

    // Obtener el array actualizado del localStorage
    const productosLocalStorage = JSON.parse(localStorage.getItem('productos')) || [];
    mostrarProductos(productosLocalStorage);

  }
});

document.addEventListener('DOMContentLoaded', function () {
  const listaProductos = document.getElementById('lista');

  

  mostrarProductos(productos); // Mostrar productos al cargar la página

  // Función para editar un producto
  window.editarProducto = function (id) {
    console.log('Editar producto con ID:', id);
  };

  window.eliminarProducto = function (id) {
    console.log('Eliminar producto con ID:', id);
  };
});
function mostrarProductos(productos) {
  listaProductos.innerHTML = '';

  if (productos.length === 0) {
    listaProductos.innerHTML = '<p>No hay productos disponibles.</p>';
  } else {
    productos.forEach(producto => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${producto.nombre}</span>
        <span>${producto.descripcion}</span>
        <span>${producto.precio.toFixed(2)}</span>
        <button onclick="editarProducto(${producto.id})">Editar</button>
        <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
      `;

      listaProductos.appendChild(li);
    });
  }
}