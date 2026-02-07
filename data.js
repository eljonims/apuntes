const libroData = [
    {
        id: "intro",
        titulo: "1. Dominando las Subordinadas",
        texto: `Primero, <b>clasifica</b> los tipos de frases para calentar motores:
                [EX:drag1]
                <br>Ahora, elige el nexo correcto para la completiva sustantiva:
                [EX:choice1]
                <br>Por último, demuestra que sabes escribirlo tú mismo:
                [EX:input1]
                [EX:choice-nork]`,
        ejercicios: [
            {
                id: "drag1",
                pregunta: "Clasifica las frases",
                tipo: "drag",
                items: [
                    { t: "Etorriko naiz", c: "principal" },
                    { t: "...dela esan du", c: "subordinada" }
                ]
            },
            {
                id: "choice1",
                pregunta: "Elige el nexo",
                tipo: "choice",
                frase: "Pentsatzen dut egia de___",
                opciones: ["la", "nik", "en"],
                correcta: "la"
            },
            {
                id: "input1",
                pregunta: "Escribe el sufijo correcto",
                tipo: "input",
                frase: "Ez dut uste egia de___",
                ayuda: "Pista: es una oración negativa",
                correcta: "nik"
            },
            {
    id: "choice-nork",
    pregunta: "Nork kasua: Singularra ala Plurala?",
    tipo: "choice",
    frase: "Gizon___ liburua ekarri du (El hombre ha traído el libro)",
    opciones: ["ak", "ek"],
    correcta: "ak"
}
        ]
    },
    {
    id: "relativas-intro",
    titulo: "2. Oraciones Relativas (-en)",
    texto: `En euskera, para describir un objeto usamos el sufijo <b>-(e)n</b> al final del verbo. 
            Es como meter una frase entera dentro de un adjetivo.<br><br>
            
            <div style="line-height: 2.5; background: rgba(255,255,255,0.5); padding: 15px; border-radius: 8px; border: 1px solid var(--line);">
                1. <span class="caja-gramatical caja-adj" onclick="simplificar(this, 'Urdina')">Itsasoan bizi den</span> balea handia da.<br>
                <small><i>(La ballena <span class="caja-gramatical">que vive en el mar</span> es grande)</i></small>
                <br><br>
                2. <span class="caja-gramatical caja-adj" onclick="simplificar(this, 'Zahar')">Atzo erosi genuen</span> ogia gogorra dago.<br>
                <small><i>(El pan <span class="caja-gramatical">que compramos ayer</span> está duro)</i></small>
            </div>
            
            <p>Al tocar las cajas, verás que toda la frase se reduce a un simple adjetivo: 
            <b>Urdina</b> (Azul) o <b>Zahar</b> (Viejo). ¡Esa es la magia!</p>
            
            [EX:relativas_drag]`,
    ejercicios: [
        {
            id: "relativas_drag",
            pregunta: "¿Qué palabra sustituye a cada caja?",
            tipo: "drag",
            items: [
                { t: "Mendian dabilen (que anda en el monte)", c: "Mendizale" },
                { t: "Jaten ez duen (que no come)", c: "Argala" },
                { t: "Gaur", c: "" }, // Distractor
                { t: "Mutila", c: "" } // Distractor
            ]
        }
    ]
}

];
