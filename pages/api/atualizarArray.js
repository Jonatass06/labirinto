
export default function enventoAlterarArray() {
  document.body.addEventListener("keyup", async(event) => {
    let tecla = event.key;
    let indice = quadrados.indexOf(2);

    if (tecla == 'w' || tecla == 'W') {
      if (indice - 23 >= 0) {
        if (quadrados[indice - 23] != 1) {
          quadrados[indice - 23] = 2;
          quadrados[indice] = 0;
        }
      }
    } else if (tecla == 'a' || tecla == 'A') {
      if (quadrados[indice - 1] != 1) {
        quadrados[indice] = 0;
        quadrados[indice - 1] = 2;
      }

    } else if (tecla == 's' || tecla == 'S') {
      if (indice + 23 < 506) {
        if (quadrados[indice + 23] != 1) {
          quadrados[indice + 23] = 2;
          quadrados[indice] = 0;
        }
      }

    } else if (tecla == 'd' || tecla == 'D') {
      if (quadrados[indice + 1] != 1) {
        quadrados[indice + 1] = 2;
        quadrados[indice] = 0;
      }
    }
    if (quadrados[482] == 2) {
      console.log("oi 9vinha")
    }
  });

}
