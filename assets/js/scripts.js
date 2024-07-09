document.getElementById('formularioCalorias').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = document.getElementById('peso').value;
    const minutos = document.getElementById('minutos').value;
    const actividad = document.querySelector('input[name="actividad"]:checked').value;
    const contenedorAlertas = document.getElementById('contenedorAlertas');

    contenedorAlertas.innerHTML = '';

    if (peso < 1 || peso > 120) {
        mostrarAlerta('El peso debe estar entre 1 y 120 kg.', 'danger');
        return;
    }

    if (minutos < 5 || minutos > 150) {
        mostrarAlerta('Los minutos de ejercicio deben estar entre 5 y 150.', 'danger');
        return;
    }

    const calorias = (actividad * 3.5 * peso * (minutos / 200)).toFixed(2);
    mostrarAlerta(`Has quemado aproximadamente ${calorias} calorías.`, 'success');
});

function mostrarAlerta(mensaje, tipo) {
    const contenedorAlertas = document.getElementById('contenedorAlertas');
    const alertaDiv = document.createElement('div');
    alertaDiv.className = `alert alert-${tipo} alert-dismissible fade show`;
    alertaDiv.role = 'alert';
    alertaDiv.innerHTML = `
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    contenedorAlertas.appendChild(alertaDiv);
}
