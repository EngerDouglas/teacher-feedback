//Boton Submit para Sign UP
const formCreateUser = document.getElementById('form-create-user');
const signname = document.getElementById("signname").value
const signemail = document.getElementById("signemail").value
const signpass = document.getElementById("signpass").value
const signverifypass = document.getElementById("signverifypass").value
const opcionesCareer = document.getElementById("opcionesCareer").value



formCreateUser.addEventListener('Submit', function(event){
    event.preventDefault();

  
    const data = {
        signname: signname,
        signemail: signemail,
        signpass: signpass,
        signverifypass: signverifypass,
        opcionesCareer: opcionesCareer,
    }

    if (opcionesCareer === '' && opcionesCareer === "Choose Your Career" ) {
        alert('Por favor, selecciona una Carrera');
    }
    

    if (signverifypass !== signpass)
    {
        alert("Las contraseñas no coinciden");
    }

    window.location.href = '';



});


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

getUsers();

function redirectToPage() {
    // Cambiar "pagina_destino.html" con la URL de la página a la que deseas redirigir
    window.location.href = "index.html";
}

// Agregar un evento de clic al botón para llamar a la función de redirección
document.getElementById("Submit").addEventListener("click", redirectToPage);
