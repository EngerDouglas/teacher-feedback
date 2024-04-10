//Boton Submit para Sign UP
//let formCreateUser = document.getElementById('form-create-user');

function Submit() {

    let signname = document.getElementById("signname").value
    let signemail = document.getElementById("signemail").value
    let signpass = document.getElementById("signpass").value
    let signverifypass = document.getElementById("signverifypass").value
    let opcionesCareer = document.getElementById("opcionesCareer").value

    if (opcionesCareer === '' && opcionesCareer === "Choose Your Career" ) {
        alert("Eliga una carrera")
        return false;
    }

    if (signverifypass !== signpass)
    {
        alert("Las contraseñas no coinciden");
        return false;
    }

    return true;
    
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
