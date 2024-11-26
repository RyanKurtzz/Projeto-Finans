document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const email = event.target.querySelector('input[type="text"]').value;
    alert(`Obrigado por se inscrever com o e-mail: ${email}`);
    
    // Limpa o campo de entrada
    event.target.reset();
});
