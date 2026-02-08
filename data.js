const libroData = [
    {
        id: "inicio",
        titulo: "📁 Ongi Etorri",
        hijos: [
            {
                id: "sarrera",
                titulo: "📄 Presentación",
                texto: "Este es tu cuaderno de euskera. Usa el botón <b>GAIAK</b> para explorar las lecciones. Tu progreso se guardará automáticamente.",
                tipo: "none"
            },
            {
                id: "ayuda-interfaz",
                titulo: "📄 Ayuda de Interfaz",
                texto: `
                    <h3>¿Cómo funciona?</h3>
                    <p>Toca los elementos resaltados para interactuar con ellos:</p>
                    <ul>
                        <li><b>Cajas de colores:</b> Simplifican frases complejas.</li>
                        <li><b>Rectángulos grises:</b> Conceptos que se expanden al tocarlos.</li>
                        <li><b>Post-its:</b> Baterías de ejercicios con confeti al final.</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: "gramatika-unidades",
        titulo: "📁 Gramatika",
        hijos: [
            {
                id: "casos-sustantivo",
                titulo: "📁 Deklinabidea (Casos)",
                hijos: [
                    {
                        id: "conceptos-clave",
                        titulo: "📄 Conceptos Fundamentales",
                        texto: `
                            <p>En euskera es vital entender qué es el 
                            <span class="caja-gramatical caja-adv caja-simplificada" 
                                  data-orig="El sujeto de un verbo transitivo (el que hace una acción sobre algo)" 
                                  onclick="simplificar(this, 'CASO NORK')">CASO NORK</span>.
                            </p>
                            <p>Y no debemos confundirlo con el 
                            <span class="caja-gramatical caja-sus caja-simplificada" 
                                  data-orig="El sujeto de un verbo intransitivo (ser, estar, ir...)" 
                                  onclick="simplificar(this, 'CASO NOR')">CASO NOR</span>.
                            </p>
                            <p><small><i>* Toca los conceptos resaltados si necesitas ver la definición completa.</i></small></p>
                            [EX:bateria_conceptos]`,
                        ejercicios: [
                            {
                                id: "bateria_conceptos",
                                pregunta: "¿Qué caso es?",
                                tipo: "choice",
                                frase: "Ni mendira joan naiz (Yo he ido al monte) -> Yo es caso ___",
                                opciones: ["NOR", "NORK"],
                                correcta: "NOR"
                            }
                        ]
                    }
                ]
            },
            {
                id: "mendeperatzea-folder",
                titulo: "📁 Mendeperatzea (Subordinación)",
                hijos: [
                    {
                        id: "unidad_piloto",
                        titulo: "📄 El Sistema Compuesto",
                        texto: `
                            <p>Prueba la <b>simplificación</b>. Imagina que toda esta frase es solo una pieza:</p>
                            <div style="background:rgba(255,255,255,0.4); padding:15px; border-radius:8px; border:1px solid #ccc; line-height:2;">
                                Nik <span class="caja-gramatical caja-adj" onclick="simplificar(this, 'HORI')">jendeak esaten duena</span> badakit.
                                <br>
                                <small><i>(Yo sé <span>lo que dice la gente</span>)</i></small>
                            </div>
                            <p>Al tocar la caja, verás que se resume en <b>HORI</b> (Eso).</p>
                            [EX:reto_drag]`,
                        ejercicios: [
                            {
                                id: "reto_drag",
                                pregunta: "Reto 1: Clasificación",
                                tipo: "drag",
                                items: [
                                    { t: "Etorriko da", c: "principal" },
                                    { t: "Gose naiz", c: "principal" },
                                    { t: "...dela esan du", c: "subordinada" },
                                    { t: "...pentsatzen dudalako", c: "subordinada" },
                                    { t: "Autobusa", c: "" },
                                    { t: "Mendian", c: "" }
                                ]
                            },
                            {
                                id: "reto_choice",
                                pregunta: "Reto 2: Elección de Nexo",
                                tipo: "choice",
                                frase: "Badakit etorriko de___",
                                opciones: ["-la", "-en", "-nik"],
                                correcta: "-la"
                            },
                            {
                                id: "reto_input",
                                pregunta: "Reto 3: Producción Escrita",
                                tipo: "input",
                                frase: "Ez dugu uste egia de___",
                                ayuda: "Pista: Oración negativa",
                                correcta: "-nik"
                            }
                        ]
                    },
                    {
                        id: "ejercicio-simple",
                        titulo: "📄 Práctica de Sustitución",
                        texto: `Prueba la unión de estilos: toca la caja verde para ver cómo se convierte en <b>ESO</b>.
                                <br><br>
                                <span class="caja-gramatical caja-sus" onclick="simplificar(this, 'ESO')">Que el euskera es un idioma antiguo</span> es una realidad.
                                <br><br>
                                [EX:bateria_simple]`,
                        ejercicios: [
                            {
                                id: "bateria_simple",
                                pregunta: "¿Qué palabra falta?",
                                tipo: "input",
                                frase: "Euskara zaharra de___",
                                ayuda: "Sufijo para frases afirmativas",
                                correcta: "la"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "sintaxia-nork",
        titulo: "📁 Sintaxia: Ordena",
        hijos: [
            {
                id: "orden-nork",
                titulo: "📄 Ordenando el NORK",
                texto: `
                En euskera, el orden suele ser libre, pero el estándar es <b>Sujeto + Objeto + Verbo</b>.
                <br><br>
                Prueba a ordenar estas piezas. Recuerda: quien hace la acción lleva el "pegamento" <b>-ak</b>.
                [EX:sort_nork_1]`,
                ejercicios: [
                    {
                        id: "sort_nork_1",
                        pregunta: "Ordena: 'El gato ha comido el pescado'",
                        tipo: "sort",
                        fraseCorrecta: "Katuak arraina jan du",
                        ayuda: "(Katuak = El gato / arraina = el pescado / jan du = ha comido)"
                    },
                    {
                        id: "sort_nork_2",
                        pregunta: "Ordena: 'Yo he comprado el pan'",
                        tipo: "sort",
                        fraseCorrecta: "Nik ogia erosi dut",
                        ayuda: "(Nik = Yo / ogia = el pan / erosi dut = he comprado)"
                    }
                ]
            }
        ]
    },
    {
        id: "sintaxis-castellano",
        titulo: "📁 Conceptos Básicos (Castellano)",
        hijos: [
            {
                id: "las-piezas",
                titulo: "📄 1. Las piezas del puzzle",
                texto: `
                <p>Antes de complicarnos, mira estas frases sencillas. Cada pieza cumple una función:</p>
                
                <div style="background:rgba(255,255,255,0.4); padding:15px; border-radius:8px; border:1px solid #ccc; line-height:2;">
                    1. Yo pienso <span class="caja-gramatical caja-sus" onclick="simplificar(this, 'ESO')">una cosa</span>.<br>
                    2. El chico <span class="caja-gramatical caja-adj" onclick="simplificar(this, 'ALTO')">rubio</span> ha venido.<br>
                    3. Nos vemos <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'LUEGO')">mañana</span>.
                </div>

                <p>En el euskera y en la sintaxis avanzada, estas palabras se convierten en frases enteras, pero <b>la función es la misma</b>.</p>
                
                [EX:bat_piezas]
            `,
                ejercicios: [
                    {
                        id: "bat_piezas",
                        pregunta: "¿Qué palabra sustituye a la pieza?",
                        tipo: "drag",
                        items: [
                            { t: "Una cosa / algo", c: "ESO" },
                            { t: "Rubio / Inteligente", c: "ESE" },
                            { t: "Mañana / Allí", c: "ENTONCES" },
                            { t: "Manzanas", c: "" } // Distractor
                        ]
                    }
                ]
            },
            {
                id: "derivacion-compleja",
                titulo: "📄 2. De la palabra a la frase",
                texto: `
                <p>Mira cómo una palabra sencilla se puede "estirar" hasta convertirse en una oración subordinada:</p>

                <div style="background:rgba(255,255,255,0.4); padding:15px; border-radius:8px; border:1px solid #ccc; line-height:2;">
                    <b>Nivel 1:</b> Pienso <span class="caja-gramatical caja-sus" onclick="simplificar(this, 'ESO')">algo</span>.<br>
                    <b>Nivel 2:</b> Pienso <span class="caja-gramatical caja-sus" onclick="simplificar(this, 'ESO')">que no vendrás</span>.<br><br>
                    
                    <b>Nivel 1:</b> El chico <span class="caja-gramatical caja-adj" onclick="simplificar(this, 'ESE')">alto</span>.<br>
                    <b>Nivel 2:</b> El chico <span class="caja-gramatical caja-adj" onclick="simplificar(this, 'ESE')">que conociste en el metro</span>.
                </div>

                <p>¿Ves? La "caja" de color sigue siendo la misma pieza, solo que ahora tiene un verbo dentro.</p>
                
                [EX:bat_ordenar_compleja]
            `,
                ejercicios: [
                    {
                        id: "bat_ordenar_compleja",
                        pregunta: "Ordena para construir tres frases de más simple a más compleja:",
                        tipo: "sort",
                        fraseCorrecta: "Pienso algo. Pienso que vendrás. Pienso que vendrás cuando puedas.",
                        ayuda: "Demuestra cómo la frase crece bloque a bloque."
                    }
                ]
            },
            {
                id: "jefe-subordinada",
                titulo: "📄 3. ¿Quién manda aquí?",
                texto: `
        <p>En una frase compleja hay jerarquías. Imagina una oficina:</p>
        <ul>
            <li><b>La Principal (El Jefe):</b> Es la frase que tiene sentido por sí sola.</li>
            <li><b>La Subordinada (El Mensajero):</b> Es una frase que trabaja para el jefe y no puede vivir sin él.</li>
        </ul>

        <div style="background:rgba(255,255,255,0.4); padding:15px; border-radius:8px; border:1px solid #ccc;">
            "Dice <span class="caja-gramatical caja-sus" onclick="simplificar(this, 'ESO')">que vendrá mañana</span>"
            <br><br>
            <b>Dice:</b> Es el jefe. Si dices "Él dice", se entiende que está hablando.<br>
            <b>Que vendrá mañana:</b> Es el mensajero. Si entras en una habitación y solo dices eso, nadie te entiende.
        </div>

        <p>Prueba a separar los "jefes" de los "mensajeros" en este ejercicio:</p>
        [EX:bat_jefe_sub]
    `,
                ejercicios: [
                    {
                        id: "bat_jefe_sub",
                        pregunta: "Clasifica: ¿Se entiende solo o necesita al jefe?",
                        tipo: "drag",
                        items: [
                            { t: "Pienso", c: "PRINCIPAL" },
                            { t: "El perro corre", c: "PRINCIPAL" },
                            { t: "...que hace sol", c: "SUBORDINADA" },
                            { t: "...cuando vuelvas", c: "SUBORDINADA" },
                            { t: "Hoy", c: "" } // Distractor
                        ]
                    }
                ]
            },
            {
                id: "palabra-vs-frase",
                titulo: "📄 4. ¿Palabra o Frase?",
                texto: `
        <p>Una subordinada es simplemente una palabra que ha crecido mucho.</p>
        
        <div style="background:rgba(255,255,255,0.4); padding:15px; border-radius:8px; border:1px solid #ccc;">
            <b>CASO A (Palabra):</b> "Iré <span class="caja-gramatical caja-adv">luego</span>".
            <br>
            <b>CASO B (Frase):</b> "Iré <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'LUEGO')">cuando termine de comer</span>".
        </div>

        <p>En el <b>Caso B</b>, tenemos un verbo ("termine"), por eso es una oración. Pero ambas cajas sirven para lo mismo: decirnos el MOMENTO (Entonces).</p>
        
        [EX:bat_palabra_frase]
    `,
                ejercicios: [
                    {
                        id: "bat_palabra_frase",
                        pregunta: "¿Cuál de estas piezas es una ORACIÓN (tiene verbo)?",
                        tipo: "choice",
                        frase: "Mañana iré al monte ___",
                        opciones: ["cuando no llueva", "luego", "pronto"],
                        correcta: "cuando no llueva"
                    }
                ]
            },
            {
                id: "detectar-verbo",
                titulo: "📄 5. El Corazón de la Caja",
                texto: `
        <p>Para que una caja sea una <b>subordinada</b>, debe tener un verbo dentro. El verbo es el motor que hace que la frase funcione.</p>
        
        <p>Identifica cuál de estas cajas es una oración porque contiene una acción:</p>
        
        [EX:bat_verbo_detect]
    `,
                ejercicios: [
                    {
                        id: "bat_verbo_detect",
                        pregunta: "¿Cuál de estas piezas tiene un VERBO (acción)?",
                        tipo: "drag",
                        items: [
                            { t: "...que HABLA mucho", c: "CON VERBO" },
                            { t: "...porque TENGO sueño", c: "CON VERBO" },
                            { t: "Muy cansado", c: "SIN VERBO" },
                            { t: "Rápidamente", c: "SIN VERBO" }
                        ]
                    }
                ]
            },
            {
                id: "el-verbo-fantasma",
                titulo: "📄 6. El Verbo Fantasma",
                texto: `
        <p>A veces somos perezosos y no decimos el verbo, pero el "pegamento" nos delata.</p>
        
        <div style="background:rgba(255,255,255,0.4); padding:15px; border-radius:8px; border:1px solid #ccc;">
            <b>Frase:</b> "Digo que sí".<br>
            <b>En realidad:</b> "Digo que [lo que sea] es que sí".
        </div>

        <p>Aunque el verbo esté escondido, la pieza sigue cumpliendo su función de <b>ESO</b> (Sustantiva).</p>
        
        [EX:bat_fantasma]
    `,
                ejercicios: [
                    {
                        id: "bat_fantasma",
                        pregunta: "¿Cuál de estas piezas es una caja de 'ESO' aunque el verbo esté escondido?",
                        tipo: "choice",
                        frase: "Él me respondió ___",
                        opciones: ["que sí", "ayer", "rápidamente"],
                        correcta: "que sí"
                    }
                ]
            },
            {
                id: "los-tres-tipos",
                titulo: "📄 7. Los Tres Tipos de Caja",
                texto: `
        <p>Toda oración subordinada, por muy larga que sea, siempre encaja en uno de estos tres moldes:</p>

        <div style="line-height: 2; margin-bottom: 20px;">
            <!-- CAJA 1: SUSTANTIVA -->
            <div style="margin-bottom: 15px;">
                <span class="caja-gramatical caja-sus" onclick="simplificar(this, 'ESO')">Que vengas a clase</span> es importante.
                <br><small><b>1. Sustantiva (La Caja del ESO):</b> Sustituye a un nombre. Si puedes decir "Pienso ESO" o "Quiero ESO", es sustantiva.</small>
            </div>

            <!-- CAJA 2: ADJETIVA -->
            <div style="margin-bottom: 15px;">
                El libro <span class="caja-gramatical caja-adj" onclick="simplificar(this, 'ESE')">que me prestaste</span> es muy bueno.
                <br><small><b>2. Adjetiva (La Caja del ESE):</b> Sustituye a un adjetivo. Sirve para describir a un nombre (el libro <i>interesante</i>, el libro <i>ese</i>).</small>
            </div>

            <!-- CAJA 3: ADVERBIAL -->
            <div style="margin-bottom: 15px;">
                Iré al cine <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'ENTONCES')">cuando termine la lluvia</span>.
                <br><small><b>3. Adverbial (La Caja del ENTONCES):</b> Sustituye a un adverbio. Nos dice el dónde, cómo o cuándo (Iré <i>luego</i>, iré <i>entonces</i>).</small>
            </div>
        </div>

        <p>¿Sabrías clasificar estas cajas según la palabra que las sustituye?</p>
        [EX:bat_tres_cajas]
    `,
                ejercicios: [
                    {
                        id: "bat_tres_cajas",
                        pregunta: "Clasifica según su función (ESO, ESE, ENTONCES):",
                        tipo: "drag",
                        items: [
                            { t: "Digo QUE SÍ", c: "ESO" },
                            { t: "La casa DONDE VIVO", c: "ESE" },
                            { t: "Vengo PORQUE QUIERO", c: "ENTONCES" },
                            { t: "Pienso QUE ESTÁ BIEN", c: "ESO" },
                            { t: "El gato QUE MAÚLLA", c: "ESE" }
                        ]
                    }
                ]
            },
            {
                id: "adverbiales-intro",
                titulo: "📁 Las Adverbiales (ENTONCES)",
                hijos: [
                    {
                        id: "que-es-adverbial",
                        titulo: "📄 La Caja del Momento y el Motivo",
                        texto: `
                <p>Las oraciones adverbiales nos dicen las <b>circunstancias</b> de la acción principal. 
                En español usamos palabras sueltas delante (Nexos):</p>
                
                <ul>
                    <li><b>Tiempo:</b> <i>Cuando</i> llegue...</li>
                    <li><b>Causa:</b> <i>Porque</i> quiero...</li>
                    <li><b>Finalidad:</b> <i>Para que</i> veas...</li>
                    <li><b>Condición:</b> <i>Si</i> vienes...</li>
                </ul>

                <p>En euskera, todas estas palabras (cuando, porque, si...) <b>no existen como palabras sueltas</b>. 
                Se convierten en terminaciones que se pegan al final del verbo.</p>

                <p>Antes de ver frases, vamos a entrenar el cerebro para asociar el nexo español con su "cola" en euskera.</p>
                
                [EX:bat_nexo_match_1]
            `,
                        ejercicios: [
                            // BATERÍA LARGA: Dividida en partes de 3-4 elementos para móvil
                            {
                                id: "bat_nexo_match_1",
                                pregunta: "Asocia (Parte 1: El 'QUE' y el 'CUANDO')",
                                tipo: "drag",
                                items: [
                                    { t: "QUE (afirmación)", c: "-LA" },
                                    { t: "CUANDO...", c: "-NEAN" },
                                    { t: "PORQUE...", c: "-LAKO" },
                                    { t: "Gato", c: "" } // Distractor
                                ]
                            },
                            {
                                id: "bat_nexo_match_2",
                                pregunta: "Asocia (Parte 2: El 'SI' y el 'PARA')",
                                tipo: "drag",
                                items: [
                                    { t: "SI... (condición)", c: "BA-" },
                                    { t: "PARA QUE...", c: "-TZEN" },
                                    { t: "QUE (negación/duda)", c: "-NIK" }
                                ]
                            },
                            {
                                id: "bat_nexo_match_3",
                                pregunta: "Reto final: ¿Te acuerdas?",
                                tipo: "choice",
                                frase: "Si quiero... -> Nahi ___",
                                opciones: ["BA-", "-LA", "-LAKO"],
                                correcta: "BA-"
                            },
                            {
                                id: "bat_nexo_match_4",
                                pregunta: "Reto final: ¿Te acuerdas?",
                                tipo: "choice",
                                frase: "Cuando venga... -> Dator___",
                                opciones: ["-NEAN", "-LA", "-EN"],
                                correcta: "-NEAN"
                            }
                        ]
                    }
                ]
            },
            {
                id: "mecanica-nexos",
                titulo: "📁 Ingeniería: Prefijos y Sufijos",
                hijos: [
                    {
                        id: "cola-vs-locomotora",
                        titulo: "📄 Colas (Sufijos) y Locomotoras (Prefijos)",
                        texto: `
                <p>En español, los nexos son como <b>etiquetas delanteras</b>. En euskera, la mayoría son <b>colas traseras</b>.</p>

                <div style="background:rgba(0,0,0,0.03); padding:15px; border-radius:8px; border-left:5px solid var(--accent);">
                    <b>1. Los Sufijos (El 90%):</b> Se pegan al final del verbo.<br>
                    Español: <span class="caja-gramatical caja-adv" onclick="simplificar(this, '...LAKO')">Porque</span> llueve.<br>
                    Euskera: Euria ari du<span class="caja-gramatical caja-adv">-LAKO</span>.
                    <br><br>
                    <b>2. Los Prefijos (Las excepciones):</b> Se pegan delante del verbo.<br>
                    Español: <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'BA...')">Si</span> llueve.<br>
                    Euskera: Euria <span class="caja-gramatical caja-adv">BA</span>-ari du.
                </div>

                <p>Fíjate en el guion: <b>-LAKO</b> indica que se pega a algo que va antes. <b>BA-</b> indica que se pega a algo que va después.</p>
                
                [EX:bat_mecanica_1]
            `,
                        ejercicios: [
                            {
                                id: "bat_mecanica_1",
                                pregunta: "¿Dónde se pega el nexo?",
                                tipo: "drag",
                                items: [
                                    { t: "-LAKO (Porque)", c: "DETRÁS" },
                                    { t: "-NEAN (Cuando)", c: "DETRÁS" },
                                    { t: "BA- (Si...)", c: "DELANTE" },
                                    { t: "-LA (Que...)", c: "DETRÁS" }
                                ]
                            },
                            {
                                id: "bat_mecanica_2",
                                pregunta: "Completa la palabra 'Dator' (Viene):",
                                tipo: "choice",
                                frase: "Si viene... -> ___dator",
                                opciones: ["Ba-", "-la", "-nean"],
                                correcta: "Ba-"
                            },
                            {
                                id: "bat_mecanica_3",
                                pregunta: "Completa la palabra 'Dator' (Viene):",
                                tipo: "choice",
                                frase: "Porque viene... -> Dator___",
                                opciones: ["-la", "-nean", "-lako"],
                                correcta: "-lako"
                            }
                        ]
                    }
                ]
            },
            {
                id: "adverbiales-profundo",
                titulo: "📁 Tiempo y Causa: La Vocal Puente",
                hijos: [
                    {
                        id: "vocal-puente",
                        titulo: "📄 El secreto de la -(E)",
                        texto: `
                <p>En euskera, los sufijos son como piezas de puzzle. Pero a veces, para que encajen bien, necesitan una <b>-e-</b> de pegamento.</p>

                <div style="background:rgba(0,0,0,0.03); padding:15px; border-radius:8px; border-left:5px solid var(--success);">
                    <b>La Regla de Oro:</b><br>
                    Si el verbo termina en <b>consonante</b> (dator, dabil, zen...), añadimos la <b>-e-</b>.<br>
                    Si termina en <b>vocal</b> (da, du, zaude...), la <b>-e-</b> desaparece.
                </div>

                <div style="margin-top:20px;">
                    <b>Ejemplo 1 (Tiempo): -(E)NEAN</b><br>
                    Dator + nean = Dator<b>e</b>nean <small>(Cuando viene)</small><br>
                    Da + nean = Danean <small>(Cuando es)</small>
                    <br><br>
                    <b>Ejemplo 2 (Causa): -(E)LAKO</b><br>
                    Dabil + lako = Dabil<b>e</b>lako <small>(Porque anda)</small><br>
                    Du + lako = Dulako <small>(Porque lo tiene)</small>
                </div>

                <p>¿Sabrías elegir la forma correcta según cómo termina el verbo?</p>
                
                [EX:bat_puente_1]
            `,
                        ejercicios: [
                            {
                                id: "bat_puente_1",
                                pregunta: "Sufijo de tiempo: ¿Necesita la -e- de puente?",
                                tipo: "choice",
                                frase: "Dabil (Anda) + Cuando = Dabil___",
                                opciones: ["-enean", "-nean"],
                                correcta: "-enean"
                            },
                            {
                                id: "bat_puente_2",
                                pregunta: "Sufijo de tiempo: ¿Necesita la -e- de puente?",
                                tipo: "choice",
                                frase: "Da (Es) + Cuando = Da___",
                                opciones: ["-enean", "-nean"],
                                correcta: "-nean"
                            },
                            {
                                id: "bat_puente_3",
                                pregunta: "Sufijo de causa: ¿Necesita la -e- de puente?",
                                tipo: "choice",
                                frase: "Dator (Viene) + Porque = Dator___",
                                opciones: ["-elako", "-lako"],
                                correcta: "-elako"
                            },
                            {
                                id: "bat_puente_4",
                                pregunta: "Reto final: Escribe el sufijo completo a lápiz",
                                tipo: "input",
                                frase: "Gose naiz (Tengo hambre) + Porque = Gose nai___",
                                ayuda: "Termina en vocal 'i'",
                                correcta: "z-lako" // Aquí hay un matiz con 'naiz', pero para simplificar podemos poner 'lako'
                            }
                        ]
                    }
                ]
            }




        ]
    },
    {
        id: "choques-vocalicos",
        titulo: "📁 11. La Guerra de las Vocales",
        hijos: [
            {
                id: "vocal-absorcion",
                titulo: "📄 Cuando la -E se come a la -A",
                texto: `
                <p>A veces, cuando el verbo termina en <b>-a</b>, al pegarle el sufijo que empieza por <b>-e</b>, ocurre una fusión:</p>

                <div style="background:rgba(255,173,173,0.1); padding:15px; border-radius:8px; border-left:5px solid var(--margin);">
                    <b>La Regla del Choque:</b><br>
                    A + E = <b>E</b><br>
                    <small>La <b>-e-</b> del sufijo tiene más fuerza y se "come" a la <b>-a</b> final del verbo.</small>
                </div>

                <div style="margin-top:20px;">
                    <b>Ejemplo Real (Verbo IZAN - Ser):</b><br>
                    Dira (Son) + -(e)nean (Cuando) = <b>Direnean</b> <br>
                    <small>(No es <s>Diranean</s> ni <s>Diraenean</s>)</small>
                    <br><br>
                    <b>Ejemplo con Causa:</b><br>
                    Gara (Somos) + -(e)lako (Porque) = <b>Garelako</b><br>
                    <small>(No es <s>Garalako</s>)</small>
                </div>

                <p>Es como si la palabra se encogiera para sonar más rápido. ¿Probamos a fusionarlas?</p>
                
                [EX:bat_choque_1]
            `,
                ejercicios: [
                    {
                        id: "bat_choque_1",
                        pregunta: "Fusiona: Dira (Son) + -(e)lako (Porque)",
                        tipo: "choice",
                        frase: "(Porque son)</br> Dir___",
                        opciones: ["-alako", "-elako", "-lako", "-aelako"],
                        correcta: "-elako"
                    },
                    {
                        id: "bat_choque_2",
                        pregunta: "Fusiona: Gara (Somos) + -(e)nean (Cuando)",
                        tipo: "choice",
                        frase: "(Cuando somos)</br> Gar___",
                        opciones: ["-anean", "-enean", "-nean"],
                        correcta: "-enean"
                    },
                    {
                        id: "bat_choque_3",
                        pregunta: "Escribe la palabra fusionada completa:",
                        tipo: "input",
                        frase: "Ba- + Da (Es) + -(e)lako = Ba-d___",
                        ayuda: "Recuerda: A + E = E",
                        correcta: "elako"
                    }
                ]
            },
            {
                id: "fata-vocales",
                titulo: "📄 12. Resumen de Soldadura",
                texto: `
        <p>Antes de pasar a las frases completas, graba esto en tu mente:</p>
        <ul>
            <li><b>Consonante + E:</b> Se necesita el puente (Dator + enean = Datorenean).</li>
            <li><b>Vocal (A) + E:</b> La E gana y se fusionan (Da + elako = Delako).</li>
            <li><b>Vocal (O/U) + E:</b> Convivencia (Du + elako = Duelako).</li>
        </ul>
        <p>¡Ya tienes el carnet de ingeniero de palabras! Ahora, a por el confeti.</p>
        [EX:bat_final_soldadura]
    `,
                ejercicios: [
                    {
                        id: "bat_final_soldadura",
                        pregunta: "Reto Final: ¿Cómo queda la palabra?",
                        tipo: "sort",
                        fraseCorrecta: "Mutila delako etorri da",
                        ayuda: "(Ha venido porque es el chico)"
                    }
                ]
            }
        ]
    },
    {
        id: "ejemplo-traduccion",
        titulo: "📄 Frases de Práctica",
        texto: `
        <p>Toca las frases para ver su significado en castellano:</p>
        
        <div style="line-height:2.5;">
            1. <span class="frase-traduccion" onclick="traducir(this, 'El chico ha venido')">Mutila etorri da.</span><br>
            2. <span class="frase-traduccion" onclick="traducir(this, 'He comprado el pan')">Ogia erosi dut.</span><br>
            3. <span class="frase-traduccion" onclick="traducir(this, '¿Dónde estás?')">Non zaude?</span>
        </div>

        <p>Incluso puedes meter cajas dentro de una frase traducible:</p>
        <div class="frase-traduccion" onclick="traducir(this, 'Sé que vendrás')">
            Badakit <span class="caja-gramatical caja-sus" onclick="event.stopPropagation(); simplificar(this, 'HORI')">etorriko zarela</span>.
        </div>
    `
    },
    {
        id: "ejemplo-combinado",
        titulo: "📄 Análisis Profundo",
        texto: `
        <p>Toca la frase para traducirla, o la caja para analizar su gramática:</p>
        
        <div class="frase-traduccion" onclick="traducir(this, 'Dice que el euskera es muy antiguo')">
            <span class="caja-gramatical caja-sus" onclick="simplificar(this, 'HORI', event)">
                Euskara oso zaharra dela
            </span> dio.
        </div>
    `
    },
    {
        id: "anidado-pro",
        titulo: "📄 Análisis por capas",
        texto: `
        <div class="caja-gramatical caja-sus" onclick="simplificar(this, 'ESO', event)" style="padding:20px;">
            <!-- La frase está DENTRO de la caja -->
            <span class="frase-traduccion" onclick="traducir(this, 'Que vengas mañana', event)">
                Bihar etortzea
            </span>
        </div>
        <p>Toca el borde de la caja para ver su función (ESO) o el texto para ver su traducción.</p>
    `
    },
    {
        id: "completivas-intro",
        titulo: "📄 Las Completivas (ESO)",
        texto: `
        <p>Traduce estas frases para ver la diferencia entre la afirmación y la duda:</p>
        
        <div class="bloque-ejemplos">
            <span class="frase-traduccion" onclick="traducir(this, 'Sé que es verdad')">Egia dela badakit.</span>
            <br>
            <span class="frase-traduccion" onclick="traducir(this, 'No creo que sea verdad')">Ez dut uste egia denik.</span>
        </div>

        <p>Fíjate que en ambos casos, lo resaltado funciona como un sustantivo:</p>
        <div>
            Pienso <span class="caja-gramatical caja-sus" onclick="simplificar(this, 'HORI', event)">egia dela</span>.
        </div>
    `
    },
    {
        id: "ejemplo-limpio",
        titulo: "📄 Ejemplo de Lectura",
        texto: `
        <p>Prueba el nuevo diseño táctil:</p>
        <p><span class="frase-traduccion" onclick="traducir(this, '¿Cómo estás?')">Zer moduz zaude?</span></p>
    `
    },
    {
        id: "ayuda-vacio",
        titulo: "⚠️ ¡Libro vacío!",
        texto: `
                <p>Parece que todavía no has añadido temas a tu <b>data.js</b>.</p>
                <div style="background:#fff3cd; padding:15px; border-radius:8px; border:1px solid #ffeeba;">
                    <h3>Guía rápida de sintaxis:</h3>
                    <ul>
                        <li><b>Caja gramatical:</b> <code>&lt;span class="caja-gramatical caja-sus" onclick="simplificar(this, 'ESO', event)"&gt;Tu texto&lt;/span&gt;</code></li>
                        <li><b>Traducción:</b> <code>&lt;span class="frase-traduccion" onclick="traducir(this, 'Traducción')&gt;Tu frase&lt;/span&gt;</code></li>
                        <li><b>Ejercicios:</b> Añade <code>[EX:id_ejercicio]</code> en el texto.</li>
                    </ul>
                </div>
            `
    },
    {
        id: "oraciones-compuestas",
        titulo: "📁 Oraciones Compuestas (Perpaus Elkartuak)",
        hijos: [
            {
                id: "compuestas-concepto",
                titulo: "📄 1. ¿Qué es una oración compuesta?",
                texto: `
                <p>Las oraciones compuestas (<i>perpaus elkartuak</i>) son las que se forman por la unión de dos o más sintagmas o proposiciones (<i>juntagaiak</i>).</p>
                <p>Esta unión puede realizarse de tres formas diferentes que exploraremos en este capítulo:</p>
                <ul>
                    <li><b>Yuxtaposición</b> (Alborakuntza)</li>
                    <li><b>Coordinación</b> (Juntadura)</li>
                    <li><b>Subordinación</b> (Menderakuntza)</li>
                </ul>
                <p><small><i>Toca las frases para ver la traducción.</i></small></p>
                [EX:bat_comp_1]
            `,
                ejercicios: [
                    {
                        id: "bat_comp_1",
                        pregunta: "¿Cómo se llama la unión de dos proposiciones?",
                        tipo: "choice",
                        frase: "La unión forma una oración ___",
                        opciones: ["Simple", "Compuesta", "Sintagma"],
                        correcta: "Compuesta"
                    }
                ]
            },
            {
                id: "compuestas-yuxtaposicion",
                titulo: "📄 2. Yuxtaposición (Alborakuntza)",
                texto: `
                <p>Se produce cuando unimos proposiciones independientes directamente, sin nexos, usando solo signos de puntuación (, ; .).</p>
                <p>Aunque no tengan nexo, existen relaciones de significado entre ellas:</p>
                
                <div class="bloque-ejemplos">
                    <b>• Adición (Suma):</b><br>
                    <span class="frase-traduccion" onclick="traducir(this, 'Sube, baja, no se está quieta')">Gora behera egiten da, ez da geldirik egoten.</span><br><br>
                    
                    <b>• Sucesión temporal:</b><br>
                    <span class="frase-traduccion" onclick="traducir(this, 'Ahora quiere un videojuego; pronto le aburrirá')">Orain bideojoko berri bat nahi du; laster aspertu egingo du.</span><br><br>

                    <b>• Contraposición:</b><br>
                    <span class="frase-traduccion" onclick="traducir(this, 'Aita se ha ido a trabajar; yo me quedo en casa estudiando')">Aita lanera joan da; ni etxean geratzen naiz ikasten.</span><br><br>

                    <b>• Consecuencia:</b><br>
                    <span class="frase-traduccion" onclick="traducir(this, 'Ha aprobado todos los exámenes; ha estudiado')">Etsamina guztiak aprobatu ditu; ikasi egin du.</span>
                </div>

                <p>⚠️ <b>Atención:</b> Debe haber conexión lógica. No es yuxtaposición decir: <br>
                <span class="frase-traduccion" onclick="traducir(this, 'Va a casa; manzanas traigo')">Etxera doa; sagarrak dakartzat.</span></p>
                
                [EX:bat_yuxta_1]
                [EX:bat_yuxta_2]
                [EX:bat_yuxta_3]
            `,
                ejercicios: [
                    {
                        id: "bat_yuxta_1",
                        pregunta: "¿Qué tipo de relación hay aquí?",
                        tipo: "choice",
                        // 1. Usamos el hueco ___ para que el motor funcione
                        // 2. Quitamos el span de traducción de aquí dentro
                        frase: "Aita lanera joan da; ni hemen nago. ( ___ )",
                        opciones: ["Suma", "Contraposición", "Consecuencia"],
                        correcta: "Contraposición",
                        // 3. Ponemos la traducción en la ayuda
                        ayuda: "Traducción: Papá ha ido a trabajar; yo aquí estoy."
                    },
                    {
                        id: "bat_yuxta_2",
                        pregunta: "Ordena la famosa frase de Julio César (Vine, vi, vencí):",
                        tipo: "sort",
                        fraseCorrecta: "Etorri egin nintzen ikusi egin nuen irabazi egin nuen",
                        ayuda: "En euskera: Etorri (Vine), ikusi (vi), irabazi (vencí)"
                    },
                    {
                        id: "bat_yuxta_3",
                        pregunta: "¿Qué relación lógica ves?",
                        tipo: "choice",
                        frase: "Etsamina guztiak aprobatu ditu; ikasi egin du. ( ___ )",
                        opciones: ["Adición", "Contraposición", "Consecuencia"],
                        correcta: "Consecuencia",
                        ayuda: "(Ha aprobado todos los exámenes; Ha estudiado) \n Pista: Ha aprobado PORQUE ha estudiado." // <--- Traducción + Explicación
                    }
                ]
            },
            {
                id: "compuestas-coordinacion",
                titulo: "📄 3. Coordinación (Juntadura)",
                texto: `
                <p>Unimos proposiciones 
                    <span class="caja-gramatical caja-adv caja-simplificada" 
                        data-orig="independientes: cada frase tiene sentido por sí sola, no necesita una de la otra para entenderse completamente, aunque juntas suman más información" 
                        onclick="simplificar(this, 'independientes')">
                            independientes
                    </span>
                     mediante una <b>conjunción coordinante</b>. Cada oración sigue teniendo sentido pleno por separado.</p>
                
                <h3>Tipos de Coordinadas:</h3>
                <ul>
                    <li><b>Copulativas (ETA):</b> <span class="caja-gramatical caja-adv caja-simplificada" 
                                  data-orig="Suma: Cada proposición suma o acumula nueva información <br>(esto Y esto otro Y ...)" 
                                  onclick="simplificar(this, 'Suma')">Suma</span>. <br>
                    <span class="frase-traduccion" onclick="traducir(this, 'Ana está en la cocina y ama se ha ido al bar')">Ana sukaldean dago eta ama tabernara joan da.</span></li>
                    
                    <li><b>Disyuntivas (EDO, ALA...):</b> <span class="caja-gramatical caja-adv caja-simplificada" 
                                  data-orig="Opción: Cada frase expone una opción y de entre todas las opciones se puede elegir una <br>(esto O esto otro O ...)" 
                                  onclick="simplificar(this, 'Opción')">Opción</span>.<br>
                    <span class="frase-traduccion" onclick="traducir(this, 'Ir al cine o llamar a algún amigo')">Joan zinemara edo deitu lagunen bati.</span></li>
                    
                    <li><b>Adversativas (BAINA, BAIZIK...):</b> <span class="caja-gramatical caja-adv caja-simplificada" 
                                  data-orig="Limitación: Indican contraposición al expresar una de las proposiciones una limitación de lo que dice la otra.<br> (es sabroso PERO no es sano. etc)" 
                                  onclick="simplificar(this, 'Limitación')">Limitación</span>.<br>
                    <span class="frase-traduccion" onclick="traducir(this, 'Me gusta mucho, pero es demasiado caro')">Asko gustatzen zait, baina garestiegia da.</span></li>
                </ul>
                
                [EX:bat_coord_1]
            `,
                ejercicios: [
                    {
                        id: "bat_coord_1",
                        pregunta: "Clasifica el nexo:",
                        tipo: "drag",
                        items: [
                            { t: "ETA (Y)", c: "COPULATIVA" },
                            { t: "EDO (O)", c: "DISYUNTIVA" },
                            { t: "BAINA (Pero)", c: "ADVERSATIVA" },
                            { t: "ALA (O - preguntas)", c: "DISYUNTIVA" }
                        ]
                    },
                    {
                        id: "bat_coord_2",
                        pregunta: "Completa con el nexo 'pero':",
                        tipo: "input",
                        frase: "Polita da, ___ garestia.",
                        ayuda: "Empieza por bai...",
                        correcta: "baina"
                    }
                ]
            },
            {
                id: "compuestas-subordinacion",
                titulo: "📄 4. Subordinación (Menderakuntza)",
                texto: `
                <p>Una oración (<b>subordinada</b>) se inserta dentro de otra de mayor importancia (<b>principal</b>).</p>
                <p>Se realiza añadiendo un <b>sufijo subordinante</b> al verbo de la subordinada.</p>

                <div class="bloque-ejemplos">
                    <span class="frase-traduccion" onclick="traducir(this, 'Aita ha dicho en la escuela que estoy enfermo en casa')">
                    Aitak ni etxean gaixorik nagoela esan du eskolan.
                    </span>
                </div>

                <p>Analicemos las piezas:<br>
                • <b>Principal:</b> Aitak esan du eskolan.<br>
                • <b>Subordinada:</b> Ni etxean gaixorik nago.<br>
                • <b>Sufijo:</b> <span class="caja-gramatical caja-sus" onclick="simplificar(this, 'ESO', event)">-(e)la</span> (que...).</p>

                [EX:bat_sub_mapa1]
                
            `,
                ejercicios: [
                    {
                        id: "bat_sub_mapa1",
                        pregunta: "¿A qué tipo pertenece cada ejemplo?",
                        tipo: "drag",
                        items: [
                            { t: "Uste dut... (Creo que...)", c: "COMPLETIVA" },
                            { t: "Nahi duelako... (Porque quiere)", c: "CAUSAL" },
                            { t: "Ohea egiten ez baduzu... (Si no haces la cama)", c: "CONDICIONAL" }
                        ]
                    },
                    {
                        id: "bat_sub_mapa2",
                        pregunta: "¿A qué tipo pertenece?",
                        tipo: "choice",
                        frase: "Etorri den neska. ___ ",
                        opciones: ["Completiva", "Casual", "Relativo", "condicional"],
                        correcta: "Relativo",
                        ayuda: "La chica que ha venido.\n(La chica ESA, la chica LA CUAL ha venido)"
                    },
                    {
                        id: "bat_sub_sort",
                        pregunta: "Ordena: 'Voy a comprar el pan' (Final)",
                        tipo: "sort",
                        fraseCorrecta: "Ogia erostera noa",
                        ayuda: "Ogia (pan) + erostera (a comprar) + noa (voy)"
                    }
                ]
            },
            {
                id: "subordinadas-mapa-general",
                titulo: "📄 5. Mapa de las Subordinadas",
                texto: `
        <p>En la subordinación (<i>menderakuntza</i>), una frase se pone al servicio de otra. Toca cada tipo para <b>revelar su explicación técnica</b>:</p>

        <div class="bloque-subordinadas" style="display: flex; flex-direction: column; gap: 12px;">
            
            <!-- 1. COMPLETIVAS -->
            <div>
                <b>1. <span class="caja-gramatical caja-sus" onclick="simplificar(this, 'Osagarriak (Completivas): Funcionan como el objeto directo (la caja del ESO). Ejemplo: Uste dut...', event)">Osagarriak</span></b><br>
                <span class="frase-traduccion" onclick="traducir(this, 'Creo que está trabajando')">Uste dut lanean ari dela.</span>
            </div>

            <!-- 2. INTERROGATIVAS INDIRECTAS -->
            <div>
                <b>2. <span class="caja-gramatical caja-sus" onclick="simplificar(this, 'Zehar-galderak (Interrogativas directas): Preguntas insertadas en otra frase. No llevan signos de interrogación. La pregunta se sobreentiende aunque no se hace como tal. Ejemplo: Dice A VER SI vendrás. la pregunta directa es: ¿vendrá?', event)">Zehar-galderak</span></b><br>
                <span class="frase-traduccion" onclick="traducir(this, 'No sabemos dónde están')">Ez dakigu non dauden.</span>
            </div>

            <!-- 3. FINALES -->
            <div>
                <b>3. <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Helburuzkoak (Finales): Indican el objetivo o el PARA QUÉ de la acción.', event)">Helburuzkoak</span></b><br>
                <span class="frase-traduccion" onclick="traducir(this, 'Voy a comprar el pan')">Ogia erostera noa.</span>
            </div>

            <!-- 4. CAUSALES -->
            <div>
                <b>4. <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Kausazkoak (Causativas): Explican el motivo o el PORQUÉ (Nexo -(e)lako).', event)">Kausazkoak</span></b><br>
                <span class="frase-traduccion" onclick="traducir(this, 'No lo ha hecho porque no ha querido')">Nahi ez duelako ez du egin.</span>
            </div>

            <!-- 5. CONDICIONALES -->
            <div>
                <b>5. <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Baldintzazkoak (Condicionales): Establecen una condición indispensable (SI...). Nexo BA-.', event)">Baldintzazkoak</span></b><br>
                <span class="frase-traduccion" onclick="traducir(this, 'Si no haces la cama, no saldrás de casa')">Ohea egiten ez baduzu, ez zara etxetik irtengo.</span>
            </div>

            <!-- 6. RELATIVO -->
            <div>
                <b>6. <span class="caja-gramatical caja-adj" onclick="simplificar(this, 'Erlatibozkoak (De relativo): Funcionan como un adjetivo (la caja del ESE). Nexo -(e)n.', event)">Erlatibozkoak</span></b><br>
                <span class="frase-traduccion" onclick="traducir(this, 'La chica que ha venido es de Basauri')">Etorri den neska Basaurikoa da.</span>
            </div>

            <!-- 7. TEMPORALES -->
            <div>
                <b>7. <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Denborazkoak (Temporales): Sitúan la acción en el tiempo (antes, durante, después).', event)">Denborazkoak</span></b><br>
                <span class="frase-traduccion" onclick="traducir(this, 'Después de cenar fuimos a casa')">Afaldu eta gero etxera joan ginen.</span>
            </div>

            <!-- 8. CONCESIVAS -->
            <div>
                <b>8. <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Kontzesiboak (Concesivas): Indican una dificultad que no impide la acción (A pesar de...).', event)">Kontzesiboak</span></b><br>
                <span class="frase-traduccion" onclick="traducir(this, 'A pesar de llover, quieren ir a la playa')">Nahiz eta euria egin, hondartzara joan nahi dute.</span>
            </div>

            <!-- 9. MODALES -->
            <div>
                <b>9. <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Moduzkoak (Modales): Explican la MANERA o el modo (Como...). Nexo -(e)n bezala.', event)">Moduzkoak</span></b><br>
                <span class="frase-traduccion" onclick="traducir(this, 'Lo hemos hecho como hemos podido')">Ahal izan dugun bezala egin dugu.</span>
            </div>

            <!-- 10. COMPARATIVAS -->
            <div>
                <b>10. <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Konparaziozkoak (Comparativas): Comparan dos elementos (más que, menos que, igual que).', event)">Konparaziozkoak</span></b><br>
                <span class="frase-traduccion" onclick="traducir(this, 'Unai es más alto que Leire')">Unai Leire baino altuagoa da.</span>
            </div>

            <!-- 11. CONSECUTIVAS -->
            <div>
                <b>11. <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Ondoriozkoak (Consecutivas): Indican la consecuencia (Tan... que...). Nexo hain... non...', event)">Ondoriozkoak</span></b><br>
                <span class="frase-traduccion" onclick="traducir(this, 'Es tan vergonzosa que no se atreve a nada')">Hain lotsatia da, non ez den ezertara ausartzen.</span>
            </div>
        </div>

        <p style="margin-top:25px;"><i>¿Dudas con algún nexo? Prueba la batería de ejercicios de abajo.</i></p>
        
        [EX:bat_mapa_1]
    `,
                ejercicios: [
                    {
                        id: "bat_mapa_1",
                        pregunta: "¿A qué categoría pertenece este nexo?",
                        tipo: "choice",
                        frase: "Uste dut etorriko ___ ",
                        opciones: ["Completiva", "Causal", "Condicional", "Relativo"],
                        correcta: "Completiva",
                        ayuda: "Nexo: -dela (que...). Es la caja del ESO."
                    },
                    {
                        id: "bat_mapa_2",
                        pregunta: "¿A qué categoría pertenece este nexo?",
                        tipo: "choice",
                        frase: "Etorri den mutila  ___ ",
                        opciones: ["Completiva", "Causal", "Condicional", "Relativo"],
                        correcta: "Relativo",
                        ayuda: "Nexo: -den (que...). Es la caja del ESE."
                    },
                    {
                        id: "bat_mapa_3",
                        pregunta: "¿A qué categoría pertenece este nexo?",
                        tipo: "choice",
                        frase: "badator, pozik jarriko naiz  ___ ",
                        opciones: ["Completiva", "Causal", "Condicional", "Relativo"],
                        correcta: "Condicional",
                        ayuda: "Nexo: Ba- (Si...). Indica una condición."
                    },
                    {
                        id: "bat_mapa_4",
                        pregunta: "¿A qué categoría pertenece este nexo?",
                        tipo: "choice",
                        frase: "Gose delako etorri da  ___ ",
                        opciones: ["Completiva", "Causal", "Condicional", "Relativo"],
                        correcta: "Causal",
                        ayuda: "Nexo: -delako (porque...). Indica el motivo."
                    }
                ]
            },
            {
                id: "los-nexos-gramaticales",
                titulo: "📄 6. Los Nexos Gramaticales",
                texto: `
        <p>Un nexo es una partícula que une palabras, sintagmas u oraciones. En euskera, un mismo nexo (como <b>"eta"</b>) puede tener diferentes "superpoderes" dependiendo de lo que una:</p>

        <div class="bloque-ejemplos">
            <b>1. Unir palabras:</b><br>
            <span class="frase-traduccion" onclick="traducir(this, 'Jon y Bego han venido')">Jon eta Bego etorri dira.</span><br><br>
            
            <b>2. Unir sintagmas nominales:</b><br>
            <span class="frase-traduccion" onclick="traducir(this, 'El padre de Jon y la madre de Bego han venido')">Jonen aita eta Begoren ama etorri dira.</span><br><br>
            
            <b>3. Unir oraciones completas:</b><br>
            <span class="frase-traduccion" onclick="traducir(this, 'Jon se ha ido a trabajar y Bego se ha quedado en casa')">Jon lanera joan da eta Bego etxean geratu da.</span>
        </div>

        <h3 style="margin-top:20px;">Jerarquía de los Nexos</h3>
        <p>Toca para ver la diferencia clave:</p>
        <ul>
            <li>
                <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Juntagailua: Une elementos del mismo nivel (Coordinación). Ambas oraciones son independientes.', event)">Juntagailua</span>
            </li>
            <li>
                <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Menderagailua: Une una oración principal con una subordinada (Subordinación). Una depende de la otra.', event)">Menderagailua</span>
            </li>
        </ul>

        <h3>Más allá de la frase: El Orden del Texto</h3>
        <p>Para que un texto no sea una selva de frases sueltas, usamos herramientas de organización superior:</p>
        <div class="bloque-subordinadas">
            <p><b>• <span class="caja-gramatical caja-adj" onclick="simplificar(this, 'Lokailuak: Conectores que dan coherencia y sentido al enlazar las frases del texto.', event)">Lokailuak</span></b> (Conectores textuales)</p>
            <p><b>• <span class="caja-gramatical caja-adj" onclick="simplificar(this, 'Antolatzaileak: Palabras que estructuran el texto de forma ordenada y delimitan temas.', event)">Antolatzaileak</span></b> (Organizadores textuales)</p>
        </div>

        <p><i>¿Sabrías distinguir qué función cumple "eta" en cada caso? Pruébalo aquí abajo.</i></p>
        [EX:bat_nexos_drag]
        
    `,
                ejercicios: [
                    {
                        id: "bat_nexos_drag",
                        pregunta: "Clasifica la función de 'ETA':",
                        tipo: "drag",
                        items: [
                            { t: "Jon eta Bego", c: "Une Palabras" },
                            { t: "Jonen aita eta Begoren ama", c: "Une Sintagmas" },
                            { t: "Jon joan da eta Bego geratu da", c: "Une Oraciones" }
                        ]
                    },
                    {
                        id: "bat_nexos_input",
                        pregunta: "¿Cómo se llama el nexo que une una principal con una subordinada?",
                        tipo: "input",
                        frase: "Se llama ___.",
                        ayuda: "Empieza por mende...",
                        correcta: "menderagailua"
                    }
                ]
            }


        ]
    }





];
