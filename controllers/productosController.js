const fs = require("fs");
const productosService = require("../services/productosService");

const obtengoPoductos = (req, res) => {
  const productos = productosService.obtenerProductos();
  res.json(productos);
};

const obtengoPoductoId = (req, res) => {
  const { id } = req.params;
  const producto = productosService.obtenerProductoId(id);
  res.json(producto);
};

const agregarProducto = (req, res) => {
  const { body } = req;
  const producto = productosService.agregarProducto(body);
  res.json(producto);
  res.json("producto agregado con exito");
};

const actualizarProducto = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const producto = productosService.actualizarProducto(id, body);
  res.json(producto);
  res.json("producto actualizado con exito");
};

const eliminarProducto = (req, res) => {
  const { id } = req.params;
  const producto = productosService.eliminarProducto(id);
  res.json(producto);
  res.json("Producto eliminado con exito");
};

module.exports = {
  agregarProducto,
  obtengoPoductos,
  eliminarProducto,
  obtengoPoductoId,
  actualizarProducto,
};
