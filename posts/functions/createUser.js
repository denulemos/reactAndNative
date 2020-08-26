const admin = require('firebase-admin');
module.exports = function (req, res) {
  //Por default es un POST

  //Todo ok y devuelvo el body que fue recibido en el request
  // res.status(200).send(req.body);

  //Lo que quiero recibir por el body
  const { email, phoneNumber, password, displayName } = req.body;

  //Validar campos que necesito
  if (!email || !phoneNumber || !password || !displayName)
    return res.status(404).send({ err: "Faltan datos!" });


//Documentacion https://firebase.google.com/docs/auth/admin/manage-users?hl=es#create_a_user
  //Crear usuario si todo es correcto
  //Esto devuelve una Promise
  admin.auth().createUser({
      email,
      emailVerified: false,
      phoneNumber,
      password,
      displayName,
      photoURL: "http://www.example.com/12345678/photo.png",
      disabled: false,
    })
    //Resolucion promise
    .then((usr) => res.status(200).send(usr))
    //Catch
    .catch((error) => res.status(501).send({err: "Algo salio mal! :(", error}));

    /*BODY TEST (POST)
    Si mando el mismo body 2 veces, a la segunda dara error por usuario repetido.
    
    {
        "email":"user@example.com",
        displayName: "Usuario Test",
        "phoneNumber": "+12345678934",
        "password": "secreto"

    }
    
    */

  //Devolver datos nuevo usuario

  

};
