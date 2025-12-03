// Animação simples no botão CTA
document.getElementById('cta-button').addEventListener('click', function() {
    alert('Redirecionando para o checkout...');
    window.location.href = 'https://pay.kiwify.com.br/MuKCPie?afid=rzLoZsG5';
});

// Validação básica para um formulário (adicione se necessário)
function validateForm() {
    // Exemplo: se houver um campo de email
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Email inválido!');
        return false;
    }
    return true;
}

// Animação de fade-in nas seções
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Estilo inicial para animação
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s, transform 0.5s';
});