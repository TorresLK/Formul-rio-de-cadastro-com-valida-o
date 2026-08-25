document.getElementById("cadastroForm") .onsubmit = function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome === "" || email === "") {
        alert("Preencha todos os campos");
    } else{
        alert("Formulário enviado com sucesso!");
    }
};