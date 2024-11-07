document.addEventListener('DOMContentLoaded', () => {
    validaNome();
    validaEmail();
    validaTelefone();
    validaPassword();
    comparaSenha();
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
        const regexEmail = (/^[a-z0-9_.=-]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-.]{3})+$/g)

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
        let error = ''
        const regexSenha = (/^[A-Za-z\d@$!%*?&]{8,}$/g)
 

        if (!regexSenha.test(value)) {

            error = '<span class="text-danger">Senha inválido!</span>'
            
        }
        
        message.innerHTML = error
        
     
    })

}

function comparaSenha() {

    const senhaInput = document.querySelector("#senhaInput");
    const confirmaSenhaInput = document.querySelector("#confirmasenhaInput");
    const confirmaSenhaMessage = document.querySelector("#confiSenhaHelp");
    confirmaSenhaInput.addEventListener('keyup', comparaSenha);
    
    const senha = senhaInput.value
    const confirma = confirmaSenhaInput.value
    let error = ''
    
    if (senha !== confirma) {
        
        error = '<span class="text-danger">As senhas não coincidem.</span>'
        
    }
    
    message.innerHTML = error
    
}

function validateRequired() {
    const elements = document.querySelectorAll("[required]")
    const message = document.querySelector("#nameHelp")
    console.log(elements)
}






