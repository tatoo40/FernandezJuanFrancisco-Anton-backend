const renderPerfil = (req, res) => {

   
  const usuario = req.session.usuario;
  console.log(usuario.email)
  email = 'sdasdass'
  // Verifica si los datos del usuario están presentes
  if (email) {
    //const email = usuario.email;
    //console.log(email); // Muestra el email del usuario en la consola

    // Renderiza la vista "perfil" con el email del usuario
    
    res.render('perfil', { email });

  };
  
  
}

module.exports = {
  renderPerfil,
}