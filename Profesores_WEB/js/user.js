//Boton Submit para Sign UP
//let formCreateUser = document.getElementById('form-create-user');

function Submit() {

    let signname = document.getElementById("signname").value;
    let signemail = document.getElementById("signemail").value;
    let signpass = document.getElementById("signpass").value;
    let signverifypass = document.getElementById("signverifypass").value;
    let opcionesCareer = document.getElementById("opcionesCareer").value;

    //Validacion de los password
    if (signverifypass !== signpass) 
    {
        alert("Las contraseñas no coinciden.");
        return false;
        
    }

    //Validar que el passwor tenga Una mayuscula, 4 letras y 3 numeros
    if(!validarPassword(signpass))
    {
        alert("La contraseña debe contener una Mayuscula, 4 letras y 3 numeros");
        return false;
    }
    
    //Validar carrera 
    if (opcionesCareer === "" ) {
        alert("Eliga una carrera.");
        return false;
    }

    //Validar username
    if(!validarUsername(signname))
    {
        alert("El usuario contiene caracteres no permitidos.")
        return false;
    }

    //validar email
    if(!verificarEmail(signemail))
    {
        alert("El email es incorrecto.")
        return false;
    }

    return true;
   
}

//Funcion de validar el password
function validarPassword(password)
{
    var letras = 0;
    var numeros = 0;
    var tieneMayuscula = false;

    for(var i = 0; i < password.length; i++)
    {
        var caracter = password.charAt(i);
        
        if(/[a-zA-Z]/.test(caracter))
        {
            letras++;
            
            if(caracter === caracter.toUpperCase())
            {
                tieneMayuscula = true;
            }

        } else if(!isNaN(parseInt(caracter)))
        {
            numeros++;
        }
    }

    if(letras >= 4 && numeros >= 3 && tieneMayuscula)
    {
        return true;
    }
    else
    {
        return false;
    }

}


//Funcion para validar email
function validarEmail(email) {
    // Expresión regular para validar el email
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+\.com$/;
    return regex.test(email);
  }

function SubmitCompleto()
{
    if(!Submit())
    {
        return false;    
    }
    else{

        window.location.href="index.html"

       
    }

}

function index(){
    window.location.href="index.html"
}

function validarUsername(username)
{
    var regex = /^[a-zA-Z0-9_-]+$/
    return regex.test(username);
}


//Manda el usuario al servidor
function getUsers(){
    axios({
        method: 'get', 
        url: 'http://localhost:3330/users/list',
    }).then( response => {
        console.log('response', response)
    }).catch( error => {
        console.log('error', error);
    });
}

//Logo del ojo para el password

