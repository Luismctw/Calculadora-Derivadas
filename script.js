function limpiarInput() {
    document.getElementById('inputFunction').value = ''; // Limpiar el input
    limpiarDerivada(); // Limpiar el resultado de la derivada
}

function limpiarDerivada() {
    document.getElementById('resultadoDerivada').innerHTML = ''; // Limpiar el resultado de la derivada
}

function calcularDerivada() {
    limpiarDerivada(); // Limpiar el resultado de la derivada previa
    
    const input = document.getElementById('inputFunction').value;

    try {
        const expr = math.derivative(input, 'x').toString();
        document.getElementById('resultadoDerivada').innerHTML = `
            <p>La derivada de f(x) = ${input} es:</p>
            <p>f'(x) = ${expr}</p>
        `;
    } catch (error) {
        document.getElementById('resultadoDerivada').innerHTML = '<p>Error al calcular la derivada. Verifique la función ingresada.</p>';
    }
}
