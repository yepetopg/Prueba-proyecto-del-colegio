const client = supabase.createClient(
    'https://axjzvyleenkgkpioujyt.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4anp2eWxlZW5rZ2twaW91anl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MjU5OTEsImV4cCI6MjA2NzUwMTk5MX0.NBkeq_nFKgt_8T0_5F3Fal9FyJ6JTjUgKjprqph3QB0'
);

const boton = document.getElementById('enviar');
boton.addEventListener('click', validar);

async function validar() {
    console.log('hola')
    const {data, error} = await client 
        .from('usuariosCordis')
        .select('*');
    
    for (let i = 0; i < data.length; i++) {
        let data2 = data[i];
        let usuario = document.getElementById('usuario').value;
        let contraseña = document.getElementById('password').value;

        if (data2.usuario == usuario && data2.contraseña == contraseña) {
            let miEnlace = document.getElementById('miEnlace').click();
        }
    if (error) {
        alert('Contraseña o Usuario Incorrecto');
    }

    }
}