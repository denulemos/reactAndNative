module.exports = function(req , res){
    //Por default es un POST
    //Todo ok y devuelvo el body que fue recibido en el request
    res.status(200).send(req.body);
}