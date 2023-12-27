let productos = [];

class Producto {
    constructor(id, nombre, descripcion, precio) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
    }

    agregarProducto(nuevoProducto){
      productos.push(nuevoProducto)
      this.guardarProductos()
    }

    guardarProductos(){
      localStorage.setItem("productos", JSON.stringify(productos))
    }
}

const nombreProducto = document.getElementById("nombreProducto")
const precioProducto = document.getElementById("precioProducto")
const descriProducto = document.getElementById("lblDescripcion")
const idProducto = document.getElementById("lblId")
const botonAgregarProducto = document.getElementById("botonProducto")

botonAgregarProducto.addEventListener("click", (e) => {
  let producto = nombreProducto.value
  let precio = precioProducto.value
  let descripcion = descriProducto.value
  let id = idProducto.value
  if(producto === ""){
    alert("No se puede agregar porque esta vacio")
    console.log(producto)
  }
  else{
    let nuevoProducto = new Producto(id, producto, descripcion, precio)
    nuevoProducto.agregarProducto(nuevoProducto)
    console.log(producto)
  }

})

  

  