// ============================================
// NARUTO GESTOR DE TAREAS
// Gestión de tareas con JavaScript
// Uso de DOM + Arreglos + LocalStorage
// ============================================
document.addEventListener('DOMContentLoaded', () => {

    // ===== REFERENCIAS AL DOM =====
    // Inputs, botones y contenedores HTML
    const tituloInput = document.getElementById('titulo');
    const prioridadInput = document.getElementById('prioridad');
    const fechaInput = document.getElementById('fecha');
    const hoy = new Date().toISOString().split("T")[0];
    fechaInput.setAttribute("min", hoy);
    const btnAgregar = document.getElementById('btnAgregar');
    const lista = document.getElementById('lista');
    const filtro = document.getElementById('filtro');
    const contador = document.getElementById('contador');

    // ===== ESTRUCTURA DE DATOS =====
    // Array de objetos que almacena las misiones
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    // ===== SEGURIDAD =====
    // Sanitiza texto para evitar inyección (XSS)
    function sanitizar(texto) {
        return texto.replace(/[<>]/g, '');
    }

    // ===== VALIDACIÓN DE FORMULARIO =====
    // Verifica que los campos sean correctos antes de guardar
    function validar() {
        const titulo = tituloInput.value.trim();
        const prioridad = prioridadInput.value;
        const fecha = fechaInput.value;

        if (titulo.length < 3) {
            alert("❌ El título debe tener al menos 3 caracteres");
            return false;
        }

        if (!prioridad) {
            alert("❌ Selecciona una prioridad");
            return false;
        }

        if (!fecha) {
            alert("❌ Selecciona una fecha");
            return false;
        }

        // VALIDAR QUE NO SEA PASADA
        const hoy = new Date().toISOString().split("T")[0];

        if (fecha < hoy) {
            alert("❌ No puedes seleccionar una fecha pasada");
            return false;
        }

        return true;
    }

    function guardarLocal() {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }

    function actualizarContador(listaFiltrada) {
        contador.textContent = `Total misiones: ${listaFiltrada.length}`;
    }

    function nombrePrioridad(p) {
        if (p === "S") return "🔥 Rango S";
        if (p === "A") return "⚡ Rango A";
        return "🌿 Rango B";
    }
    function formatearFecha(fecha) {
        const [anio, mes, dia] = fecha.split("-");
        return `${dia}/${mes}/${anio}`;
    }
    // ===== RENDERIZADO DINÁMICO =====
    // Genera las misiones en el DOM a partir del array
    // Usa createElement para evitar riesgos de seguridad
    function render() {
        lista.innerHTML = "";

        const valorFiltro = filtro.value;

        const filtradas = tareas.filter(t =>
            valorFiltro === "todas" || t.prioridad === valorFiltro
        );

        actualizarContador(filtradas);

        filtradas.forEach((tarea, index) => {

            // Crear contenedor de cada tarea dinámicamente
            const div = document.createElement('div');
            div.classList.add('tarea');

            if (tarea.completada) div.classList.add('completada');

            const texto = document.createElement('span');
            texto.textContent = `Tarea: ${tarea.titulo} | Nivel: ${nombrePrioridad(tarea.prioridad)} | Fecha: ${formatearFecha(tarea.fecha)}`;

            const contenedorBotones = document.createElement('div');
            contenedorBotones.classList.add('botones-tarea');

            const btnC = document.createElement('button');
            btnC.textContent = "✔";
            btnC.classList.add('btn', 'completar');
            btnC.setAttribute("data-tooltip", "Misión realizada");
            btnC.onclick = () => completar(index);

            const btnE = document.createElement('button');
            btnE.textContent = "✖";
            btnE.classList.add('btn', 'eliminar');
            btnE.setAttribute("data-tooltip", "Eliminar");
            btnE.onclick = () => eliminar(index);

            contenedorBotones.appendChild(btnC);
            contenedorBotones.appendChild(btnE);

            div.appendChild(texto);
            div.appendChild(contenedorBotones);

            lista.appendChild(div);
        });
    }

    // ===== AGREGAR MISIÓN =====
    // Inserta una nueva tarea en el array y actualiza el DOM
    function agregar() {
        if (!validar()) return;

        tareas.push({
            titulo: sanitizar(tituloInput.value),
            prioridad: prioridadInput.value,
            fecha: fechaInput.value,
            completada: false
        });

        guardarLocal();
        render();
        limpiar();
    }

    // ===== MARCAR COMO COMPLETADA =====
    // Cambia el estado de la tarea
    function completar(index) {
        tareas[index].completada = !tareas[index].completada;
        guardarLocal();
        render();
    }

    // ===== ELIMINAR MISIÓN =====
    // Remueve una tarea del array
    function eliminar(index) {
        const confirmar = confirm("¿Seguro que quieres eliminar esta misión?");

        if (!confirmar) return;

        tareas.splice(index, 1);
        guardarLocal();
        render();
    }

    function limpiar() {
        tituloInput.value = "";
        prioridadInput.value = "";
        fechaInput.value = "";
    }

    // ===== EVENTOS =====
    // Interacción del usuario con la aplicación
    btnAgregar.addEventListener('click', agregar);
    filtro.addEventListener('change', render);

    render();
});