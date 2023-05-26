import 'animate.css'
import './Agenda.css'
import WOW from 'wow.js'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import 'bootstrap-icons/font/bootstrap-icons.css'


export function Agenda() {

    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")

    const [errores, setErrores] = useState({})

    useEffect(function () {
        if (Object.keys(errores).length > 0) { // Aca tengo errores
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tienes campos sin rellenar!',
            })
        } else { // No hay errores
            Swal.fire(
                'Listo!',
                'Se ha reservado tu cita satisfactoriamente!',
                'success'
            )
        }
    }, [errores])

    function validarFormulario(evento) {
        evento.preventDefault()
        let listaErrores = {}

        if (!nombre) {
            listaErrores.nombre = "El nombre es obligatorio"
        }

        if (!correo) {
            listaErrores.correo = "El correo es obligatorio"
        }

        if (!telefono) {
            listaErrores.telefono = "El telefono es obligatorio"
        }

        if (!fecha) {
            listaErrores.fecha = "La fecha es obligatoria"
        }

        if (!hora) {
            listaErrores.hora = "La Hora es obligatoria"
        }

        setErrores(listaErrores)

    }

    useEffect(function () {
        const wow = new WOW()
    }, [])


    return (
        <>
            <main>
                <section>
                    <div className="bannerAgenda">
                        <form onSubmit={validarFormulario}>
                            <div className='formulario'>
                                <h1 className='text-center text-white wow animate_animated animate_fadeInDownBig'>RESERVA TU TURNO</h1>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className="bi bi-person-circle"></i>
                                            </span>
                                            <input
                                                type="text"
                                                className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
                                                placeholder="Nombre Cliente"
                                                id='nombre'
                                                value={nombre}
                                                onChange={(evento) => {
                                                    setNombre(evento.target.value)
                                                }} />
                                            <div className="invalid-feedback">Por favor digite tu nombre.</div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1"><i className="bi bi-envelope-check-fill"></i></span>
                                            <input
                                                type="email"
                                                className={`form-control ${errores.correo ? 'is-invalid' : ''}`}
                                                value={correo}
                                                placeholder="Correo cliente"
                                                onChange={(evento) => {
                                                    setCorreo(evento.target.value)
                                                }} />
                                            <div className="invalid-feedback">Por favor digite tu correo.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1"><i className="bi bi-phone-fill"></i></span>
                                            <input
                                                type="number"
                                                className={`form-control ${errores.telefono ? 'is-invalid' : ''}`}
                                                value={telefono}
                                                placeholder="Telefono Cliente"
                                                onChange={(evento) => {
                                                    setTelefono(evento.target.value)
                                                }} />
                                            <div className="invalid-feedback">Por favor digite tu número.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1"><i className="bi bi-calendar-check-fill"></i></span>
                                            <input
                                                type="date"
                                                className={`form-control ${errores.fecha ? 'is-invalid' : ''}`}
                                                value={fecha}
                                                onChange={(evento) => {
                                                    setFecha(evento.target.value)
                                                }} />
                                            <div className="invalid-feedback">Por favor selecciona una fecha.</div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1"><i className="bi bi-alarm-fill"></i></span>
                                            <select
                                                id='hora'
                                                onChange={(evento) => {
                                                    setHora(evento.target.value);
                                                }}
                                                className={`form-select ${errores.hora ? "is-invalid" : ""}`}
                                                value={hora}
                                                defaultValue={'DEFAULT'}>
                                                <option value="DEFAULT">Hora:</option>
                                                <option value="1">6:30 am</option>
                                                <option value="2">7:00 am</option>
                                                <option value="3">7:30 am</option>
                                                <option value="3">9:00 am</option>
                                                <option value="3">9:30 am</option>
                                                <option value="3">12:30 am</option>
                                                <option value="3">3:30 am</option>
                                                <option value="3">5:30 am</option>
                                                <option value="3">10:30 am</option>
                                            </select>
                                            <div className="invalid-feedback">Por favor selecciona una hora.</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                </div>
                            </div>
                            <div className="col-12 col-md-12">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">
                                        <i className="bi bi-telegram"></i></span>
                                    <input type="submit" className="form-control" placeholder="Registrarse" />
                                </div>
                            </div>

                        </form>

                    </div>
                </section>
            </main>

        </>
    )
}
