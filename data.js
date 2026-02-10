const libroData = [
    {
        id: "oraciones-compuestas",
        titulo: "📁 Oraciones Compuestas (Perpaus Elkartuak)",
        hijos: [
            {
                id: "compuestas-concepto",
                titulo: "📄 1. ¿Qué es una oración compuesta?",
                texto: `
                <p>Las oraciones compuestas (<i>perpaus elkartuak</i>) son las que se forman por la unión de dos o más sintagmas o proposiciones (<i>juntagaiak</i>).</p>
                <p>Esta unión puede realizarse de tres formas diferentes:</p>
                <ul>
                    <li><b>Yuxtaposición</b> (Alborakuntza)</li>
                    <li><b>Coordinación</b> (Juntadura)</li>
                    <li><b>Subordinación</b> (Menderakuntza)</li>
                </ul>
                <p><small><i>Toca las frases para ver la traducción.</i></small></p>
                [BATERIA:0]
            `,
                ejercicios: [
                    [ // GRUPO 0: Introducción
                        {
                            id: "bat_comp_1",
                            pregunta: "¿Cómo se llama la unión de dos proposiciones?",
                            tipo: "choice",
                            frase: "La unión forma una oración ___",
                            opciones: ["Simple", "Compuesta", "Sintagma"],
                            correcta: "Compuesta"
                        }
                    ]
                ]
            },
            {
                id: "compuestas-yuxtaposicion",
                titulo: "📄 2. Yuxtaposición (Alborakuntza)",
                texto: `
                <p>Se produce cuando unimos proposiciones independientes directamente, sin nexos, usando solo puntuación.</p>
                
                <div class="bloque-ejemplos">
                    <b>• Adición:</b> <span class="frase-traduccion" onclick="traducir(this, 'Sube, baja, no se está quieta')">Gora behera egiten da, ez da geldirik egoten.</span><br>
                    <b>• Contraposición:</b> <span class="frase-traduccion" onclick="traducir(this, 'Papá se ha ido; yo me quedo')">Aita lanera joan da; ni etxean geratzen naiz.</span>
                </div>

                <p>Pon a prueba tu lógica con esta batería:</p>
                [BATERIA:0]
            `,
                ejercicios: [
                    [ // GRUPO 0: Práctica de yuxtaposición
                        {
                            id: "bat_yuxta_1",
                            pregunta: "¿Qué tipo de relación hay aquí?",
                            tipo: "choice",
                            frase: "Aita lanera joan da; ni hemen nago. ( ___ )",
                            opciones: ["Suma", "Contraposición", "Consecuencia"],
                            correcta: "Contraposición",
                            ayuda: "Traducción: Papá ha ido a trabajar; yo aquí estoy."
                        },
                        {
                            id: "bat_yuxta_2",
                            pregunta: "Ordena la frase de Julio César:",
                            tipo: "sort",
                            fraseCorrecta: "Etorri egin nintzen ikusi egin nuen irabazi egin nuen",
                            ayuda: "Veni, vidi, vici"
                        },
                        {
                            id: "bat_yuxta_3",
                            pregunta: "¿Qué relación lógica ves?",
                            tipo: "choice",
                            frase: "Etsamina guztiak aprobatu ditu; ikasi egin du. ( ___ )",
                            opciones: ["Adición", "Contraposición", "Consecuencia"],
                            correcta: "Consecuencia",
                            ayuda: "Ha aprobado PORQUE ha estudiado."
                        }
                    ]
                ]
            },
            {
                id: "compuestas-coordinacion",
                titulo: "📄 3. Coordinación (Juntadura)",
                texto: `
                <p>Unimos proposiciones 
                    <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'independientes: cada frase tiene sentido por sí sola', event)">independientes</span>
                     mediante una conjunción coordinante.</p>
                
                <h3>Tipos de Coordinadas:</h3>
                <ul>
                    <li><b>Copulativas (ETA):</b> <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Suma: Una frase Y otra', event)">Suma</span></li>
                    <li><b>Disyuntivas (EDO):</b> <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Opción: Una frase O otra', event)">Opción</span></li>
                    <li><b>Adversativas (BAINA):</b> <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Limitación: PERO...', event)">Limitación</span></li>
                </ul>
                
                [BATERIA:0]
            `,
                ejercicios: [
                    [ // GRUPO 0: Clasificación de nexos
                        {
                            id: "bat_coord_1",
                            pregunta: "Clasifica el nexo:",
                            tipo: "drag",
                            items: [
                                { t: "ETA (Y)", c: "COPULATIVA" },
                                { t: "EDO (O)", c: "DISYUNTIVA" },
                                { t: "BAINA (Pero)", c: "ADVERSATIVA" }
                            ]
                        }
                    ]
                ]
            },
            {
                id: "compuestas-subordinacion",
                titulo: "📄 4. Subordinación (Menderakuntza)",
                texto: `
        <p>Una oración (<b>subordinada</b>) se inserta dentro de otra de mayor importancia (<b>principal</b>).</p>
        <p>Toca para ver el análisis técnico:</p>
        
        <div class="bloque-subordinadas">
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Menderagailua: Es el sufijo que añadimos al verbo de la frase pequeña para conectarla.', event)">Menderagailua</span></p>
        </div>

        <div class="bloque-ejemplos">
            <b>Ejemplo analizado:</b><br>
            <span class="frase-traduccion" onclick="traducir(this, 'Aita ha dicho en la escuela que estoy enfermo en casa')">Aitak ni etxean gaixorik nagoela esan du eskolan.</span>
        </div>

        <p>En este caso:<br>
        1. Frase principal: <i>Aitak esan du eskolan.</i><br>
        2. Frase subordinada: <i>Ni etxean gaixorik nago.</i><br>
        3. Nexo: <b>-(e)la</b> (que).</p>

        [BATERIA:0]
    `,
                ejercicios: [
                    [ // GRUPO 0: Análisis de subordinación
                        {
                            id: "sub_id_1",
                            pregunta: "¿Cómo se llama el nexo en la subordinación?",
                            tipo: "choice",
                            frase: "Se llama ___ ",
                            opciones: ["Juntagailua", "Menderagailua", "Lokailua"],
                            correcta: "Menderagailua",
                            ayuda: "Pista: El nexo 'domina' o hace que la frase sea 'mendeko'."
                        }
                    ]
                ]
            },
            {
                id: "subordinadas-mapa-general",
                titulo: "📄 5. Mapa de las Subordinadas",
                texto: `
        <p>Toca cada tipo para <b>revelar su función</b> antes de pasar a estudiarlas a fondo:</p>
        <div class="bloque-subordinadas" style="display: flex; flex-direction: column; gap: 10px;">
            <div><b>1. <span class="caja-gramatical caja-sus" onclick="simplificar(this, 'Completivas: Funcionan como el objeto directo (la caja del ESO).', event)">Osagarriak</span></b></div>
            <div><b>2. <span class="caja-gramatical caja-sus" onclick="simplificar(this, 'Interrogativas indirectas: Preguntas insertadas en otra frase. No llevan signos de interrogación.', event)">Zehar-galderak</span></b></div>
            <div><b>3. <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Finales: Indican el objetivo o para qué se hace la acción.', event)">Helburuzkoak</span></b></div>
            <div><b>4. <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Causales: Explican el motivo o el porqué.', event)">Kausazkoak</span></b></div>
            <div><b>5. <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Condicionales: Establecen una condición (Si...).', event)">Baldintzazkoak</span></b></div>
            <div><b>6. <span class="caja-gramatical caja-adj" onclick="simplificar(this, 'Relativo: Funcionan como un adjetivo para describir algo (la caja del ESE).', event)">Erlatibozkoak</span></b></div>
        </div>
        <p><i>Y muchas más: Temporales, Concesivas, Modales, Comparativas...</i></p>
        [BATERIA:0]
    `,
                ejercicios: [
                    [ // GRUPO 0: Batería de identificación
                        {
                            id: "mapa_1",
                            pregunta: "¿Qué caja es la de Relativo?",
                            tipo: "choice",
                            frase: "Es la caja del ___ ",
                            opciones: ["ESO", "ESE", "ENTONCES"],
                            correcta: "ESE",
                            ayuda: "Relativo = Adjetiva. Describe al sustantivo."
                        }
                    ]
                ]
            },
            {
                id: "los-nexos-gramaticales",
                titulo: "📄 6. Nexos, Lokailuak y Antolatzaileak",
                texto: `
        <p>Un nexo puede unir palabras, sintagmas u oraciones. Mira el caso de <b>"eta"</b>:</p>
        <ul>
            <li><span class="frase-traduccion" onclick="traducir(this, 'Jon y Bego')">Jon eta Bego</span> (Palabras)</li>
            <li><span class="frase-traduccion" onclick="traducir(this, 'El padre de Jon y la madre de Bego')">Jonen aita eta Begoren ama</span> (Sintagmas)</li>
        </ul>
        <p>Además de nexos, usamos herramientas para organizar el texto:</p>
        <div class="bloque-ejemplos">
            <p><b>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Lokailuak: Conectores que dan sentido enlazando las frases del texto.', event)">Lokailuak</span></b></p>
            <p><b>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Antolatzaileak: Estructuran el texto de forma ordenada.', event)">Antolatzaileak</span></b></p>
        </div>
        [BATERIA:0]
    `,
                ejercicios: [
                    [ // GRUPO 0: Terminología final
                        {
                            id: "nexos_input",
                            pregunta: "¿Cómo se llaman los organizadores de texto?",
                            tipo: "input",
                            frase: "Se llaman ___.",
                            correcta: "antolatzaileak",
                            ayuda: "Empieza por anto..."
                        }
                    ]
                ]
            },
            {
                id: "oraciones-yuxtapuestas",
                titulo: "📁 Oraciones yuxtapuestas",
                hijos: [
                    {
                        id: "yuxtaposicion-repetitiva-completo-1",
                        titulo: "📄 Yuxtaposición Repetitiva: Copulativas",
                        texto: `
        <p>En este tipo de unión, repetimos elementos para sumar ideas. Aquí tienes los modelos:</p>

        <h3>1. Ez..., ez... (Ni..., ni...)</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Ni trabaja, ni deja trabajar a los demás')"><b>Ez</b> du lanik egiten, <b>ez</b> besteoi lan egiten uzten.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Por ahora ni me he duchado, ni vestido, ni he desayunado')">Oraindik <b>ez</b> naiz <b>ez</b> dutxatu, <b>ez</b> jantzi, <b>ez</b> gosaldu ere egiten.</span></p>
        </div>

        <h3>2. Bai..., bai... (Tanto... como...)</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Tanto en la escuela, como en casa suele ser muy formal')"><b>Bai</b> ikastolan, <b>bai</b> etxean oso zintzoa izaten da.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Es verdad tanto lo que yo he dicho, como lo que ha dicho ese')">Egia da <b>bai</b> nik esan dudana, <b>bai</b> horrek esan duena.</span></p>
        </div>

        <h3>3. ...la, ...la (Ya sea..., ya sea...)</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Ya sea esto, ya se eso, ya sea lo otro, siempre hay algo que hacer')">Hau de<b>la</b>, hori de<b>la</b>, bestea de<b>la</b>, beti dago zerbait egiteko.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Ya sea la casa, ya sea el trabajo, ya sean las compras, estoy desbordado')">Etxea de<b>la</b>, lana de<b>la</b>, erosketak dire<b>la</b>, gainezka nago egun osoan.</span></p>
        </div>

        [BATERIA:0]

        <h3>4. Nahiz / Zein / Hala... nola</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Puedes venir tanto de día como de noche')">Nahi duzunean etor zaitezke: <b>nahiz</b> egunez, <b>nahiz</b> gauez.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Le da exactamente igual ir hoy, mañana o pasado mañana')"><b>Nahiz</b> gaur, <b>nahiz</b> bihar, <b>nahiz</b> etzi joan, berdin-berdin dio.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Bien este, bien el otro, son exactamente iguales')"><b>Zein</b> hau, <b>zein</b> bestea, berdin-berdinak dira.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Tanto la tuya como la mía están mal')"><b>Hala</b> zurea, <b>nola</b> nirea, biak daude txarto.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Les atacaron tanto por tierra como por aire')"><b>Hala</b> lurretik, <b>nola</b> haizetik eraso zieten.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Todos los ciudadanos, tanto hombres como mujeres, se reunieron allí')">Herritar guztiak, <b>nola</b> gizon <b>hala</b> emakume, hara bildu ziren.</span></p>
        </div>

        <h3>5. Nor / Nork / Aldizka</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Unos a pie, otros en coche, otros en autobús, todos vinieron')"><b>Nor</b> oinez, <b>nor</b> autoz, <b>nor</b> autobusez, denak etorri ziren.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Unos en casa, otros en el campo, aquí todos ayudamos')"><b>Nork</b> etxean, <b>nork</b> soroan, hemen denok laguntzen dugu.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Unas veces en casa, otras en la oficina, mete muchas horas')"><b>Aldiz</b> etxean, <b>aldiz</b> bulegoan, hainbat ordu sartu ditu.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'A veces andando, a veces corriendo, llegamos hasta muy arriba')"><b>Aldizka</b> ibilian, <b>aldizka</b> korrika, gora-goraino heldu ginen.</span></p>
        </div>

        [BATERIA:1]
    `,
                        ejercicios: [
                            [ // BATERIA 0
                                {
                                    id: "rep_la_completo",
                                    pregunta: "Completa con el nexo de enumeración:",
                                    tipo: "input",
                                    frase: "Etxea dela, lana dela, erosketak dire___",
                                    correcta: "la",
                                    ayuda: "Estructura: ...la, ...la, ...la"
                                },
                                {
                                    id: "rep_nahiz_completo",
                                    pregunta: "¿Cómo se dice 'tanto de día como de noche'?",
                                    tipo: "sort",
                                    fraseCorrecta: "Nahiz egunez nahiz gauez",
                                    ayuda: "Nahiz + A + nahiz + B (fíjate bien: una está en mayúscula)"
                                }
                            ],
                            [ // BATERIA 1
                                {
                                    id: "rep_nola_hala",
                                    pregunta: "Completa la comparación: Tanto hombre como mujer",
                                    tipo: "input",
                                    frase: "Nola gizon ___ emakume.",
                                    correcta: "hala",
                                    ayuda: "Usa: nola... hala..."
                                },
                                {
                                    id: "rep_nor_choice",
                                    pregunta: "Si unos vienen en coche y otros a pie:",
                                    tipo: "choice",
                                    frase: "___ oinez, nor autoz... ",
                                    opciones: ["Nor", "Edo", "Baina"],
                                    correcta: "Nor"
                                }
                            ]
                        ]
                    },
                    {
                        id: "yuxtaposicion-repetitiva-completo-2",
                        titulo: "📄 Yuxtaposición Repetitiva: No solo... sino...",
                        texto: `
        <h3>1. No solo..., sino también... (...ez ezik, ...ere...)</h3>
        <p>Esta estructura es muy común y tiene variantes según la zona (<i>ezik, ezen, eze</i>):</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'No solo estaba manchando su nombre, sino también el de toda su familia')">Bere izena <b>ez ezik</b>, familia guztiarena <b>ere</b> lohitzen ari zen.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Han venido no solo Miren, sino todos los demás')">Miren <b>ez ezik</b>, beste guztiak <b>ere</b> etorri dira.</span></p>
            <p><i>Variantes regionales (ezen/eze):</i></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'No sólo te apiadaste de nosotros sino también de él')">Gutaz <b>ez ezen</b> hartaz <b>ere</b> errukitu zinen.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'No sólo lo he escuchado, sino que también lo he visto')">Entzun <b>ez eze</b>, ikusi <b>ere</b> egin dut.</span></p>
        </div>

        <h3>2. No solo... (Ez bakarrik / Ez soilik)</h3>
        <p>Dependiendo de la zona, el orden de <b>bakarrik</b> cambia:</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'No solo Miren, también han venido todos los demás')"><b>Ez Miren bakarrik</b>, beste guztiak <b>ere</b> etorri dira.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'No solo lo he escuchado, también lo he visto')"><b>Ez entzun bakarrik</b>, ikusi <b>ere</b> egin dut.</span></p>
        </div>

        [BATERIA:0]

        <h3>3. Disyuntivas (Edo... edo... / Ala... ala...)</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'O entras, o sales, pero no te quedes ahí en medio')"><b>Edo</b> sartu, <b>edo</b> irten, baina ez gelditu hor erdian.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'O vienes conmigo, o con ama; no tienes otra opción')"><b>Edo</b> nirekin zatoz, <b>edo</b> amarekin; ez daukazu beste aukerarik.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'O no se ha dado cuenta, o no lo entiendo')"><b>Ala</b> ez da konturatu, <b>ala</b> ez dut ulertzen.</span></p>
        </div>

        [BATERIA:1]

        <h3>4. Adversativas (Alde batetik... bestetik...)</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Por un lado nos interesa; por otro es demasiado cara')"><b>Alde batetik</b> interesatzen zaigu; <b>bestetik</b> garestiegia da.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Por un lado no lo necesito y, por otro, es caro')"><b>Alde batetik</b> ez dut behar, eta <b>bestetik</b>, garestiegia da.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Por un lado se lo diría, pero por otro me ha dado vergüenza')"><b>Alde batetik</b> esango nioke, baina <b>bestetik</b> lotsa eman dit.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Por un lado es bonito, pero por otro demasiado pequeño')"><b>Alde batetik</b> polita da, baina <b>bestetik</b> txikiegia.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Por un lado estoy a gusto; pero, por otro lado, estoy cansado')"><b>Alde batetik</b> gustura nago; baina, <b>bestalde</b>, nekatuta nago.</span></p>
        </div>

        [BATERIA:2]
    `,
                        ejercicios: [
                            [ // BATERIA 0: Ez ezik / Bakarrik
                                {
                                    id: "rep_ezik_comp",
                                    pregunta: "Completa: No solo Miren (Miren ___ ezik...)",
                                    tipo: "input",
                                    frase: "Miren ___ ezik, besteak ere etorri dira.",
                                    correcta: "ez",
                                    ayuda: "La estructura es: ...ez ezik, ...ere"
                                },
                                {
                                    id: "rep_eze_comp",
                                    pregunta: "Variante regional: Entzun ez ___, ikusi ere egin dut.",
                                    tipo: "input",
                                    frase: "Entzun ez ___, ikusi ere egin dut.",
                                    correcta: "eze",
                                    ayuda: "Usa la variante 'eze' o 'ezen'"
                                }
                            ],
                            [ // BATERIA 1: Edo / Ala
                                {
                                    id: "rep_edo_comp",
                                    pregunta: "O entras o sales (repetitivo):",
                                    tipo: "sort",
                                    fraseCorrecta: "Edo sartu edo irten",
                                    ayuda: "Edo + Verbo + Edo + Verbo"
                                }
                            ],
                            [ // BATERIA 2: Alde batetik
                                {
                                    id: "rep_alde_comp",
                                    pregunta: "Completa: Por un lado... por otro lado...",
                                    tipo: "input",
                                    frase: "<b>Alde batetik</b> gura dut; ___ ez.",
                                    correcta: "bestetik",
                                    ayuda: "Alde batetik... bestetik / bestalde"
                                }
                            ]
                        ]
                    },
                    {
                        id: "yuxtaposicion-repetitiva-completo-3",
                        titulo: "📄 Yuxtaposición: Contrastes (Bata / Bestea)",
                        texto: `
        <p>Para contrastar sujetos u objetos usamos la pareja <b>Bat</b> y <b>Beste</b>. Fíjate en cómo cambian según la declinación:</p>

        <h3>1. Singular (Bata..., bestea...)</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Una es buena, la otra es muy mala')"><b>Bata</b> ona da, baina <b>bestea</b> oso txarra.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Uno no tiene ganas y el otro no puede')"><b>Batak</b> ez dauka gogorik eta <b>besteak</b> ezin du.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'A un amigo no le apetece y al otro no le es posible')">Lagun <b>batek</b> ez du nahi eta <b>besteak</b> ezin du.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'A uno le ha gustado, pero al otro nada en absoluto')"><b>Batari</b> gustatu zaio, baina <b>besteari</b> batere ez.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Con uno ha estado muy a gusto; con el otro, sin embargo, no se ha amoldado muy bien')"><b>Batarekin</b> oso gustura egon da; <b>bestearekin</b>, ordea, ez da oso ondo moldatu.</span></p>
        </div>

        <h3>2. Plural (Batzuk..., beste batzuk...)</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Unos son demasiado pequeños; otros, sin embargo, demasiado grandes')"><b>Batzuk</b> txikiegiak dira; <b>beste batzuk</b>, ordea, handiegiak.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Unos están muy bien; otros no están tan bien')"><b>Batzuk</b> oso ondo daude; <b>beste batzuk</b> ez daude hain ondo.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Unos han hecho poco; otros, sin embargo, de sobra')"><b>Batzuek</b> gutxi egin dute; <b>beste batzuek</b>, ordea, sobera.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'A veces es fácil; otras veces imposible')"><b>Batzuetan</b> erraza da; <b>beste batzuetan</b> ezinezkoa.</span></p>
        </div>

        [BATERIA:0]
    `,
                        ejercicios: [
                            [
                                {
                                    id: "rep_bat_1",
                                    pregunta: "Completa el caso NORK: Batak ..., ___ (el otro)",
                                    tipo: "input",
                                    frase: "Batak ez du nahi, ___ ezin du.",
                                    correcta: "besteak",
                                    ayuda: "Usa el caso NORK: beste + ak"
                                },
                                {
                                    id: "rep_bat_2",
                                    pregunta: "Caso sociativo: Con uno..., con el otro...",
                                    tipo: "sort",
                                    fraseCorrecta: "Batarekin oso gustura bestearekin ordea ez",
                                    ayuda: "Batarekin... bestearekin..."
                                }
                            ]
                        ]
                    },
                    {
                        id: "yuxtaposicion-repetitiva-completo-4",
                        titulo: "📄 Yuxtaposición: Refranes y formas genuinas",
                        texto: `
        <h3>1. Relación Causal (Nolako..., halako...)</h3>
        <p>Muy común en refranes. Se suele omitir el verbo:</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'De tal palo, tal astilla')"><b>Nolako</b> zura, <b>halako</b> ezpala.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Tal padre, tal hijo')"><b>Nolako</b> aita, <b>halako</b> semea.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Arrimarse al sol que más calienta')">Eguzkia <b>nora</b>, zapiak <b>hara</b>. / Haizea <b>nora</b>, zapiak <b>hara</b>.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Donde se empieza, allí hay que terminar')"><b>Non</b> hasi, <b>hantxe</b> amaitu behar da.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Los niños, ya sabes: lo que ven, eso aprenden')">Umeek, badakizu: <b>zer</b> ikusi, <b>hura</b> ikasi.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Los niños, ya sabes: lo que ven, eso mismo quieren')">Umeek, badakizu: <b>zer</b> ikusi, <b>huraxe</b> nahi.</span></p>
        </div>

        <h3>2. Evitando el 'Segun' y 'Depende' (Erderol)</h3>
        <p>No uses calcos del castellano. Usa los pronombres interrogativos directamente:</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Depende de quién lo haga...')"><b>Nork</b> egina den... (halako izaten da).</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Depende de para qué lo quieras...')"><b>Zertarako</b> nahi duzun.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Depende del tiempo que haga...')"><b>Nolako</b> eguraldia egiten duen...</span></p>
        </div>

        [BATERIA:0]
    `,
                        ejercicios: [
                            [
                                {
                                    id: "cau_refran_1",
                                    pregunta: "Completa: Nolako zura, ___ ezpala.",
                                    tipo: "input",
                                    frase: "Nolako zura, ___ ezpala.",
                                    correcta: "halako",
                                    ayuda: "Significa 'tal'"
                                },
                                {
                                    id: "anti_segun_final",
                                    pregunta: "¿Cómo dirías 'Depende de quién lo haga'?",
                                    tipo: "choice",
                                    frase: "___ egina den. (Sin usar 'Segun')",
                                    opciones: ["Nork", "Segun", "Depende"],
                                    correcta: "Nork",
                                    ayuda: "En euskera genuino se usa el pronombre interrogativo."
                                },
                                {
                                    id: "cau_refran_2",
                                    pregunta: "Ordena el refrán del viento:",
                                    tipo: "sort",
                                    fraseCorrecta: "Haizea nora zapiak hara",
                                    ayuda: "Viento (Haizea) + a donde (nora) + pañuelos (zapiak) + hacia allí (hara)"
                                }
                            ]
                        ]
                    },
                    {
                        id: "yuxtaposicion-practica-1",
                        titulo: "📝 Práctica: Copulativas Repetitivas",
                        texto: `
        <p>Intenta traducir mentalmente cada frase antes de pulsar para ver la respuesta. ¡Es la mejor forma de aprender!</p>

        <h3>• Estructura: Bai..., bai...</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Bai nik, bai zuek oso ondo dakigu zer egin behar den.')">Tanto yo como vosotros sabemos muy bien lo que hay que hacer.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Bai dendetan, bai botiketan saltzen dute hori.')">Eso lo venden tanto en las tiendas, como en las farmacias.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Bai eskolan, bai kanpoan euskaraz egin behar da.')">Tanto en clase, como fuera hay que hablar en euskera.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Bai hau, bai bestea amaitu behar ditugu, kosta ahala kosta.')">Tanto este, como el otro los tenemos que terminar, cueste lo que cueste.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Bai ume, bai gazte, bai zahar, han denek lan egiten zuten.')">Tanto niño, como joven, como viejo, allí todos trabajaban.</span></p>
        </div>

        <h3>• Estructura: Ez..., ez...</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Ez Jonek, ez nik ez dugu ezer esan.')">Ni Jon, ni yo hemos dicho nada.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Nik ez dut ez telefonoz deitu, ez anonimorik bidali.')">Yo ni he llamado por teléfono, ni he enviado anónimos.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Ez daukat ez dirurik, ez astirik, ez gogorik.')">No tengo ni dinero, ni tiempo libre, ni ganas.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Oraindik ez dut ez bazkaria prestatu, ez oheak egin.')">Todavía ni he preparado la comida, ni he hecho las camas.</span></p>
        </div>

        [BATERIA:0]

        <h3>• Estructura: ...la, ...la / Nahiz / Zein / Hala... nola</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Azterketak direla, kirolak direla, oso gutxitan ikusten dugu elkar.')">Que si los exámenes, que si los deportes, nos vemos muy poco.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Nahiz hau, nahiz bestea, berdin antzekoak dira.')">Bien este, bien el otro, son igual de parecidos.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Zein gaur, zein bihar, zein etzi joan, berdin-berdin dio.')">Le da exactamente igual ir hoy, mañana o pasado mañana.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Hala jantokia nola sukaldea garbi daude.')">Tanto el comedor como la cocina están limpios.</span></p>
        </div>

        [BATERIA:1]
    `,
                        ejercicios: [
                            [ // BATERIA 0: Mezcla Bai/Ez
                                {
                                    id: "prac_bai_ez_1",
                                    pregunta: "Traduce: 'Ni Jon ni yo'",
                                    tipo: "sort",
                                    fraseCorrecta: "Ez Jonek ez nik",
                                    ayuda: "Ez + Jonek (Nork) + ez + nik"
                                },
                                {
                                    id: "prac_bai_ez_2",
                                    pregunta: "Completa: Tanto en clase como fuera...",
                                    tipo: "input",
                                    frase: "<b>Bai</b> eskolan, ___ kanpoan.",
                                    correcta: "bai",
                                    ayuda: "Usa la forma repetitiva Bai... bai..."
                                }
                            ],
                            [ // BATERIA 1: Las otras formas
                                {
                                    id: "prac_la_la",
                                    pregunta: "Que si los exámenes (Azterketak dire___)",
                                    tipo: "input",
                                    frase: "Azterketak dire___, kirolak direla...",
                                    correcta: "la",
                                    ayuda: "Nexo de enumeración causal"
                                },
                                {
                                    id: "prac_zein",
                                    pregunta: "¿Cómo se dice 'Tanto hoy como mañana' con Zein?",
                                    tipo: "sort",
                                    fraseCorrecta: "Zein gaur zein bihar",
                                    ayuda: "Zein + A + zein + B"
                                }
                            ]
                        ]
                    },
                    {
                        id: "yuxtaposicion-practica-2",
                        titulo: "📝 Práctica: Ez ezik, Edo y Contrastes",
                        texto: `
        <p>Continuamos con el entrenamiento. Intenta resolver la frase en tu cabeza y luego <b>toca para comprobar</b>.</p>

        <h3>• Estructura: ...ez ezik, ...ere... (No solo..., sino...)</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Ordenagailu zoragarria ikusi ez ezik, baita erosi ere.')">No sólo ha visto un ordenador maravilloso, sino que también lo ha comprado.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Ikusi ez ezik, probatu ere egin dugu.')">No sólo lo hemos visto; también lo hemos probado.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Pentsatu ez ezik, idatzi ere egin dut.')">No sólo lo he pensado; también lo he escrito.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Idazlan on bat egiteko, ohitura ez ezik, baita astia ere.')">Para hacer una buena redacción, no sólo costumbre, sino también tiempo.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Bere izena ez ezik, familia guztiarena ere lohitzen ari zen.')">No sólo estaba manchando su nombre, sino también el de toda la familia.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Babak ez ezik, baita okela ere.')">No sólo las habas, sino también la carne.</span></p>
        </div>

        <h3>• Estructura: Edo..., edo... (O..., o...)</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Edo ez daki ezer, edo dirudien baino ergelagoa da.')">O no sabe nada, o es más tonto de lo que parece.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Edo ondo egin, edo, bestela, ez egin.')">O se hace bien, o, si no, no se hace.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Edo etxean dago, edo galdu egin zait; ez dago beste aukerarik.')">O está en casa, o se me ha perdido; no hay otra posibilidad.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Edo esan dizudana egiten duzu, edo aitari esaten diot.')">O haces lo que te he dicho, o se lo digo a aita.</span></p>
        </div>

        [BATERIA:0]

        <h3>• Contrastes: Bata / Bestea / Alde batetik</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Bi anaia dira: bata oso altua da; bestea, ordea, txiki-txikia.')">Son dos hermanos: uno es muy alto; el otro, en cambio, pequeñísimo.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Batak ez dakielako, eta besteak nahi ez duelako; egin gabe dago.')">Uno porque no sabe, y el otro porque no quiere; está sin hacer.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Alde batetik ezin dut, eta bestetik ez dut nahi.')">Por una parte no puedo, y por otra no quiero.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Alde batetik ez dut joan nahi, baina bestetik pena ematen dit.')">Por una parte no quiero ir, pero por otra me da pena.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Alde batetik gustura nago, baina bestalde nekatuta nago.')">Por una parte estoy a gusto, pero por otra estoy cansada.</span></p>
        </div>

        [BATERIA:1]
    `,
                        ejercicios: [
                            [ // BATERIA 0: Mezcla Ez ezik / Edo
                                {
                                    id: "prac_ezik_input",
                                    pregunta: "Completa: 'No solo las habas...' (Babak ___ ezik...)",
                                    tipo: "input",
                                    frase: "Babak ___ ezik, baita okela ere.",
                                    correcta: "ez",
                                    ayuda: "La estructura es 'ez ezik'"
                                },
                                {
                                    id: "prac_edo_sort",
                                    pregunta: "Ordena: 'O vienes conmigo o con ama'",
                                    tipo: "sort",
                                    fraseCorrecta: "Edo nirekin zatoz edo amarekin",
                                    ayuda: "Edo... edo..."
                                }
                            ],
                            [ // BATERIA 1: Bata / Bestea / Alde batetik
                                {
                                    id: "prac_bata_choice",
                                    pregunta: "Uno es alto, el otro pequeño:",
                                    tipo: "choice",
                                    frase: "[ --- ] oso altua da; [ --- ] ordea, txiki-txikia. ( ___ )",
                                    opciones: ["Bata / bestea", "Batetik / bestetik", "Bai / bai"],
                                    correcta: "Bata / bestea",
                                    ayuda: "Usamos el artículo (a) para contrastar sujetos concretos."
                                },
                                {
                                    id: "prac_batetik_input",
                                    pregunta: "Por un lado... por otro (bestalde):",
                                    tipo: "input",
                                    frase: "Alde batetik gustura nago, baina ___ nekatuta nago.",
                                    correcta: "bestalde",
                                    ayuda: "Puedes usar 'bestetik' o 'bestalde'."
                                }
                            ]
                        ]
                    }

                ]
            },
            {
                id: "oraciones-coordinadas",
                titulo: "📁 Oraciones coordinadas",
                hijos: [
                    {
                        id: "coordinadas-adversativas",
                        titulo: "📄  Oraciones Adversativas (Aurkaritzakoak)",
                        texto: `
        <p>Estas oraciones indican oposición u obstáculos. En euskera distinguimos dos tipos según si una frase niega a la otra o no.</p>

        <h3>1. Contrariedad sin negación (Baina)</h3>
        <p>Se usa <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Baina: Pero. Une ideas contrarias pero ambas son ciertas.', event)">baina</span> para unir oraciones, adjetivos o adverbios.</p>
        
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'No han perdido el partido, pero han jugado muy mal')">Ez dute partida galdu, <b>baina</b> oso txarto jokatu dute.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'La casa parece grande pero acogedora')">Etxea handi <b>baina</b> erosoa ematen du.</span></p>
        </div>

        <p>A veces omitimos partes de la frase o usamos el "sí/no" para contrastar:</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Tú tienes poco dinero, pero yo menos')">Zuk diru gutxi daukazu, <b>baina</b> nik gutxiago.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Tú te callaste, pero yo no')">Zu isildu zinen, <b>baina</b> ni ez.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Yo no dije nada, pero tú sí')">Nik ez nuen ezer esan, <b>baina</b> zuk bai.</span></p>
        </div>

        [BATERIA:0]

        <h3>2. Contrariedad con negación (Baizik, Baino...)</h3>
        <p>Cuando la primera frase es negativa y la segunda la "corrige" (equivalente al <b>sino</b>), usamos estas partículas:</p>
        
        <ul>
            <li><b>Baizik / Baino:</b> Se colocan al final de la frase corregida.</li>
            <li><b>Ezpada / Baizik eta:</b> Se colocan al principio.</li>
        </ul>

        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'No ha ido a casa, sino al bar')">Ez da etxera joan, tabernara <b>baizik</b>.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'No le gusta el alto, sino el bajo')">Ez zaio altua gustatzen, txikia <b>baino</b>.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'No ha ido en tren, sino que ha cogido el avión')">Ez da trenez joan, <b>ezpada</b> hegazkina hartu du.</span></p>
        </div>

        [BATERIA:1]

        <h3>3. Usos especiales de "Baina"</h3>
        <p>Cuidado, <b>baina</b> puede cambiar de función según dónde se coloque:</p>
        <ul>
            <li><b>Como conector (Lokailua):</b> Significa "en cambio" (ordea).
                <br><span class="frase-traduccion" onclick="traducir(this, 'Me dijo que sí; yo, en cambio, no le creo')">Baietz esan zidan; nik, <b>baina</b>, ez diot sinesten.</span>
            </li>
            <li><b>Como concesivo (Menderagailua):</b> Al final de la frase significa "aunque".
                <br><span class="frase-traduccion" onclick="traducir(this, 'Él sabe que fuiste tú, aunque no te viera')">Berak zeu zinela daki, ez zintuen ikusi <b>baina</b>.</span>
            </li>
        </ul>

        [BATERIA:2]
    `,
                        ejercicios: [
                            [ // BATERIA 0: Baina básico
                                {
                                    id: "adv_baina_1",
                                    pregunta: "Completa el contraste: 'Nik ez dut nahi, zuk ___'",
                                    tipo: "input",
                                    frase: "Nik ez dut nahi, <b>baina</b> zuk ___",
                                    correcta: "bai",
                                    ayuda: "Yo no quiero, pero tú sí."
                                },
                                {
                                    id: "adv_baina_2",
                                    pregunta: "Ordena: 'Llegó tarde aunque fue corriendo'",
                                    tipo: "sort",
                                    fraseCorrecta: "Korrika zihoan baina berandu heldu zen",
                                    ayuda: "Frase A + baina + Frase B"
                                }
                            ],
                            [ // BATERIA 1: Baizik / Sino
                                {
                                    id: "adv_baizik_1",
                                    pregunta: "Traduce: 'No es Miren, sino Kepa'",
                                    tipo: "input",
                                    frase: "Ez du Mirenek esan, Kepa ___",
                                    correcta: "baizik",
                                    ayuda: "Usa el nexo que va al final para indicar 'sino'."
                                },
                                {
                                    id: "adv_ezpada_1",
                                    pregunta: "¿Cuál de estos significa 'sino que...' al principio de frase?",
                                    tipo: "choice",
                                    frase: "Ez da trenez joan, ___ hegazkina hartu du.",
                                    opciones: ["ezpada", "baina", "edo"],
                                    correcta: "ezpada"
                                }
                            ],
                            [ // BATERIA 2: Casos especiales
                                {
                                    id: "adv_maite_1",
                                    pregunta: "Ordena la frase de Maite y el móvil:",
                                    tipo: "sort",
                                    fraseCorrecta: "Maite etxekolanak bukatzen ez baina mugikorrarekin hitz egiten ari da",
                                    ayuda: "No está terminando los deberes, sino hablando..."
                                }
                            ]
                        ]
                    },
                    {
                        id: "coordinadas-adversativas-sino",
                        titulo: "📄 Baizik, Baino, Ezpada (Sino)",
                        texto: `
        <p>Estas conjunciones se usan cuando la primera frase es negativa y la segunda "corrige" o sustituye la información. Equivale al <b>sino</b> castellano.</p>

        <h3>1. Baizik / Baino (Al final)</h3>
        <p>Son las formas más comunes. Se colocan <b>al final</b> de la segunda proposición:</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'No han ido a misa los jóvenes, sino los mayores')">Mezatara ez dira gazteak joan, zaharrak <b>baizik</b>.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'No le gusta el alto, sino el bajo')">Ez zaio altua gustatzen, txikia <b>baino</b>.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'No lo ha dicho Miren, sino Kepa')">Ez du Mirenek esan, Kepa <b>baizik</b>.</span></p>
        </div>

        <h3>2. Ezpada / Baizik eta (Al principio)</h3>
        <p>Si la segunda frase es larga o queremos poner el nexo al inicio, usamos estas formas:</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'No ha ido en tren, sino que ha cogido el avión')">Ez da trenez joan, <b>ezpada</b> hegazkina hartu du.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'No ha subido las compras, sino que las ha dejado en el garaje')">Ez ditu erosketak igo, <b>baizik eta</b> garajean utzi ditu.</span></p>
        </div>

        <p>Toca para ver el secreto del orden de palabras:</p>
        <div class="bloque-subordinadas">
             <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Galdegaia: El elemento negado en la primera frase debe ir junto al verbo (Ez da ETXERA joan). En la segunda, el elemento que corrige va junto al nexo (TABERNARA baizik).', event)">El secreto del Galdegaia</span></p>
        </div>

        [BATERIA:0]
    `,
                        ejercicios: [
                            [ // BATERIA 0: El juego del Sino
                                {
                                    id: "adv_sino_1",
                                    pregunta: "Completa: No han ido a misa, sino al frontón.",
                                    tipo: "input",
                                    frase: "Gazteak ez dira mezatara joan, frontoira ___.",
                                    correcta: "baizik",
                                    ayuda: "Usa el nexo que va al final de la frase."
                                },
                                {
                                    id: "adv_sino_2",
                                    pregunta: "Usa 'Baino' para corregir: No le gusta el alto...",
                                    tipo: "input",
                                    frase: "Ez zaio altua gustatzen, txikia ___.",
                                    correcta: "baino",
                                    ayuda: "Baino también funciona como 'sino' al final de frase."
                                },
                                {
                                    id: "adv_sino_3",
                                    pregunta: "Ordena: 'No ha ido en tren, sino en avión'",
                                    tipo: "sort",
                                    fraseCorrecta: "Ez da trenez joan ezpada hegazkina hartu du",
                                    ayuda: "Ez + da + trenez + joan + ezpada..."
                                },
                                {
                                    id: "adv_sino_4",
                                    pregunta: "¿Qué nexo pondrías aquí al inicio?",
                                    tipo: "choice",
                                    frase: "Ez ditu erosketak igo, ___ garajean utzi ditu.",
                                    opciones: ["baizik eta", "baina", "edo"],
                                    correcta: "baizik eta",
                                    ayuda: "Cuando la frase es larga, preferimos ponerlo al inicio."
                                }
                            ]
                        ]
                    },
                    {
                        id: "coordinadas-adversativas-especiales",
                        titulo: "📄 Usos Especiales de Baina",
                        texto: `
        <p>El nexo <b>baina</b> es muy versátil. Además de unir frases, puede funcionar como conector o incluso para indicar "aunque".</p>

        <h3>1. Contrastes con Bai y Ez</h3>
        <p>Para no repetir toda la frase, usamos las partículas afirmativa y negativa. Es muy común en el habla cotidiana:</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Tú te callaste, pero yo no')">Zu isildu zinen, <b>baina</b> ni <b>ez</b>.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Yo no dije nada, pero tú sí')">Nik ez nuen ezer esan, <b>baina</b> zuk <b>bai</b>.</span></p>
        </div>

        <h3>2. Baina como Conector (Lokailua)</h3>
        <p>Cuando se coloca en medio o al final de la frase, funciona como <b>"en cambio"</b> (<i>ordea</i>):</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Me dijo que sí; yo, en cambio, no le creo')">Baietz esan zidan; nik, <b>baina</b>, ez diot sinesten.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Yo lo hice la semana pasada; tú, en cambio, ni siquiera lo has mirado')">Nik joan den astean egin nuen; zuk ere ez duzu ikusi, <b>baina</b>.</span></p>
        </div>

        <h3>3. Baina como Subordinante (Aunque)</h3>
        <p>Al final de la frase puede actuar como nexo concesivo:</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Él sabe que fuiste tú, aunque no te viera')">Berak zeu zinela daki, ez zintuen ikusi <b>baina</b>.</span></p>
        </div>

        <p>Toca para ver el matiz de Iparralde:</p>
        <div class="bloque-subordinadas">
             <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Iparralde: Allí usan baina incluso para corregir negaciones (como nuestro baizik). Ejemplo: Ez kartzelara, baina isuna ordaintzera.', event)">Baina como "Sino"</span></p>
        </div>

        [BATERIA:0]
    `,
                        ejercicios: [
                            [ // BATERIA 0: Contrastes y posiciones
                                {
                                    id: "adv_esp_1",
                                    pregunta: "Completa el contraste: 'Yo no fui, pero tú sí'",
                                    tipo: "input",
                                    frase: "Ni ez nintzen joan, <b>baina</b> zu ___.",
                                    correcta: "bai",
                                    ayuda: "Usa la partícula afirmativa."
                                },
                                {
                                    id: "adv_esp_2",
                                    pregunta: "¿Qué significa 'baina' al final en: 'Ez zintuen ikusi baina'?",
                                    tipo: "choice",
                                    frase: "Significa ___",
                                    opciones: ["Pero", "Aunque", "O"],
                                    correcta: "Aunque",
                                    ayuda: "Cuando va al final de una subordinada, indica concesión."
                                },
                                {
                                    id: "adv_esp_3",
                                    pregunta: "Ordena: 'Él me dijo que sí, yo en cambio no'",
                                    tipo: "sort",
                                    fraseCorrecta: "Baietz esan zidan nik baina ez",
                                    ayuda: "Sujeto + baina + ez"
                                }
                            ]
                        ]
                    },
                    {
                        id: "coordinadas-copulativas",
                        titulo: "📄 Oraciones Copulativas (ETA)",
                        texto: `
        <p>Las oraciones copulativas indican suma o acumulación. El nexo rey es <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Eta: Y. Es el nexo más usado. En el habla rápida se suele pronunciar como -ta.', event)">eta</span>.</p>

        <h3>1. Uso de "Eta"</h3>
        <p>Une elementos del mismo nivel. Recuerda que si el sujeto es plural, el verbo debe ir en plural:</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Miren y Jon han venido')">Miren <b>eta</b> Jon etorri <b>dira</b>.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'He comprado pan y he bebido leche')">Ogia erosi dut <b>eta</b> esnea edan dut.</span></p>
        </div>

        <h3>2. Otros nexos de suma</h3>
        <p>Para enfatizar o añadir información extra usamos estructuras como:</p>
        <ul>
            <li><b>Baita... ere / Ere bai:</b> También.
                <br><span class="frase-traduccion" onclick="traducir(this, 'Jon ha venido y Miren también')">Jon etorri da, <b>baita</b> Miren <b>ere</b>.</span>
            </li>
            <li><b>Ezta... ere / Ere ez:</b> Tampoco.
                <br><span class="frase-traduccion" onclick="traducir(this, 'Jon no ha venido y Miren tampoco')">Jon ez da etorri, <b>ezta</b> Miren <b>ere</b>.</span>
            </li>
        </ul>

        [BATERIA:0]
    `,
                        ejercicios: [
                            [
                                {
                                    id: "cop_eta_1",
                                    pregunta: "Traduce: 'He estudiado y he aprobado'",
                                    tipo: "input",
                                    frase: "Ikasi dut ___ aprobatu dut.",
                                    correcta: "eta",
                                    ayuda: "Usa el nexo copulativo estándar."
                                },
                                {
                                    id: "cop_baita_1",
                                    pregunta: "Completa el 'también': Baita ni ___",
                                    tipo: "input",
                                    frase: "Baita ni ___",
                                    correcta: "ere",
                                    ayuda: "La estructura es: Baita... ere"
                                }
                            ]
                        ]
                    },
                    {
                        id: "coordinadas-disyuntivas",
                        titulo: "📄 Oraciones Disyuntivas (EDO / ALA)",
                        texto: `
        <p>Estas oraciones ofrecen una elección entre dos o más opciones. En euskera es <b>crítico</b> saber si estamos preguntando o afirmando.</p>

        <h3>1. Edo (Afirmaciones)</h3>
        <p>Se usa en frases afirmativas donde la elección no es excluyente:</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Iré el lunes o el martes')">Astelehenean <b>edo</b> asteartean joango naiz.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Trae un libro o un periódico')">Ekarri liburu bat <b>edo</b> egunkari bat.</span></p>
        </div>

        <h3>2. Ala (Preguntas / Dudas)</h3>
        <p>Se usa exclusivamente en oraciones interrogativas para elegir entre dos opciones cerradas:</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, '¿Vienes o te quedas?')">Zatoz <b>ala</b> geratzen zara?</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, '¿Es té o café?')">Tea <b>ala</b> kafea da?</span></p>
        </div>

        <div class="bloque-subordinadas">
             <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Nahiz eta: Aunque / Sea... o sea... Se usa cuando la elección no importa porque el resultado es el mismo.', event)">Nahiz... nahiz...</span></p>
        </div>

        [BATERIA:0]
    `,
                        ejercicios: [
                            [
                                {
                                    id: "dis_edo_1",
                                    pregunta: "¿Cuál elegirías para una pregunta?",
                                    tipo: "choice",
                                    frase: "Nahiago duzu sagarra ___ udarea?",
                                    opciones: ["edo", "ala", "eta"],
                                    correcta: "ala",
                                    ayuda: "Es una pregunta de elección."
                                },
                                {
                                    id: "dis_edo_2",
                                    pregunta: "Completa la afirmación: 'Iré hoy o mañana'",
                                    tipo: "input",
                                    frase: "Gaur ___ bihar joango naiz.",
                                    correcta: "edo",
                                    ayuda: "En afirmaciones usamos 'edo'."
                                }
                            ]
                        ]
                    }
                ]
            },
            {
                id: "oraciones-subordinadas",
                titulo: "📁 Oraciones subordinadas",
                hijos: [
                    {
                        id: "subordinadas-introduccion",
                        titulo: "📄 Introducción: ¿Qué es la subordinación?",
                        texto: `
        <p>Las oraciones subordinadas (<i>perpaus mendekoak</i>) son frases que se insertan dentro de una <b>oración principal</b>.</p>
        
        <p>En euskera, a diferencia del castellano, los nexos suelen ser <b>sufijos</b> que se pegan al verbo de la frase pequeña:</p>
        <div class="bloque-ejemplos">
            <b>-(e)la, -(e)nik, -(e)n, -(e)nean, -(e)lako...</b>
        </div>

        <h3>Tipos según su función:</h3>
        <ul>
            <li><b>Sustantivas:</b> Funcionan como un nombre (el "esto").</li>
            <li><b>Adjetivas (Relativo):</b> Funcionan como un adjetivo (describen algo).</li>
            <li><b>Adverbiales:</b> Indican lugar, tiempo, modo, causa...</li>
        </ul>

        [BATERIA:0]

        <h3>Las Subordinadas Sustantivas</h3>
        <p>Realizan la misma función que un sintagma nominal y se pueden sustituir por "esto/eso":</p>
        
        <div class="bloque-ejemplos">
            <b>• Función de Sujeto (Nominalizadas):</b><br>
            <span class="frase-traduccion" onclick="traducir(this, 'Me gusta que estés con nosotros')">Zu gurekin egotea gustatzen zait.</span><br><br>
            
            <b>• Función de Atributo:</b><br>
            <span class="frase-traduccion" onclick="traducir(this, 'Es mejor ir pronto')">Hobe da laster joatea.</span><br><br>
            
            <b>• Función de Complemento Directo (Completivas):</b><br>
            <span class="frase-traduccion" onclick="traducir(this, 'Ha dicho que no vendrá')">Ez de<b>la</b> etorriko esan du.</span><br><br>
            
            <b>• Complemento de un Nombre:</b><br>
            <span class="frase-traduccion" onclick="traducir(this, 'Tengo la sensación de que vendrá mañana')">Bihar etorriko de<b>lako</b> susmoa daukat.</span>
        </div>

        [BATERIA:1]
    `,
                        ejercicios: [
                            [ // BATERIA 0: Conceptos básicos
                                {
                                    id: "sub_intro_1",
                                    pregunta: "¿Cómo se llaman los nexos que se pegan al verbo?",
                                    tipo: "choice",
                                    frase: "Se llaman ___ ",
                                    opciones: ["Juntagailuak", "Menderagailuak", "Lokailuak"],
                                    correcta: "Menderagailuak",
                                    ayuda: "Mende = subordinación / dependencia."
                                }
                            ],
                            [ // BATERIA 1: Sustantivas
                                {
                                    id: "sub_sust_1",
                                    pregunta: "Completa la completiva: 'Ha dicho que no...'",
                                    tipo: "input",
                                    frase: "Ez de___ etorriko esan du.",
                                    correcta: "la",
                                    ayuda: "El nexo 'que' afirmativo es -(e)la."
                                },
                                {
                                    id: "sub_sust_2",
                                    pregunta: "Ordena: 'Me gusta que estés aquí'",
                                    tipo: "sort",
                                    fraseCorrecta: "Zu hemen egotea gustatzen zait",
                                    ayuda: "Egon (estar) + t(z)ea (nominalización)"
                                }
                            ]
                        ]
                    },
                    {
                        id: "subordinadas-relativo-lugar",
                        titulo: "📄 Relativo y Adverbiales de Lugar",
                        texto: `
        <p>Las oraciones subordinadas adjetivas (o de relativo) funcionan como un adjetivo: describen a un nombre de la oración principal llamado <b>antecedente</b>.</p>
        
        <h3>1. Oraciones de Relativo (Adjetivas)</h3>
        <p>En euskera, el nexo principal es <span class="caja-gramatical caja-adj" onclick="simplificar(this, '-(e)n: Equivale al que/quien/donde... del castellano. Se pega al verbo de la subordinada.', event)">-(e)n</span>.</p>

        <div class="bloque-ejemplos">
            <b>• Ejemplo analizado:</b><br>
            <span class="frase-traduccion" onclick="traducir(this, 'La chica que vimos en casa es mi hermana')">Etxean ikusi genue<b>n</b> neska nire ahizpa da.</span><br><br>
            <p><i>Análisis:</i> El antecedente es <b>neska</b> (la chica). La frase "que vimos en casa" funciona como su adjetivo descriptivo.</p>
        </div>

        [BATERIA:0]

        <h3>2. Adverbiales de Lugar</h3>
        <p>En euskera, el lugar se construye añadiendo palabras de posición al nexo de relativo <b>-(e)n</b>:</p>
        
        <div class="bloque-ejemplos">
            <b>• Donde (Situación): -(e)n lekuan / tokitan</b><br>
            <span class="frase-traduccion" onclick="traducir(this, 'Esta es la casa en donde nació')">Jaio ze<b>n</b> etxea hau da.</span><br>
            <span class="frase-traduccion" onclick="traducir(this, 'El coche está en donde lo dejaste')">Autoa utzi duzu<b>n</b> lekuan dago.</span><br><br>
            
            <b>• A donde (Dirección): -(e)n lekura / tokira</b><br>
            <span class="frase-traduccion" onclick="traducir(this, 'No he vuelto al pueblo a donde vivían mis aitas')">Ez naiz gurasoak bizi zire<b>n</b> herrira itzuli.</span><br><br>

            <b>• Por donde (Paso): -(e)n lekutik / tokitik</b><br>
            <span class="frase-traduccion" onclick="traducir(this, 'Ayer pasamos por donde ocurrió el atentado')">Atzo atentatua gertatu ze<b>n</b> lekutik pasatu ginen.</span><br><br>

            <b>• Hasta donde (Límite): -(e)n lekuraino / tokiraino</b><br>
            <span class="frase-traduccion" onclick="traducir(this, 'Te seguiré hasta donde tú quieras')">Nahi duzu<b>n</b> tokiraino jarraituko dizut.</span>
        </div>

        [BATERIA:1]
    `,
                        ejercicios: [
                            [ // BATERIA 0: El Relativo -(e)n
                                {
                                    id: "rel_n_1",
                                    pregunta: "Completa el relativo: 'La chica que ha venido...'",
                                    tipo: "input",
                                    frase: "Etorri de___ neska Basaurikoa da.",
                                    correcta: "n",
                                    ayuda: "Usa el sufijo de relativo -(e)n."
                                },
                                {
                                    id: "rel_n_2",
                                    pregunta: "Ordena: 'La chica que vimos en casa'",
                                    tipo: "sort",
                                    fraseCorrecta: "Etxean ikusi genuen neska",
                                    ayuda: "Verbo (genuen) + antecedente (neska)"
                                }
                            ],
                            [ // BATERIA 1: Adverbiales de Lugar
                                {
                                    id: "adv_lug_1",
                                    pregunta: "¿Cómo se dice 'al sitio donde' (Dirección)?",
                                    tipo: "choice",
                                    frase: "Gurasoak bizi ziren ___  ",
                                    opciones: ["herrira", "herrian", "herritik"],
                                    correcta: "herrira",
                                    ayuda: "Ir a un sitio = -ra."
                                },
                                {
                                    id: "adv_lug_2",
                                    pregunta: "Completa el límite: 'Hasta donde quieras'",
                                    tipo: "input",
                                    frase: "Nahi duzun toki___ jarraituko dizut.",
                                    correcta: "raino",
                                    ayuda: "Hasta = -raino."
                                },
                                {
                                    id: "adv_lug_3",
                                    pregunta: "Ordena la frase del atentado:",
                                    tipo: "sort",
                                    fraseCorrecta: "Atentatua gertatu zen lekutik pasatu ginen",
                                    ayuda: "Lugar del suceso + lekutik (por el sitio)"
                                }
                            ]
                        ]
                    },
                    {
                        id: "subordinadas-sustantivas",
                        titulo: "📁 Subordinadas sustantivas",
                        hijos: [
                            {
                                id: "subordinadas-sustantivas",
                                titulo: "📁 Completivas",
                                hijos: [
                                    {
                                        id: "completivas-parte-1",
                                        titulo: "📄 Completivas: -(e)la / -(e)nik",
                                        texto: `
        <p>Responden a la pregunta <b>"Zer?"</b> (¿Qué?). La clave es mirar el verbo de la frase principal.</p>

        <h3>1. Afirmación vs Negación</h3>
        <ul>
            <li>Usa <span class="caja-gramatical caja-sus" onclick="simplificar(this, '-(e)la: Se usa cuando la frase principal es AFIRMATIVA.', event)">-(e)la</span></li>
            <li>Usa <span class="caja-gramatical caja-sus" onclick="simplificar(this, '-(e)nik: Se usa cuando la frase principal es NEGATIVA o de DUDA.', event)">-(e)nik</span></li>
        </ul>

        <div class="bloque-ejemplos">
            <span class="frase-traduccion" onclick="traducir(this, 'Creo que está en casa')">Etxean dago<b>ela</b> uste dut.</span><br>
            <span class="frase-traduccion" onclick="traducir(this, 'No creo que esté en casa')">Ez dut uste etxean dagoen<b>ik</b>.</span>
        </div>

        <p>⚠️ <b>Cuidado:</b> Lo que importa es la principal. Si la principal es afirmativa, usamos <b>-la</b> aunque la subordinada sea negativa:</p>
        <div class="bloque-ejemplos">
            <span class="frase-traduccion" onclick="traducir(this, 'Creo que NO está en casa')">Uste dut ez dago<b>ela</b> etxean.</span>
        </div>

        [BATERIA:0]

        <h3>2. Verbos de Certeza (-(e)na)</h3>
        <p>Con verbos como <i>Badakit, Ziur, Argi dago...</i> se puede usar <b>-(e)la</b>, pero es muy común usar <span class="caja-gramatical caja-sus" onclick="simplificar(this, '-(e)na: Indica una certeza absoluta o un hecho conocido.', event)">-(e)na</span>:</p>
        <div class="bloque-ejemplos">
            <span class="frase-traduccion" onclick="traducir(this, 'Ya sé que está mal')">Badakit txarto dago<b>ena</b>.</span><br>
            <span class="frase-traduccion" onclick="traducir(this, 'Está claro que no puede')">Argi dago ezin du<b>ena</b>.</span>
        </div>

        [BATERIA:1]

        <h3>3. Órdenes y Peticiones (-tzeko)</h3>
        <p>Para decir que alguien ha dicho "que hagas algo", usamos <span class="caja-gramatical caja-sus" onclick="simplificar(this, '-tzeko: Sustituye al modo imperativo en el estilo indirecto.', event)">-tzeko</span>:</p>
        <div class="bloque-ejemplos">
            <span class="frase-traduccion" onclick="traducir(this, 'Josu ha dicho que cierres la puerta')">Josuk atea ixt<b>eko</b> esan du.</span><br>
            <span class="frase-traduccion" onclick="traducir(this, 'Me ha dicho que no vaya')">Ez joa<b>teko</b> esan dit.</span>
        </div>

        <h3>4. Baietz / Ezetz (Que sí / Que no)</h3>
        <div class="bloque-ejemplos">
            <span class="frase-traduccion" onclick="traducir(this, '¿Qué dices, que sí o que no?')">Zer diozu, <b>baietz</b> ala <b>ezetz</b>?</span>
        </div>

        [BATERIA:2]
    `,
                                        ejercicios: [
                                            [ // BATERIA 0: -la vs -nik
                                                {
                                                    id: "comp_la_nik_1",
                                                    pregunta: "¿-la o -nik? 'Ez dut uste etorriko...'",
                                                    tipo: "choice",
                                                    frase: "Ez dut uste etorriko de___",
                                                    opciones: ["la", "nik"],
                                                    correcta: "nik",
                                                    ayuda: "La principal es negativa (Ez dut uste)."
                                                },
                                                {
                                                    id: "comp_la_nik_2",
                                                    pregunta: "Traduce: 'Ha dicho que está mal'",
                                                    tipo: "input",
                                                    frase: "Txarto dago___ esan du.",
                                                    correcta: "ela",
                                                    ayuda: "Afirmación = -la"
                                                }
                                            ],
                                            [ // BATERIA 1: Certeza -na
                                                {
                                                    id: "comp_na_1",
                                                    pregunta: "Completa con certeza: 'Ya sé que es tarde'",
                                                    tipo: "input",
                                                    frase: "Badakit berandu de___",
                                                    correcta: "na",
                                                    ayuda: "Usa la forma -(e)na para 'Badakit'."
                                                }
                                            ],
                                            [ // BATERIA 2: Órdenes -tzeko
                                                {
                                                    id: "comp_tzeko_1",
                                                    pregunta: "Ordena: 'Me han pedido que venga'",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Etortzeko eskatu didate",
                                                    ayuda: "Venir (Etortzeko) + pedir (eskatu didate)"
                                                },
                                                {
                                                    id: "comp_bai_ez_1",
                                                    pregunta: "A veces dice que sí y otras que no:",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Batzuetan baietz dio eta beste batzuetan ezetz",
                                                    ayuda: "Batzuetan (unas veces) + baietz/ezetz + dio (dice)"
                                                }
                                            ]
                                        ]
                                    },
                                    {
                                        id: "completivas-parte-2",
                                        titulo: "📄 Completivas: Complemento de Nombre",
                                        texto: `
        <p>A veces la subordinada no completa a un verbo, sino a un <b>nombre</b> (como <i>susmoa, albistea, esperantza...</i>). Equivale al "de que..." del castellano.</p>

        <h3>1. Estructura: -(e)lako / -(e)n</h3>
        <p>Se forma añadiendo <b>-ko</b> al nexo <b>-la</b>. No lo confundas con el "porque" (causal).</p>
        
        <div class="bloque-ejemplos">
            <p><b>• Con -lako:</b><br>
            <span class="frase-traduccion" onclick="traducir(this, 'Tengo la sospecha de que se lo ha inventado él')">Berak dena asmatu zuelako <b>susmoa</b> daukat.</span></p>
            
            <p><b>• Con -(e)n (Relativo):</b><br>
            <span class="frase-traduccion" onclick="traducir(this, 'No nos ha asombrado la noticia de que Kepa sea director')">Kepa zuzendari izendatu dute<b>n</b> berriak ez gaitu harritu.</span></p>
        </div>

        [BATERIA:0]

        <h3>2. Sustitución por -(e)lakoa</h3>
        <p>A veces omitimos el nombre (<i>rumor, noticia...</i>) y usamos el artículo <b>-a</b> o un demostrativo:</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'He oído lo de que les han trasladado a Zaragoza')">Zaragozara aldatu dituzte<b>lakoa</b> entzun dut.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Es mentira eso de que no lo ha pagado todo')">Guztia ordaindu ez due<b>lako hori</b> gezurra da.</span></p>
        </div>

        <h3>3. Los "denominados" (delako / direlako)</h3>
        <p>Se usa para citar nombres propios o términos extranjeros:</p>
        <div class="bloque-ejemplos">
            <span class="frase-traduccion" onclick="traducir(this, 'Ya no hablan de la denominada Gripe A')">"Gripe A" <b>delakoari</b> buruz jadanik ez dute hitz egiten.</span>
        </div>

        [BATERIA:1]

        <h3>4. La creencia: -(e)lakoan</h3>
        <p>Procede de <i>-lako ustean</i> (con la idea de que...). Es muy común con el verbo <b>egon</b> o en despedidas de cartas:</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Creyendo que era el de Galdakao, cogí el autobús')">Autobusa hartu nuen, Galdakaokoa ze<b>lakoan</b>.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Esperando que tenga en cuenta esta petición, le saludo')">Eskari hau kontuan hartuko duzu<b>lakoan</b>, agurtzen zaitut.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Está en la creencia de que Basauri es el mejor pueblo del mundo')">Basauri munduko herririk onena de<b>lakoan</b> dago.</span></p>
        </div>

        [BATERIA:2]
    `,
                                        ejercicios: [
                                            [ // BATERIA 0: Complemento de nombre
                                                {
                                                    id: "comp_nom_1",
                                                    pregunta: "Completa: Dieron la noticia de que le habían encontrado.",
                                                    tipo: "input",
                                                    frase: "Aurkitu zute___ albistea eman zuten.",
                                                    correcta: "lako",
                                                    ayuda: "Nexo: -(e)la + ko"
                                                },
                                                {
                                                    id: "comp_nom_2",
                                                    pregunta: "Ordena: 'Tengo la esperanza de que las cosas cambiarán'",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Gauzak aldatuko direlako esperantza daukat",
                                                    ayuda: "Cosas (Gauzak) + cambiarán (aldatuko direlako) + esperanza (esperantza)"
                                                }
                                            ],
                                            [ // BATERIA 1: -lakoa y denominados
                                                {
                                                    id: "comp_lakoa_1",
                                                    pregunta: "¿Cómo dirías 'lo de que cobran demasiado'?",
                                                    tipo: "choice",
                                                    frase: "Gehiegi kobratzen dute___ egia da.",
                                                    opciones: ["lakoa", "lakoan", "larik"],
                                                    correcta: "lakoa",
                                                    ayuda: "Usamos el artículo -a al final para decir 'lo de que'."
                                                }
                                            ],
                                            [ // BATERIA 2: -lakoan (Creencia)
                                                {
                                                    id: "comp_lakoan_1",
                                                    pregunta: "Completa la despedida: 'Esperando que vengas...'",
                                                    tipo: "input",
                                                    frase: "Etortzeko de___, agurtzen zaitut.",
                                                    correcta: "lakoan",
                                                    ayuda: "Estructura para 'en la creencia de'."
                                                },
                                                {
                                                    id: "comp_lakoan_2",
                                                    pregunta: "Ordena el pensamiento: 'Creía que estabas allí'",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Han zeundelakoan nengoen",
                                                    ayuda: "Allí (Han) + estabas (zeundelakoan) + estaba (nengoen)"
                                                }
                                            ]
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "subordinadas-interrogativas-indirecta",
                                titulo: "📁 Interrogativas indirectas",
                                hijos: [
                                    {
                                        id: "interrogativas-indirectas-completo",
                                        titulo: "📄 Interrogativas Indirectas (Zehar-galderak)",
                                        texto: `
        <p>Las <b>Zehar-galderak</b> (Interrogativas Indirectas) son oraciones subordinadas sustantivas que funcionan como el objeto de verbos de lengua o pensamiento (preguntar, saber, olvidar...).</p>

        <div class="bloque-ejemplos">
            <p><b>• Estilo Directo:</b> Nor da hori? (¿Quién es ese?)<br>
            <b>• Estilo Indirecto:</b> Ez dakit nor de<b>n</b>. (No sé quién es).</p>
        </div>

        <h3>1. Parciales (Interrogativos: Nor, Non, Zer...)</h3>
        <p>Usamos el nexo <span class="caja-gramatical caja-sus" onclick="simplificar(this, '-(e)n: Sufijo para todas las preguntas indirectas.', event)">-(e)n</span> pegado al verbo:</p>
        <div class="bloque-ejemplos">
            <span class="frase-traduccion" onclick="traducir(this, 'No sabemos a dónde han ido')">Ez dakigu nora joan dire<b>n</b>.</span><br>
            <span class="frase-traduccion" onclick="traducir(this, 'No recuerdo dónde está')">Ez dut gogoratzen non dago<b>en</b>.</span><br>
            <span class="frase-traduccion" onclick="traducir(this, 'Cualquiera sabe cuándo vendré')">Auskalo noiz etorriko naize<b>n</b>.</span>
        </div>

        [BATERIA:0]

        <h3>2. Generales (Sí / No)</h3>
        <p>Usamos <b>ea</b> (a ver) y opcionalmente <b>ala ez</b> (o no):</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'No sabemos si lo haremos (o no)')">Ez dakigu egingo dugu<b>n</b> (ala ez).</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'No sé si lo tengo en casa')">Ez dakit etxean daukada<b>n</b>.</span></p>
        </div>

        <h3>3. El gran duelo: -LA (Certeza) vs -N (Pregunta)</h3>
        <p>Compara estas frases clave de tu texto para entender la psicología del euskera:</p>
        <div class="bloque-ejemplos">
            <p><b>A) Certeza:</b> <span class="frase-traduccion" onclick="traducir(this, '¿Ya sabes que Koldo ha venido? (Es un hecho)')">Badakizu Koldo etorri de<b>la</b>?</span></p>
            <p><b>B) Duda:</b> <span class="frase-traduccion" onclick="traducir(this, '¿Sabes si Koldo ha venido? (No lo sé aún)')">Badakizu Koldo etorri de<b>n</b>?</span></p>
            <hr>
            <p><b>A) Hecho:</b> <span class="frase-traduccion" onclick="traducir(this, 'No sabe que estoy en tu casa (pero estoy)')">Ez daki zure etxean nago<b>enik</b>.</span> (Nota: -nik por la negativa principal)</p>
            <p><b>B) Duda:</b> <span class="frase-traduccion" onclick="traducir(this, 'No sabe si estoy en tu casa o no')">Ez daki zure etxean nago<b>en</b> ala ez.</span></p>
        </div>

        [BATERIA:1]

        <h3>4. Frases hechas: Batek daki / Ahaztu</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Cualquiera sabe quién lo ha hecho')">Batek daki nork egin due<b>n</b>.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Se me ha olvidado dónde los he puesto')">Ahaztu egin zait non ipini dituda<b>n</b>.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'No sé de dónde los ha sacado')">Ez dakit nondik atera ditue<b>n</b>.</span></p>
        </div>

        [BATERIA:2]
    `,
                                        ejercicios: [
                                            [ // BATERIA 0: Pronombres interrogativos
                                                {
                                                    id: "inter_p_1",
                                                    pregunta: "Traduce: 'No sé quién es'",
                                                    tipo: "input",
                                                    frase: "Ez dakit nor de___",
                                                    correcta: "n",
                                                    ayuda: "Pregunta indirecta: ¿Quién es?"
                                                },
                                                {
                                                    id: "inter_p_2",
                                                    pregunta: "Ordena: 'No sabemos cuándo vendrá'",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Ez dakigu noiz etorriko den",
                                                    ayuda: "No sabemos (Ez dakigu) + cuándo (noiz) + vendrá (den)"
                                                }
                                            ],
                                            [ // BATERIA 1: El duelo de nexos
                                                {
                                                    id: "inter_duel_1",
                                                    pregunta: "¿Sabes si ha venido? (Duda)",
                                                    tipo: "choice",
                                                    frase: "Badakizu etorri de___?",
                                                    opciones: ["la", "n", "nik"],
                                                    correcta: "n",
                                                    ayuda: "Si es una pregunta sobre la veracidad, usamos -n."
                                                },
                                                {
                                                    id: "inter_duel_2",
                                                    pregunta: "No sabe que estoy aquí (Hecho):",
                                                    tipo: "input",
                                                    frase: "Ez daki hemen nago___",
                                                    correcta: "enik",
                                                    ayuda: "Hecho cierto en frase negativa = -enik"
                                                }
                                            ],
                                            [ // BATERIA 2: Frases del día a día
                                                {
                                                    id: "inter_extra_1",
                                                    pregunta: "Traduce: 'Cualquiera sabe a dónde han ido'",
                                                    tipo: "input",
                                                    frase: "Batek daki nora joan dire___",
                                                    correcta: "n",
                                                    ayuda: "Batek daki = Cualquiera sabe"
                                                },
                                                {
                                                    id: "inter_extra_2",
                                                    pregunta: "Ordena: 'Se me ha olvidado dónde los he puesto'",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Ahaztu egin zait non ipini ditudan",
                                                    ayuda: "Olvidado (Ahaztu egin zait) + donde (non) + puesto (ditudan)"
                                                }
                                            ]
                                        ]
                                    },
                                    {
                                        id: "interrogativas-practica-intensiva",
                                        titulo: "📝 Entrenamiento: Practica las Indirectas",
                                        texto: `
        <p>Intenta traducir cada frase mentalmente antes de pulsar. Fíjate bien en el nexo <b>-(e)n</b>.</p>

        <h3>• Preguntas Parciales (Nor, Non, Zer...)</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Ez du esan nor etorriko den.')">No ha dicho quién va a venir.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Batek daki non dagoen.')">Cualquiera sabe dónde está.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Galdetu ea zer ordu den.')">Pregunta a ver qué hora es.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Galdetu ea zenbat den.')">Pregunta a ver cuánto es.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Ez dakite nor naizen ni.')">No saben quién soy yo.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Ez dakigu noiz etorriko den.')">No sabemos cuándo vendrá.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Ea Jon ikusi dudan galdetu didate.')">Me han preguntado a ver si he visto a Jon.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Ez dakit nork ekarri dituen.')">No sé quién los ha traído.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Ahaztu egin zait non ipini ditudan.')">Se me ha olvidado dónde los he puesto.</span></p>
        </div>

        [BATERIA:0]

        <h3>• Preguntas Generales (Si... o no)</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Batek daki bizirik dagoen.')">Cualquiera sabe si está vivo.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Galdetu ea etorriko den.')">Pregunta a ver si va a venir.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Ez du esan etorriko den ala ez.')">No ha dicho si va a venir o no.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Ez daki joango naizen ala ez.')">No sabe si iré o no.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Galdeiozu ea gurekin etorri nahi duen.')">Pregúntale a ver si quiere venir con nosotros.</span></p>
        </div>

        [BATERIA:1]
    `,
                                        ejercicios: [
                                            [ // BATERIA 0: El reto de los interrogativos
                                                {
                                                    id: "prac_inter_1",
                                                    pregunta: "Traduce: 'No sabemos cuándo vendrá'",
                                                    tipo: "input",
                                                    frase: "Ez dakigu ___ etorriko den.",
                                                    correcta: "noiz",
                                                    ayuda: "Interrogativo de tiempo."
                                                },
                                                {
                                                    id: "prac_inter_2",
                                                    pregunta: "Ordena: 'Se me ha olvidado dónde los he puesto'",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Ahaztu egin zait non ipini ditudan",
                                                    ayuda: "Olvidar (Ahaztu egin zait) + donde (non) + puestos (ditudan)"
                                                }
                                            ],
                                            [ // BATERIA 1: El reto del Sí/No
                                                {
                                                    id: "prac_inter_gen_1",
                                                    pregunta: "Traduce: 'No sé si vendrá'",
                                                    tipo: "input",
                                                    frase: "Ez dakit etorriko de___.",
                                                    correcta: "n",
                                                    ayuda: "Nexo de interrogativa indirecta."
                                                },
                                                {
                                                    id: "prac_inter_gen_2",
                                                    pregunta: "Ordena: 'Cualquiera sabe si está vivo'",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Batek daki bizirik dagoen",
                                                    ayuda: "Batek daki (Cualquiera sabe) + vivo (bizirik) + si está (dagoen)"
                                                }
                                            ]
                                        ]
                                    }


                                ]
                            },
                        ]
                    },
                    {
                        id: "subordinadas-adjetivas",
                        titulo: "📁 Subordinadas adjetivas",
                        hijos: [
                            {
                                id: "Subordinadas-relativo",
                                titulo: "📁 De relativo",
                                hijos: [
                                    {//📄 Oraciones de Relativo (El ESE)
                                        id: "subordinadas-relativo-teoria2",
                                        titulo: "📄 Oraciones de Relativo (El ESE)",
                                        texto: `
        <p>Las oraciones de relativo funcionan como un adjetivo (la caja del <b>ESE</b>). Describen a un nombre llamado <b>antecedente</b> y se colocan <b>antes</b> de él.</p>

        <h3>1. El nexo principal: -(e)n</h3>
        <p>Es la forma más usada. Compara estas dos formas de decir lo mismo:</p>
        <div class="bloque-ejemplos">
            <p><b>• Sintagma adjetival:</b> <span class="frase-traduccion" onclick="traducir(this, 'La casa del camino')">Bide<b>ko</b> etxea.</span></p>
            <p><b>• Oración de relativo:</b> <span class="frase-traduccion" onclick="traducir(this, 'La casa que está en el camino')">Bidean dago<b>en</b> etxea.</span></p>
        </div>

        <h3>2. Tipos de Relativo</h3>
        <ul>
            <li><span class="caja-gramatical caja-adj" onclick="simplificar(this, 'Restrictiva: Concreta de quién hablamos. Ej: Dendan zegoen emakumea (La mujer que estaba en la tienda).', event)">Restrictiva</span></li>
            <li><span class="caja-gramatical caja-adj" onclick="simplificar(this, 'Explicativa: Añade info extra. Ej: Zure amak, beti sukaldean dabilen horrek... (Tu madre, que siempre anda en la cocina...)', event)">Explicativa</span></li>
        </ul>

        [BATERIA:0]

        <h3>3. Declinación del Antecedente</h3>
        <p>El nombre al que describimos puede llevar cualquier sufijo. Fíjate en cómo cambia <b>langile</b> (trabajador):</p>
        <div class="bloque-ejemplos">
            <p><b>• NOR:</b> <span class="frase-traduccion" onclick="traducir(this, 'El trabajador que ha venido es el hijo del jefe')">Bulegora etorri de<b>n</b> langilea nagusiaren semea da.</span></p>
            <p><b>• NORK:</b> <span class="frase-traduccion" onclick="traducir(this, 'Lo ha dicho el trabajador que ha venido')">Bulegora etorri de<b>n</b> langile<b>ak</b> esan du.</span></p>
            <p><b>• NOREKIN:</b> <span class="frase-traduccion" onclick="traducir(this, 'Se ha ido con el trabajador que ha venido')">Bulegora etorri de<b>n</b> langile<b>arekin</b> joan da.</span></p>
        </div>

        <h3>4. Cuando el nombre desaparece (Isilekoa)</h3>
        <p>Si quitamos el nombre, el sufijo se pega directamente al verbo de la subordinada:</p>
        <div class="bloque-ejemplos">
            <p><b>• Ejemplo:</b> <span class="frase-traduccion" onclick="traducir(this, 'El que ha venido es el hijo del jefe')">Bulegora etorri de<b>na</b> nagusiaren semea da.</span></p>
        </div>

        [BATERIA:1]
    `,
                                        ejercicios: [
                                            [ // BATERIA 0: Concepto de Relativo
                                                {
                                                    id: "rel_teo_1",
                                                    pregunta: "¿Dónde se coloca la oración de relativo en euskera?",
                                                    tipo: "choice",
                                                    frase: "Se coloca ___ del nombre.",
                                                    opciones: ["Antes", "Después", "En medio"],
                                                    correcta: "Antes",
                                                    ayuda: "Estructura: [Frase subordinada] + (e)n + [Nombre]"
                                                },
                                                {
                                                    id: "rel_teo_2",
                                                    pregunta: "Completa el nexo: 'La chica que has visto'",
                                                    tipo: "input",
                                                    frase: "Ikusi duzu___ neska.",
                                                    correcta: "n",
                                                    ayuda: "Sufijo -(e)n"
                                                }
                                            ],
                                            [ // BATERIA 1: Declinación
                                                {
                                                    id: "rel_dec_1",
                                                    pregunta: "Traduce: 'Lo ha dicho el que ha venido' (NORK)",
                                                    tipo: "input",
                                                    frase: "Etorri de<b>n</b>___ esan du.",
                                                    correcta: "ak",
                                                    ayuda: "Etorri den (el que ha venido) + ak (quien hace la acción)"
                                                },
                                                {
                                                    id: "rel_dec_2",
                                                    pregunta: "Ordena: 'La ropa que no estaba en el armario'",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Armairuan ez zegoen arropa",
                                                    ayuda: "Armairuan (en el armario) + ez zegoen (que no estaba) + arropa (ropa)"
                                                }
                                            ]
                                        ]
                                    },
                                    { //📄 el antecedente ¿quien es quien?
                                        id: "subordinadas-relativo-antecedente",
                                        titulo: "📄 El Antecedente: ¿Quién es quién?",
                                        texto: `
        <p>En una oración de relativo, el <b>antecedente</b> es el nombre (sustantivo) al que estamos describiendo. Es el "ancla" que une la frase principal con la subordinada.</p>

        <h3>1. ¿Cómo identificarlo?</h3>
        <p>El antecedente es la palabra que responde a la pregunta <b>"¿Qué cosa?"</b> o <b>"¿Qué persona?"</b> de la descripción. Toca las cajas para ver el análisis:</p>
        
        <div class="bloque-subordinadas">
            <p><b>Frase:</b> <i>Etxean ikusi dugun <b>neska</b> Amaia da.</i></p>
            <ul>
                <li><span class="caja-gramatical caja-adj" onclick="simplificar(this, 'Subordinada: Etxean ikusi dugun (Que hemos visto en casa). Su función es ser el adjetivo de la chica.', event)">¿Cuál es la descripción?</span></li>
                <li><span class="caja-gramatical caja-adj" onclick="simplificar(this, 'Antecedente: Neska (la chica). Es el nombre sobre el que recae la descripción.', event)">¿Quién es el antecedente?</span></li>
                <li><span class="caja-gramatical caja-adj" onclick="simplificar(this, 'Principal: Neska Amaia da (La chica es Amaia). Es la frase que tiene sentido por sí sola.', event)">¿Cuál es la frase principal?</span></li>
            </ul>
        </div>

        <h3>2. El "Elemento Silenciado" (Isilekoa)</h3>
        <p>El antecedente es una palabra que "vive" en las dos frases, pero en euskera <b>solo se escribe una vez</b>. Toca para ver la disección:</p>
        
        <div class="bloque-ejemplos">
            <p><b>1. Frase A:</b> Aitonak <u>istorioak</u> kontatzen ditu.</p>
            <p><b>2. Frase B:</b> <u>Istorioak</u> gerrari buruz dira.</p>
            <p><b>Resultado:</b> Aitonak kontatzen dituen <b>istorioak</b> gerrari buruz dira.</p>
            <br>
            <span class="caja-gramatical caja-sus" onclick="simplificar(this, 'Istorioak es el antecedente porque aparece en la principal, y es el elemento silenciado porque desaparece de la subordinada para no repetirse.', event)">¿Por qué desaparece una vez?</span>
        </div>

        [BATERIA:0]

        <h3>3. El orden de los factores</h3>
        <p>En euskera, el antecedente <b>SIEMPRE</b> va después de la descripción. Es como si el adjetivo fuera una frase entera:</p>
        <div class="bloque-ejemplos">
            <p>• Adjetivo (izenlaguna) simple:<br> <i><b>bideko</b> etxea </i> (La casa del camino)</p>
            <p>• "Adjetivo" relativo: <br><i><b>[bidean dagoen]</b> etxea</i> (la casa [que está en el camino])</p>
        </div>

        [BATERIA:1]
    `,
                                        ejercicios: [
                                            [ // BATERIA 0: Identificar el antecedente
                                                {
                                                    id: "ant_id_1",
                                                    pregunta: "¿Cuál es el antecedente en: 'Erosi dugun liburua berria da'?",
                                                    tipo: "choice",
                                                    frase: "El antecedente es ___ ",
                                                    opciones: ["Erosi", "liburua", "berria"],
                                                    correcta: "liburua",
                                                    ayuda: "Es el objeto que estamos describiendo con 'que hemos comprado'."
                                                },
                                                {
                                                    id: "ant_id_2",
                                                    pregunta: "En 'Zuek apurtu duzuen mugikorra...', ¿qué palabra se ha silenciado?",
                                                    tipo: "input",
                                                    frase: "Se ha silenciado la palabra ___.",
                                                    correcta: "mugikorra",
                                                    ayuda: "Es la palabra que no repetimos dentro de la frase subordinada."
                                                }
                                            ],
                                            [ // BATERIA 1: Construcción con antecedente
                                                {
                                                    id: "ant_sort_1",
                                                    pregunta: "Ordena: 'La mujer que estaba en la tienda'",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Dendan zegoen emakumea",
                                                    ayuda: "Descripción (Dendan zegoen) + Antecedente (emakumea)"
                                                }
                                            ]
                                        ]
                                    },
                                    { //📄  simetría con adjetivos izenlagun
                                        id: "subordinadas-relativo-simetria",
                                        titulo: "📄  simetría con adjetivos izenlagun",
                                        texto: `
        <p>Las oraciones de relativo funcionan como un adjetivo descriptivo (la caja del <b>ESE</b>). En euskera, al igual que los posesivos, se colocan <b>antes</b> del nombre.</p>

        <h3>1. Simetría: Izenlaguna vs Relativo</h3>
        <p>Fíjate en cómo ambas estructuras preceden al nombre:</p>
        <div class="bloque-ejemplos">
            <p><b>• [Izenlaguna] (Sintagma):</b><br/> <span class="frase-traduccion" onclick="traducir(this, 'La casa del camino')"><b>[Bideko]</b> (etxea).</span></p>
            <p><b>• [Erlatibozkoa] (Oración):<br/></b> <span class="frase-traduccion" onclick="traducir(this, 'La casa que está en el camino')"><b>[Bidean dagoen]</b> (etxea).</span></p>
        </div>
        <p><small><i>Ambas piezas se cuelgan "delante" de la palabra <b>etxea</b>.</i></small></p>

        <h3>2. El Antecedente: El "Ancla"</h3>
        <p>El <b>antecedente</b> es el nombre al que se refiere la descripción. Toca para ver cómo identificarlo:</p>
        
        <div class="bloque-subordinadas">
            <p><b>Frase:</b> <i>[Etorri den] <b>neska</b> Amaia da.</i></p>
            <ul>
                <li><span class="caja-gramatical caja-adj" onclick="simplificar(this, 'Descripción: Etorri den (que ha venido). Funciona igual que decir nire (mi).', event)">¿Qué es la descripción?</span></li>
                <li><span class="caja-gramatical caja-adj" onclick="simplificar(this, 'Antecedente: Neska (la chica). Es la palabra ancla que une todo.', event)">¿Quién es el antecedente?</span></li>
            </ul>
        </div>

        [BATERIA:0]

        <h3>3. El "Elemento Silenciado" (Isilekoa)</h3>
        <p>El nombre compartido solo se escribe una vez. En la frase pequeña "desaparece" para no repetirse:</p>
        <div class="bloque-ejemplos">
            <p>1. <b>[Nire]</b> laguna etorri da.</p>
            <p>2. <b>[Atzo ikusi genuen]</b> laguna etorri da.</p>
            <p><small><i>Igual que no dices "Nire laguna laguna", no dices "Atzo ikusi genuen laguna laguna".</i></small></p>
        </div>

        [BATERIA:1]
    `,
                                        ejercicios: [
                                            [ // BATERIA 0
                                                {
                                                    id: "rel_teo_corr_1",
                                                    pregunta: "¿Cuál es el orden correcto en euskera?",
                                                    tipo: "choice",
                                                    frase: "Se coloca ___ ",
                                                    opciones: ["Descripción + Nombre", "Nombre + Descripción"],
                                                    correcta: "Descripción + Nombre",
                                                    ayuda: "Igual que 'Nire etxea' o 'Bideko etxea'."
                                                }
                                            ],
                                            [ // BATERIA 1
                                                {
                                                    id: "rel_teo_corr_2",
                                                    pregunta: "Ordena: 'El amigo que vimos ayer'",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Atzo ikusi genuen laguna",
                                                    ayuda: "Descripción (Atzo ikusi genuen) + Antecedente (laguna)"
                                                }
                                            ]
                                        ]
                                    },
                                    { //📄 Límites y Choque de Casos
                                        id: "subordinadas-relativo-limites",
                                        titulo: "📄 Límites y Choque de Casos",
                                        texto: `
        <p>Cuando el nombre (antecedente) lleva un sufijo de declinación, este se coloca <b>al final de todo el bloque</b>.</p>

        <div class="bloque-ejemplos">
            <b>Ejemplo de 'La Maestra' (Andereñoa):</b><br>
            <p>Si la frase principal dice que el regalo es <b>para la maestra</b> (-rentzat):</p>
            <span class="frase-traduccion" onclick="traducir(this, 'El regalo es para la maestra que hemos visto con Miren')"><b>[Miren ikusi dugun andereñoa]</b>rentzat da oparia.</span>
        </div>

        <p>Toca para entender la ley de jerarquía:</p>
        <div class="bloque-subordinadas">
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Ley del Antecedente: El nombre de la frase principal impone su caso. El caso de la subordinada (con la maestra) desaparece.', event)">¿Quién manda?</span></p>
        </div>

        [BATERIA:0]
    `,
                                        ejercicios: [
                                            [
                                                {
                                                    id: "rel_lim_corr_1",
                                                    pregunta: "Completa el bloque: 'Para el trabajador que ha venido'",
                                                    tipo: "input",
                                                    frase: "Bulegora etorri den langilea___",
                                                    correcta: "rentzat",
                                                    ayuda: "El sufijo de la principal envuelve a todo el bloque de relativo."
                                                }
                                            ]
                                        ]
                                    },
                                    { //📄 Relativo: Más allá del -(e)n
                                        id: "subordinadas-relativo-avanzado",
                                        titulo: "📄 Relativo: Más allá del -(e)n",
                                        texto: `
        <p>Aunque <b>-(e)n</b> es el nexo estándar, existen otras formas de construir adjetivas según el contexto:</p>

        <h3>1. Otras formas de construcción</h3>
        <ul>
            <li><b>-(e)nik:</b> Relativos en frases negativas o de duda.
                <br><i>Ez dut uste etorriko de<b>nik</b> gizonik dagoenik.</i></li>
            <li><b>-neko:</b> Para indicar tiempo transcurrido.</li>
            <li><b>-tako / -riko:</b> Participios adjetivados (la caja del ESE rápida).
                <br><span class="frase-traduccion" onclick="traducir(this, 'El libro comprado ayer')">Atzo erosi<b>tako</b> liburua.</span></li>
            <li><b>Zein(a)...bait- / -n:</b> Formas literarias o de Iparralde.</li>
        </ul>

        [BATERIA:0]

        <h3>2. Cuando los casos NO coinciden</h3>
        <p>Este es el gran límite del relativo. Mira este problema:</p>
        <div class="bloque-ejemplos">
            1. Hemos visto a Miren <b>con la maestra</b> (<i>andereñoarekin</i>).<br>
            2. El regalo es <b>para la maestra</b> (<i>andereñoarentzat</i>).<br>
            <p>En euskera <b>NO</b> podemos decir: "El regalo es para la maestra con la que hemos visto a Miren".</p>
        </div>

        <h3>3. Reglas de Coincidencia de Casos</h3>
        <p>Solo podemos unir frases de relativo fácilmente si el nombre comparte el mismo caso:</p>
        <div class="bloque-ejemplos">
            <p><b>• Caso NORI + NORI:</b><br>
            <span class="frase-traduccion" onclick="traducir(this, 'Le he llevado el pedido al cliente al que le he explicado los problemas')">Gure banaketa-arazoak azaldu dizkio<b>dan</b> bezeroari eskaera eraman diot.</span></p>
        </div>

        <p><i>Fíjate en el cambio: dizkioda<b>n</b> (al que yo le he...).</i></p>
        [BATERIA:1]
    `,
                                        ejercicios: [
                                            [ // BATERIA 0: Otras formas
                                                {
                                                    id: "rel_adv_1",
                                                    pregunta: "¿Qué sufijo usarías para 'el libro comprado'?",
                                                    tipo: "choice",
                                                    frase: "Erosi___ liburua.",
                                                    opciones: ["tako", "la", "nik"],
                                                    correcta: "tako",
                                                    ayuda: "Participio + tako/riko para adjetivar."
                                                }
                                            ],
                                            [ // BATERIA 1: Casos complejos
                                                {
                                                    id: "rel_adv_2",
                                                    pregunta: "Completa el nexo NORI: 'Al cliente que le he explicado...'",
                                                    tipo: "input",
                                                    frase: "Azaldu dizkio___ bezeroari.",
                                                    correcta: "dan",
                                                    ayuda: "dizkiot + n = dizkiodan."
                                                },
                                                {
                                                    id: "rel_adv_3",
                                                    pregunta: "Ordena: 'El móvil que han roto los amigos'",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Lagunek apurtu duten mugikorra",
                                                    ayuda: "Móvil (mugikorra) + han roto (apurtu duten) + amigos (lagunek)"
                                                }
                                            ]
                                        ]
                                    },
                                    { //📄 Relativo: ¿Quién manda en la declinación?
                                        id: "relativo-choque-declinaciones",
                                        titulo: "📄 Relativo: ¿Quién manda en la declinación?",
                                        texto: `
        <p>Cuando unimos dos frases en un relativo, a veces el nombre compartido tiene casos distintos. En euskera, <b>el antecedente (frase principal) siempre impone su declinación</b> sobre el elemento silenciado.</p>

        <h3>1. Casos Coincidentes (Sin conflicto)</h3>
        <p>Si ambas frases piden el mismo caso, la unión es natural:</p>
        <div class="bloque-ejemplos">
            <p><b>• Caso NORI + NORI:</b><br>
            1. He explicado los problemas <b>al cliente</b> (<i>bezeroari</i>).<br>
            2. Le he llevado el pedido <b>al cliente</b> (<i>bezeroari</i>).<br>
            <span class="frase-traduccion" onclick="traducir(this, 'Le he llevado el pedido al cliente al que le he explicado los problemas')">Gure banaketa-arazoak azaldu dizkio<b>dan</b> bezeroari eskaera eraman diot.</span></p>
        </div>

        [BATERIA:0]

        <h3>2. Casos Diferentes: La Ley del Antecedente</h3>
        <p>Si la principal pide un caso y la subordinada otro, <b>manda la principal</b>. La declinación de la subordinada desaparece (se silencia):</p>
        
        <div class="bloque-ejemplos">
            <b>El dilema de la Maestra (Andereño):</b><br>
            1. Hemos visto a Miren <b>con la maestra</b> (<i>andereñoarekin</i> -> NOREKIN).<br>
            2. El regalo es <b>para la maestra</b> (<i>andereñoarentzat</i> -> NORENTZAT).<br>
            <p>En euskera, al ser la principal "para la maestra", esa es la que manda:</p>
            <span class="frase-traduccion" onclick="traducir(this, 'El regalo es para la maestra que hemos visto con Miren')">Miren ikusi dugu<b>n</b> andereñoare<b>ntzat</b> da oparia.</span>
        </div>

        <p>⚠️ <b>Atención:</b> Fíjate que el <i>-rekin</i> de la subordinada ha desaparecido totalmente. Por eso a veces estas frases son ambiguas y el contexto es clave.</p>

        [BATERIA:1]

        <h3>3. El cambio en el verbo: -(e)dan, -(e)zun...</h3>
        <p>Cuando el elemento silenciado es un <b>NORK</b> o un <b>NORI</b>, el verbo de la subordinada "avisa" del cambio:</p>
        <ul>
            <li>Dizkiot + n ➔ <b>dizkiodan</b></li>
            <li>Dizkiozu + n ➔ <b>dizkiozun</b></li>
            <li>Dizkie + n ➔ <b>dizkien</b></li>
        </ul>

        <div class="bloque-ejemplos">
            <span class="frase-traduccion" onclick="traducir(this, 'El cliente al que tú le has explicado los problemas...')">Zuk banaketa-arazoak azaldu dizkiozu<b>n</b> bezeroa...</span>
        </div>

        [BATERIA:2]
    `,
                                        ejercicios: [
                                            [ // BATERIA 0: Casos coincidentes
                                                {
                                                    id: "rel_ch_1",
                                                    pregunta: "Une las frases del móvil (NOR + NOR):",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Lagunek apurtu duten mugikorra Aitorrena da",
                                                    ayuda: "Móvil (mugikorra) + han roto (apurtu duten) + es de Aitor (Aitorrena da)"
                                                }
                                            ],
                                            [ // BATERIA 1: La ley del antecedente
                                                {
                                                    id: "rel_ch_2",
                                                    pregunta: "¿Qué declinación manda en el relativo?",
                                                    tipo: "choice",
                                                    frase: "Manda la de la oración ___ ",
                                                    opciones: ["Principal (Antecedente)", "Subordinada", "Ninguna"],
                                                    correcta: "Principal (Antecedente)",
                                                    ayuda: "El antecedente impone su sufijo al final de todo el bloque."
                                                },
                                                {
                                                    id: "rel_ch_3",
                                                    pregunta: "Completa para la maestra: 'Andereñoaren...'",
                                                    tipo: "input",
                                                    frase: "Miren ikusi dugun andereñoaren___ da oparia.",
                                                    correcta: "tzat",
                                                    ayuda: "Para la maestra = andereñoarentzat."
                                                }
                                            ],
                                            [ // BATERIA 2: Verbos mutantes
                                                {
                                                    id: "rel_ch_4",
                                                    pregunta: "Si el verbo es 'dizkiot', ¿cómo queda en relativo?",
                                                    tipo: "input",
                                                    frase: "Azaldu dizkio___ bezeroari.",
                                                    correcta: "dan",
                                                    ayuda: "dizkiot + n = dizkiodan"
                                                }
                                            ]
                                        ]
                                    },
                                    {//📄 Límites: Cuando el caso coincide
                                        id: "subordinadas-relativo-limites2",
                                        titulo: "📄 Límites: Cuando el caso coincide",
                                        texto: `
        <p>Una oración de relativo une dos frases que comparten un nombre. En euskera, si ambas frases usan el mismo <b>caso de declinación</b> para ese nombre, la unión es sencilla.</p>

        <div class="bloque-ejemplos">
            <b>Ejemplo (Caso NOR):</b><br>
            1. Los amigos han roto el móvil.<br>
            2. El móvil es de Aitor.<br>
            <span class="frase-traduccion" onclick="traducir(this, 'El móvil que han roto los amigos es de Aitor')">Lagunek apurtu dute<b>n</b> mugikorra Aitorrena da.</span>
        </div>

        <div class="bloque-ejemplos">
            <b>Ejemplo (Caso NOREKIN):</b><br>
            1. Ayer habló con una chica.<br>
            2. Ha quedado con esa chica.<br>
            <span class="frase-traduccion" onclick="traducir(this, 'Ha quedado con la chica con la que habló ayer')">Atzo hitz egin zue<b>n</b> neskarekin geratu da.</span>
        </div>

        <p>⚠️ <b>Atención:</b> Cuando los casos son diferentes (ej: uno es "para la maestra" y otro "con la maestra"), el euskera requiere reglas más complejas que veremos más adelante.</p>

        [BATERIA:0]
    `,
                                        ejercicios: [
                                            [
                                                {
                                                    id: "rel_lim_1",
                                                    pregunta: "Une las frases: 'Aitonak kontatzen ditu istorioak' + 'Istorioak gerrari buruz dira'",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Aitonak kontatzen dituen istorioak gerrari buruz dira",
                                                    ayuda: "El abuelo cuenta historias + Las historias son sobre la guerra = Las historias que cuenta el abuelo..."
                                                },
                                                {
                                                    id: "rel_lim_2",
                                                    pregunta: "Completa el nexo: 'La chica con la que habló'",
                                                    tipo: "input",
                                                    frase: "Hitz egin zue___ neskarekin.",
                                                    correcta: "n",
                                                    ayuda: "Nexo -(e)n"
                                                }
                                            ]
                                        ]
                                    },

                                ]
                            },

                        ]
                    },
                    {
                        id: "subordinadas-adverbiales",
                        titulo: "📁 Oraciones Subordinadas Adverbiales",
                        hijos: [
                            {
                                id: "adv-temporales",
                                titulo: "📁 Temporales (Denborazkoak)",
                                hijos: [


                                ]
                            },
                            { id: "adv-modales", titulo: "📁 Modales (Moduzkoak)", hijos: [] },
                            { //finales
                                id: "adv-finales",
                                titulo: "📁 Finales (Helburuzkoak)",
                                hijos: [
                                    {
                                        id: "adv-finales-tema",
                                        titulo: "📄 Finales: Zertara vs Zertarako",
                                        texto: `
        <p>Las oraciones finales indican el objetivo o la intención de una acción. En euskera, la clave es saber si te mueves hacia un objetivo o si indicas el uso de algo.</p>

        <h3>1. Zertara? ➔ -t(z)era (¿A qué?)</h3>
        <p>Se usa con verbos de <b>movimiento</b> (<i>joan, etorri, irten...</i>). Es la meta de tu desplazamiento.</p>
        
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Voy a tomar un café')">Kafe bat har<b>tzera</b> noa.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Vamos a nadar')">Igeri egi<b>tera</b> goaz.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'He venido a estar contigo')">Zurekin ego<b>tera</b> etorri naiz.</span></p>
        </div>

        <div class="bloque-subordinadas">
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Morfología: Verbo en participio + -t(z)e + sufijo -ra (hacia). Indica movimiento físico hacia una actividad.', event)">¿Por qué termina en -ra?</span></p>
        </div>

        [BATERIA:0]

        <h3>2. Zertarako? ➔ -t(z)eko (¿Para qué?)</h3>
        <p>Indica la <b>finalidad</b> o utilidad de algo. Suele ir con verbos como <i>izan, erosi, erabili, balio izan...</i></p>
        
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Para limpiar el coche es')">Autoa garbi<b>tzeko</b> da.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Las cosas son para usarlas')">Gauzak erabil<b>tzeko</b> dira.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Eso no vale para estudiar')">Horrek ez du ikas<b>teko</b> balio.</span></p>
        </div>

        <div class="bloque-subordinadas">
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Morfología: Verbo en participio + -t(z)e + sufijo -ko (de). Indica la característica o destino de un objeto.', event)">¿Por qué termina en -ko?</span></p>
        </div>

        [BATERIA:1]

        <h3>3. Entrenamiento de Traducción</h3>
        <p>Prueba con estas frases antes de pulsar para ver la solución:</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Paseatzera joan da.')">Se ha ido a pasear.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Nik ez dut txisteak kontatzeko balio.')">Yo no valgo para contar chistes.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Kutxa hori gauzak gordetzeko erabiltzen dut.')">Esa caja la utilizo para guardar cosas.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Zuekin hitz egitera etorri naiz.')">He venido a hablar con vosotros.</span></p>
        </div>

        [BATERIA:2]
    `,
                                        ejercicios: [
                                            [ // BATERIA 0: Zertara
                                                {
                                                    id: "fin_1",
                                                    pregunta: "Completa el movimiento: 'Voy a casa a estudiar'",
                                                    tipo: "input",
                                                    frase: "Etxera joan da ikas<b>te</b>___",
                                                    correcta: "ra",
                                                    ayuda: "Es un movimiento hacia la actividad de estudiar."
                                                },
                                                {
                                                    id: "fin_2",
                                                    pregunta: "Ordena: 'Vete a comprar el pan'",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Zoaz ogia erostera",
                                                    ayuda: "Zoaz (vete) + ogia (el pan) + erostera (a comprar)"
                                                }
                                            ],
                                            [ // BATERIA 1: Zertarako
                                                {
                                                    id: "fin_3",
                                                    pregunta: "Completa la utilidad: 'Esto es para jugar'",
                                                    tipo: "input",
                                                    frase: "Hori jolas<b>te</b>___ da.",
                                                    correcta: "ko",
                                                    ayuda: "Indica para qué sirve el objeto."
                                                },
                                                {
                                                    id: "fin_4",
                                                    pregunta: "¿Cuál elegirías? '¿Para qué vale esto?'",
                                                    tipo: "choice",
                                                    frase: "Zertarako balio du honek? Kristalak garbi___.",
                                                    opciones: ["tzeko", "tzera"],
                                                    correcta: "tzeko",
                                                    ayuda: "Con el verbo 'balio izan' siempre usamos -tzeko."
                                                }
                                            ],
                                            [ // BATERIA 2: Mix Final
                                                {
                                                    id: "fin_5",
                                                    pregunta: "Traduce: 'Voy a casa a cenar'",
                                                    tipo: "input",
                                                    frase: "Etxera noa afal<b>tzea</b>___",
                                                    correcta: "ra",
                                                    ayuda: "Movimiento = Zertara"
                                                },
                                                {
                                                    id: "fin_6",
                                                    pregunta: "Ordena: 'Esto es para hacer un regalo'",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Hau opari bat egiteko da",
                                                    ayuda: "Hau (esto) + opari bat (un regalo) + egiteko da (es para hacer)"
                                                }
                                            ]
                                        ]
                                    },
                                    {
                                        id: "adv-finales-estructuras",
                                        titulo: "📄 Finales: Estructura y Negación",
                                        texto: `
        <p>Ya sabemos distinguir entre <b>Zertara</b> y <b>Zertarako</b>. Ahora vamos a ver cómo se ordenan las palabras y cómo negar estas frases.</p>

        <h3>1. La Negación (Ez... -t(z)eko / Ez... -t(z)era)</h3>
        <p>Para indicar que algo <b>no</b> es para un fin, o que vamos a <b>no</b> hacer algo, el <b>ez</b> se coloca justo antes del verbo final:</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Me ha dicho que no vaya')">Ez joa<b>teko</b> esan dit.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Nos han dicho que no nos acerquemos')">Ez hurbil<b>tzeko</b> esan digute.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Yo no valgo para contar chistes')">Nik <b>ez</b> dut txisteak konta<b>tzeko</b> balio.</span></p>
        </div>

        [BATERIA:0]

        <h3>2. El orden en las respuestas (Zertarako?)</h3>
        <p>Cuando respondemos a una pregunta, a menudo omitimos el resto de la frase y nos centramos en el nexo:</p>
        <div class="bloque-ejemplos">
            <p><b>• ¿Para qué vale esto?</b><br>
            <span class="frase-traduccion" onclick="traducir(this, 'Zertarako balio du honek? Kristalak garbitzeko.')">Kristalak garbi<b>tzeko</b>.</span></p>
            <p><b>• ¿A qué has venido?</b><br>
            <span class="frase-traduccion" onclick="traducir(this, 'Zertara etorri zara? Zuekin hitz egitera.')">Zuekin hitz egi<b>tera</b>.</span></p>
        </div>

        <div class="bloque-subordinadas">
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Orden: El elemento final (tzeko/tzera) suele ir inmediatamente antes del verbo principal (balio, erabili, joan) porque es el Galdegaia (el foco de la frase).', event)">¿Por qué va al final?</span></p>
        </div>

        [BATERIA:1]

        <h3>3. Otros verbos de finalidad: Erabili</h3>
        <p>Además de "balio izan" (valer para), usamos mucho <b>erabili</b> (usar para):</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Esa caja la utilizo para guardar cosas')">Kutxa hori gauzak gordi<b>tzeko</b> erabiltzen dut.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'He comprado este ordenador para hacer trabajos')">Ordenagailu hau idazlanak egi<b>teko</b> erosi dut.</span></p>
        </div>

        [BATERIA:2]
    `,
                                        ejercicios: [
                                            [ // BATERIA 0: Negación
                                                {
                                                    id: "fin_neg_1",
                                                    pregunta: "Completa la negación: 'No vale para estudiar'",
                                                    tipo: "input",
                                                    frase: "Horrek <b>ez</b> du ikas<b>te</b>___ balio.",
                                                    correcta: "ko",
                                                    ayuda: "Utilidad negativa = -tzeko"
                                                },
                                                {
                                                    id: "fin_neg_2",
                                                    pregunta: "Ordena: 'Nos han dicho que no nos acerquemos'",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Ez hurbiltzeko esan digute",
                                                    ayuda: "Ez + hurbiltzeko (finalidad) + esan digute (nos han dicho)"
                                                }
                                            ],
                                            [ // BATERIA 1: Respuestas cortas
                                                {
                                                    id: "fin_resp_1",
                                                    pregunta: "¿A qué has venido? (Hitz egitera):",
                                                    tipo: "input",
                                                    frase: "Zuekin hitz egi___ etorri naiz.",
                                                    correcta: "tera",
                                                    ayuda: "He venido A HABLAR (movimiento)."
                                                }
                                            ],
                                            [ // BATERIA 2: Erabili y Balio
                                                {
                                                    id: "fin_erab_1",
                                                    pregunta: "¿Qué nexo pide 'erabili' (usar)?",
                                                    tipo: "choice",
                                                    frase: "Kutxa hau gauzak gorde___ erabiltzen dut.",
                                                    opciones: ["tzeko", "teko", "tzera", "tera"],
                                                    correcta: "tzeko",
                                                    ayuda: "Usar ALGO PARA algo = -t(z)eko"
                                                },
                                                {
                                                    id: "fin_erab_2",
                                                    pregunta: "Ordena: 'Yo no valgo para contar chistes'",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Nik ez dut txisteak kontatzeko balio",
                                                    ayuda: "Nik + ez dut + txisteak kontatzeko (finalidad) + balio (valgo)"
                                                }
                                            ]
                                        ]
                                    },
                                    {
                                        id: "adv-finales-regla-definitiva",
                                        titulo: "💡 Guía Definitiva: ¿Cuándo poner la 'Z'?",
                                        texto: `
        <p>Para no equivocarte nunca, fíjate en cómo termina el verbo en el diccionario. Hay tres grupos claros:</p>

        <h3>1. Verbos terminados en -i (Sin Z)</h3>
        <p>- Quitamos la -<b>i</b> <br/>- Añadimos -<b>teko </b>/ -<b>tera</b> <br/>(<b>sin</b> Z):</p>
        <div class="bloque-subordinadas">
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'IKUSI ➔ Ikus + teko = IKUSTEKO', event)">Ikusi</span></p>
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'EROSI ➔ Eros + teko = EROSTEKO', event)">Erosi</span></p>
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'IBILI ➔ Ibil + teko = IBILTEKO', event)">Ibili</span></p>
        </div>

        <h3>2. Verbos terminados en -N</h3>
        <p><p>- Quitamos la -<b>n</b><br/>- Añadimos -<b>teko</b> / -<b>tera</b><br/>(<b>Sin</b> Z):</p>
        <div class="bloque-subordinadas">
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'JAN ➔ Jateko / Jatera', event)">Jan</span></p>
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'EGIN ➔ Egiteko / Egitera', event)">Egin</span></p>
        </div>

        <h3>3. Verbos en -TU / -DU (Con Z)</h3>
        <p><p>- Quitamos el -<b>tu</b>/-<b>du</b><br/>- Añadimos -<b>tzeko</b> / -<b>tzera</b><br/>(<b>Con</b> Z):</p>
        <div class="bloque-subordinadas">
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'AFALDU ➔ Afal + tzeko = AFALTZEKO', event)">Afaldu</span></p>
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'GARBITU ➔ Garbi + tzeko = GARBITZEKO', event)">Garbitu</span></p>
        </div>

        [BATERIA:0]
    `,
                                        ejercicios: [
                                            [
                                                {
                                                    id: "final_v2_1",
                                                    pregunta: "Verbo IKUSI. ¿Para qué sirve?",
                                                    tipo: "input",
                                                    frase: "Telebista ikus___ da.",
                                                    correcta: "teko",
                                                    ayuda: "Termina en -i, quitas la 'i' y elige -teko o -tzeko."
                                                },
                                                {
                                                    id: "final_v2_2",
                                                    pregunta: "Verbo AFALDU. ¿A qué vas?",
                                                    tipo: "input",
                                                    frase: "Etxera noa afal___.",
                                                    correcta: "tzera",
                                                    ayuda: "Termina en -du, se convierte en -tze<b>ra</>."
                                                },
                                                {
                                                    id: "final_v2_3",
                                                    pregunta: "Verbo JAN. ¿A qué vas?",
                                                    tipo: "choice",
                                                    frase: "Ogia ja___ noa.",
                                                    opciones: ["tera", "tzera"],
                                                    correcta: "tera",
                                                    ayuda: "Termina en -n, usa -tera."
                                                }
                                            ]
                                        ]
                                    }
                                ]
                            },
                            { id: "adv-causales", titulo: "📁 Causales (Kausazkoak)", hijos: [] },
                            { id: "adv-concesivas", titulo: "📁 Concesivas (Kontzesiboak)", hijos: [] },
                            { //condicionales
                                id: "adv-condicionales",
                                titulo: "📁 Condicionales (Baldintzazkoak)",
                                hijos: [
                                    {
                                        id: "adv-condicionales-clon-1",
                                        titulo: "📄 Condicionales: Introducción y nexo BA-",
                                        texto: `
        <p>Como ya se ha dicho previamente, las oraciones condicionales son las oraciones en las que se expresa una condición (<b>baldintza</b>), imprescindible para que se pueda cumplir una consecuencia (<b>ondorioa</b>).</p>
        <p>La consecuencia (ondorioa) es la oración principal y la condición (baldintza), es la oración subordinada. Lo más frecuente es colocar primero la oración subordinada (baldintza) y después la principal (ondorioa).</p>

        <h3>Tipos de oraciones condicionales</h3>
        <div class="bloque-ejemplos">
            <p><b>• Reales o no hipotéticas:</b> La acción tiene muchas posibilidades de llevarse a cabo.<br>
            <span class="frase-traduccion" onclick="traducir(this, 'Si hace buen tiempo, iremos al monte.')">Giro ona egiten <b>ba</b>du, mendira joango gara.</span></p>
            
            <p><b>• Hipotéticas (orainaldia - geroaldia):</b> Tienen pocas posibilidades de llevarse a cabo.<br>
            <span class="frase-traduccion" onclick="traducir(this, 'Si hiciera buen tiempo, iríamos al monte.')">Giro ona egingo <b>ba</b>lu, mendira joango ginateke.</span></p>
            
            <p><b>• Hipotéticas irreales en pasado:</b> Es imposible que se lleve a cabo (ya pasó el momento).<br>
            <span class="frase-traduccion" onclick="traducir(this, 'Si hubiera hecho buen tiempo, habríamos ido al monte.')">Giro ona egin izan <b>ba</b>lu, mendira joango ginen.</span></p>
        </div>

        <h3>Formas de construcción</h3>
        <ul>
            <li><b>Con el verbo conjugado:</b> Usando el sufijo "ba-" o la forma "baldin ba-".</li>
            <li><b>Con el verbo sin conjugar (participio):</b> Usando "-z gero", "ezik/ezean", "-t(z)ekotan" o "-t(z)era".</li>
        </ul>

        <hr>

        <h3>El prefijo Ba-</h3>
        <p>Es el que más se usa. Se une al auxiliar o al verbo sintético de la subordinada:</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si estudias, aprobarás la asignatura.')">Ikasten <b>ba</b>duzu, ikasgaia aprobatuko duzu.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si estás formal, te compraré algo.')">Formal <b>ba</b>zabiltza, zerbait erosiko dizut.</span></p>
        </div>

        <div class="bloque-subordinadas">
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Fijarse en que entre la subordinada y la principal va una coma.', event)">Nota de puntuación</span></p>
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Cuando la subordinada es negativa se añade la partícula ez antes del verbo auxiliar o sintético con el prefijo ba-.', event)">Nota sobre la negación</span></p>
        </div>

        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si no estudias, no aprobarás la asignatura.')">Ikasten ez <b>ba</b>duzu, ez duzu ikasgaia aprobatuko.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si no estás formal, no te compraré nada.')">Formal ez <b>ba</b>zabiltza, ez dizut ezer erosiko.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, '¿Y tú que vas a hacer si te preguntan?')">Eta zuk zer egingo duzu galdetzen <b>ba</b>dizute?</span></p>
        </div>

        <h3>Ejemplos en otros tipos de condicionales:</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si estudiara, aprobaría la asignatura.')">Ikasiko <b>ba</b>lu, ikasgaia aprobatuko luke.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si hubieras estudiado, habrías aprobado la asignatura.')">Ikasi izan <b>ba</b>zenu, ikasgaia aprobatuko zenuen.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si estuviera atento en clase, sabría qué hay que hacer.')">Klasean adi <b>ba</b>lego, zer egin behar den jakingo luke.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si fueras a las reuniones, te enterarías de todo.')">Batzarretara <b>ba</b>zindoaz, denetaz jabetuko zenuke.</span></p>
        </div>

        <h3>Remarcar con "Baldin"</h3>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si le ves, díselo.')">Ikusten <b>baldin ba</b>duzu, esaiozu.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si lo supieras, no lo preguntarías.')"><b>Baldin ba</b>zeneki, ez zenuke galdetuko.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si no le ves, llámale.')">Ikusten ez <b>baldin ba</b>duzu, deiozu.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si no lo supieras, lo preguntarías.')">Ez <b>baldin ba</b>zeneki, galdetuko zenuke.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si ves la película, ya sé que mañana me la contarás.')"><b>Baldin</b> pelikula ikusten <b>ba</b>duzu, badakit bihar kontatuko dizudala.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si hoy no ves la película, mañana iré contigo a verla.')"><b>Baldin eta</b> gaur ez baduzu pelikula ikusten, bihar zurekin joango naiz ikustera.</span></p>
        </div>

        [BATERIA:0]
    `,
                                        ejercicios: [
                                            [
                                                {
                                                    id: "cond_clon_1",
                                                    pregunta: "Completa la condición negativa real:",
                                                    tipo: "input",
                                                    frase: "Ikasten ez ___duzu, ez duzu aprobatuko.",
                                                    correcta: "ba",
                                                    ayuda: "ez + ba + auxiliar"
                                                },
                                                {
                                                    id: "cond_clon_2",
                                                    pregunta: "Traduce la condición hipotética de 'Izan' (Si hubieras...):",
                                                    tipo: "input",
                                                    frase: "Ikasi izan ___zenu, aprobatuko zenuen.",
                                                    correcta: "ba",
                                                    ayuda: "Izan + ba + zenu"
                                                },
                                                {
                                                    id: "cond_clon_3",
                                                    pregunta: "Ordena la frase de la película con énfasis:",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Baldin eta gaur ez baduzu pelikula ikusten",
                                                    ayuda: "Baldin eta + gaur + ez baduzu..."
                                                }
                                            ]
                                        ]
                                    },
                                    {
                                        id: "adv-condicionales-clon-2",
                                        titulo: "📄 Condicionales: Estructura -z gero",
                                        texto: `
        <p>Esta estructura también se usa para construir oraciones subordinadas condicionales. Para ello, se añade <b>"-z gero"</b> al participio verbal de la condicional y sólo se usa para oraciones afirmativas.</p>
        
        <div class="bloque-subordinadas">
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Dependiendo del dialecto en vez de -z gero se usa ezketino, o -z gerotan.', event)">Variantes dialectales</span></p>
        </div>

        <p>Como se trata de una forma que va con el verbo sin conjugar, éste no indica ni persona ni tiempo verbales concretos, por lo que se puede utilizar del mismo modo en los tres tipos diferentes de condicionales:</p>

        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si tú vives de una forma saludable, vivirás más tiempo. (Zu era osasungarrian bizitzen bazara...)')">Zu era osasungarrian <b>biziz gero</b>, denbora gehiago biziko zara.</span></p>
            
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si él viviera de forma saludable, viviría más tiempo. (Bera era osasungarrian biziko balitz...)')">Bera era osasungarrian <b>biziz gero</b>, denbora gehiago biziko litzateke.</span></p>
            
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si hubiera vivido de forma saludable, habría vivido más tiempo. (Bera era osasungarrian bizi izan balitz...)')">Bera era osasungarrian <b>biziz gero</b>, denbora gehiago biziko zen.</span></p>
        </div>

        <h3>Particularidades fonéticas</h3>
        <p>Cuando el participio del verbo de la subordinada condicional acaba en consonante, se añade <b>"-ez gero"</b>:</p>
        
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si estás largo tiempo tumbada al sol, vas a coger dolor de cabeza.')">Denbora luzean eguzkitan etzanda <b>egonez gero</b>, buruko mina hartuko duzu.</span></p>
        </div>

        <p>A veces, a esta estructura se añade <b>"behin"</b> al inicio de la frase condicional:</p>

        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si lo haces, hazlo bien. (Una vez que se hace, hacerlo bien).')"><b>Behin eginez gero</b>, ondo egin.</span></p>
        </div>

        [BATERIA:0]
    `,
                                        ejercicios: [
                                            [
                                                {
                                                    id: "cond_zgero_1",
                                                    pregunta: "Completa con la forma adecuada (vocal): 'Si vives...'",
                                                    tipo: "input",
                                                    frase: "Era osasungarrian bizi___ gero, ondo egongo zara.",
                                                    correcta: "z",
                                                    ayuda: "Bizi termina en vocal."
                                                },
                                                {
                                                    id: "cond_zgero_2",
                                                    pregunta: "Completa con la forma adecuada (consonante): 'Si estás...'",
                                                    tipo: "input",
                                                    frase: "Etzanda egon___ gero...",
                                                    correcta: "ez",
                                                    ayuda: "Egon termina en consonante (n)."
                                                },
                                                {
                                                    id: "cond_zgero_3",
                                                    pregunta: "Ordena la expresión de 'hacerlo bien':",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Behin eginez gero ondo egin",
                                                    ayuda: "Behin (una vez) + eginez gero (hecho) + ondo egin (hazlo bien)"
                                                }
                                            ]
                                        ]
                                    },
                                    {
                                        id: "adv-condicionales-clon-3",
                                        titulo: "📄 Condicionales: Ezik / Ezean",
                                        texto: `
        <p>Estos dos términos también se añaden al participio verbal para construir oraciones subordinadas condicionales, igual que con <b>"-z gero"</b>. Pero mientras que "-z gero" se usa para formar condicionales afirmativas, <b>"ezik"</b> y <b>"ezean"</b> se usan para formar condicionales negativas:</p>
        
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si no te cuidas tú mismo, nadie te va a cuidar. (A no ser que te cuides...)')">Zeure burua zaindu <b>ezik</b>, inork ez zaitu zainduko.</span></p>
            
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si no lees el libro, no entenderás la película. (A no ser que leas...)')">Liburua irakurri <b>ezean</b>, ez duzu pelikula ulertuko.</span></p>
        </div>

        <p>A veces se quita el verbo para construir expresiones del siguiente tipo:</p>

        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si no hay otra cosa, trabajaré en el bar. (A falta de otra cosa...)')">Besterik <b>ezean</b>, tabernan lan egingo dut.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'A falta de agua, beberemos vino.')">Urik <b>ezean</b>, ardoa edango dugu.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'A falta de pan, comeremos tortas.')">Ogirik <b>ezean</b>, opilak jango ditugu.</span></p>
        </div>

        <h3>El caso de "Izan ezik"</h3>
        <p>Igual que con los demás verbos, con "izan" el uso de "ezik" y "ezean" se realiza del mismo modo:</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, '¿Quién es esa? Si no es Miren, será Ane.')">Nor da hori? Miren <b>izan ezik</b>, Ane izango da.</span></p>
        </div>

        <p>Lo que ha ocurrido con "izan ezik", es que con el tiempo ha pasado a significar <b>"excepto"</b>:</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Excepto tú, todos los demás fuera de aquí.')">Zu <b>izan ezik</b>, gainerako guztiak alde hemendik.</span></p>
        </div>

        <div class="bloque-subordinadas">
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Fijarse en que el sintagma que va antes de izan ezik toma la marca que le corresponde para ir en concordancia con la oración principal.', event)">Nota sobre concordancia</span></p>
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Esto es así excepto con el caso nork o ergativo, con el que se puede usar el caso nor. Ej: Zu izan ezik / zuk izan ezik.', event)">Excepción del caso Nork</span></p>
        </div>

        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Excepto por aquí, podéis ir por el sitio que queráis.')">Hemendik <b>izan ezik</b>, nahi duzun lekutik joan zaitezkete.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Excepto tú, no lo entiende nadie.')">Zu <b>izan ezik / zuk izan ezik</b>, ez du inork ulertzen.</span></p>
        </div>

        [BATERIA:0]
    `,
                                        ejercicios: [
                                            [
                                                {
                                                    id: "cond_ezik_1",
                                                    pregunta: "Completa la condición negativa: 'Si no lees...'",
                                                    tipo: "input",
                                                    frase: "Liburua irakurri ___ , ez duzu ulertuko.",
                                                    correcta: "ezean",
                                                    ayuda: "Usa ezean o ezik."
                                                },
                                                {
                                                    id: "cond_ezik_2",
                                                    pregunta: "Traduce 'A falta de pan':",
                                                    tipo: "input",
                                                    frase: "Ogirik ___ , opilak jango ditugu.",
                                                    correcta: "ezean",
                                                    ayuda: "Expresión: [Sustantivo] + ezean."
                                                },
                                                {
                                                    id: "cond_ezik_3",
                                                    pregunta: "Ordena: 'Excepto por aquí...'",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Hemendik izan ezik nahi duzun lekutik",
                                                    ayuda: "Hemendik (por aquí) + izan ezik (excepto)"
                                                }
                                            ]
                                        ]
                                    },
                                    {
                                        id: "adv-condicionales-clon-4",
                                        titulo: "📄 Condicionales: Estructura -t(z)ekotan",
                                        texto: `
        <p>Esta forma también se usa para construir oraciones condicionales con el verbo sin conjugar. Pero esta forma, además de indicar una condición, tiene un significado añadido de <b>"intención de elegir una opción"</b>, estando implícita la opción contraria:</p>
        
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'De hacerlo yo, lo haría así; de otra forma, no lo haría.')">Neuk <b>egitekotan</b>, honela egingo nuke; bestela, ez nuke egingo.</span></p>
        </div>

        <p>Cuando la condicional es negativa, se pone <b>"ez"</b> antes del verbo sin conjugar:</p>

        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Creo que tienes que pintar la pared de color claro; de no hacerlo así, el salón quedará demasiado oscuro.')">Horma kolore argiaz margotu behar duzula uste dut; horrela <b>ez egitekotan</b>, egongela ilun gehiegi geratuko da.</span></p>
        </div>

        <div class="bloque-subordinadas">
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Según el dialecto, se pueden usar otras formas derivadas de esta como -t(z)ekoz, t(z)ez gero, o t(z)ez gerotan.', event)">Variantes dialectales</span></p>
        </div>

        [BATERIA:0]
    `,
                                        ejercicios: [
                                            [
                                                {
                                                    id: "cond_tekotan_1",
                                                    pregunta: "Completa la intención (EGIN): 'De hacerlo yo...'",
                                                    tipo: "input",
                                                    frase: "Neuk egi___ , honela egingo nuke.",
                                                    correcta: "tekotan",
                                                    ayuda: "Egin termina en consonante, añadimos -tekotan."
                                                },
                                                {
                                                    id: "cond_tekotan_2",
                                                    pregunta: "Traduce la negación: 'De no hacerlo así...'",
                                                    tipo: "input",
                                                    frase: "Horrela ___ egitekotan, ilun geratuko da.",
                                                    correcta: "ez",
                                                    ayuda: "La negación se pone antes del verbo."
                                                },
                                                {
                                                    id: "cond_tekotan_3",
                                                    pregunta: "Ordena la frase de la pared:",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Horrela ez egitekotan egongela ilun geratuko da",
                                                    ayuda: "De no hacerlo así (Horrela ez egitekotan) + el salón (egongela) + quedará oscuro (ilun geratuko da)."
                                                }
                                            ]
                                        ]
                                    },
                                    {
                                        id: "adv-condicionales-clon-5",
                                        titulo: "📄 Condicionales: Expresiones Especiales",
                                        texto: `
        <h3>Expresiones con significado condicional:</h3>

        <p><b>• Hobe izan ba- ...</b></p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Sería mejor si estuvieras callado.')">Hobe zenuke isilik egongo <b>bazina</b>.</span></p>
        </div>

        <div class="bloque-subordinadas">
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Fijarse en que hobe va con la forma nor - nork del verbo izan.', event)">Nota sobre Hobe</span></p>
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'También se puede usar con el verbo de la subordinada condicional en forma nominalizada. Ej: Hobe zenuke zu isilik egotea.', event)">Variante nominalizada</span></p>
        </div>

        <p><b>• Nahiago / gurago izan ba- ...</b></p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Habría preferido si tu hermana no hubiese venido.')">Nahiago nukeen zure ahizpa etorri izan ez <b>balitz</b>.</span></p>
        </div>

        <div class="bloque-subordinadas">
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Recordar que cuando el sujeto es el mismo en las dos oraciones, en la principal y en la subordinada, el verbo de la subordinada condicional se pone en participio.', event)">Nota sobre mismo sujeto</span></p>
        </div>

        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Yo habría preferido no ir.')">Neuk ez joan nahiago nukeen.</span></p>
        </div>

        <p><b>• -t(z)era:</b></p>
        <p>Esta nominalización de la subordinada condicional se usa para construir condicionales hipotéticas en pasado (alegiazko baldintzak iraganekoan):</p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'De haber sabido que Koldo estaba allí, yo no habría ido.')">Koldo han zegoela jaki<b>tera</b>, ni ez nintzatekeen joango.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Si hubiera sabido que Koldo estaba allí, yo no habría ido.')">Koldo han zegoela jakin izan <b>banu</b>, ni ez nintzatekeen joango.</span></p>
        </div>

        [BATERIA:0]
    `,
                                        ejercicios: [
                                            [
                                                {
                                                    id: "cond_esp_1",
                                                    pregunta: "Completa la expresión: 'Sería mejor si...'",
                                                    tipo: "input",
                                                    frase: "Hobe zenuke isilik egongo ba___.",
                                                    correcta: "zina",
                                                    ayuda: "Usa la forma condicional de 'izan' para 'zu' (bazina)."
                                                },
                                                {
                                                    id: "cond_esp_2",
                                                    pregunta: "Traduce la forma nominalizada: 'De haber sabido...'",
                                                    tipo: "input",
                                                    frase: "Koldo han zegoela jaki___...",
                                                    correcta: "tera",
                                                    ayuda: "Jakin termina en consonante (n), usamos -tera."
                                                },
                                                {
                                                    id: "cond_esp_3",
                                                    pregunta: "Ordena: 'Habría preferido no ir'",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Neuk ez joan nahiago nukeen",
                                                    ayuda: "Sujeto + ez + participio + nahiago nukeen."
                                                }
                                            ]
                                        ]
                                    },
                                    {
                                        id: "adv-condicionales-clon-6",
                                        titulo: "📄 Condicionales: Conectores y Nexos",
                                        texto: `
        <p>Se trata del uso de conectores disyuntivos (<b>lokailu hautakariak</b>) para construir oraciones subordinadas condicionales.</p>
        <p>Estos conectores disyuntivos expresan una elección (<i>hautaketa edo aukeraketa</i>) y se pueden traducir por las conjunciones disyuntivas <b>"o"</b> y <b>"u"</b>.</p>

        <p><b>• Bestela / bertzenaz / bestenaz:</b></p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Ven aquí, si no verás lo que es bueno.')">Etorri ona; <b>bestela</b>, ikusiko duzu zer den ona.</span></p>
            <p><span class="frase-traduccion" onclick="traducir(this, 'Dámelo, de lo contrario sabrás lo que es bueno.')">Emaidazu; <b>bestenaz</b>, jakingo duzu zer den ona.</span></p>
        </div>

        <p><b>• Osterantzean:</b></p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Espero que nos ayude, de no ser así no lo conseguiremos.')">Lagun diezagun espero dut; <b>osterantzean</b>, ez dugu lortuko.</span></p>
        </div>

        <p><b>• Ezpabere:</b></p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Ve rápido, de lo contrario se va a enfadar.')">Joan azkar; <b>ezpabere</b>, haserretuko da.</span></p>
        </div>
        <div class="bloque-subordinadas">
            <p>• <span class="caja-gramatical caja-adv" onclick="simplificar(this, 'Procede de ez bada ere y se usa sobre todo en dialecto vizcaíno.', event)">Nota sobre Ezpabere</span></p>
        </div>

        <p><b>• Ezpere:</b></p>
        <div class="bloque-ejemplos">
            <p><span class="frase-traduccion" onclick="traducir(this, 'Hazlo bien, si no lo harás de nuevo.')">Ondo egin; <b>ezpere</b>, berriro egingo duzu.</span></p>
        </div>

        [BATERIA:0]
    `,
                                        ejercicios: [
                                            [
                                                {
                                                    id: "cond_lok_1",
                                                    pregunta: "Completa el conector: 'Ven aquí, si no...'",
                                                    tipo: "input",
                                                    frase: "Etorri ona; ___ , ikusiko duzu.",
                                                    correcta: "bestela",
                                                    ayuda: "Es el conector más común para 'si no'."
                                                },
                                                {
                                                    id: "cond_lok_2",
                                                    pregunta: "¿Qué significa 'ezpabere'?",
                                                    tipo: "choice",
                                                    frase: "Se traduce por ___ ",
                                                    opciones: ["De lo contrario", "Además", "Porque"],
                                                    correcta: "De lo contrario",
                                                    ayuda: "Procede de 'ez bada ere'."
                                                },
                                                {
                                                    id: "cond_lok_3",
                                                    pregunta: "Ordena la frase de la ayuda:",
                                                    tipo: "sort",
                                                    fraseCorrecta: "Lagun diezagun espero dut osterantzean ez dugu lortuko",
                                                    ayuda: "Espero que nos ayude (Lagun diezagun espero dut) + de lo contrario (osterantzean)..."
                                                }
                                            ]
                                        ]
                                    }

                                ]//📄
                            },
                            { id: "adv-consecutivas", titulo: "📁 Consecutivas (Ondoriozkoak)", hijos: [] },
                            { id: "adv-comparativas", titulo: "📁 Comparativas (Konparaziozkoak)", hijos: [] }
                        ]
                    },




                ]
            }

        ]
    },




];
