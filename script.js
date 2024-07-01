document.getElementById('inventory-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombreProducto = document.getElementById('nombre_producto').value;
    let precioProducto = parseInt(document.getElementById('precio_producto').value);
    let inventarioActual = parseInt(document.getElementById('inventario_actual').value);
    let cantidadVendida = parseInt(document.getElementById('cantidad_vendida').value);
    let errorMessage = document.getElementById('error-message');
    let successMessage = document.getElementById('success-message');
    let loading = document.getElementById('loading');
    let notification = document.getElementById('notification');

    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    loading.style.display = 'block';

    if (isNaN(inventarioActual) || isNaN(cantidadVendida) || isNaN(precioProducto)) {
        errorMessage.textContent = "Por favor, ingrese valores numéricos válidos.";
        errorMessage.style.display = 'block';
        loading.style.display = 'none';
        return;
    }

    if (inventarioActual < 0 || cantidadVendida < 0 || precioProducto < 0) {
        errorMessage.textContent = "Las cantidades y el precio no pueden ser negativos.";
        errorMessage.style.display = 'block';
        loading.style.display = 'none';
        return;
    }

    if (cantidadVendida > inventarioActual) {
        errorMessage.textContent = "La cantidad vendida no puede exceder la cantidad en inventario.";
        errorMessage.style.display = 'block';
        loading.style.display = 'none';
        return;
    }

    let inventarioNuevo = inventarioActual - cantidadVendida;

    setTimeout(function() { // Simula un tiempo de procesamiento
        document.getElementById('nombre_producto_display').textContent = nombreProducto;
        document.getElementById('precio_producto_display').textContent = precioProducto.toLocaleString('es-CL');
        document.getElementById('inventario_nuevo').textContent = inventarioNuevo;
      
        document.getElementById('cantidad_vendida_display').textContent = cantidadVendida;

        loading.style.display = 'none';
        successMessage.style.display = 'block';

        // Limpiar el formulario
        document.getElementById('inventory-form').reset();

        // Mostrar notificación
        notification.style.display = 'block';
        setTimeout(function() {
            notification.style.display = 'none';
        }, 3000); // 3 segundos de duración de la notificación
    }, 1000); // 1 segundo de tiempo de espera
});
