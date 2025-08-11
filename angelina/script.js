const client = supabase.createClient(
    'https://axjzvyleenkgkpioujyt.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4anp2eWxlZW5rZ2twaW91anl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MjU5OTEsImV4cCI6MjA2NzUwMTk5MX0.NBkeq_nFKgt_8T0_5F3Fal9FyJ6JTjUgKjprqph3QB0'
);

let profesores = ["Adriana M. Sotelo Sánchez", "Andres E. Campo", "Beatriz E. Garcés Rodríguez", "Cecilia Hernández López", "Damaso D. Cauca Oliveros",
    "Didienso F. Pareja Rios", "Diego A. Molina Sosa", "Francened López Cardona", "Jenny Quito", "Jhon J. Ibarra",
    "José D. Porto Mass", "Juan S. Arango Giraldo", "Liliana M. Muños Mejía", "Luis F. Sánchez", "Crisitian Muños", "Luz E. Toro Cosme", "Luz M. Arrieta Pérez",
    "Maryueth Rincón Ochoa", "Mauricio Foronda Martínez", "Miguel A. Nova Castellanos", "Osvaldo Pedrozo Ospina", "Erica Mira", "Santiago Velasquez Quintero", "Saul A. Mejia Cuartas",
    "Stella Vesga Rueda", "Tania E. López Muños", "Carlos Osorno"];
const enviarBoton = document.getElementById('enviar');
enviarBoton.addEventListener('click', enviar);

let nombreDocente = document.getElementById('docente');
let horasNoDadas = document.getElementById('horasNoDadas');
let motivo = document.getElementById('motivo');
let fecha = document.getElementById('fecha');

let limpiarForm = () => {
    const horasNoDadas2 = document.getElementById('horasNoDadas');
    nombreDocente.value = '.';
    horasNoDadas2.value = '.';
    motivo.value = '.';
    fecha.value = '';
}

async function enviar() {

    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    const date = `${año}-${mes}-${dia}`;


    if (nombreDocente.value == '.'){
        alert('Porfavor seleccione el nombre de un docente');
        return;
    }

    if (horasNoDadas.value == '.') {
        alert('Porfavor seleccione el numero de clases no dadas');
        return;
    }

    if (motivo.value == '.') {
        alert('Porfavor seleccione un motivo');
        return;
    }

    let fechaFinal = fecha.value === '' ? date : fecha.value; 
    let horasFinal = parseInt(horasNoDadas.value);

    if (nombreDocente.value == 'Todos') {
        for (let i = 0; i < profesores.length; i++){
            let Docente = profesores[i];
            const {data, error} = await client 
                .from('prueba')
                .insert([{nombre: Docente, horas: horasFinal, motivo: motivo.value, fecha: fechaFinal}]);
            if (error) {
                    alert('⚠️ No se puedieron enviar los datos');
                    return;
            }
            }
            alert('Registro realizado');
            limpiarForm();
        }

        
        
    else {
        const {data, error} = await client 
            .from('prueba')
            .insert([{nombre: nombreDocente.value, horas: horasFinal, motivo: motivo.value, fecha: fechaFinal}]);
    
        if (error) {
            alert('⚠️ No se puedieron enviar los datos')
        } else {
            alert('✅ Se han enviado los datos correctamente');
        }}
        limpiarForm();

}