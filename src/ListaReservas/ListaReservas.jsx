import { useState, useEffect } from "react"
import { consultarReservas } from "../Services/servicioReserva" 
import { Carga } from "../shared/Carga/Carga"

export function ListaReservas(){

    // CONFIGURO VARIABLES DE ESTADO
    const[reservas,setReserva]=useState(null)  // la uso para almacenar los datos que lleguen del API
    const[carga,setCarga]=useState(true) // por defecto esta cargando, por lo tanto comienza en true

    // programo useEffect para garantizar que llamare al servicio SOLO cuando cargue mi componente
    useEffect(function(){},[
        consultarReservas().then(function(respuestaBack){
            setReserva(respuestaBack.reservas)
            setCarga(false)
        })
    ])

    // programo la interfaz para mostrar el mensaje de carga o para mostrar los datos del servicio
    if(carga){
        return(
            <Carga/>
        )
    }else{
        return(
            <>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-3">
                        {
                            reservas.map(function(reserva){
                                return(
                                    <div className="col">
                                        <div className="card h-100 shadow p-2">
                                            <h4>Cliente: {reserva.nombre}</h4>
                                            <p>Contacto: {reserva.telefono}</p>
                                            <p>Fecha: {reserva.dia}</p>
                                            <p>Hora {reserva.hora}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </>
        )
    }

    
}