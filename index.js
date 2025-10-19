function menu() {
  const cursos = document.querySelectorAll('.curso'); // Botões de cursos
  const modulos = document.querySelectorAll('.btnM'); // Botões de módulos
  const menu = document.querySelector('.menu');
  const overlay = document.querySelector('.overlay');

  let cursoSelecionado = null;

  // Quando clica em um curso
  cursos.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      cursoSelecionado = btn.value; // pega o valor do botão do curso

      let periodo = null;

    // Verifica em qual janela o botão está
    if (btn.closest('.janela1')) {
      periodo = 'manha';
    } else if (btn.closest('.janela2')) {
      periodo = 'tarde';
    } else if (btn.closest('.janela3')) {
      periodo = 'noite';
    }
      sessionStorage.setItem("curso", (cursoSelecionado)); // salva no localStorage
      sessionStorage.setItem("periodo", periodo);

      // Mostra o menu
      menu.classList.add("show");
      overlay.classList.add("show");
    });
  });

  // Quando clica em um módulo
  modulos.forEach(btn => {
    btn.addEventListener("click", () => {
      const moduloSelecionado = btn.value; // pega o valor do botão do módulo
      const periodoSelecionado = sessionStorage.getItem("periodo");
      sessionStorage.setItem("modulo",(moduloSelecionado)); // salva no localStorage

      if (periodoSelecionado === "manha") {
      window.location.href = "./pages/manha.html";
    } else if (periodoSelecionado === "tarde") {
      window.location.href = "./pages/detalhes.html";
    } else if (periodoSelecionado === "noite") {
      window.location.href = "./pages/noite.html";
    }
    });
  });

  // Fecha menu ao clicar fora
  document.addEventListener("click", () => {
    menu.classList.remove("show");
    overlay.classList.remove("show");
  });

  menu.addEventListener("click", (e) => e.stopPropagation());
  overlay.addEventListener("click", () => {
    menu.classList.remove("show");
    overlay.classList.remove("show");
  });
}

menu();
