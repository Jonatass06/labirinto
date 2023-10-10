import Quadrado from "@/components/quadrado"
import lista from "@/data/lista";
import { useEffect, useState } from "react";


export default function Home() {
  let i = -1;
  const quadrados = lista; 

    useEffect(() => {
      document.body.addEventListener("keydown", (event) => {
        let tecla = event.key;
        console.log(tecla)
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
          console.log(lista)
        }
        if (quadrados[482] == 2) {
          console.log("oi 9vinha")
        }
      });
    })

  return (

    <div className="w-screen h-screen flex justify-center items-center">

      <div className="flex  flex-wrap w-[736px]">
        {quadrados.map(quadrado => {
          i++;
          if (quadrado == 1) {
            return <Quadrado parede key={i} isHere={false} chave={i} />
          } else if (quadrado == 2) {
            return <Quadrado key={i} isHere chave={i} />
          }
          return <Quadrado key={i} isHere={false} chave={i} />
        })}

      </div>
    </div>

  )
}
