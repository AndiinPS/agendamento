document.addEventListener('DOMContentLoaded', () => {
    validaNome();
    validaEmail();
    validaTelefone();
    validaPassword();
    validateRequired();
});

function validaNome() {

    const element = document.querySelector("#nomeInput");
    const message = document.querySelector("#nomeHelp");
    element.addEventListener('blur', (e) => {
        const value = e.target.value;
        let error = ''


        if (value == '') {

            error = '<span class="text-danger"> Preencha o campo de maneira correta! </span>';

        }

        message.innerHTML = error;

    });

}

function validaEmail() {

    const element = document.querySelector("#emailInput");
    const message = document.querySelector("#emailHelp");
    element.addEventListener('keyup', (e) => {
        const value = e.target.value;
        let error = ''
        const regexEmail = (/^[a-z0-9]+\@[a-z]+\.([a-z]{3})+$/g)

        if (!regexEmail.test(value)) {

            error = '<span class="text-danger">Insira um e-mail válido!</span>';

        }

        message.innerHTML = error;

    });

}

function validaTelefone() {

    const element = document.querySelector("#telefoneInput");
    const message = document.querySelector("#telHelp");
    element.addEventListener('keyup', (e) => {
        const value = e.target.value;
        let error = ''
        const regexTel = /^\([0-9]{2,3}\)[0-9]{5}-[0-9]{4}$/g

        if (!regexTel.test(value)) {

            error = '<span class="text-danger">Insira telefone valido! Formato (xx) xxxxx-xxxx </span>';

        }

        message.innerHTML = error;

    });


}

function validaPassword() {

    const element = document.querySelector("#senhaInput");
    const message = document.querySelector("#senhaHelp");
    element.addEventListener('keyup', (e) => {
        const value = e.target.value;

        if (value.lenght < 8) {

            message.innerHTML = "Minimo de 8 caracteres"

        } else {

            message.innerHTML = ''

        }


    })

}

function validateRequired() {
    const elements = document.querySelectorAll("[required]")
    const message = document.querySelector("#nameHelp")
    console.log(elements)
}






