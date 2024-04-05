//Boton submit del Log In
document.getElementById("btnSubmit").addEventListener("click", () => {
        // Obtener los valores de los campos del formulario
        var username = document.getElementById("logname").value;
        var email = document.getElementById("logemail").value;
        var password = document.getElementById("logpass").value;
        var confirmPassword = document.getElementById("logverifypass").value;
        var career = document.getElementById("opcionesCareer").value;

        // Crear un objeto con los datos del formulario
        var formData = {
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            career: career
        };

        // Enviar los datos 
        fetch("https://ejemplo.com/api/signup", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data); // Imprimir la respuesta del servidor en la consola
            })
            .catch(error => {
                console.error("Error:", error);
            });

    });