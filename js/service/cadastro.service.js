import { setPerson } from "./../infra/cadastro.repository.js";

export const cadastroService = {

add


}

function add(client) {
    setPerson(client)
        .then(res => {
            console.log("adicionado", res)
            alert("sucesso")
        })
        .catch(error => {
            console.log("error: ", error)
            alert("Erro")
        })




    
}