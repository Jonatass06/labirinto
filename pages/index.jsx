import Quadrado from "@/components/quadrado"
import lista from "@/data/lista";
import { useEffect, useState } from "react";
import enventoAlterarArray from "./api/atualizarArray";


export default function Home() {
  let i = -1;
  const quadrados = lista; 

    useEffect(() => {
        enventoAlterarArray();
    })

  return (

    <div className="w-screen h-screen flex justify-center items-center">

      <div className="flex  flex-wrap w-[736px]">
        {quadrados.map(quadrado => {
          i++;
          if (quadrado == 1) {
            return <Quadrado parede key={i} chave={i} />
          } else if (quadrado == 2) {
            return <Quadrado key={i} isHere chave={i} />
          }
          return <Quadrado key={i} chave={i} />
        })}

      </div>
    </div>

  )
}
