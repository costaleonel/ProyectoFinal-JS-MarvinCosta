const arraytrofeos = ["2021 copa america Brasil","2022 Finalissima Italia \n2022 Mundial qatar", "2024 copa america USA",];

function buscarCopaPorAno(ano) {
    const resultado = arraytrofeos.filter(trofeo => trofeo.startsWith(ano));
    return resultado.length > 0 ? resultado[0] : "No se encontró ninguna copa para ese año.";
}
function buscarCopaPorAno(ano) {
    const resultado = arraytrofeos.filter(trofeo => trofeo.startsWith(ano));
    return resultado.length > 0 ? resultado[0] : "No se encontró ninguna copa para ese año.";
}

function buscarCopa() {
    const anoIngresado = document.getElementById("anoInput").value;
    const copaGanada = buscarCopaPorAno(anoIngresado);
    document.getElementById("resultado").textContent = copaGanada;
}

///// inicio es el formulario de nombre (ser si puedo achicar codigo me quedo gigante)//////////
const app = document.getElementById('app');

const form = document.createElement('form');
form.id = 'formulario';

const inputNombre = document.createElement('input');
inputNombre.type = 'text';
inputNombre.placeholder = 'Nombre';
inputNombre.id = 'nombre';
inputNombre.required = true;

const inputApellido = document.createElement('input');
inputApellido.type = 'text';
inputApellido.placeholder = 'Apellido';
inputApellido.id = 'apellido';
inputApellido.required = true;

const labelArgentino = document.createElement('label');
labelArgentino.textContent = '¿Eres argentino?';
labelArgentino.style.color = '#ffffff';
labelArgentino.style.fontSize = '18px';
labelArgentino.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
labelArgentino.style.padding = '5px 10px';
labelArgentino.style.border = '1px solid #007bff';
labelArgentino.style.borderRadius = '5px';


const selectArgentino = document.createElement('select');
selectArgentino.id = 'argentino';
selectArgentino.required = true;

const optionSi = document.createElement('option');
optionSi.value = 'si';
optionSi.textContent = 'Sí';

const optionNo = document.createElement('option');
optionNo.value = 'no';
optionNo.textContent = 'No';


selectArgentino.appendChild(optionSi);
selectArgentino.appendChild(optionNo);

form.appendChild(inputNombre);
form.appendChild(document.createElement('br'));
form.appendChild(inputApellido);
form.appendChild(document.createElement('br'));
form.appendChild(labelArgentino);
form.appendChild(selectArgentino);
form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Enviar';

form.appendChild(submitButton);

app.appendChild(form);


form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const esArgentino = selectArgentino.value;
    
    const usuario = {
        nombre: nombre,
        apellido: apellido,
        argentino: esArgentino
    };
    
    localStorage.setItem('usuario', JSON.stringify(usuario));
    
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
    
    let mensajeFinal = `Bienvenido, ${usuarioGuardado.nombre} ${usuarioGuardado.apellido}. `;
    
    if (usuarioGuardado.argentino === 'si') {
        mensajeFinal += "¡Vamos campeón mundial!";
    } else {
        mensajeFinal += "Lástima, Argentina es el país de la pasión.";
    }
    Swal.fire({
        title: '¡Éxito!',
        text: mensajeFinal,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    }).then(() => {
        location.reload();
    });

    form.reset();
});



//form footer
const nombreu = document.getElementById("nombreu");
const edad = document.getElementById("edad");

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const objeto = {
        nombreu: nombreu.value,
        edad: edad.value,
    }
    console.log("Enviado", objeto);

    nombreu.value = "";
    edad.value = "";
});