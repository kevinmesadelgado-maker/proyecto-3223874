console.log("validacion de email"); 

function validateEmail(email) {
    if (!email) {
        console.log("Error: el campo email está vacío");
        return false;
    }
    return /\S+@\S+\.\S+/.test(email);
}
