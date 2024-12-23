// Funções com os respectivos estilos Popup, Icorreto "vermelho" e Correto "verde"
function mostrarPopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarIncorreto(input, helper) {
  input.classList.add("error");
  input.classList.remove("correct");
  helper.classList.add("visible");
}

function estilizarCorreto(input, helper) {
  input.classList.remove("error");
  input.classList.add("correct");
  helper.classList.remove("visible");
}

// Validar o username

let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

mostrarPopup(usernameInput, usernameLabel);

usernameInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.length < 3) {
    estilizarIncorreto(usernameInput, usernameHelper);
    usernameHelper.innerText = "ATENÇÃO, insira pelo menos 3 caracteres";
  } else {
    estilizarCorreto(usernameInput, usernameHelper);
  }
});

// Validar o email

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

mostrarPopup(emailInput, emailLabel);

emailInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (!valor.includes("@") || !valor.includes(".com")) {
    estilizarIncorreto(emailInput, emailHelper);
    emailHelper.innerText = "ATENÇÃO, insira um e-mail válido";
  } else {
    estilizarCorreto(emailInput, emailHelper);
  }
});

// Validar idade

let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper = document.getElementById("idade-helper");

mostrarPopup(idadeInput, idadeLabel);

idadeInput.addEventListener("change", (e) => {
  let idade = Number(e.target.value);

  if (idade < 18) {
    estilizarIncorreto(idadeInput, idadeHelper);
    idadeHelper.innerText = "ATENÇÃO, Somente maiores de 18 anos";
  } else {
    estilizarCorreto(idadeInput, idadeHelper);
  }
});

// Validar senha e confirmação de senha

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

mostrarPopup(senhaInput, senhaLabel);

let confirmasenhaInput = document.getElementById("confirma-senha");
let confirmasenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmasenhaHelper = document.getElementById("confirma-senha-helper");

mostrarPopup(confirmasenhaInput, confirmasenhaLabel);

let senhaValor = ""; // Variável para armazenar o valor da senha principal

// Validação no campo de senha
senhaInput.addEventListener("change", (e) => {
  senhaValor = e.target.value; // Atualiza o valor da senha principal

  // Verifica se o campo de confirmação já foi preenchido e valida
  if (confirmasenhaInput.value !== "") {
    validarConfirmacaoSenha();
  }
});

// Função para validar a confirmação de senha
function validarConfirmacaoSenha() {
  let senhaConfirmacao = confirmasenhaInput.value;

  if (senhaConfirmacao !== senhaValor) {
    estilizarIncorreto(confirmasenhaInput, confirmasenhaHelper);
    confirmasenhaHelper.innerText = "ATENÇÃO: as senhas devem ser iguais";
  } else {
    estilizarCorreto(confirmasenhaInput, confirmasenhaHelper);
  }
}

// Validação no campo de confirmação de senha
confirmasenhaInput.addEventListener("change", () => {
  validarConfirmacaoSenha();
});

// Evitar envio do formulário

// Função para verificar se todos os campos estão corretos antes do envio
function validarFormulario() {
  let formularioValido = true;

  // Verifica o status de todos os campos
  if (usernameInput.classList.contains("error")) {
    formularioValido = false;
  }
  if (emailInput.classList.contains("error")) {
    formularioValido = false;
  }
  if (idadeInput.classList.contains("error")) {
    formularioValido = false;
  }
  if (senhaInput.classList.contains("error")) {
    formularioValido = false;
  }
  if (confirmasenhaInput.classList.contains("error")) {
    formularioValido = false;
  }

  return formularioValido;
}

// Evita o envio do formulário se algum campo for inválido
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  if (!validarFormulario()) {
    e.preventDefault(); // Impede o envio do formulário

    swal({
      title: "ERRO",
      text: "Preencha todos os campos corretamente",
      icon: "error",
      button: "OK",
    });
  }});
