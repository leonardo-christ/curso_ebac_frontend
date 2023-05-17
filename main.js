const form = document.getElementById('form');
const campo2 = document.getElementById('num2');
const campo1 = document.getElementById('num1');

function campo (campovalido) {
    const a = campo2.value > campo1.value
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemsucesso = `O número do segundo campo "${campo2.value}" é maior que o valor do primeiro campo "${campo1.value}"`

    if(validacampo = campo2.value > campo1.value) {
        const sucesso = document.querySelector('.txt-success');
        sucesso.innerHTML = mensagemsucesso;
        sucesso.style.display = 'block';

        campo1.value = '';
        campo2.value = '';
    }
    else {
        campo2.style.border = '1px solid red';
        document.querySelector('.txt-error').style.display = 'block'
    }
})

campo2.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    validacampo = campo(e.target.value);

    if (campo2.value < campo1.value) {
        campo2.classList.add('error');
        document.querySelector('.txt-error').style.display = 'block';
    }
    else {
        campo2.classList.remove('error');
        document.querySelector('.txt-error').style.display = 'none';
    }
});