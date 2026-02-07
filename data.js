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
    }
];
