// Obtener referencia al elemento donde se mostrará el texto de la agenda
const agendaTextElement = document.getElementById('agenda-text');

// Array con las líneas de texto que quieres que se escriban en la agenda
const agendaLines = [
    "8:00 am - Revisar inventario.",
    "9:30 am - Llamar a proveedores de materias primas.",
    "11:00 am - Reunión de planificación de marketing.",
    "1:00 pm - Almuerzo.",
    "2:30 pm - Actualizar registros de ventas.",
    "4:00 pm - Capacitación en nuevas técnicas de producción."
];

// Función para simular la escritura en la agenda
function escribirEnAgenda() {
    agendaTextElement.innerHTML = ''; // Limpiar el contenido inicialmente

    agendaLines.forEach((line, index) => {
        setTimeout(() => {
            agendaTextElement.innerHTML += line + "<br>";
            agendaTextElement.scrollTop = agendaTextElement.scrollHeight; // Hacer scroll automáticamente
        }, index * 1500); // Delay de 1.5 segundos entre cada línea (ajustable)
    });
}

// Llamar a la función para iniciar la animación cuando se cargue la página
window.addEventListener('load', escribirEnAgenda);
