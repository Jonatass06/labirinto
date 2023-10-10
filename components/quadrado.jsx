import lista from "@/data/lista";
import { useEffect, useState } from "react";

export default function Quadrado(props) {

    const [isHere, setIsHere] = useState(props.isHere);
    const quadrados = lista;

    useEffect(() => {
        document.body.addEventListener("keydown", async (event) => {
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
                console.log(lista)
            }
            if (quadrados[482] == 2) {
                console.log("oi 9vinha")
            }

            if (lista[props.chave] == 2) {
                setIsHere(true);
            } else {
                setIsHere(false);
            }
            console.log(isHere)
        });
    })

    let cor = props.parede ? "bg-black" : "bg-white";
    return (
        <>
            <div className={"w-8 h-8 " + cor} >
                {
                    isHere ? <img src="VASCO.png" alt="" /> : <></>
                }
            </div>
        </>
    )
}