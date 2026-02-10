// ==========================================
// BLOQUE 1: CONFIGURACIÓN Y NAVEGACIÓN
// ==========================================

const CONFIG = {
    temaInicioId: "sarrera",
    idiomaInterfaz: "es",
    sonidoVolumen: 0.03,
    autoCierreMenuMovil: true,
};

let audioCtx = null;
let selectedToken = null;
let currentBateria = [];
let currentIdx = 0;
let carpetaStates = JSON.parse(localStorage.getItem('carpetaStates')) || {};

window.onload = () => {
    const libroVacio = (typeof libroData === 'undefined' || libroData.length === 0);

    if (libroVacio) {
        const temaAux = {
            id: "ayuda-vacio",
            titulo: "⚠️ ¡Libro vacío!",
            texto: `
                <p>Parece que todavía no has añadido temas a tu <b>data.js</b>.</p>
                <div style="background:#fff3cd; padding:15px; border-radius:8px; border:1px solid #ffeeba;">
                    <h3>Guía rápida de sintaxis:</h3>
                    <ul>
                        <li><b>Caja gramatical:</b> <code>&lt;span class="caja-gramatical caja-sus" onclick="simplificar(this, 'ESO', event)"&gt;Tu texto&lt;/span&gt;</code></li>
                        <li><b>Traducción:</b> <code>&lt;span class="frase-traduccion" onclick="traducir(this, 'Traducción', event)"&gt;Tu frase&lt;/span&gt;</code></li>
                        <li><b>Ejercicios:</b> Añade <code>[EX:id_ejercicio]</code> en el texto.</li>
                    </ul>
                </div>
            `
        };
        renderTemaFantasma(temaAux);
    } else {
        let idDestino = localStorage.getItem('ultimoTemaVisitado') || CONFIG.temaInicioId;

        // Verificación de seguridad por si el ID guardado ya no existe
        if (!encontrarTemaProfundo(idDestino)) {
            const temasPlanos = obtenerListaPlana();
            idDestino = temasPlanos.length > 0 ? temasPlanos[0].id : null;
        }

        if (idDestino) {
            abrirRamasHastaTema(idDestino);
            renderIndice();
            loadTema(idDestino);
        }
    }
};

function renderTemaFantasma(tema) {
    const content = document.getElementById('page-content');
    if (content) content.innerHTML = `<h1>${tema.titulo}</h1><div>${tema.texto}</div>`;
    const links = document.getElementById('links-container');
    if (links) links.innerHTML = "<p style='padding:10px; color:gray;'>Esperando temario...</p>";
}

function abrirRamasHastaTema(targetId, lista = libroData) {
    for (const tema of lista) {
        if (tema.id === targetId) return true;
        if (tema.hijos) {
            if (abrirRamasHastaTema(targetId, tema.hijos)) {
                carpetaStates[tema.id] = true;
                localStorage.setItem('carpetaStates', JSON.stringify(carpetaStates));
                return true;
            }
        }
    }
    return false;
}

function renderIndice(filtro = "") {
    const container = document.getElementById('links-container');
    if (!container) return;
    container.innerHTML = "";

    libroData.forEach(tema => {
        const nodo = crearNodo(tema, 0, filtro);
        if (nodo) container.appendChild(nodo);
    });

    if (container.innerHTML === "" && filtro !== "") {
        container.innerHTML = "<div style='padding:10px; color:gray;'>Ez da emaitzarik aurkitu...</div>";
    }
}

function crearNodo(tema, nivel = 0, filtro = "") {
    const visibleSubtemas = tema.hijos ? tema.hijos.map(h => crearNodo(h, nivel + 1, filtro)).filter(n => n !== null) : [];
    const coincidePropio = tema.titulo.toLowerCase().includes(filtro.toLowerCase());

    if (filtro && !coincidePropio && visibleSubtemas.length === 0) return null;

    const div = document.createElement('div');
    div.style.marginLeft = `${nivel * 12}px`;

    if (tema.hijos) {
        const isExp = carpetaStates[tema.id] || false;
        div.innerHTML = `<div class="link-item folder ${isExp ? 'open' : ''}">${tema.titulo}</div>`;
        const childContainer = document.createElement('div');
        childContainer.style.display = isExp ? 'block' : 'none';

        div.firstChild.onclick = (e) => {
            e.stopPropagation();
            const nowOpen = childContainer.style.display === 'none';
            childContainer.style.display = nowOpen ? 'block' : 'none';
            div.firstChild.classList.toggle('open', nowOpen);
            carpetaStates[tema.id] = nowOpen;
            localStorage.setItem('carpetaStates', JSON.stringify(carpetaStates));
        };

        visibleSubtemas.forEach(nodoHijo => childContainer.appendChild(nodoHijo));
        div.appendChild(childContainer);
    } else {
        const idActual = localStorage.getItem('ultimoTemaVisitado');
        const claseActiva = (tema.id === idActual) ? 'active-tema' : '';

        div.innerHTML = `<div class="link-item file ${claseActiva}">${tema.titulo}</div>`;

        div.firstChild.onclick = () => {
            loadTema(tema.id);
            renderIndice(document.getElementById('search-bar') ? document.getElementById('search-bar').value : "");
            if (window.innerWidth < 768) toggleMenu();
        };
    }
    return div;
}

function expandirTodo(expandir) {
    const recursivo = (lista) => {
        lista.forEach(t => {
            if (t.hijos) {
                carpetaStates[t.id] = expandir;
                recursivo(t.hijos);
            }
        });
    };
    recursivo(libroData);
    localStorage.setItem('carpetaStates', JSON.stringify(carpetaStates));
    renderIndice();
}

function filtrarTemas() {
    const bar = document.getElementById('search-bar');
    const texto = bar ? bar.value.toLowerCase() : "";

    if (texto.length > 0) {
        libroData.forEach(tema => {
            if (tema.hijos && buscarRecursivo(tema, texto)) {
                carpetaStates[tema.id] = true;
            }
        });
    }
    renderIndice(texto);
}

function buscarRecursivo(tema, texto) {
    if (tema.titulo.toLowerCase().includes(texto)) return true;
    if (tema.hijos) {
        return tema.hijos.some(hijo => buscarRecursivo(hijo, texto));
    }
    return false;
}

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('open');
}

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

function obtenerListaPlana(lista = libroData, acumulado = []) {
    lista.forEach(item => {
        if (item.hijos) obtenerListaPlana(item.hijos, acumulado);
        else acumulado.push(item);
    });
    return acumulado;
}























// ==========================================
// BLOQUE 2: CARGA DE TEMAS, AUDIO Y EJERCICIOS
// ==========================================

function loadTema(id) {
    const tema = encontrarTemaProfundo(id);
    if (!tema) return;

    localStorage.setItem('ultimoTemaVisitado', id);
    let htmlFinal = tema.texto || "";

    // 1. Lógica de Baterías Grupales (Post-its)
    if (tema.ejercicios && Array.isArray(tema.ejercicios[0])) {
        tema.ejercicios.forEach((grupo, gIdx) => {
            const marcador = `[BATERIA:${gIdx}]`;
            const primerEx = grupo[0];
            const btnHTML = `
                <button class="post-it" onclick="openEx('${tema.id}', ${gIdx})" 
                        style="transform: rotate(${gIdx % 2 === 0 ? -1.5 : 1.5}deg)">
                    📝 RETO ${gIdx + 1}: ${primerEx.pregunta.substring(0, 25)}...
                </button>`;
            htmlFinal = htmlFinal.replace(marcador, btnHTML);
        });
    }

    // 2. Generación de Navegación "Anterior / Siguiente"
    const temasPlanos = obtenerListaPlana();
    const idxActual = temasPlanos.findIndex(t => t.id === id);
    
    let navHtml = `<div class="nav-pagination">`;
    
    // Botón AURREKOA (Anterior)
    if (idxActual > 0) {
        const prev = temasPlanos[idxActual - 1];
        navHtml += `
            <button class="btn-nav" onclick="loadTema('${prev.id}')">
                <span class="nav-label">⬅ AURREKOA</span>
                <span class="nav-title">${prev.titulo}</span>
            </button>`;
    } else {
        navHtml += `<span></span>`; // Espacio vacío para mantener el equilibrio en PC
    }

    // Botón HURRENGOA (Siguiente)
    if (idxActual < temasPlanos.length - 1) {
        const next = temasPlanos[idxActual + 1];
        navHtml += `
            <button class="btn-nav" onclick="loadTema('${next.id}')">
                <span class="nav-label">HURRENGOA ➡</span>
                <span class="nav-title">${next.titulo}</span>
            </button>`;
    }

    navHtml += `</div>`;

    // 3. Renderizado final en el DOM
    document.getElementById('page-content').innerHTML = `
        <h1>${tema.titulo}</h1>
        <div class="tema-texto-cuerpo">${htmlFinal}</div>
        ${navHtml}
    `;

    // Reset de scroll y refresco del índice
    document.getElementById('notebook').scrollTop = 0;
    if (document.getElementById('search-bar')) {
        renderIndice(document.getElementById('search-bar').value);
    }
}


async function playSound(type) {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') await audioCtx.resume();

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        let freq;
        switch (type) {
            case 'open': freq = 420; break;
            case 'close': freq = 310; break;
            case 'success': freq = 523; break;
            case 'error': freq = 180; break;
            case 'tick': freq = 350; break;
            default: freq = 400;
        }

        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0, audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(CONFIG.sonidoVolumen, audioCtx.currentTime + 0.01);
        gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.1);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.12);
    } catch (e) { console.log("Audio bloqueado o no soportado"); }
}

// 2. ABRIR BATERÍA (Ahora por índice de grupo)
function openEx(temaId, grupoIdx) {
    const tema = encontrarTemaProfundo(temaId);
    if (!tema || !tema.ejercicios || !tema.ejercicios[grupoIdx]) return;

    // Cargamos SOLO ese grupo de ejercicios
    currentBateria = tema.ejercicios[grupoIdx];
    currentIdx = 0;

    document.getElementById('exercise-overlay').style.display = 'flex';
    lanzarSiguiente();
}
function validar(esCorrecto, elementoResaltar = null) {
    const msg = document.getElementById('ex-message');
    const body = document.getElementById('ex-body');
    const btn = document.getElementById('btn-main-action');

    if (esCorrecto) {
        // 1. Feedback de éxito
        if (msg) {
            msg.innerText = "✨ Oso ondo!";
            msg.style.color = "var(--success)";
        }

        // 2. Resaltar el texto (si existe live-text)
        if (elementoResaltar) {
            elementoResaltar.style.color = "var(--success)";
            elementoResaltar.style.background = "rgba(42, 157, 143, 0.2)";
        }

        // 3. BLOQUEO: Bloqueamos el CUERPO del ejercicio, pero NO el botón
        // Así el usuario no puede cambiar su respuesta pero sí puede dar a "Siguiente"
        if (body) body.classList.add('bloqueado');

        playSound('success');
        prepararSiguiente(); // Esto cambia el texto del botón y su función
    } else {
        // 4. Feedback de error
        if (msg) {
            msg.innerText = "❌ Saiatu berriro";
            msg.style.color = "var(--error)";
        }
        if (elementoResaltar) {
            elementoResaltar.style.color = "var(--error)";
            elementoResaltar.style.background = "rgba(231, 111, 81, 0.2)";
        }
        if (body) {
            body.classList.add('shake');
            setTimeout(() => body.classList.remove('shake'), 300);
        }
        playSound('error');
    }
}


function lanzarSiguiente() {
    if (currentIdx >= currentBateria.length) {
        mostrarFelicitacion(); // Al terminar el grupo, ¡Copa y Confeti!
        return;
    }
    const ex = currentBateria[currentIdx];
    const body = document.getElementById('ex-body');
    const title = document.getElementById('ex-title');
    const btn = document.getElementById('btn-main-action');

    body.innerHTML = "";
    body.classList.remove('bloqueado');
    document.getElementById('ex-message').innerText = "";

    // Clonación de seguridad para limpiar eventos
    const nuevoBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(nuevoBtn, btn);
    nuevoBtn.innerText = "EGIAZTATU";
    nuevoBtn.className = "btn-check";

    // El contador ahora dice "1 / 3" si el grupo tiene 3 ejercicios
    title.innerHTML = `${ex.pregunta} <small style="float:right; opacity:0.5;">${currentIdx + 1} / ${currentBateria.length}</small>`;

    if (ex.tipo === 'drag') renderDrag(ex, body);
    else if (ex.tipo === 'choice') renderChoice(ex, body);
    else if (ex.tipo === 'input') renderInput(ex, body);
    else if (ex.tipo === 'sort') renderSort(ex, body);

    if (ex.ayuda) {
        const pAyuda = document.createElement('p');
        pAyuda.className = "ayuda-texto";
        pAyuda.innerText = ex.ayuda;
        body.appendChild(pAyuda);
    }
}

function prepararSiguiente() {
    const btn = document.getElementById('btn-main-action');
    btn.classList.add('btn-next-active');

    // Bloqueamos el contenido para que no sigan tocando al acertar
    document.getElementById('ex-body').classList.add('bloqueado');

    if (currentIdx < currentBateria.length - 1) {
        btn.innerText = "HURRENGOA";
        btn.onclick = () => {
            currentIdx++;
            lanzarSiguiente();
        };
    } else {
        btn.innerText = "AMITU";
        btn.onclick = mostrarFelicitacion;
    }
}

// ==========================================
// BLOQUE 3: MOTORES ESPECÍFICOS Y TRADUCCIÓN
// ==========================================

function renderDrag(ex, container) {
    const grid = document.createElement('div'); grid.className = 'drag-grid';
    const cats = [...new Set(ex.items.map(it => it.c))].filter(c => c !== "");

    cats.forEach(cat => {
        const wrap = document.createElement('div'); wrap.className = 'column-wrapper';
        wrap.innerHTML = `<small style="font-weight:bold;color:#666;font-size:0.7rem;">${cat.toUpperCase()}</small><div id="box-${cat}" class="target-box"></div>`;
        wrap.onclick = () => {
            if (selectedToken) {
                document.getElementById(`box-${cat}`).appendChild(selectedToken);
                limpiarSeleccionYDestinos();
                playSound('tick');
            }
        };
        grid.appendChild(wrap);
    });

    const pool = document.createElement('div'); pool.id = 'pool'; pool.className = 'pool-zone';
    pool.onclick = () => {
        if (selectedToken) {
            pool.appendChild(selectedToken);
            limpiarSeleccionYDestinos();
        }
    };

    container.appendChild(grid);
    container.appendChild(pool);

    ex.items.forEach(it => {
        const span = document.createElement('div');
        span.className = 'token';
        span.innerText = it.t;
        span.dataset.cat = it.c;
        span.onclick = (e) => {
            e.stopPropagation();
            if (selectedToken === span) {
                limpiarSeleccionYDestinos();
            } else {
                limpiarSeleccionYDestinos();
                selectedToken = span;
                span.classList.add('selected');

                // Iluminar destinos
                const todasLasZonas = document.querySelectorAll('.target-box, #pool');
                todasLasZonas.forEach(zona => {
                    if (zona !== span.parentElement) {
                        zona.classList.add('highlight-dest');
                    }
                });
                playSound('tick');
            }
        };
        pool.appendChild(span);
    });

    // VALIDACIÓN CENTRALIZADA
    document.getElementById('btn-main-action').onclick = () => {
        const tokens = document.querySelectorAll('.token');
        let err = 0, pend = 0;

        tokens.forEach(t => {
            const pid = t.parentElement.id;
            if (pid === 'pool') {
                if (t.dataset.cat !== "") pend++;
            } else if (pid !== `box-${t.dataset.cat}`) {
                err++;
                t.classList.add('token-error');
            } else {
                t.classList.add('token-success');
                t.classList.remove('token-error');
            }
        });

        const msg = document.getElementById('ex-message');
        if (pend > 0) {
            if (msg) { msg.innerText = "⚠️ Pieza falta"; msg.style.color = "orange"; }
            return;
        }

        // Llamamos a la función juez. Ella bloquea el cuerpo y activa el botón siguiente.
        validar(err === 0);
    };
}


function limpiarSeleccion() {
    if (selectedToken) selectedToken.classList.remove('selected');
    selectedToken = null;
}
function limpiarSeleccionYDestinos() {
    // 1. Quitamos el resalte del token
    if (selectedToken) selectedToken.classList.remove('selected');
    selectedToken = null;

    // 2. Apagamos el brillo de todas las cajas
    document.querySelectorAll('.highlight-dest').forEach(z => z.classList.remove('highlight-dest'));

    // 3. ¡LIMPIAMOS EL MENSAJE! (Haciéndolo aquí, ahorras líneas en los onclick)
    const msg = document.getElementById('ex-message');
    if (msg) msg.innerText = "";
}
function renderChoice(ex, container) {
    const area = document.createElement('div');
    area.className = "choice-area";
    area.style = "text-align:center; padding:20px; flex-grow:1; display:flex; flex-direction:column; justify-content:center;";

    // 1. Preparamos la frase con el hueco dinámico
    const fraseProc = ex.frase.replace("___", `<span id="live-text" class="lapiz-sufijo" style="background:rgba(0,0,0,0.08); padding:0 4px; border-radius:3px; min-width:1.5rem; display:inline;">___</span>`);

    area.innerHTML = `
        <p style="font-size:1.4rem; margin-bottom:30px; line-height:1.4;">${fraseProc}</p>
        <div class="opt-grid" style="display:grid; gap:10px; grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));"></div>
    `;
    container.appendChild(area);

    const liveText = area.querySelector('#live-text');
    const optGrid = area.querySelector('.opt-grid');
    let selectedTokenLocal = null;

    ex.opciones.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'token';
        btn.innerText = opt;

        btn.onclick = () => {
            // Limpieza de mensajes de error al cambiar de opción
            const msg = document.getElementById('ex-message');
            if (msg) msg.innerText = "";

            optGrid.querySelectorAll('.token').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');

            if (liveText) {
                selectedTokenLocal = opt;
                liveText.innerText = opt;
                liveText.style.color = "var(--primary)";
                liveText.style.background = "rgba(0,0,0,0.04)";
            }
            playSound('tick');
        };
        optGrid.appendChild(btn);
    });

    // 2. VALIDACIÓN: Delegamos en la función centralizada
    document.getElementById('btn-main-action').onclick = () => {
        const msg = document.getElementById('ex-message');

        // Verificación previa si no han elegido nada
        if (!selectedTokenLocal) {
            if (msg) { msg.innerText = "Hautatu aukera bat"; msg.style.color = "orange"; }
            return;
        }

        // Llamamos a validar. Ella gestiona Oso ondo / Saiatu berriro, sonidos y el bloqueo del body.
        validar(selectedTokenLocal === ex.correcta, liveText);
    };
}

function renderInput(ex, container) {
    const area = document.createElement('div');
    area.style = "text-align:center; padding:20px; flex-grow:1; display:flex; flex-direction:column; justify-content:center;";

    // Regex para detectar la palabra pegada a los guiones y crear el efecto lápiz
    const fraseProc = ex.frase.replace(/(\S*)___/, (match, p1) => {
        return `<span class="palabra-con-sufijo">${p1}<span id="live-text" class="lapiz-sufijo" style="background:rgba(0,0,0,0.08); padding:0 2px; border-radius:3px; min-width:1.5rem; display:inline;">___</span></span>`;
    });

    area.innerHTML = `
        <p style="font-size:1.5rem; margin-bottom:30px; line-height:1.4;">${fraseProc}</p>
        <input type="text" id="hidden-input" enterkeyhint="done" style="position:absolute; opacity:0; pointer-events:none;" autocomplete="off">
    `;
    container.appendChild(area);

    const input = document.getElementById('hidden-input');

    // Autofocus para que el teclado salga solo
    setTimeout(() => {
        input.focus();
        // Forzamos que el contenedor del ejercicio se vea arriba del todo
        area.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    container.onclick = () => input.focus();

    input.oninput = () => {
        const msg = document.getElementById('ex-message');
        const live = document.getElementById('live-text'); // Búsqueda dinámica para evitar 'null'

        if (msg) msg.innerText = ""; // Limpiamos mensaje de error al escribir

        // Solo escribimos si el elemento existe en pantalla (protección null)
        if (live) {
            live.innerText = input.value || "___";
            live.style.color = "var(--primary)";
            live.style.background = "rgba(0,0,0,0.08)";
        }
    };
    // Detectar la tecla "Enter" (Intro/Ir en el móvil)
    input.onkeydown = (e) => {
        if (e.key === 'Enter') {
            // Quitamos el foco para que el teclado se esconda solo
            input.blur();
            // Disparamos el clic del botón de corregir
            document.getElementById('btn-main-action').click();
        }
    };

    // Vinculamos la validación al botón de acción (reseteado en lanzarSiguiente)
    document.getElementById('btn-main-action').onclick = () => {
        const respuesta = input.value.trim().toLowerCase();
        const esCorrecto = respuesta === ex.correcta.toLowerCase();

        // Llamamos a la función validar
        validar(esCorrecto, document.getElementById('live-text'));
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

    const palabrasMezcladas = ex.fraseCorrecta.split(" ").sort(() => Math.random() - 0.5);

    palabrasMezcladas.forEach(p => {
        const token = document.createElement('div');
        token.className = 'token';
        token.innerText = p;
        token.onclick = () => {
            // 1. Limpiamos el mensaje de error al mover cualquier palabra
            const msg = document.getElementById('ex-message');
            if (msg) msg.innerText = "";

            // 2. Lógica de movimiento
            if (token.parentElement === opciones) carril.appendChild(token);
            else opciones.appendChild(token);
            playSound('tick');
        };
        opciones.appendChild(token);
    });

    area.appendChild(carril); area.appendChild(opciones);
    container.appendChild(area);

    // 3. VALIDACIÓN: Delegamos en la función centralizada
    document.getElementById('btn-main-action').onclick = () => {
        const respuesta = Array.from(carril.children).map(t => t.innerText).join(" ");

        // Llamamos a validar. Ella se encarga del mensaje, el sonido y el bloqueo.
        validar(respuesta === ex.fraseCorrecta);
    };
}


// --- UTILIDADES FINALES ---
function traducir(el, texto, e) {
    if (e) e.stopPropagation();
    if (!el.dataset.original) {
        el.dataset.original = el.innerHTML;
        el.innerHTML = texto;
        el.classList.add('traduccion-activa');
        playSound('open');
    } else {
        el.innerHTML = el.dataset.original;
        delete el.dataset.original;
        el.classList.remove('traduccion-activa');
        playSound('close');
    }
}

function simplificar(el, txt, e) {
    if (e) e.stopPropagation();
    if (!el.dataset.orig) {
        el.dataset.orig = el.innerHTML;
        el.innerText = txt;
        el.classList.add('caja-simplificada');
        playSound('open');
    } else {
        el.innerHTML = el.dataset.orig;
        delete el.dataset.orig;
        el.classList.remove('caja-simplificada');
        playSound('close');
    }
}

function mostrarFelicitacion() {
    // 1. Confeti Épico (en primer plano)
    confetti({
        particleCount: 180,
        spread: 100,
        origin: { y: 0.6 },
        zIndex: 9999
    });

    const body = document.getElementById('ex-body');
    const title = document.getElementById('ex-title');
    const btn = document.getElementById('btn-main-action');

    // Limpiamos el título y el botón para que la copa sea el centro de atención
    if (title) title.innerText = "";
    if (btn) btn.style.display = "none";

    // 2. La Copa con Estilo Cuaderno
    if (body) {
        body.innerHTML = `
            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; min-height:250px; animation: bounceIn 0.8s both;">
                <div style="font-size: 6rem; filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.1)); margin-bottom: 10px;">🏆</div>
                <h2 style="font-family:'Gochi Hand', cursive; color:var(--success); font-size: 2rem; margin:0;">Bikain!</h2>
                <p style="color:#666; font-style:italic;">Oso ondo egin duzu, segi horrela!</p>
            </div>
        `;
    }

    // 3. Cierre suave y limpieza
    setTimeout(() => {
        document.getElementById('exercise-overlay').style.display = 'none';
        // Restauramos el botón para la próxima vez
        if (btn) btn.style.display = "block";
    }, 3000);
}


function closeEx() {
    document.getElementById('exercise-overlay').style.display = 'none';
}

