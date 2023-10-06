import lista from "@/data/lista";
import { useEffect, useState } from "react";

export default function Quadrado(props){

    const[isHere, setIsHere] = useState(lista[props.key]);
    const quadrados = lista;

    let cor = props.parede ? "bg-black" : "bg-white";
    return(
        <>
        <div className={"w-8 h-8 " + cor} >
            {
               isHere && <img src="VASCO.png" alt="" />
            }
        </div>
        </>
     )
}