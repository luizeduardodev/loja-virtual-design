//Função para abrir e fechar a div de formas de pagamento;
const varFormsPayments = document.getElementById("forms-paymentsClick");

const funcaoShow = () => {
    const varShowClick = document.getElementById("container-forms-payments");
    varShowClick.classList.toggle('active');
    const active = varShowClick.classList.contains('active');
}
varFormsPayments.addEventListener('click', funcaoShow);