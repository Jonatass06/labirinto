import Quadrado from "@/components/quadrado"
import lista from "@/data/lista";
import { useEffect, useState } from "react";
import atualizarArray from "./atualizarArray";


export default function Home() {

  let i = -1;
  let quadrados = lista;
  const [modal, setModal] = useState(false)

  useEffect(() => {
    atualizarArray()
    // Vitória
    if (quadrados[482] == 2) {
      ganhou();
    }
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
          i++;
          // Paredas
          if (quadrado == 1) {
            return <Quadrado parede key={i} isHere={false} chave={i} />
          }
          // Quadrado do vasco
          else if (quadrado == 2) {
            return <Quadrado key={i} isHere chave={i} />
          }
          // Caminho
          return <Quadrado key={i} isHere={false} chave={i} />
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
