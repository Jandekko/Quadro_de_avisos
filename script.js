// Simulação de usuário e senha
const loginInfo = {
    username: "admin",
    password: "Alohomora"
};

// Elementos do DOM
const loginContainer = document.getElementById("login-container");
const avisosContainer = document.getElementById("avisos-container");
const editorAvisoContainer = document.getElementById("editor-aviso-container");

const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const textoAviso = document.getElementById("texto-aviso");
const avisoDiv = document.getElementById("aviso");
const novoAviso = document.getElementById("novo-aviso");
const corAvisoSelect = document.getElementById("cor-aviso");

const editarAvisoBtn = document.getElementById("editar-aviso");
const salvarAvisoBtn = document.getElementById("salvar-aviso");
const logoutBtn = document.getElementById("logout");

// Função para abrir a tela de login ao clicar no botão "Editar Aviso"
editarAvisoBtn.addEventListener("click", function() {
    avisosContainer.style.display = "none";
    loginContainer.style.display = "block";
});

// Função de login
loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === loginInfo.username && password === loginInfo.password) {
        alert("Login bem-sucedido!");
        loginContainer.style.display = "none";
        editorAvisoContainer.style.display = "block";
        novoAviso.value = textoAviso.textContent;
    } else {
        alert("Usuário ou senha incorretos!");
    }
});

// Função de salvar aviso
salvarAvisoBtn.addEventListener("click", function() {
    const novoTexto = novoAviso.value.trim();
    const corSelecionada = corAvisoSelect.value;

    if (novoTexto) {
        textoAviso.textContent = novoTexto;
        alert("Aviso atualizado!");
    }

    // Atualizar a cor do aviso com base na seleção do usuário
    avisoDiv.className = ''; // Remove classes antigas
    if (corSelecionada === "vermelho") {
        avisoDiv.classList.add("aviso-vermelho");
    } else if (corSelecionada === "amarelo") {
        avisoDiv.classList.add("aviso-amarelo");
    } else if (corSelecionada === "verde") {
        avisoDiv.classList.add("aviso-verde");
    }

    // Retornar à tela inicial
    editorAvisoContainer.style.display = "none";
    avisosContainer.style.display = "block";
});

// Função de logout
logoutBtn.addEventListener("click", function() {
    editorAvisoContainer.style.display = "none";
    avisosContainer.style.display = "block";
    usernameInput.value = "";
    passwordInput.value = "";
});
