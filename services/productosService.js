const fs = require("fs");
const archivoService = require("../services/manejoArchivoService");

// Función para leer los datos del archivo productos.json
const obtenerProductos = () => {
  const productos = archivoService.readObjeto("productos.json");
  return productos;
};

const actualizarProducto = (id, body) => {
  let productos = [];

  productos = archivoService.readObjeto("productos.json");
  if (!Array.isArray(productos)) {
    productos = [];
  }

  const producto = productos.find((producto) => producto.id === Number(id));

  const productosNuevos = productos.map((producto) => {
    if (producto.id === Number(id)) {
      return {
        ...producto,
        ...body,
      };
    }
    return producto;
  });
  archivoService.saveObjeto("productos.json", productosNuevos);
  return producto;
};

const obtenerProductoId = (id) => {
  const productos = archivoService.readObjeto("productos.json");
  const producto = productos.find((producto) => producto.id === Number(id));
  return producto;
};

const eliminarProducto = (id) => {
  const productos = archivoService.readObjeto("productos.json");
  //obtengo el producto a eliminar
  const producto = productos.find((producto) => producto.id === Number(id));

  //genero nuevo array con productos
  const productosNuevos = productos.filter(
    (producto) => producto.id !== Number(id)
  );

  archivoService.saveObjeto("productos.json", productosNuevos);

  return producto;
};

const agregarProducto = (producto) => {
  let productos = [];
  productos = archivoService.readObjeto("productos.json");
  if (!Array.isArray(productos)) {
    productos = [];
  }

  productos.push(producto);
  archivoService.saveObjeto("productos.json", productos);
  return producto;
};

module.exports = {
  obtenerProductos,
  obtenerProductoId,
  agregarProducto,
  eliminarProducto,
  actualizarProducto,
};
