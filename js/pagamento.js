document.getElementById("submit").addEventListener("click", validaFormulario)

function validaFormulario(){
    if (document.getElementById("email").value != "" && 
        document.getElementById ("dados").value != "" &&
        document.getElementById("data").value != "" &&
        document.getElementById("validade").value != ""){
        alert ("Prontinho! Agora você já pode ter acesso a todas as playlists de música brasileira.")
        }else{
            alert("Por favor, preencha os campos com seu email e os dados do cartão!")
        }
}


