const formulario = document.getElementById('formReserva');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const datosCita = {
        nombre: document.getElementById('nombre').value,
        telefono: document.getElementById('telefono').value,
        correo: document.getElementById('correo').value,
        servicio: document.getElementById('servicio').value,
        barbero: document.getElementById('barbero').value,
        fecha: document.getElementById('fecha').value,
        hora: document.getElementById('hora').value,
        mensaje: document.getElementById('mensaje').value || "Ninguno"
    };

    localStorage.setItem('reservaActual', JSON.stringify(datosCita));

    window.location.href = "../html/reserva.html";
});
