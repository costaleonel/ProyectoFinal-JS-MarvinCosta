/////////         carrito camisetas   /////////////////
const camisetas = [
    { id: 1, nombre: 'Alternativa 2021', imagen: '../img/2021alternativa.jpeg', precio: 155800 },
    { id: 2, nombre: 'Titular 2021', imagen: '../img/titular2021.jpeg', precio: 175200 },
    { id: 3, nombre: 'Alternativa 2022', imagen: '../img/2022alternativa.jpeg', precio: 13000 },
    { id: 4, nombre: 'Titular 2022', imagen: '../img/2022titular.jpeg', precio: 136500 },
    { id: 5, nombre: 'Alternativa 2024', imagen: '../img/2024alternativa.jpeg', precio: 12000 },
    { id: 6, nombre: 'Titular 2024', imagen: '../img/2024titular.jpeg', precio: 25400 }
];

function mostrarCamisetas() {
    const container = document.getElementById('camisetas-container');
    camisetas.forEach(camiseta => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${camiseta.imagen}" alt="${camiseta.nombre}">
            <h3>${camiseta.nombre}</h3>
            <p>Precio: $${camiseta.precio}</p>
            <button onclick="agregarAlCarrito(${camiseta.id})">Agregar al Carrito</button>
        `;
        container.appendChild(card);
    });
}

function agregarAlCarrito(id) {
    const camiseta = camisetas.find(c => c.id === id);
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(camiseta);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    carritoItems.innerHTML = '';
    let total = 0;
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.forEach(item => {
        total += item.precio;
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <span>${item.nombre}</span>
            <span>$${item.precio}</span>
        `;
        carritoItems.appendChild(itemDiv);
    });
    document.getElementById('total').textContent = total;

    document.getElementById('comprar').disabled = carrito.length === 0;
}

function vaciarCarrito() {
    localStorage.removeItem('carrito');
    actualizarCarrito();
}

function comprar() {
    Swal.fire({
        title: '¡Felicitaciones!',
        text: 'Has realizado la compra con éxito.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    }).then(() => {
        vaciarCarrito();
    });
}

document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);
document.getElementById('comprar').addEventListener('click', comprar);

mostrarCamisetas();
actualizarCarrito();




//////////////         fetch             ///////////

document.addEventListener('DOMContentLoaded', () => {
    const productosDivE = document.getElementById('productosE');
    const carritoUlE = document.getElementById('carritoE');
    const comprarCarritoBtnE = document.getElementById('comprarCarritoE');
    const vaciarCarritoBtnE = document.getElementById('vaciarCarritoE');

    fetch('../json/data.json')
        .then(response => response.json())
        .then(dataE => {
            dataE.forEach(camisetaE => {
                const productoDivE = document.createElement('div');
                productoDivE.classList.add('productoE');

                productoDivE.innerHTML = `
                    <img src="${camisetaE.imagen}" alt="${camisetaE.nombre}">
                    <h3>${camisetaE.nombre}</h3>
                    <p>Precio: $${camisetaE.precio.toFixed(2)}</p>
                    <button data-idE="${camisetaE.id}">Añadir al Carrito</button>
                `;

                productosDivE.appendChild(productoDivE);
            });

            document.querySelectorAll('button[data-idE]').forEach(buttonE => {
                buttonE.addEventListener('click', () => {
                    const idE = parseInt(buttonE.getAttribute('data-idE'));
                    const productoE = dataE.find(pE => pE.id === idE);
                    agregarAlCarritoE(productoE);
                });
            });
        });

    let carritoE = JSON.parse(localStorage.getItem('carritoE')) || [];

if (!Array.isArray(carritoE)) {
    carritoE = [];
}

    actualizarCarritoE();

    function agregarAlCarritoE(productoE) {
        carritoE.push(productoE);
        localStorage.setItem('carritoE', JSON.stringify(carritoE));
        actualizarCarritoE();
    }

    function actualizarCarritoE() {
        carritoUlE.innerHTML = '';
        carritoE.forEach(productoE => {
            const liE = document.createElement('li');
            liE.textContent = `${productoE.nombre} - $${productoE.precio.toFixed(2)}`;
            carritoUlE.appendChild(liE);
        });
    }

    comprarCarritoBtnE.addEventListener('click', () => {
        if (carritoE.length > 0) {
            localStorage.removeItem('carritoE');
            carritoE.length = 0;
            actualizarCarritoE();
            Swal.fire({
                icon: 'success',
                title: 'Compra Realizada',
                text: 'Envianos tu talle en "subscribirte".',
            });
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Carrito Vacío',
                text: 'El carrito está vacío, añade productos antes de comprar.',
            });
        }
    });

    vaciarCarritoBtnE.addEventListener('click', () => {
        localStorage.removeItem('carritoE');
        carritoE.length = 0;
        actualizarCarritoE();
        Swal.fire({
            icon: 'info',
            title: 'Carrito Vaciado',
            text: 'Te arrepentiste?.',
        });
    });
});
