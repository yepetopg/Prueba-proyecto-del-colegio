const client = supabase.createClient(
    'https://axjzvyleenkgkpioujyt.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4anp2eWxlZW5rZ2twaW91anl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MjU5OTEsImV4cCI6MjA2NzUwMTk5MX0.NBkeq_nFKgt_8T0_5F3Fal9FyJ6JTjUgKjprqph3QB0'
);

const boton = document.getElementById('enviar');
boton.addEventListener('click', validar);

let checkBox = document.getElementById('mostrarContraseña');
let inputContraM = document.getElementById('password');
checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
        inputContraM.setAttribute('type', 'text');
    }
    else {
        inputContraM.setAttribute('type', 'password')
    }
})

async function validar() {
    let inputUser = document.getElementById('usuario');
    let inputContra = document.getElementById('password');
    let estadoContra = document.getElementById('estadoContra');
    let errorL = true;
    const {data, error} = await client 
        .from('usuariosCordis')
        .select('*');
    
    for (let i = 0; i < data.length; i++) {
        let data2 = data[i];
        console.log(data2)
        let usuario = document.getElementById('usuario').value;
        let contraseña = document.getElementById('password').value;
        let miEnlace;
        if (data2.institucion == 'ie') {
            miEnlace = document.getElementById('ie');
            console.log(miEnlace);
        }
        if (data2.institucion == 'angelina') {
            miEnlace = document.getElementById('angelina');
            console.log(miEnlace);
        }
        if (data2.usuario == usuario && data2.contraseña == contraseña) {
            miEnlace.click();
            errorL = true;
        }
        else {
            errorL = false;
        }
    }
    if (!errorL) {
        inputUser.style.borderColor = '#f00';
        inputContra.style.borderColor = '#f00';
        estadoContra.style.color = '#f00';
        estadoContra.innerText = 'Contraseña o usuario Incorrectos';
    }
    else {}
}