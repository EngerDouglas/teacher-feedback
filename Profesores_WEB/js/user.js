//Forgot your password
const form_user = document.getElementById("form-user")

formCreateUser.addEventListener('submitSing', function(event){
    event.preventDefault();

    const username = document.getElementById('logname').value; // event.target.username
    const email = document.getElementById('logemail').value;
    const password = document.getElementById('logpass').value;
    const carrera = document.getElementById('ChooseCareer').value;

    const data = {
        username: username,
        email: email,
        password: password,
        carrera: carrera
    }

    axios({
        // get: para obtener datos, post: insertar datos, put: actualizar datos, delete: eleminar datos.
        method: 'post', 
        url: 'http://localhost:3330/users/create',
        data: data,
    }).then( response => {
        console.log('response', response);

        if(response.status === 200){
            
        }
    }).catch( error => {
        console.log('error', error);
    });

});