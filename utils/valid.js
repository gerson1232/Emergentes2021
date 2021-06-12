const valid = (name, email, password, cf_password) => {
    if(!name || !email || !password)
    return 'Campos vacíos.'

    if(!validateEmail(email))
    return 'Correo inválido.'

    if(password.length < 6)
    return 'Contraseña corta.. +6 caracteres.'

    if(password !== cf_password)
    return 'Contraseñas diferentes.'
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default valid