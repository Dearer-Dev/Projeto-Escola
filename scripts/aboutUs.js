// Botão de voltar
const voltarB = document.querySelector('.voltar');

function voltarPag() {
  voltarB.addEventListener('click', () => {
    window.history.back();
  });
}

voltarPag();