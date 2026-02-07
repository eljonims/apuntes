let audioCtx = null;
let selectedToken = null;
let currentBateria = [];
let currentIdx = 0;

window.onload = () => {
    if (typeof libroData !== 'undefined') {
        // 1. Recuperamos el ID guardado
        const ultimoTema = localStorage.getItem('ultimoTemaVisitado');

        // 2. Si existe, forzamos la apertura de sus carpetas antes de renderizar
        if (ultimoTema) {
            abrirRamasHastaTema(ultimoTema);
        }

        renderIndice();

        // 3. Cargamos el contenido en el cuaderno
        if (ultimoTema && encontrarTemaProfundo(ultimoTema)) {
            loadTema(ultimoTema);
        } else {
            loadTema("sarrera");
        }
    }
};

// Nueva función para marcar como 'true' las carpetas padre en el estado global
function abrirRamasHastaTema(targetId, lista = libroData) {
    for (const tema of lista) {
        if (tema.id === targetId) return true; // Encontrado
        if (tema.hijos) {
            if (abrirRamasHastaTema(targetId, tema.hijos)) {
                carpetaStates[tema.id] = true; // Si mi hijo es el target, yo me abro
                return true;
            }
        }
    }
    return false;
}

// Recuperamos el estado de las carpetas o creamos uno nuevo
let carpetaStates = JSON.parse(localStorage.getItem('carpetaStates')) || {};



function renderIndice(filtro = "") {
    const container = document.getElementById('links-container');
    if (!container) return;

    // Ahora solo limpiamos los enlaces, los botones de arriba están a salvo
    container.innerHTML = "";

    libroData.forEach(tema => {
        const nodo = crearNodo(tema, 0, filtro);
        if (nodo) container.appendChild(nodo);
    });
    // Si después de filtrar no hay nada, avisamos
    if (container.innerHTML === "" && filtro !== "") {
        container.innerHTML = "<div style='padding:10px; color:gray;'>Ez da emaitzarik aurkitu...</div>";
    }
}


function crearNodo(tema, nivel = 0, filtro = "") {
    const visibleSubtemas = tema.hijos ? tema.hijos.map(h => crearNodo(h, nivel + 1, filtro)).filter(n => n !== null) : [];
    const coincidePropio = tema.titulo.toLowerCase().includes(filtro);

    if (filtro && !coincidePropio && visibleSubtemas.length === 0) return null;

    const div = document.createElement('div');
    div.style.marginLeft = `${nivel * 12}px`;

    if (tema.hijos) {
        // --- LÓGICA DE CARPETA ---
        const isExp = carpetaStates[tema.id] || false;
        div.innerHTML = `<div class="link-item folder ${isExp ? 'open' : ''}">${tema.titulo}</div>`;
        const childContainer = document.createElement('div');
        childContainer.style.display = isExp ? 'block' : 'none';

        div.firstChild.onclick = () => {
            const nowOpen = childContainer.style.display === 'none';
            childContainer.style.display = nowOpen ? 'block' : 'none';
            div.firstChild.classList.toggle('open', nowOpen);
            carpetaStates[tema.id] = nowOpen;
            localStorage.setItem('carpetaStates', JSON.stringify(carpetaStates));
        };

        visibleSubtemas.forEach(nodoHijo => childContainer.appendChild(nodoHijo));
        div.appendChild(childContainer);
    } else {
        // --- LÓGICA DE ARCHIVO (Aquí van las líneas) ---
        const idActual = localStorage.getItem('ultimoTemaVisitado'); // 1. Recuperamos el ID
        const claseActiva = (tema.id === idActual) ? 'active-tema' : ''; // 2. Comparamos

        div.innerHTML = `<div class="link-item file ${claseActiva}">${tema.titulo}</div>`;

        div.firstChild.onclick = () => {
            loadTema(tema.id);
            // Al hacer clic, redibujamos el índice para que el resaltado cambie de sitio
            renderIndice(document.getElementById('search-bar').value);
            if (window.innerWidth < 768) toggleMenu();
        };
    }
    return div;
}

function expandirTodo(expandir) {
    libroData.forEach(t => { if (t.hijos) carpetaStates[t.id] = expandir; });
    localStorage.setItem('carpetaStates', JSON.stringify(carpetaStates));
    renderIndice();
}

function filtrarTemas() {
    const texto = document.getElementById('search-bar').value.toLowerCase();

    // Si hay texto, calculamos qué carpetas deben abrirse
    if (texto.length > 0) {
        libroData.forEach(tema => {
            if (tema.hijos && buscarRecursivo(tema, texto)) {
                carpetaStates[tema.id] = true; // Abrimos la carpeta si contiene el resultado
            }
        });
    }
    renderIndice(texto);
}

// Función auxiliar para saber si un texto está dentro de una carpeta o sus hijos
function buscarRecursivo(tema, texto) {
    if (tema.titulo.toLowerCase().includes(texto)) return true;
    if (tema.hijos) {
        return tema.hijos.some(hijo => buscarRecursivo(hijo, texto));
    }
    return false;
}

function toggleMenu() { document.getElementById('sidebar').classList.toggle('open'); }

// Función para encontrar un tema en cualquier nivel del árbol

function encontrarTemaProfundo(id, lista = libroData) {
    for (const item of lista) {
        if (item.id === id) return item;
        if (item.hijos) {
            const encontrado = encontrarTemaProfundo(id, item.hijos);
            if (encontrado) return encontrado;
        }
    }
    return null;
}

// Modifica tu loadTema para que use esta nueva búsqueda
function loadTema(id) {
    const tema = encontrarTemaProfundo(id); // <--- Cambio clave
    if (!tema) return;

    localStorage.setItem('ultimoTemaVisitado', id);

    let htmlFinal = tema.texto || "";
    if (tema.ejercicios) {
        tema.ejercicios.forEach((ex, index) => {
            const marcador = `[EX:${ex.id}]`;
            const btnHTML = `<button class="post-it" onclick="openEx('${id}', '${ex.id}')" style="transform: rotate(${index % 2 === 0 ? -1.5 : 1.5}deg)">📝 ARIKETA: ${ex.pregunta.substring(0, 25)}...</button>`;
            htmlFinal = htmlFinal.replace(marcador, btnHTML);
        });
    }

    document.getElementById('page-content').innerHTML = `<h1>${tema.titulo}</h1><div>${htmlFinal}</div>`;
    document.getElementById('notebook').scrollTop = 0;
}

// --- AUDIO ---
async function playSound(type) {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') await audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.frequency.setValueAtTime(type === 'success' ? 523 : (type === 'error' ? 150 : 800), audioCtx.currentTime);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        osc.start(); osc.stop(audioCtx.currentTime + 0.2);
    } catch (e) { }
}

// --- MOTOR GENERATIVO ---
function openEx(temaId, exId) {
    // 1. Buscamos el tema en cualquier profundidad de las carpetas
    const tema = encontrarTemaProfundo(temaId);
    if (!tema || !tema.ejercicios) return;

    // 2. Buscamos en qué posición de la lista está el ejercicio que clicamos
    // Aquí es donde usamos el famoso startIdx que comentabas
    const startIdx = tema.ejercicios.findIndex(e => e.id === exId);

    if (startIdx === -1) return; // Por si acaso no lo encuentra

    // 3. Cargamos la batería desde ese punto en adelante
    currentBateria = tema.ejercicios.slice(startIdx);
    currentIdx = 0;

    // 4. Preparamos la interfaz
    document.getElementById('exercise-overlay').style.display = 'flex';
    document.querySelector('.footer-exercise').style.display = "block";

    // 5. ¡Lanzamos el primero!
    lanzarSiguiente();
}

function lanzarSiguiente() {
    const ex = currentBateria[currentIdx];
    const body = document.getElementById('ex-body');
    const title = document.getElementById('ex-title');
    const btn = document.getElementById('btn-main-action');

    body.innerHTML = "";
    document.getElementById('ex-message').innerText = "";
    btn.innerText = "EGIAZTATU";
    btn.className = "btn-check";
    title.innerHTML = `${ex.pregunta} <small style="float:right; opacity:0.5;">${currentIdx + 1} / ${currentBateria.length}</small>`;

    if (ex.tipo === 'drag') renderDrag(ex, body);
    else if (ex.tipo === 'choice') renderChoice(ex, body);
    else if (ex.tipo === 'input') renderInput(ex, body);
    else if (ex.tipo === 'sort') renderSort(ex, body);
}

function prepararSiguiente() {
    const btn = document.getElementById('btn-main-action');
    btn.classList.add('btn-next-active');
    if (currentIdx < currentBateria.length - 1) {
        btn.innerText = "HURRENGOA";
        btn.onclick = () => { currentIdx++; lanzarSiguiente(); };
    } else {
        btn.innerText = "AMITU";
        btn.onclick = mostrarFelicitacion;
    }
}

// --- MOTORES ESPECÍFICOS ---
function renderDrag(ex, container) {
    const grid = document.createElement('div'); grid.className = 'drag-grid';
    const cats = [...new Set(ex.items.map(it => it.c))].filter(c => c !== "");
    cats.forEach(cat => {
        const wrap = document.createElement('div'); wrap.className = 'column-wrapper';
        wrap.innerHTML = `<small style="font-weight:bold;color:#666;font-size:0.7rem;">${cat.toUpperCase()}</small><div id="box-${cat}" class="target-box"></div>`;
        wrap.onclick = () => { if (selectedToken) { document.getElementById(`box-${cat}`).appendChild(selectedToken); limpiarSeleccion(); playSound('tick'); } };
        grid.appendChild(wrap);
    });
    const pool = document.createElement('div'); pool.id = 'pool'; pool.className = 'pool-zone';
    pool.onclick = () => { if (selectedToken) { pool.appendChild(selectedToken); limpiarSeleccion(); } };
    container.appendChild(grid); container.appendChild(pool);
    ex.items.forEach(it => {
        const span = document.createElement('div'); span.className = 'token'; span.innerText = it.t; span.dataset.cat = it.c;
        span.onclick = (e) => { e.stopPropagation(); if (selectedToken === span) limpiarSeleccion(); else { limpiarSeleccion(); selectedToken = span; span.classList.add('selected'); resaltar(span.parentElement.id); playSound('tick'); } };
        pool.appendChild(span);
    });
    document.getElementById('btn-main-action').onclick = () => {
        const tokens = document.querySelectorAll('.token');
        let err = 0, pend = 0;
        tokens.forEach(t => {
            const pid = t.parentElement.id;
            if (pid === 'pool') { if (t.dataset.cat !== "") pend++; }
            else if (pid !== `box-${t.dataset.cat}`) { err++; t.classList.add('token-error'); }
            else t.classList.add('token-success');
        });
        if (pend > 0) { document.getElementById('ex-message').innerText = "⚠️ Pieza falta"; }
        else if (err > 0) { document.getElementById('ex-message').innerText = "❌ Errorea"; playSound('error'); }
        else { playSound('success'); prepararSiguiente(); }
    };
}

function renderChoice(ex, container) {
    const area = document.createElement('div');
    area.className = "choice-area";
    area.style = "text-align:center; padding:20px; flex-grow:1; display:flex; flex-direction:column; justify-content:center;";

    // Usamos el Regex para asegurar la "unión atómica" sin espacios
    const fraseProc = ex.frase.replace("___", `<span id="live-text" class="lapiz-sufijo" style="background:rgba(0,0,0,0.08); padding:0 4px; border-radius:3px; min-width:1.5rem; display:inline;">___</span>`);

    area.innerHTML = `
        <p style="font-size:1.4rem; margin-bottom:30px; line-height:1.4;">${fraseProc}</p>
        <div id="opt-grid" style="display:grid; gap:10px; grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));"></div>
    `;
    container.appendChild(area);

    const liveText = document.getElementById('live-text');
    const optGrid = document.getElementById('opt-grid');

    ex.opciones.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'token';
        btn.innerText = opt;

        btn.onclick = () => {
            // 1. Visual en botones
            document.querySelectorAll('.token').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');

            // 2. ESCRIBIR EN EL HUECO (Esta es la parte que faltaba)
            selectedToken = opt;
            liveText.innerText = opt;
            liveText.style.color = "var(--primary)";
            liveText.style.background = "rgba(0,0,0,0.04)";

            playSound('tick');
        };
        optGrid.appendChild(btn);
    });

    // 3. Lógica de validación del botón principal
    document.getElementById('btn-main-action').onclick = () => {
        const msg = document.getElementById('ex-message');
        if (!selectedToken) {
            msg.innerText = "Hautatu aukera bat";
            return;
        }

        if (selectedToken === ex.correcta) {
            msg.innerText = "✨ Oso ondo!";
            msg.style.color = "var(--success)";
            liveText.style.color = "var(--success)";
            liveText.style.background = "rgba(42, 157, 143, 0.2)";
            playSound('success');
            prepararSiguiente(); // Para avanzar en la batería
        } else {
            msg.innerText = "❌ Saiatu berriro";
            msg.style.color = "var(--error)";
            liveText.style.color = "var(--error)";
            liveText.style.background = "rgba(231, 111, 81, 0.2)";
            playSound('error');
        }
    };
}

function renderInput(ex, container) {
    const area = document.createElement('div'); area.style = "text-align:center; padding:20px; flex-grow:1; display:flex; flex-direction:column; justify-content:center;";
    const fraseProc = ex.frase.replace(/(\S+)___/, (match, p1) => {
        return `<span class="palabra-con-sufijo">${p1}<span id="live-text" class="lapiz-sufijo" style="background:rgba(0,0,0,0.08); padding:0 2px; border-radius:3px; min-width:1.5rem; display:inline;">___</span></span>`;
    });
    area.innerHTML = `<p style="font-size:1.5rem; margin-bottom:30px; line-height:1; letter-spacing:-0.5px; white-space:nowrap;">${fraseProc}</p><input type="text" id="hidden-input" style="position:absolute; opacity:0; pointer-events:none;" autocomplete="off"><p style="color:#666; font-style:italic; font-size:0.9rem;">${ex.ayuda || "Osatu..."}</p>`;
    container.appendChild(area);
    const input = document.getElementById('hidden-input'); const live = document.getElementById('live-text');
    container.onclick = () => input.focus(); input.focus();
    input.oninput = () => { live.innerText = input.value || "___"; };
    document.getElementById('btn-main-action').onclick = () => {
        const msg = document.getElementById('ex-message');
        const inputField = document.getElementById('hidden-input');
        const visualText = document.getElementById('live-text'); // <--- La definimos aquí de nuevo
        const respuesta = inputField.value.trim().toLowerCase();

        if (respuesta === ex.correcta.toLowerCase()) {
            msg.innerText = "✨ Oso ondo!";
            msg.style.color = "var(--success)";
            visualText.style.color = "var(--success)";
            visualText.style.background = "rgba(42, 157, 143, 0.2)";
            playSound('success');
            prepararSiguiente(); // Usamos la lógica de batería secuencial
        } else {
            msg.innerText = "❌ Saiatu berriro";
            msg.style.color = "var(--error)";
            visualText.style.color = "var(--error)";
            visualText.style.background = "rgba(231, 111, 81, 0.2)";
            playSound('error');

            // Reset automático tras el fallo
            setTimeout(() => {
                inputField.value = "";
                visualText.innerText = "___";
                visualText.style.color = "var(--primary)";
                visualText.style.background = "rgba(0,0,0,0.08)";
                msg.innerText = "";
                inputField.focus();
            }, 1200);
        }
    };
}
function renderSort(ex, container) {
    const area = document.createElement('div');
    area.style = "text-align:center; padding:10px; flex:1; display:flex; flex-direction:column;";

    // Carril de respuesta (donde aterrizan las palabras)
    const carril = document.createElement('div');
    carril.className = "pool-zone";
    carril.style = "min-height:80px; background:rgba(255,255,255,0.7); border:2px dashed var(--line); margin-bottom:20px; display:flex; flex-wrap:wrap; justify-content:center; align-items:center; padding:10px; gap:8px;";

    // Zona de opciones (palabras desordenadas)
    const opciones = document.createElement('div');
    opciones.style = "display:flex; flex-wrap:wrap; justify-content:center; gap:8px;";

    const palabrasCorrectas = ex.fraseCorrecta.split(" ");
    const palabrasMezcladas = [...palabrasCorrectas].sort(() => Math.random() - 0.5);

    palabrasMezcladas.forEach(p => {
        const token = document.createElement('div');
        token.className = 'token';
        token.innerText = p;
        token.onclick = () => {
            // Si está abajo, sube al carril. Si está en el carril, baja a opciones.
            if (token.parentElement === opciones) carril.appendChild(token);
            else opciones.appendChild(token);
            playSound('tick');
        };
        opciones.appendChild(token);
    });

    area.appendChild(carril);
    area.appendChild(opciones);
    container.appendChild(area);

    document.getElementById('btn-main-action').onclick = () => {
        const msg = document.getElementById('ex-message');
        const respuesta = Array.from(carril.children).map(t => t.innerText).join(" ");

        if (respuesta === ex.fraseCorrecta) {
            msg.innerText = "✨ Oso ondo!";
            msg.style.color = "var(--success)";
            playSound('success');
            prepararSiguiente();
        } else {
            msg.innerText = "❌ Ordena ez da zuzena";
            msg.style.color = "var(--error)";
            playSound('error');
            carril.classList.add('shake');
            setTimeout(() => carril.classList.remove('shake'), 300);
        }
    };
}

// --- CIERRE Y ÉXITO ---
function mostrarFelicitacion() {
    // Lanzar confeti con seguridad y por encima de todo
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            zIndex: 2000 // Para que se vea por encima del overlay (1000)
        });
    } else {
        console.warn("La librería de confeti no cargó, pero el ejercicio sigue.");
    }
    const body = document.getElementById('ex-body');
    const footer = document.querySelector('.footer-exercise');
    body.innerHTML = `<div style="text-align:center; padding:40px; animation: popIn 0.5s ease;"><div style="font-size:4rem;">🏆</div><h2 class="lapiz-sufijo" style="font-size:3rem; color:var(--success);">Bikain!</h2><p>Bateria osatuta</p><p id="count-msg" style="font-size:0.8rem; color:#999; margin-top:20px;">Cerrando en 3...</p></div>`;
    footer.style.display = "none";
    let c = 3;
    const t = setInterval(() => { c--; if (c > 0) document.getElementById('count-msg').innerText = `Cerrando en ${c}...`; else { clearInterval(t); closeEx(); } }, 1000);
}

function resaltar(id) { document.querySelectorAll('.target-box, .pool-zone').forEach(b => { if (b.id !== id) b.classList.add('highlight-dest'); }); }
function limpiarSeleccion() { selectedToken = null; document.querySelectorAll('.token').forEach(t => t.classList.remove('selected', 'token-error', 'token-success')); document.querySelectorAll('.target-box, .pool-zone').forEach(b => b.classList.remove('highlight-dest')); }
function closeEx() { document.getElementById('exercise-overlay').style.display = 'none'; document.getElementById('ex-body').innerHTML = ""; limpiarSeleccion(); }
function simplificar(el, txt) {
    if (!el.dataset.orig) {
        // Guardamos el texto original
        el.dataset.orig = el.innerHTML;
        el.innerText = txt;
        el.classList.add('caja-simplificada');
        playSound('tick');
    } else {
        // Restauramos el HTML original (que incluye los <span> y clases internas)
        el.innerHTML = el.dataset.orig;
        delete el.dataset.orig;
        el.classList.remove('caja-simplificada');
    }
}
