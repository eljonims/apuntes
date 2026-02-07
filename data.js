const libroData = [
    {
        id: "sarrera",
        titulo: "Ongi Etorri!",
        texto: "Este es tu cuaderno de euskera. Usa el botón <b>GAIAK</b> para explorar las lecciones. Tu progreso se guardará automáticamente.",
        tipo: "none"
    },
    {
        id: "unidad_piloto",
        titulo: "Unidad Prototipo: El Sistema Compuesto",
        texto: `
            <p>Bienvenido a tu cuaderno interactivo. Primero, probemos la <b>simplificación</b>. 
            Imagina que toda esta frase es solo una pieza:</p>
            
            <div style="background:rgba(255,255,255,0.4); padding:15px; border-radius:8px; border:1px solid #ccc; line-height:2;">
                Nik <span class="caja-gramatical caja-adj" onclick="simplificar(this, 'HORI')">jendeak esaten duena</span> badakit.
                <br>
                <small><i>(Yo sé <span>lo que dice la gente</span>)</i></small>
            </div>
            
            <p>Al tocar la caja, verás que "lo que dice la gente" se resume en <b>HORI</b> (Eso). 
            Ahora, vamos a practicar con una batería completa de ejercicios:</p>

            [EX:reto_drag]

            <p>Una vez dominada la clasificación, pasamos a la precisión del sufijo. 
            Recuerda que a lápiz escribimos lo que completamos.</p>
        `,
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
                    { t: "Autobusa", c: "" },      // Distractor (se queda en pool)
                    { t: "Mendian", c: "" }        // Distractor (se queda en pool)
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
    titulo: "2. Práctica de Sustitución",
    texto: `Prueba la unión de estilos: toca la caja verde para ver cómo se convierte en <b>ESO</b> y vuelve a su color original.
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
},
{
    id: "conceptos-clave",
    titulo: "Conceptos Fundamentales",
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
];
