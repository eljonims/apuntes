let audioCtx = null;
let selectedToken = null;

window.onload = () => { if (typeof libroData !== 'undefined') { renderIndice(); loadTema("intro"); } };

function renderIndice(filtro = "") {
    const container = document.getElementById('links-container');
    container.innerHTML = "";
    libroData.filter(t => t.titulo.toLowerCase().includes(filtro.toLowerCase())).forEach(t => {
        const div = document.createElement('div');
        div.className = 'link-item';
        div.style = "padding:12px; border-bottom:1px solid #eee; cursor:pointer; color:#264653; font-weight:bold;";
        div.innerText = t.titulo;
        div.onclick = () => loadTema(t.id);
        container.appendChild(div);
    });
}

function filtrarTemas() { renderIndice(document.getElementById('search-bar').value); }
function toggleMenu() { document.getElementById('sidebar').classList.toggle('open'); }

function loadTema(id) {
    const tema = libroData.find(t => t.id === id);
    let htmlFinal = tema.texto;

    if (tema.ejercicios) {
        tema.ejercicios.forEach((ex, index) => {
            const marcador = `[EX:${ex.id}]`;
            const btnHTML = `<button class="post-it" onclick="openEx('${id}', '${ex.id}')" style="transform: rotate(${index % 2 === 0 ? -1.5 : 1.5}deg)">📝 ARIKETA: ${ex.pregunta.substring(0, 25)}...</button>`;
            htmlFinal = htmlFinal.replace(marcador, btnHTML);
        });
    }

    document.getElementById('page-content').innerHTML = `<h1>${tema.titulo}</h1><div>${htmlFinal}</div>`;
    if(document.getElementById('sidebar').classList.contains('open')) toggleMenu();
}

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


function openEx(temaId, exId) {
    const tema = libroData.find(t => t.id === temaId);
    const ex = tema.ejercicios.find(e => e.id === exId);
    
    document.getElementById('exercise-overlay').style.display = 'flex';
    document.getElementById('ex-title').innerText = ex.pregunta;
    const body = document.getElementById('ex-body');
    body.innerHTML = "";

    if (ex.tipo === 'drag') renderDrag(ex, body);
    else if (ex.tipo === 'choice') renderChoice(ex, body);
    else if (ex.tipo === 'input') renderInput(ex, body); // ¡Nuevo motor!
}

function renderDrag(ex, container) {
    const grid = document.createElement('div');
    grid.className = 'drag-grid';
    const cats = [...new Set(ex.items.map(it => it.c))].filter(c => c !== "");
    
    cats.forEach(cat => {
        const wrap = document.createElement('div');
        wrap.className = 'column-wrapper';
        wrap.innerHTML = `<small style="font-weight:bold;color:#666;font-size:0.7rem">${cat.toUpperCase()}</small><div id="box-${cat}" class="target-box"></div>`;
        wrap.onclick = () => { if(selectedToken) { document.getElementById(`box-${cat}`).appendChild(selectedToken); limpiarSeleccion(); playSound('tick'); } };
        grid.appendChild(wrap);
    });

    const pool = document.createElement('div');
    pool.id = 'pool'; pool.className = 'pool-zone';
    pool.onclick = () => { if(selectedToken) { pool.appendChild(selectedToken); limpiarSeleccion(); playSound('tick'); } };

    container.appendChild(grid);
    container.appendChild(pool);

    ex.items.forEach(it => {
        const span = document.createElement('div');
        span.className = 'token'; span.innerText = it.t; span.dataset.cat = it.c;
        span.onclick = (e) => {
            e.stopPropagation();
            if(selectedToken === span) limpiarSeleccion();
            else { limpiarSeleccion(); selectedToken = span; span.classList.add('selected'); resaltar(span.parentElement.id); playSound('tick'); }
        };
        pool.appendChild(span);
    });
    document.getElementById('btn-main-action').onclick = () => checkDrag();
}

function renderChoice(ex, container) {
    const area = document.createElement('div');
    area.style = "text-align:center; padding:20px; flex-grow:1; display:flex; flex-direction:column; justify-content:center;";
    
    // Eliminamos quirúrgicamente los espacios en el replace para que el span se pegue a la letra anterior
    const fraseProcesada = ex.frase.replace("___", `<span id="live-text" class="lapiz-sufijo" style="background:rgba(0,0,0,0.08); padding:0 2px; border-radius:3px; min-width:1.5rem; display:inline; box-shadow:inset 0 1px 2px rgba(0,0,0,0.1); margin:0; line-height:inherit;">___</span>`);

    area.innerHTML = `
        <p style="font-size:1.5rem; margin-bottom:30px; line-height:1; letter-spacing:-0.5px; white-space:nowrap;">${fraseProcesada}</p>
        <div id="options-grid" style="display:grid; gap:10px; grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));"></div>
    `;
    container.appendChild(area);

    const grid = document.getElementById('options-grid');
    const liveText = document.getElementById('live-text');

    ex.opciones.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'token';
        btn.innerText = opt;
        btn.onclick = () => {
            document.querySelectorAll('.token').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedToken = opt;
            // Al elegir, se escribe a lápiz pegado a la palabra
            liveText.innerText = opt;
            liveText.style.background = "rgba(0,0,0,0.04)";
            playSound('tick');
        };
        grid.appendChild(btn);
    });

    document.getElementById('btn-main-action').onclick = () => {
        const msg = document.getElementById('ex-message');
        if (!selectedToken) { msg.innerText = "Hautatu bat"; return; }

        if (selectedToken === ex.correcta) {
            msg.innerText = "✨ Oso ondo!";
            msg.style.color = "var(--success)";
            liveText.style.color = "var(--success)";
            liveText.style.background = "rgba(42, 157, 143, 0.2)";
            playSound('success'); setTimeout(closeEx, 1500);
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
    const area = document.createElement('div');
    area.style = "text-align:center; padding:20px; flex-grow:1; display:flex; flex-direction:column; justify-content:center;";
    
    // El span ahora lleva la clase 'lapiz-sufijo'
    const fraseProcesada = ex.frase.replace("___", 
        `<span id="live-text" class="lapiz-sufijo" style="background:rgba(0,0,0,0.06); padding:0 2px; border-radius:3px; min-width:1rem; display:inline; box-shadow:inset 0 1px 2px rgba(0,0,0,0.1); transition:all 0.2s; margin:0; line-height:inherit;">___</span>`
    );

    area.innerHTML = `
        <p style="font-size:1.5rem; margin-bottom:30px; line-height:1; letter-spacing:-0.5px; white-space:nowrap;">${fraseProcesada}</p>
        <input type="text" id="hidden-input" style="position:absolute; opacity:0; pointer-events:none;" autocomplete="off" spellcheck="false">
        <p style="color:#666; font-style:italic; font-size:0.9rem;">${ex.ayuda || "Osatu hitza..."}</p>
    `;
    container.appendChild(area);

    const hiddenInput = document.getElementById('hidden-input');
    const liveText = document.getElementById('live-text');

    container.onclick = () => hiddenInput.focus();
    hiddenInput.focus();

    hiddenInput.oninput = () => {
        liveText.innerText = hiddenInput.value || "___";
        // Mantenemos el color grafito a menos que sea éxito/error
        if (!liveText.classList.contains('token-error') && !liveText.classList.contains('token-success')) {
            liveText.style.color = "#555";
        }
    };

    // Al corregir, el éxito/error sobreescribirá el color grafito
    document.getElementById('btn-main-action').onclick = () => {
        const msg = document.getElementById('ex-message');
        const respuesta = hiddenInput.value.trim().toLowerCase();
        
        if (respuesta === ex.correcta.toLowerCase()) {
            msg.innerText = "✨ Oso ondo!"; msg.style.color = "var(--success)";
            liveText.style.color = "var(--success)";
            liveText.style.background = "rgba(42, 157, 143, 0.2)";
            playSound('success'); setTimeout(closeEx, 1500);
        } else {
            msg.innerText = "❌ Saiatu berriro"; msg.style.color = "var(--error)";
            liveText.style.color = "var(--error)";
            liveText.style.background = "rgba(231, 111, 81, 0.2)";
            playSound('error');
        }
    };
}


function resaltar(id) { document.querySelectorAll('.target-box, .pool-zone').forEach(b => { if(b.id !== id) b.classList.add('highlight-dest'); }); }
function limpiarSeleccion() { selectedToken = null; document.querySelectorAll('.token').forEach(t => t.classList.remove('selected', 'token-error', 'token-success')); document.querySelectorAll('.target-box, .pool-zone').forEach(b => b.classList.remove('highlight-dest')); }

function checkDrag() {
    const tokens = document.querySelectorAll('.token');
    const msg = document.getElementById('ex-message');
    let err = 0, pend = 0;

    tokens.forEach(t => {
        const pid = t.parentElement.id;
        const cat = t.dataset.cat;
        if (pid === 'pool') { if (cat !== "") pend++; }
        else {
            if (cat === "" || pid !== `box-${cat}`) { err++; t.classList.add('token-error'); }
            else { t.classList.add('token-success'); }
        }
    });

    if (pend > 0) msg.innerText = `⚠️ Te faltan ${pend} piezas`;
    else if (err > 0) { msg.innerText = "❌ Revisa los errores"; playSound('error'); }
    else { msg.innerText = "✨ Biba zu!"; playSound('success'); setTimeout(closeEx, 1500); }
}

function closeEx() { document.getElementById('exercise-overlay').style.display = 'none'; document.getElementById('ex-body').innerHTML = ""; limpiarSeleccion(); }

function simplificar(el, txt) {
    if(!el.dataset.orig) { el.dataset.orig = el.innerText; el.innerText = txt; el.classList.add('caja-simplificada'); playSound('tick'); }
    else { el.innerText = el.dataset.orig; delete el.dataset.orig; el.classList.remove('caja-simplificada'); }
}
