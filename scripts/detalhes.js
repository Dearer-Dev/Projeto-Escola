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

// Preencher a versão mobile (horizontalmente, como na tabela)
const dias = document.querySelectorAll(".dia");
let index = 0;

for (let i = 0; i < 7; i++) { // 7 horários por dia
  for (let j = 0; j < 5; j++) { // 5 dias da semana
    const dia = dias[j];
    const aulas = dia.querySelectorAll(".aula");
    const aula = aulas[i]; // pega a aula do horário i no dia j

    if (!aula || aula.classList.contains("intervalo")) continue;

    const materiaSpan = aula.querySelector(".materia");
    const materia = modulo.materia[index];
    const professor = modulo.prof[index];

    if (materia && professor) {
      materiaSpan.textContent = `${materia} - ${professor}`;
    } else {
      materiaSpan.textContent = "—";
    }

    index++;
  }
}

// Botão de voltar
const voltarB = document.querySelector('.voltar');

function voltarPag() {
  voltarB.addEventListener('click', () => {
    window.history.back();
  });
}

voltarPag();
