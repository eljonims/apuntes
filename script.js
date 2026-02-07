let audioCtx = null;
let selectedToken = null;
let currentBateria = [];
let currentIdx = 0;

window.onload = () => {
    if (typeof libroData !== 'undefined') {
        renderIndice();
        
        // Intentamos recuperar el último ID guardado
        const ultimoTema = localStorage.getItem('ultimoTemaVisitado');
        
        // Si existe y el tema aún está en la data, lo cargamos. 
        // Si no, cargamos el tema "sarrera".
        if (ultimoTema && libroData.some(t => t.id === ultimoTema)) {
            loadTema(ultimoTema);
        } else {
            loadTema("sarrera");
        }
    }
};

// --- NAVEGACIÓN ---
function renderIndice(filtro = "") {
    const container = document.getElementById('links-container');
    if (!container) return;
    
    container.innerHTML = ""; // Limpiamos para redibujar
    
    const temasFiltrados = libroData.filter(t => 
        t.titulo.toLowerCase().includes(filtro.toLowerCase())
    );

    temasFiltrados.forEach(t => {
        const div = document.createElement('div');
        div.className = 'link-item'; // <--- ESTO ES CLAVE para el formato
        div.innerText = t.titulo;
        div.onclick = () => {
            loadTema(t.id);
            if (document.getElementById('sidebar').classList.contains('open')) {
                toggleMenu();
            } // Cierra el menú en móvil al elegir
        };
        container.appendChild(div);
    });
}
function filtrarTemas() { renderIndice(document.getElementById('search-bar').value); }
function toggleMenu() { document.getElementById('sidebar').classList.toggle('open'); }

function loadTema(id) {
    const tema = libroData.find(t => t.id === id);
    if (!tema) return;

    // GUARDAR EN LOCAL STORAGE
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
    
    // Scroll al inicio del cuaderno al cambiar de tema
    document.getElementById('notebook').scrollTop = 0;

    if(document.getElementById('sidebar').classList.contains('open')) toggleMenu();
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
    } catch(e) {}
}

// --- MOTOR GENERATIVO ---
function openEx(temaId, exId) {
    const tema = libroData.find(t => t.id === temaId);
    const startIdx = tema.ejercicios.findIndex(e => e.id === exId);
    currentBateria = tema.ejercicios.slice(startIdx);
    currentIdx = 0;
    document.getElementById('exercise-overlay').style.display = 'flex';
    document.querySelector('.footer-exercise').style.display = "block";
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
        wrap.onclick = () => { if(selectedToken) { document.getElementById(`box-${cat}`).appendChild(selectedToken); limpiarSeleccion(); playSound('tick'); } };
        grid.appendChild(wrap);
    });
    const pool = document.createElement('div'); pool.id = 'pool'; pool.className = 'pool-zone';
    pool.onclick = () => { if(selectedToken) { pool.appendChild(selectedToken); limpiarSeleccion(); } };
    container.appendChild(grid); container.appendChild(pool);
    ex.items.forEach(it => {
        const span = document.createElement('div'); span.className = 'token'; span.innerText = it.t; span.dataset.cat = it.c;
        span.onclick = (e) => { e.stopPropagation(); if(selectedToken === span) limpiarSeleccion(); else { limpiarSeleccion(); selectedToken = span; span.classList.add('selected'); resaltar(span.parentElement.id); playSound('tick'); } };
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
    const area = document.createElement('div'); area.className = "choice-area";
    const fraseProc = ex.frase.replace("___", `<span id="live-text" class="lapiz-sufijo" style="background:rgba(0,0,0,0.08); padding:0 2px; border-radius:3px; min-width:1.5rem; display:inline;">___</span>`);
    area.innerHTML = `<p style="font-size:1.5rem; margin-bottom:30px; line-height:1; letter-spacing:-0.5px; white-space:nowrap;">${fraseProc}</p><div id="opt-grid" style="display:grid; gap:10px; grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));"></div>`;
    container.appendChild(area);
    const liveText = document.getElementById('live-text');
    ex.opciones.forEach(opt => {
        const btn = document.createElement('button'); btn.className = 'token'; btn.innerText = opt;
        btn.onclick = () => { document.querySelectorAll('.token').forEach(b => b.classList.remove('selected')); btn.classList.add('selected'); selectedToken = opt; liveText.innerText = opt; playSound('tick'); };
        document.getElementById('opt-grid').appendChild(btn);
    });
    document.getElementById('btn-main-action').onclick = () => {
        if (selectedToken === ex.correcta) { liveText.style.color = "var(--success)"; playSound('success'); prepararSiguiente(); }
        else { playSound('error'); document.getElementById('ex-message').innerText = "❌ Saiatu berriro"; }
    };
}

function renderInput(ex, container) {
    const area = document.createElement('div'); area.style = "text-align:center; padding:20px; flex-grow:1; display:flex; flex-direction:column; justify-content:center;";
    const fraseProc = ex.frase.replace("___", `<span id="live-text" class="lapiz-sufijo" style="background:rgba(0,0,0,0.08); padding:0 2px; border-radius:3px; min-width:1.5rem; display:inline;">___</span>`);
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
    body.innerHTML = `<div style="text-align:center; padding:40px; animation: popIn 0.5s ease;"><div style="font-size:4rem;">🏆</div><h2 class="lapiz-sufijo" style="font-size:3rem; color:var(--success);">Biba zu!</h2><p>Bateria osatuta</p><p id="count-msg" style="font-size:0.8rem; color:#999; margin-top:20px;">Cerrando en 3...</p></div>`;
    footer.style.display = "none";
    let c = 3;
    const t = setInterval(() => { c--; if(c>0) document.getElementById('count-msg').innerText = `Cerrando en ${c}...`; else { clearInterval(t); closeEx(); } }, 1000);
}

function resaltar(id) { document.querySelectorAll('.target-box, .pool-zone').forEach(b => { if(b.id !== id) b.classList.add('highlight-dest'); }); }
function limpiarSeleccion() { selectedToken = null; document.querySelectorAll('.token').forEach(t => t.classList.remove('selected', 'token-error', 'token-success')); document.querySelectorAll('.target-box, .pool-zone').forEach(b => b.classList.remove('highlight-dest')); }
function closeEx() { document.getElementById('exercise-overlay').style.display = 'none'; document.getElementById('ex-body').innerHTML = ""; limpiarSeleccion(); }
function simplificar(el, txt) {
    if(!el.dataset.orig) { 
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
