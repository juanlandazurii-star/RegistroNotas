let estudiantes = [];

function agregarEstudiante() {

    let nombre = document.getElementById("nombre").value;
    let nota = parseFloat(document.getElementById("nota").value);

    if (nombre === "" || isNaN(nota)) {
        alert("Debe completar todos los campos.");
        return;
    }

    if (nota < 0 || nota > 5) {
        alert("La nota debe estar entre 0 y 5.");
        return;
    }

    let estado = "";

    if (nota >= 3) {
        estado = "Aprobó";
    } else {
        estado = "Reprobó";
    }

    estudiantes.push({
        nombre: nombre,
        nota: nota,
        estado: estado
    });

    mostrarTabla();

    document.getElementById("nombre").value = "";
    document.getElementById("nota").value = "";
}

function mostrarTabla() {

    let tabla = document.getElementById("tablaEstudiantes");

    tabla.innerHTML = "";

    let aprobados = 0;
    let reprobados = 0;
    let suma = 0;

    for (let i = 0; i < estudiantes.length; i++) {

        let fila = `
        <tr>
            <td>${estudiantes[i].nombre}</td>
            <td>${estudiantes[i].nota}</td>
            <td class="${estudiantes[i].estado === "Aprobó" ? "aprobado" : "reprobado"}">
                ${estudiantes[i].estado}
            </td>
        </tr>
        `;

        tabla.innerHTML += fila;

        suma += estudiantes[i].nota;

        if (estudiantes[i].estado === "Aprobó") {
            aprobados++;
        } else {
            reprobados++;
        }

    }

    let promedio = 0;

    if (estudiantes.length > 0) {
        promedio = suma / estudiantes.length;
    }

    document.getElementById("total").textContent = estudiantes.length;
    document.getElementById("aprobados").textContent = aprobados;
    document.getElementById("reprobados").textContent = reprobados;
    document.getElementById("promedio").textContent = promedio.toFixed(2);

}