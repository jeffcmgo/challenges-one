function geraSubstrings(str) { // decompoe o texto encriptado em substrings
    let resultado = [];
  
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            resultado.push(str.slice(i, j));
        }
    }
    return resultado;
}

function decriptaTexto(str) {  // função para decriptar o texto inserido pelo usuário
    
    // gera as substrings
    let substrings = geraSubstrings(str);
    // define as regras para a decriptação usando RegEx
    const ai = [/ai/, "a"];
    const enter = [/enter/, "e"];
    const imes = [/imes/, "i"];
    const ober = [/ober/, "o"];
    const ufat = [/ufat/, "u"];
    let textoDecriptado = str;

    // lê o texto comparando com as substrings e faz as devidas substituições
    for(let i = 0; i < substrings.length; i++) {
        
        if(substrings[i] == ai[1]) {
            textoDecriptado = textoDecriptado.replace(ai[0], ai[1]);
        } else if(substrings[i] == enter[1]) {
            textoDecriptado = textoDecriptado.replace(enter[0], enter[1]);
        } else if(substrings[i] == imes[1]) {
            textoDecriptado = textoDecriptado.replace(imes[0], imes[1]);
        } else if(substrings[i] == ober[1]) {
            textoDecriptado = textoDecriptado.replace(ober[0], ober[1]);
        } else if(substrings[i] == ufat[1]) {
            textoDecriptado = textoDecriptado.replace(ufat[0], ufat[1]);
        }
    }

    return textoDecriptado;   
}

// incorpora o botão para decriptar
const botaoDecriptar = document.querySelector("#botao-decriptar");

// quando clicado, executa a função de decriptação e exibe o resultado
botaoDecriptar.addEventListener("click", function() {
    event.preventDefault();
    resultado.textContent = decriptaTexto(texto.value);
});