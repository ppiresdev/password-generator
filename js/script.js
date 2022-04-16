const rangeCaracterEl = document.getElementById("rangeCaracter");
const rangeNumberEl = document.getElementById("rangeNumber");
const form = document.getElementById("gerarSenhaForm");
const incluirMaiusculaEl = document.getElementById("incluirMaiuscula");
const incluirNumeroEl = document.getElementById("incluirNumero");
const incluirSimboloEl = document.getElementById("incluirSimbolo");
const exibirSenhaEl = document.getElementById("exibirSenha");

const VETOR_MAIUSCULAS = vetorInicioFim(65, 90);
const VETOR_MINUSCULAS = vetorInicioFim(97, 122);
const VETOR_NUMEROS = vetorInicioFim(48, 57);
const VETOR_SIMBOLOS = vetorInicioFim(33, 47)
  .concat(vetorInicioFim(58, 64))
  .concat(vetorInicioFim(91, 96))
  .concat(vetorInicioFim(123, 126));

rangeNumberEl.addEventListener("input", sincCaracter);
rangeCaracterEl.addEventListener("input", sincCaracter);

function sincCaracter(e) {
  const valor = e.target.value;

  rangeCaracterEl.value = valor;
  rangeNumberEl.value = valor;
}

function gerarSenha(
  qtdCaracteres,
  incluirMaiuscula,
  incluirNumeros,
  incluirSimbolos
) {
  let charCodigos = VETOR_MINUSCULAS;
  if (incluirMaiuscula) {
    charCodigos = charCodigos.concat(VETOR_MAIUSCULAS);
  }

  if (incluirNumeros) {
    charCodigos = charCodigos.concat(VETOR_NUMEROS);
  }

  if (incluirSimbolos) {
    charCodigos = charCodigos.concat(VETOR_SIMBOLOS);
  }
  const senha = [];
  for (let i = 0; i < qtdCaracteres; i++) {
    const c = charCodigos[Math.floor(Math.random() * charCodigos.length)];
    senha.push(String.fromCharCode(c));
  }
  return senha.join("");
}

function vetorInicioFim(inicio, fim) {
  const vetor = [];
  for (let i = inicio; i <= fim; i++) {
    vetor.push(i);
  }
  return vetor;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const qtdCaracteres = rangeNumberEl.value;
  const incluirMaiuscula = incluirMaiusculaEl.checked;
  const incluirNumero = incluirNumeroEl.checked;
  const incluirSimbolo = incluirSimboloEl.checked;
  const senha = gerarSenha(
    qtdCaracteres,
    incluirMaiuscula,
    incluirNumero,
    incluirSimbolo
  );
  exibirSenhaEl.innerText = senha;
});
