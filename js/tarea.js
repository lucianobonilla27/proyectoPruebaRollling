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
  
// Almacena los productos en el almacenamiento local
localStorage.setItem('productos', JSON.stringify(productos));
  

class Producto {
    constructor(id, nombre, descripcion, precio) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
    }
  }
  

  document.addEventListener('DOMContentLoaded', function () {
    const listaProductos = document.getElementById('lista');

    
    function mostrarProductos() {
        // Obtener la lista de productos del almacenamiento local
        const productos = JSON.parse(localStorage.getItem('productos')) || [];

        // Limpiar la lista antes de mostrarla
        listaProductos.innerHTML = '';

        // Verificar si hay productos para mostrar
        if (productos.length === 0) {
            listaProductos.innerHTML = '<p>No hay productos disponibles.</p>';
        } else {
            // Mostrar cada producto en la lista
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

    // Llamar a la función para mostrar productos al cargar la página
    mostrarProductos();

    // Función para editar un producto
    window.editarProducto = function (id) {
        console.log('Editar producto con ID:', id);
    };


    window.eliminarProducto = function (id) {
        console.log('Eliminar producto con ID:', id);
    };
});
