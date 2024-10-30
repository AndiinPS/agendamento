document.addEventListener('DOMContentLoaded', () => {
    validaNome();
    validaEmail();  
});

function validaNome() {

    const element = document.querySelector("#nomeInput");
    const message = document.querySelector("#nomeHelp");
    element.addEventListener('blur' , (e) => {
        const value = e.target.value;
        
        
        if (value == '' ) {

            message.innerHTML = '<span class="text-danger"> Preencha o campo de maneira correta! </span>';

        }

        else {

            message.innerHTML = '';

        }
    });    

}

function validaEmail() {

    const element = document.querySelector("#emailInput");
    const message = document.querySelector("#emailHelp");
    element.addEventListener('blur' , (e) => {
        const value = e.target.value;
        
        
        if (value == '' ) {

            message.innerHTML = '<span class="text-danger"> Preencha o campo de e-mail! </span>';

        }

        else if (value.indexOf ('@') === -1 ) {

            message.innerHTML = '<span class="text-danger">Insira um e-mail válido!</span>';

        }
        

        else {

            message.innerHTML = '';

        }
    });    

}