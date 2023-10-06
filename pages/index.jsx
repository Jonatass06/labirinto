import Quadrado from "@/components/quadrado"
import { useEffect, useState } from "react";


export default function Home() {
  let i=0;
  const [quadrados, setQuadrados] = useState(
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1,
      1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1,
      1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1,
      1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1,
      1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1,
      1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1,
      1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
      1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1,
      1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1,
      1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1,
      1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1,
      1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1,
      1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1,
      1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1,
      1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1,
      1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]


  )

  useEffect(() => {
    document.body.addEventListener("keydown", (event) => {
      let quadradosTeste = [...quadrados];
      let tecla = event.key;
      let indice = quadrados.indexOf(2);

      if (tecla == 'w' || tecla == 'W') {
        if (quadrados.indexOf(2) - 23 >= 0) {
          if (quadrados[quadrados.indexOf(2) - 23] != 1) {
            quadradosTeste[indice - 23] = 2;
            quadradosTeste[indice] = 0;
          }
        }
      } else if (tecla == 'a' || tecla == 'A') {
        if (quadrados[quadrados.indexOf(2) - 1] != 1) {
          quadradosTeste[indice] = 0;
          quadradosTeste[indice - 1] = 2;
        }

      } else if (tecla == 's' || tecla == 'S') {
        if (quadrados.indexOf(2) + 23 < 506) {
          if (quadrados[quadrados.indexOf(2) + 23] != 1) {
            quadradosTeste[indice + 23] = 2;
            quadradosTeste[indice] = 0;
          }
        }


      } else if (tecla == 'd' || tecla == 'D') {
        if (quadrados[quadrados.indexOf(2) + 1] != 1) {
          quadradosTeste[indice] = 0;
          quadradosTeste[indice + 1] = 2;
        }
      }
      setQuadrados(quadradosTeste);

      if (quadrados[482] == 2) {
        console.log("oi 9vinha")
      }
    });
  }, [quadrados])






  return (

    <div className="w-screen h-screen flex justify-center items-center">

      <div className="flex  flex-wrap w-[736px]">
        {quadrados.map(quadrado => {
          i++;
          if (quadrado == 1) {
            return <Quadrado parede key={i} />
          } else if (quadrado == 2) {
            return <Quadrado isHere key={i} />
          }
          return <Quadrado key={i} />
        })}

      </div>
    </div>

  )
}
