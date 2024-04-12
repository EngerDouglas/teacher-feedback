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

    return true;
   
}

function SubmitCompleto()
{
    if(Submit())
    {
        window.location.href="index.html"
    
    }
    else{
        return false;
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

//getUsers();
