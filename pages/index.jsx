import Quadrado from "@/components/quadrado"
import lista from "@/data/lista";
import { useEffect, useState } from "react";


export default function Home() {
  
  const quadrados = lista;
  const [modal, setModal] = useState(false)

  useEffect(() => {
    document.body.addEventListener("keydown", (event) => {
      // Tecla pressionada
      let tecla = event.key;
      console.log(tecla)
      // Indice do vasco no tabuleiro
      let indice = quadrados.indexOf(2);

      // Andando para cima
      if (tecla == 'w' || tecla == 'W' || tecla == "ArrowUp") {
        if (indice - 23 >= 0) {
          if (quadrados[indice - 23] != 1) {
            quadrados[indice - 23] = 2;
            quadrados[indice] = 0;
          }
        }
        // Andando para a esquerda
      } else if (tecla == 'a' || tecla == 'A' || tecla == "ArrowLeft") {
        if (quadrados[indice - 1] != 1) {
          quadrados[indice] = 0;
          quadrados[indice - 1] = 2;
        }
        // Andando para baixo
      } else if (tecla == 's' || tecla == 'S' || tecla == "ArrowDown") {
        if (indice + 23 < 506) {
          if (quadrados[indice + 23] != 1) {
            quadrados[indice + 23] = 2;
            quadrados[indice] = 0;
          }
        }
        // Andando para a direita
      } else if (tecla == 'd' || tecla == 'D' || tecla == "ArrowRight") {
        if (quadrados[indice + 1] != 1) {
          quadrados[indice + 1] = 2;
          quadrados[indice] = 0;
        }
        console.log(lista)
      }
      // Vitória
      if (quadrados[482] == 2) {
        ganhou();
      }
    });
  })

  // Funcao que mosta o modal e toca a musica de vitoria
  function ganhou() {
    new Audio("Vitoria.mp3").play();
    setModal(true);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">

      <div className="flex  flex-wrap w-[736px]">
        {quadrados.map(quadrado => {
          // Paredas
          if (quadrado == 1) {
            return <Quadrado parede key={quadrados.indexOf(quadrado)} isHere={false} chave={i} />
          }
          // Quadrado do vasco
          else if (quadrado == 2) {
            return <Quadrado key={quadrados.indexOf(quadrado)} isHere chave={i} />
          }
          // Caminho
          return <Quadrado key={quadrados.indexOf(quadrado)} isHere={false} chave={i} />
        })}

      </div>
      {
        // Modal da vitoria
        modal &&
        <div className="absolute top-0 right-0 left-0 bottom-0 backdrop-blur-[5px] flex justify-center items-center">
          <div className="bg-white shadow-10 border-4 h-2/4 w-2/6 rounded-md text-yellow-500 flex items-center justify-center text-4xl relative">
            <button className="absolute top-2 right-4 text-xl" onClick={() => { setModal(false) }}>x</button>
            Você ganhou!
          </div>
        </div>
      }
    </div>
  )
}
