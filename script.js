// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");


function mostrarPopup (input, label) {
 // Mostrar popup de campo obrigatório
input.addEventListener("focus", ()=> {
    label.classList.add("required-popup")
})

// Ocultar popup de campo obrigatório
input.addEventListener("blur", ()=> {
    label.classList.remove("required-popup")
})
}

mostrarPopup(usernameInput,usernameLabel)

// Validar valor do input

usernameInput.addEventListener("change", (e)=> {
    let valor = e.target.value;

    if (valor.length < 3) {
        usernameInput.classList.add("error")
        usernameInput.classList.remove("correct")
        usernameHelper.classList.add("visible")
        usernameHelper.innerText = "ATENÇÃO, insira pelo menos 3 caracteres"
    } else {
        usernameInput.classList.remove("error")
        usernameInput.classList.add("correct")
        usernameHelper.classList.remove("visible")
    }
})

// Validar o email

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

mostrarPopup(emailInput,emailLabel)

emailInput.addEventListener("change", (e)=> {
    let valor = e.target.value;

    if(valor.includes("@") && valor.includes(".com")) {
        emailInput.classList.add("correct")
        emailInput.classList.remove("error")
        emailHelper.classList.remove("visible")
    } else {
        emailInput.classList.add("error")
        emailInput.classList.remove("correct")
        emailHelper.classList.add("visible")
        emailHelper.innerText = "ATENÇÃO, insira um e-mail válido"
    }

})

// Validar idade

let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper = document.getElementById("idade-helper");


idadeInput.addEventListener("change", (e)=> {
    let valor = Number(e.target.value);

    if (valor < 18) {
        idadeInput.classList.add("error");
        idadeInput.classList.remove("correct");
        idadeHelper.classList.add("visible");
        idadeHelper.innerText = "ATENÇÃO, cadastro somente para maiores de 18 anos";
    } else {
        idadeInput.classList.remove("error");
        idadeInput.classList.add("correct");
        idadeHelper.classList.remove("visible");
    }
})

// Validar senha

let senhaInput = document.getElementById("senha");
let senhaValor = "";

// Salva o valor da senha e revalida a confirmação

senhaInput.addEventListener("change", (e) => {
    senhaValor = e.target.value;
    validarConfirmacaoSenha(); 
});

let confirmasenhaInput = document.getElementById("confirma-senha");
let confirmasenhaHelper = document.getElementById("confirma-senha-helper");

function validarConfirmacaoSenha() {
    let valorConfirmacao = confirmasenhaInput.value;

    if (valorConfirmacao !== senhaValor) {
        confirmasenhaInput.classList.add("error");
        confirmasenhaInput.classList.remove("correct");
        confirmasenhaHelper.classList.add("visible");
        confirmasenhaHelper.innerText = "ATENÇÃO: as senhas devem ser iguais";
    } else {
        confirmasenhaInput.classList.remove("error");
        confirmasenhaInput.classList.add("correct");
        confirmasenhaHelper.classList.remove("visible");
    }
}

// Validação no campo de confirmação de senha
confirmasenhaInput.addEventListener("change", () => {
    validarConfirmacaoSenha();
});
