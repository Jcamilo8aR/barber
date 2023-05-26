import { Footer } from "../shared/Footer/Footer"
import { Historia } from "../Historia/Historia"
import './Home.css'
import { Carga } from '../shared/Carga/Carga'
import { useState,useEffect } from 'react'

export function Home(){

    const[estadoDecarga,setEstadoCarga]=useState(true)
    const[tiempoCarga,setTiempoCarga]=useState(0)

    useEffect(function(){
        tiempoCarga>0?setEstadoCarga(false):setEstadoCarga(true)
    },[tiempoCarga])

    setTimeout(function(){
        setTiempoCarga(1)
    },0)

    if(estadoDecarga){
        return(
            <>
                <Carga/>
            </>
        )
    }else{

    return(
        <>
        <section><Historia/></section>
        </>
    )
}
}