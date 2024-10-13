document.getElementById('skillsForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    // Obtener las respuestas seleccionadas
    const communication = document.querySelector('input[name="communication"]:checked').value;
    const empathy = document.querySelector('input[name="empathy"]:checked').value;
    const timeManagement = document.querySelector('input[name="timeManagement"]:checked').value;
    const problemSolving = document.querySelector('input[name="problemSolving"]:checked').value;
    const teamwork = document.querySelector('input[name="teamwork"]:checked').value;

    // Convertir las respuestas a números
    const scores = [
        parseInt(communication),
        parseInt(empathy),
        parseInt(timeManagement),
        parseInt(problemSolving),
        parseInt(teamwork)
    ];

    // Calcular el promedio de las respuestas
    const totalScore = scores.reduce((a, b) => a + b, 0);
    const averageScore = totalScore / scores.length;

    // Mostrar los resultados según el promedio
    let resultText = '';
    if (averageScore <= 2) {
        resultText = 'Tienes espacio para mejorar en tus habilidades blandas. ¡No te preocupes, la práctica te ayudará a desarrollarlas!';
    } else if (averageScore > 2 && averageScore < 4) {
        resultText = 'Estás en buen camino, pero puedes seguir mejorando algunas áreas clave.';
    } else {
        resultText = '¡Excelente! Tus habilidades blandas están bien desarrolladas. Sigue perfeccionándolas para sobresalir aún más en la industria tech.';
    }

    // Mostrar el resultado en la página
    document.getElementById('resultText').innerText = resultText;
    document.getElementById('results').classList.remove('hidden');
});
