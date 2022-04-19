
function validaTexto(str) { // função para validar o conteúdo inserido pelo usuário
    // define caracteres aceitos utilizando RegEx
    const letrasMinusculas = /[a-z]/;
    // variável para detectar caracteres incompatíveis
    let contaErro = 0;

    // valida os caracteres e detecta erros
    for(let i = 0; i < str.length; i++) {
        
        if(letrasMinusculas.test(str[i]) || str[i] == " ") {
            continue;
        } else {
            contaErro++;
        }
    }
    
    // testa a ocorrência de erros
    if(contaErro == 0) {
        return true;
    } else {
        return false;
    }
}

function encriptaTexto(str) { // função para encriptar o texto inserido pelo usuário
    
    // define as regras para a encriptação
    const letraA = [/a/, "ai"];
    const letraE = [/e/, "enter"];
    const letraI = [/i/, "imes"];
    const letraO = [/o/, "ober"];
    const letraU = [/u/, "ufat"];
    // array a ser preenchido com os caracteres encriptados
    let lista = [];
    // variável que armazenará o texto encriptado
    let textoEncriptado = "";

    // verifica se o texto é valido
    if(validaTexto(str)) {
        
        // lê o texto e faz as devidas substituições
        for(let i = 0; i < str.length; i++) {
            
            if(str[i] == "a") {
                lista.push(str[i].replace(letraA[0], letraA[1]));
            } else if(str[i] == "e") {
                lista.push(str[i].replace(letraE[0], letraE[1]));
            } else if(str[i] == "i") {
                lista.push(str[i].replace(letraI[0], letraI[1]));
            } else if(str[i] == "o") {
                lista.push(str[i].replace(letraO[0], letraO[1]));
            } else if(str[i] == "u") {
                lista.push(str[i].replace(letraU[0], letraU[1]));
            } else {
                lista.push(str[i]);
            }

            // monta o texto encriptado
            textoEncriptado = textoEncriptado + lista[i];
        }

        return textoEncriptado;
    } else {
        // alerta em caso de texto inválido
        alert("Por favor, utilize apenas letras minúsculas, sem acentos nem caracteres especiais.");
    }
}

function copiaTexto() { // função para copiar o texto exibido como resultado

    // incorpora e seleciona o elemento resultado e copia para a área de transferência
    let textoCopiado = document.getElementById('resultado');
    textoCopiado.select();
    document.execCommand('copy');
    // confirma a cópia
    document.getElementById('botao-copiar').textContent = "Copiado!";
    setTimeout(() => {
        document.getElementById('botao-copiar').textContent = 'Copiar'
    }, 2000);

    // limpa o campo de entrada e transfere o foco para o mesmo
    texto.value = "";
    texto.focus();
}

function mostraResultado(texto) { // função para detectar se há texto digitado e controlar a exibição do resultado
    if(texto == "") {
        document.getElementById("resultado").style.visibility = "hidden";
        document.getElementById("titulo-ops").style.visibility = "visible";
        document.getElementById("imagem-ops").style.visibility = "visible";
        document.getElementById("ops").style.visibility = "visible";
    } else {
        document.getElementById("titulo-ops").style.visibility = "hidden";
        document.getElementById("imagem-ops").style.visibility = "hidden";
        document.getElementById("ops").style.visibility = "hidden";
        document.getElementById("resultado").style.visibility = "visible";
    }
}

// incorpora o elemento de entrada e foca nele
let texto = document.querySelector("#entrada");
texto.focus();
// incorpora o botão para encriptar
let botaoEncriptar = document.querySelector("#botao-encriptar");
// incorpora o botão para copiar
let botaoCopiar = document.querySelector("#botao-copiar");
// incorpora o elemento resultado
let resultado = document.querySelector("#resultado");

// executa a função para exibir ou ocultar o resultado
mostraResultado(texto.value);

// quando clicado, executa a função de encriptação e exibe o resultado
botaoEncriptar.addEventListener("click", function() {
    event.preventDefault();
    mostraResultado(texto.value);
    resultado.textContent = encriptaTexto(texto.value);
});

// quando clicado, executa a função para copiar o resultado
botaoCopiar.addEventListener("click", copiaTexto);

