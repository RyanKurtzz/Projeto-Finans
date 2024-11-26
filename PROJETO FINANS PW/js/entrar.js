
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    
    if (email === "usuario@exemplo.com" && senha === "123456") {
        alert("Login bem-sucedido!");
        window.location.href = "dashboard.html"; 
    } else {
        alert("E-mail ou senha incorretos.");
    }
});
