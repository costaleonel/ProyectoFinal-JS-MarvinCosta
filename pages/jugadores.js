function campeones() {
    Swal.fire({
        title: '¡Hola, Campeón!',
        text: 'Estamos armando un sitio dedicado a la Scaloneta',
        icon: 'info',
        confirmButtonText: 'Vamos allá'
    });
}
campeones();
//---------------------------------JUGADORES FORM-------------------------------------------//
const arqueros = [
    "EMILIANO MARTINEZ n°23 actual Aston Villa alias: El Dibu",
    "Franco Armani n°1 actual River Plate",
    "Gerónimo Rulli n°12 actual Ajax"
];

const defensores = [
    "Gonzalo Montiel n°4 actual Nottingham Forest F. C",
    "Nahuel Molina n°26 actual Atlético de Madrid",
    "Cristian Romero n°13 actual Tottenham Hotspur F. C",
    "Germán Pezzella n°6 actual Real Betis Balompié",
    "Lucas Martínez Quarta n°2 actual ACF Fiorentina",
    "Nicolás Otamendi n°19 actual SL Benfica",
    "Lisandro Martínez n°25 actual Manchester United F. C",
    "Marcos Acuña n°8 actual Sevilla FC",
    "Nicolás Tagliafico n°3 actual Olympique de Lyon"
];

const mediocampistas = [
    "Guido Rodríguez n°18 actual Real Betis Balompié",
    "Leandro Paredes n°5 actual AS Roma",
    "Alexis Mac Allister n°20 actual Real Madrid CF",
    "Rodrigo De Paul n°7 actual Atlético de Madrid",
    "Exequiel Palacios n°14 actual Bayer 04 Leverkusen",
    "Enzo Fernández n°24 actual Chelsea F. C",
    "Giovani Lo Celso n°16 actual Villarreal CF"
];

const delanteros = [
    "Lionel Messi n°10 actual Inter Miami",
    "Ángel Di María n°11 actual Libre",
    "Valentín Carboni n°21 actual AC Monza",
    "Alejandro Garnacho n°17 actual Manchester United F. C",
    "Nicolás González n°15 actual ACF Fiorentina",
    "Lautaro Martínez n°22 actual Inter de Milán",
    "Julián Álvarez n°9 actual Manchester City"
];


function mostrarInformacion(titulo, contenido) {
    Swal.fire({
        title: titulo,
        text: contenido.join("\n"),
        icon: 'info',
        confirmButtonText: 'Aceptar'
    });
}


document.getElementById('playerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const option = parseInt(document.getElementById('option').value);
    
    switch (option) {
        case 0:
            Swal.fire({
                title: 'Salida',
                text: 'Anda pa’ allá bobo',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                setTimeout(() => {
                    console.log("Terminó el bucle");
                }, 1000);
            });
            break;
        case 1:
            mostrarInformacion('Arqueros', arqueros);
            break;
        case 2:
            mostrarInformacion('Defensores', defensores);
            break;
        case 3:
            mostrarInformacion('Mediocampistas', mediocampistas);
            break;
        case 4:
            mostrarInformacion('Delanteros', delanteros);
            break;
        default:
            Swal.fire({
                title: 'Error',
                text: 'Opción no válida',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            break;
    }
});
///////botonpromise//////
const boton = document.getElementById('miBoton');

function mostrarAlerta() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Lautaro Martinez con 4 goles");
        }, 2000);
    });
}


boton.addEventListener('click', () => {
    mostrarAlerta()
        .then((mensaje) => {
            Swal.fire({
                title: '¡El toro!',
                text: mensaje,
                icon: 'success',
                confirmButtonText: 'Nos dio la victoria'
            });
        })
        .catch((error) => {
            Swal.fire({
                title: 'Error',
                text: `Ha ocurrido un error: ${error}`,
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        });
});


////////goleadores//////////
const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));


const jugadores = [
    { nombre: "Lionel Messi", goles: 1 },
    { nombre: "Lautaro Martínez", goles: 5 },
    { nombre: "Lisandro Martinez", goles: 1 },
    { nombre: "Julián Álvarez", goles: 2 }
];

function mostrarGoleadores() {
    jugadores.forEach((jugador, index) => {
        setTimeout(() => {
            Swal.fire({
                title: `${jugador.nombre}`,
                text: `Hizo ${jugador.goles} goles en la Copa América 2024.`,
                icon: 'info',
                confirmButtonText: 'Siguiente'
            });
        }, index * 1000); 
    });
}

document.getElementById('Bienvenido').textContent = `Hola, ${usuarioGuardado.nombre}. ¿Quieres saber qué jugadores argentinos hicieron goles en la Copa América 2024?`;

document.getElementById('ver-goleadores').addEventListener('click', mostrarGoleadores);
