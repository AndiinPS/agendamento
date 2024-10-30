function validaNome(element) {

    const element = document.querySelector("nomeInput")
    const message = document.querySelector("nomeHelp")
    element.addEventListener('blur' (e) => {
        const value = e.target.value
        console.log(value)
        
        if (value == '' ) {

            message.innerHTML = '<span class="text-danger"> Digite seu nome completo </span>'

        }

        else {

            message.innerHTML = ''

        }
    })    

}