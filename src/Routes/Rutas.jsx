import { Route, Routes } from "react-router-dom";

import {Home} from "../Home/Home"
import {Menu} from "../shared/Menu/Menu"
import { Footer } from "../shared/Footer/Footer";
import {Servicios} from "../Servicios/Servicios"
import { Empleados } from "../Empleados/Empleados";
import { Agenda } from "../Agenda/Agenda";
import { ListaReservas } from "../ListaReservas/ListaReservas";

export function Rutas(){
    return(
        <>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/empleados" element={<Empleados />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/reservas" element={<ListaReservas />} />
        </Routes>
        <Footer/>
        </>
    )
}