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
            } else if(isHere){
                setIsHere(false);
            }
        });
    })
    // Definindo a cor do quadrado
    let cor = props.parede ? "bg-black" : isHere ? "bg-blue-500": "bg-white";
    
    return (
        <>
            <div className={"w-8 h-8 " + cor} >
                {
                    isHere && <img src="VASCO.png" alt="" />
                }
            </div>
        </>
    )
}