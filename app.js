let area_texto = document.querySelector(".digitacao");
let resultado = document.querySelector(".conteudo__saida");

function entrada() {
    if(area_texto != ""){       
        let texto = document.querySelector(".digitacao")
        return texto.value
    }
}

function codificar(){
    let texto = entrada()
    resultado.textContent = criptografar(texto);
}

function criptografar(mensagem){
    let mensagemCriptografada;

    const mensagemArr = mensagem.split("");

    let mensagemCriptografadaArr = [];

    for (i = 0; i < mensagemArr.length; i++){
       let letra;
       switch(mensagemArr[i]) {
        case "a":
            letra = "ai";
            break;
        case "e":
            letra = "enter";
            break;
        case "i":
            letra = "imes";
            break; 
        case "o":
            letra = "ober";
            break;
        case "u":
            letra = "ufat";
            break;
        default:
            letra = mensagemArr[i]; 
            break;       
       }
        
       mensagemCriptografadaArr.push(letra);
    }

    mensagemCriptografada = mensagemCriptografadaArr.join("");
    return mensagemCriptografada;
}

function descriptografar(mensagem){
    const mensagemDescriptografada = mensagem
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    return mensagemDescriptografada 
}

function decodificar(){
    let texto = entrada()
    resultado.textContent = descriptografar(texto);
}

function limpar() {
    texto = document.querySelector(".digitacao");
    texto.value = "";
}

function copiar() {
    let textToCopy = resultado.textContent

    function afterSuccess() {
        alert('Copiado com sucesso!')
    }

    function afterFailure(error) {
        alert.error('A Cópia falhou!', error)
    }

    window.navigator.clipboard
        .writeText(textToCopy)
        .then(afterSuccess, afterFailure)
};
