/*
Js é um linguagem Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
Por Id getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

function validaNome() {
    let txtNome = document.querySelector("#txtNome")

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome invalido"
        txtNome.style.color = "red"
        txtNome.style.display = "block"
    } else {
        txtNome.style.display = "none"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "Email invalido"
        txtEmail.style.color = "red"
        txtEmail.style.display = "block"
    } else {
        txtEmail.style.display = "none"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Escreva um assunto até no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ("Formulário enviado com sucesso!")
    }else{
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}


function mapZoom(){
    mapa.style.width = "800px"
    mapa.style.height = '800px'
}

function mapZoomOut(){
    mapa.style.width = "600px"
    mapa.style.height = '450px'
}