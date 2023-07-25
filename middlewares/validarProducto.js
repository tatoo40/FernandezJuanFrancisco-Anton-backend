const validarProducto = (req, res, next) => {
    const { id, descripcion, categoria, precio } = req.body;
    
    if (!id || !descripcion || !categoria || !precio) {
      return res.status(400).json({ error: 'Faltan datos para poderr ingresar el producto' });
    }
  
    // You can add more complex validation rules here if needed
  
    next(); // Call next to proceed to the next middleware or route handler
  };
  
  module.exports = { validarProducto };