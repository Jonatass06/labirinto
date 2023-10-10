import lista from "@/data/lista";
import { useEffect, useState } from "react";

export default function Quadrado(props){

    const [isHere, setIsHere] = useState(props.isHere);

    useEffect(() => {
        document.body.addEventListener("keydown", (event) => {
            if(lista[props.chave] == 2){
                setIsHere(true);
            } else{
                setIsHere(false);
            }
            console.log(isHere)
        });
      })

    let cor = props.parede ? "bg-black" : "bg-white";
    return(
        <>
        <div className={"w-8 h-8 " + cor} >
            {
               isHere ? <img src="VASCO.png" alt="" /> : <></>
            }
        </div>
        </>
     )
}