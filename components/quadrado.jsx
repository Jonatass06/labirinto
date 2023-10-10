import lista from "@/data/lista";
import { useEffect, useState } from "react";

export default function Quadrado(props) {

    // Variavel que define onde esta a imagem do vasco
    const [isHere, setIsHere] = useState(props.isHere);

    useEffect(() => {
        // Evento que altera a visibilidade da imagem do vasco levando em consideração o array do tabuleiro
        document.body.addEventListener("keypress", (event) => {
            if (lista[props.chave] == 2) {
                setIsHere(true);
            } else {
                setIsHere(false);
            }
        });
    })

    return (
        <>
            <div className={"w-8 h-8 rounded-full"} >
                {
                    isHere && <img src="VASCO.png" alt="" />
                }
                {
                    props.parede && <img src="bolaVasco.webp" alt="" />
                }
            </div>
        </>
    )
}