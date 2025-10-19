import { turmas } from "../data/bd.js";

const indexCurso = sessionStorage.getItem('curso');
const moduloSelecionado = sessionStorage.getItem('modulo');

const turma = turmas[indexCurso];
const modulo = turma[moduloSelecionado][0]; 

const blocos = document.querySelectorAll(".bloco");

blocos.forEach((bloco, i) => {
  const materia = modulo.materia[i];
  const professor = modulo.prof[i];

  if (materia && professor) {
    bloco.textContent = `${materia} - ${professor}`;
  } else {
    bloco.textContent = "—";
  }
});

// Preencher a versão mobile
const dias = document.querySelectorAll(".dia");

dias.forEach((dia, diaIndex) => {
  const aulas = dia.querySelectorAll(".aula:not(.intervalo)");
  aulas.forEach((aula, aulaIndex) => {
    const materiaSpan = aula.querySelector(".materia");
    const index = aulaIndex + diaIndex * 6; // 6 aulas por dia
    const materia = modulo.materia[index];
    const professor = modulo.prof[index];

    if (materia && professor) {
      materiaSpan.textContent = `${materia} - ${professor}`;
    } else {
      materiaSpan.textContent = "—";
    }
  });
});

const voltarB = document.querySelector('.voltar');

function voltarPag() {
  voltarB.addEventListener('click', () => {
    window.history.back();
  });
}

voltarPag();