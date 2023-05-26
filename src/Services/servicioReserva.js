export async function consultarReservas(){

    // 1.URL DEL SERVICIO
    const URL="http://pruegaapi20231.vercel.app/buscarReservas"


    // 2. CONFIGURAR LA PETICION DE 
    
    const PETICION={ // depndiendo del servicio algunos pueden ser opcionales
        method:"GET",  // get post put delete
        // headers:{}, // datos de control (opcional)
        // body:"" // cuando hago un post o put (opcional)
    }


    // 3. SIEMPRE DEBE COMUNICARME CON EL BACK
    // nos comunicamos con la funcion fetch
    let respuestaServidor=await  fetch(URL,PETICION)// debe esperar ya que es asincrona
    let datosConsultados=await respuestaServidor.json()
    return datosConsultados

}