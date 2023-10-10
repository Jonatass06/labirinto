import lista from "@/data/lista";

export default function atualizarArray(event) {
  const quadrados = lista;
  // Tecla pressionada
  let tecla = event.key;
  // Indice do vasco no tabuleiro
  let indice = quadrados.indexOf(2);

  // Andando para cima
  if (tecla == "w" || tecla == "W") {
    if (indice - 23 >= 0) {
      if (quadrados[indice - 23] != 1) {
        quadrados[indice - 23] = 2;
        quadrados[indice] = 0;
      }
    }
    // Andando para a esquerda
  } else if (tecla == "a" || tecla == "A") {
    if (quadrados[indice - 1] != 1) {
      quadrados[indice] = 0;
      quadrados[indice - 1] = 2;
    }
    // Andando para baixo
  } else if (tecla == "s" || tecla == "S") {
    if (indice + 23 < 506) {
      if (quadrados[indice + 23] != 1) {
        quadrados[indice + 23] = 2;
        quadrados[indice] = 0;
      }
    }
    // Andando para a direita
  } else if (tecla == "d" || tecla == "D") {
    if (quadrados[indice + 1] != 1) {
      quadrados[indice + 1] = 2;
      quadrados[indice] = 0;
    }
  }
}
