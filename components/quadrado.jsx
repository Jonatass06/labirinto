import lista from "@/data/lista";
import { useEffect, useState } from "react";

export default function Quadrado(props){

    let cor = props.parede ? "bg-black" : "bg-white";
    return(
        <>
        <div className={"w-8 h-8 " + cor} >
            {
               props.isHere && <img src="VASCO.png" alt="" />
            }
        </div>
        </>
     )
}