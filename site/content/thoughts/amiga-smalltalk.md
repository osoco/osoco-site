+++
title = "Cuando el ordenador era un medio"
subtitle = "Del Amiga a Smalltalk"
date = "2025-12-26T10:00:00Z"
months = [ "2025-12" ]
authors = [ "rafael-luque" ]
authorPhotos = [ "rafael-luque.jpg" ]
draft = "false"
tags = [ "smalltalk", "amiga", "computing vision", "osoco" ]
summary = ""
background = "warhol-amiga-recreation-museum.jpg"
backgroundSummary = "warhol-amiga-recreation-museum.jpg"
+++

Mi primer ordenador fue un **Commodore Amiga 500**. Aún conservo una vieja fotografía del día que llegó a casa en 1989: mis hermanos y yo entusiasmados junto a aquella máquina que nos iba a abrir una puerta a otro mundo. No era tan sólo la novedad tecnológica. Había algo en el Amiga que invitaba a quedarse, a tocar, a probar, a experimentar.

Con él aprendí a programar, a dibujar, a manipular sonido, a observar cómo pequeños cambios producían efectos inmediatos en la pantalla o en los altavoces. Todo parecía conectado. No había una frontera clara entre jugar y aprender, entre usar y crear. El ordenador no se presentaba como una herramienta distante, sino como un espacio vivo, reactivo, casi cómplice.

Con los años, esa sensación se fue desvaneciendo. Llegaron máquinas (cuantitativamente) más potentes, más rápidas, más "profesionales", pero también más fragmentadas, más opacas y menos hospitalarias para la exploración directa. Durante mucho tiempo asumí que aquella experiencia había sido simplemente un accidente histórico, propio de una infancia tecnológica irrepetible y probablemente magnificada por la nostalgia.

{{<figure src="/images/thoughts/junto-amiga500.jpg" width="50%" alt="Mis hermanos y yo junto al recién llegado Amiga 500">}}

Años después, de manera inesperada, volví a sentir algo muy parecido al descubrir **Smalltalk**.

Explorar Smalltalk por primera vez fue, para mí, una experiencia sorprendentemente familiar. El sistema estaba siempre vivo. Todo podía inspeccionarse, modificarse, comprenderse desde dentro. No había un momento claro de "ejecución": **el entorno era el programa**.

Aquella sensación de disfrute intelectual y creatividad —que creía ligada únicamente al Amiga de mi infancia— reapareció con fuerza. Y lo hizo en un contexto muy distinto: no desde el sonido y los gráficos, sino desde las ideas, objetos y modelos conceptuales. La coincidencia no podía ser casual.

Este ensayo parte de esa intuición: **el Amiga y Smalltalk comparten algo esencial**.

<!--
La plataforma Commodore Amiga (1985) y el entorno de programación Smalltalk (1972) suelen aparecer en relatos históricos distintos. El Amiga se asocia habitualmente con gráficos, sonido, videojuegos y la cultura de la *demoscene*; Smalltalk, con investigación académica, orientación a objetos, educación y sistemas de software complejos. A primera vista, ambos mundos parecen separados por objetivos, públicos y trayectorias industriales.

Sin embargo, creo que esta separación es más cultural que conceptual. Amiga y Smalltalk emergen de una misma visión profunda de la computación: el ordenador entendido no como una herramienta especializada y cerrada, sino como **un medio —un espacio vivo para pensar, explorar y crear**. Esta visión, formulada explícitamente en Xerox PARC en los años setenta, encontró en el Amiga una realización inesperada y más popular, aunque condicionada por dinámicas industriales muy distintas.
-->

Mi tesis es que Amiga y Smalltalk no son hitos independientes en la historia de la computación, sino dos **expresiones complementarias de una misma tradición intelectual**, y que su relevancia no pertenece únicamente al pasado. Al contrario, ambos continúan vivos en la actualidad, tanto en prácticas técnicas concretas que han permeado la industria, como en comunidades minoritarias, aunque muy activas, que **desafían la narrativa dominante de obsolescencia**.

<hr class="section-divider"/>

# El ordenador como medio: una idea compartida

Alan Kay formuló tempranamente una idea que sigue siendo radical: *"the computer is a medium"* [^1]. El ordenador no debía concebirse como una máquina para ejecutar aplicaciones predeterminadas, sino como un entorno dinámico en el que los usuarios pudieran construir, explorar y expresar ideas. Smalltalk fue el intento más coherente de materializar esta visión: un sistema en el que todo es objeto, todo está vivo y todo puede ser inspeccionado y modificado mientras el sistema está en funcionamiento [^2].

El Amiga, aunque nacido fuera del ámbito académico, encarna sorprendentemente bien esta misma concepción. Desde su diseño inicial, fue pensado como una máquina multimedia general: gráficos, sonido, multitarea y programación coexistían en tiempo real. El resultado era una experiencia integrada, fluida y profundamente estimulante. No se trataba simplemente de ejecutar programas, sino de **producir experiencias**: animación, música, interacción y programación coexistían en un mismo espacio operativo [^3].

En ambos casos, el ordenador deja de ser un ejecutor pasivo de instrucciones y se convierte en un **entorno activo**, siempre en ejecución, siempre disponible para la intervención humana.

# El Amiga en el "mundo post-Alto"

La conexión conceptual entre Amiga y Smalltalk se vuelve explícita en los propios testimonios de Alan Kay [^4]. Tras abandonar Xerox PARC, Kay fue *Chief Scientist* de Atari entre 1982 y 1984, en un momento en el que varias compañías exploraban sistemas gráficos avanzados inspirados en Alto y Star.

{{<figure src="/images/thoughts/AlanKay-with-Alto.png" width="50%" alt="Alan Kay usando un ordenador Alto">}}

Según relata Kay, en Atari se desarrollaban ordenadores pensados para el "mundo post-Alto", pero la dirección de Warner Communications no supo valorar su importancia estratégica. El colapso del mercado del videojuego en 1983 reveló brutalmente esta miopía.

En ese contexto, el equipo del Amiga acudió a Atari en busca de financiación. Kay y Ted Hoff reconocieron inmediatamente el valor del proyecto. Más tarde, Kay resumiría su opinión con una afirmación contundente:

> “Pound for pound, I thought the Amiga was quite a bit better than the first Macintosh.”

Kay destaca la ambición conceptual del Amiga, su comprensión realista del Motorola 68000 y la necesidad —claramente identificada— de hardware especializado para gráficos y multimedia (los famosos *custom chips* diseñados por Jay Miner, *padre del Amiga*). Todo ello sitúa al Amiga dentro de la misma línea intelectual que Smalltalk, aunque con un destino industrial muy distinto.

# Sistemas vivos y feedback inmediato

Uno de los paralelismos más profundos entre Amiga y Smalltalk es la experiencia de sistema vivo.

En Smalltalk, no existe una separación estricta entre desarrollo y ejecución. El sistema se modifica mientras está en funcionamiento. **El feedback es inmediato y cognitivo**.

En el Amiga, esa vivacidad se manifiesta de forma sensorial: multitarea real, sonido y gráficos fluyendo simultáneamente, procesos concurrentes visibles y audibles. **El feedback es inmediato y perceptivo**.

En ambos casos, se reduce al mínimo la distancia entre idea y efecto. **El ordenador responde, dialoga, acompaña**.

# Creatividad individual y democratización

Tanto Smalltalk como Amiga empoderaron al individuo creativo.

El Amiga permitió que artistas, músicos y programadores independientes produjeran obras de alto impacto con recursos mínimos.

{{<figure src="/images/thoughts/andy_warhol_debbie_harry_amiga.jpg" width="50%" alt="Andy Warhol con Debbie Harry en el lanzamiento del Amiga en el Lincoln Center en 1985">}}

Es muy conocido el caso del legendario artista pop Andy Warhol, quien no sólo participó, junto a la cantante Debbie Harry, en el evento de lanzamiento oficial del Commodore Amiga 1000 en 1985 en el Lincoln Center de Nueva York [^5], sino que utilizó el Amiga para crear obras de arte digitales en los 80s (algunas de ellas recuperadas recientemente de unos diskettes olvidados [^6]), pero existen otros muchos casos como las pinturas kinéticas de Samia Halaby [^7] o el músico B.B. King:

{{<tweet 1668179279228862464 >}}

Del mismo modo, Smalltalk permitió que equipos muy reducidos construyeran sistemas de enorme complejidad conceptual. En ambos casos, la clave no fue solo la potencia técnica, sino la *accesibilidad cognitiva* del sistema.

Esta democratización conecta directamente con las ideas educativas de Seymour Papert [^7]: cuando las personas pueden manipular sistemas significativos, el aprendizaje y la creatividad se amplifican.

# La demoscene del Amiga como validación cultural del sistema vivo

La relevancia del movimiento **demoscene** en la historia del Amiga no puede entenderse como una simple subcultura estética. En los términos de este ensayo, la demoscene constituye una **validación cultural y empírica del ordenador como medio vivo**.

La demoscene surge gracias al diseño del Amiga, no a pesar de él. Programar demos implica dialogar directamente con el tiempo del sistema: sincronización con el barrido del monitor, coordinación precisa entre código, imagen y sonido, y explotación consciente de los coprocesadores gráficos y de audio. El feedback es inmediato, sensorial y rítmico.

Si Smalltalk promueve una exploración conceptual del sistema mediante objetos e inspectores, la demoscene promueve una exploración temporal y material del mismo. La diferencia es de nivel de abstracción, no de intención. En ambos casos, el sistema no se oculta: se expone.

La demoscene llevó al límite la integración vertical del Amiga, convirtiendo hardware y software en material expresivo. En este sentido, actuó como un auténtico *stress test cultural* del sistema, demostrando que su arquitectura era no solo técnicamente avanzada, sino creativamente fértil.

# Plataformas vivas, no reliquias

Una lectura superficial podría situar tanto a Smalltalk como al Amiga en el ámbito de las tecnologías "muertas". Sin embargo, esta interpretación es profundamente errónea.

Smalltalk sigue vivo en múltiples contextos industriales, educativos y de investigación. Numerosas empresas continúan utilizándolo para desarrollar y mantener sistemas críticos. Entornos contemporáneos como [Pharo](https://pharo.org/), [Squeak](https://squeak.org/) o [GToolkit](https://gtoolkit.com/), entre otros, demuestran que sus ideas fundamentales no solo persisten, sino que evolucionan.

En este contexto, resulta relevante su uso en proyectos reales y productos actuales. En OSOCO, por ejemplo, empleamos descendientes de Smalltalk en distintos proyectos y productos para construir sistemas complejos, explorables y mantenibles, confirmando que los principios de sistemas vivos, feedback inmediato y coherencia conceptual **siguen ofreciendo ventajas prácticas reales**.

Del mismo modo, la plataforma Amiga tampoco está muerta. Su comunidad continúa desarrollando software nuevo, sistemas operativos, herramientas y hardware —incluyendo aceleradoras, expansiones y arquitecturas FPGA— a un ritmo sorprendente. Más que nostalgia, esta actividad revela la robustez conceptual del *sistema como medio*.

<hr class="section-divider"/>

Amiga y Smalltalk representan **una línea alternativa en la historia de la computación**: aquella que entiende el ordenador como un medio expresivo, integrado y vivo. El testimonio de Alan Kay [^4] confirma que el Amiga fue, en su núcleo, parte del mismo impulso intelectual que dio lugar a Smalltalk, Alto y Star, aunque condicionado por dinámicas industriales diferentes.

Que esta visión no se convirtiera en dominante no la invalida. Su persistencia —en comunidades activas, en proyectos reales y en experiencias personales repetidas a lo largo de décadas— sugiere que sigue respondiendo a necesidades humanas profundas.

Quizá el desafío actual no sea inventar nuevas metáforas para la computación, sino reconectar con aquellas que ya demostraron su poder: el ordenador no como producto cerrado, sino como un medio que piensa, responde y evoluciona junto a quienes lo usan.


# Referencias

[^1]: Kay, A. (1977). [*Personal Dynamic Media*](/thoughts/refs/Kay1977.pdf). IEEE Computer, 10(3), 31–41. https://doi.org/10.1109/C-M.1977.217672
[^2]: Goldberg, A., Robson, D. (1983). [*Smalltalk-80: The Language and Its Implementation*](/thoughts/refs/BlueBook.pdf). Addison Wesley.
[^3]: Commodore-Amiga, Inc. (1985). [*Amiga hardware reference manual*](/thoughts/refs/Amiga_Hardware_Reference_Manual_3rd_edition.pdf). Addison-Wesley.
[^4]: Kay, A. Respuesta pública a: *"What does Alan Kay think about the Commodore Amiga (1985) as a multimedia computer or an appealing tool for artists? How does it compare with Alto or Star, or with Sierra machine Atari was working on as you were Chief Scientist at SRL?"* disponible en https://www.quora.com/What-does-Alan-Kay-think-about-the-Commodore-Amiga-1985-as-a-multimedia-computer-or-an-appealing-tool-for-artists-How-does-it-compare-with-Alto-or-Star-or-with-Sierra-machine-Atari-was-working-on-as-you-were-Chief
[^5]: Garcia, C. [*Warhol & the Computer*](https://computerhistory.org/blog/warhol-the-computer/). CHM Blog. 2013.
[^6]: [*The Andy Warhol Museum Amiga Exhibit*](https://www.iontank.com/projects/warhol-amiga)
[^7]: Papert, S. (1980). *Mindstorms: Children, computers, and powerful ideas*. Basic Books.