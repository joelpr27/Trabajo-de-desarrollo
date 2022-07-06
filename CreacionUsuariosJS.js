var usuarios = [];
var contrasenas = [];
var correos = [];
var telefonos = [];
var generos = [];

var validar = 0;

function validarUsuario() {
    var nombre = document.getElementById("usuario").value;

    if (nombre.length == 0) {
        alert("Introduzca un nombre");
    } else {
        validar++;
    }
}

function valiadarContrasena() {
    var contrasena = document.getElementById("contrasena").value;

    if (contrasena.length == 0) {
        alert("Introduzca una contraseña");
    } else {
        validar++;
    }
}

function validarCorreo(){
    var correo = document.getElementById("mail").value;

    if (/^([a-z0-9])([a-z0-9.-])*@([a-z0-9])([a-z0-9.-])*(\.[a-z0-9]{2,4})+$/.test(correo)) {
        validar ++;
    } else {
        alert("La dirección de email no tiene un formato correcto.");
    }
}

function validarTelefono() {
    var telefono = document.getElementById("num").value;

    if (telefono.length != 9) {
        alert("El telefono no tiene un formato correcto");
    } else {
        validar++;
    }
}

function crear(){
        var usuario = document.getElementById("usuario").value;
        var contrasena = document.getElementById("contrasena").value;
        var correo = document.getElementById("mail").value;
        var telefono = document.getElementById("num").value;
        var genero = document.getElementById("opcions").value;

        
        usuarios.push(usuario);
        contrasenas.push(contrasena);
        correos.push(correo);
        telefonos.push(telefono);
        generos.push(genero);

        document.getElementById("listaUsuarios").innerHTML = "";
        for (var i = 0; i < usuarios.length; i++){
            document.getElementById("listaUsuarios").innerHTML += "ID: " + (i+1) + " Nombre de Usuario: " + usuarios[i] + " Contraseña: " + contrasenas[i] + " Correo: " + correos[i] + " Numero de telefono: " + telefonos[i] + " Genero: " + generos[i] + "<br>";
        } 
}

function validarUsuarios() {

    validarUsuario();
    valiadarContrasena();
    validarCorreo();
    validarTelefono();

    if (validar == 4) {
        crear();
    }
    validar = 0;
}