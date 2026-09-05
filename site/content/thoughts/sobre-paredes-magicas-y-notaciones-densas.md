+++
title = "Sobre paredes mágicas y notaciones densas"
subtitle = "Anexo a las actas: respuesta a una impugnación"
date = "2026-09-05T10:00:00Z"
months = [ "2026-09" ]
authors = [ "rafael-luque" ]
authorPhotos = [ "rafael-luque.jpg" ]
draft = "false"
tags = [ "vision", "future-of-computing", "media-for-thought", "osoco" ]
summary = "Las actas de la visita a Atelier han recibido su primera impugnación seria: la pared es magia, la semántica no desaparece y el texto es una notación extraordinariamente densa. Este anexo responde punto por punto — concediendo lo que hay que conceder."
background = "on-magic-walls-two-theories.jpg"
backgroundSummary = "on-magic-walls-two-theories.jpg"
url = "/thoughts/2026/09/sobre-paredes-magicas-y-notaciones-densas/"
+++

*Este artículo también está disponible en inglés: [On Magic Walls and Dense Notations](/thoughts/2026/09/on-magic-walls-and-dense-notations/).*

*Este artículo responde a una crítica recibida sobre el ensayo [Cómo podríamos pensar el software](/thoughts/2026/01/as-we-may-think-software/).*

<hr class="section-divider"/>

# Una impugnación llega al comité

Cuando publicamos las actas de la visita a Atelier, esperaba dos tipos de reacción: el entusiasmo de quienes reconocieran la tradición de la que venía el ensayo, y la indiferencia cortés de quienes lo archivaran como ciencia ficción. Ha llegado una tercera, mucho mejor: una impugnación en toda regla.

Un lector, [@steida](https://x.com/steida), se ha tomado el ensayo lo bastante en serio como para desmontarlo pieza a pieza en X ([análisis](https://x.com/steida/status/2095462486103195968) y [crítica](https://x.com/steida/status/2095462489995522202)). Resumo sus objeciones, porque merecen ser citadas con precisión:

1. **No hay comportamiento antes del lenguaje.** En cuanto algo es ejecutable, has definido un lenguaje, se parezca a Rust o a cajas sobre una mesa. La semántica —orden, concurrencia, fallo, tiempo, cancelación— es la parte difícil, y ocultarla no la elimina.
2. **La pared es magia.** Cuando la pared anuncia que hay dos definiciones incompatibles de "entregado" en la sala, ¿cómo lo sabe? Si una IA puede inferir conceptos, descubrir conflictos semánticos y predecir consecuencias con fiabilidad, ya hemos resuelto una fracción enorme del problema, y la interfaz espacial es casi incidental. Atelier no demuestra un medio mejor: demuestra un sistema de razonamiento semántico extraordinario y le atribuye el mérito al medio.
3. **El ejemplo de "entregado" es demasiado fácil.** Ya sabemos resolver eso con DDD, máquinas de estados, *event sourcing* o tipos. Los bugs difíciles de verdad son otros: diecisiete reglas razonables que producen un estado emergente inesperado, un protocolo de reintentos que viola un invariante solo tras un *crash* en cierto entrelazado, un invariante que solo se rompe tras meses de evolución del esquema.
4. **La simulación no es contacto con la realidad.** Solo ves las consecuencias que tu modelo y tus datos representan. La suposición catastrófica suele ser la que nadie codificó.
5. **La traducción no desaparece; se muda.** De "dominio → programador → código" a "dominio → representación de comportamiento → semántica formal → sistema ejecutable". Para el 10% difícil, has recreado la programación. Y el texto sobrevive a cada intento de sustituirlo porque es una notación extraordinariamente densa para la abstracción: puedes nombrar, parametrizar, componer recursivamente, comparar, versionar. Las cajas físicas explican diez estados; intenta poner Linux o SQLite sobre la mesa.
6. **La IA no es neutral.** Elegir qué consecuencias mostrar ya es juicio. Una IA que dice "estas son las tres consecuencias relevantes" ha ejercido una influencia enorme sobre la decisión. No existe una "capa de evidencia" limpiamente separada de los valores.
7. **"Modificable por cualquiera" va demasiado lejos.** Los límites de capacidad no son una distinción elitista: son un mecanismo esencial de corrección y seguridad. Y "si no se puede explicar, no se despliega" confunde explicabilidad con corrección: mejor desplegar algo que no sé explicar a todos los interesados pero cuyos invariantes críticos ha probado Lean, que algo que todos entienden y nadie ha demostrado correcto.

Su contrapropuesta: no sustituir el código, sino hacer de primera clase la **teoría** que lo rodea — conectar código con conceptos, supuestos, invariantes, decisiones, tests, trazas y contraejemplos, y dejar que la IA navegue continuamente entre esas representaciones. Un "observatorio de código", que —dice— está más cerca de Naur que el propio Atelier.

Es la mejor lectura que ha recibido el ensayo. Este anexo responde punto por punto, empezando por lo que hay que conceder.

# Lo que concedo sin pelear

Tres de las objeciones son sencillamente correctas, y prefiero decirlo antes de defender nada.

**La simulación no es contacto con la realidad.** Cierto. La mesa de Atelier solo puede mostrar las consecuencias que su modelo representa, y la suposición catastrófica suele ser la que nadie codificó. El ensayo, de hecho, lo sabe: por eso la última pared del taller no es una pantalla de métricas, sino dos columnas escritas a mano —**"Lo que creemos"** y **"Lo que vimos"**— con una flecha imantada que va y viene. Esa flecha es una confesión de falibilidad: la teoría explícita a un lado, la evidencia al otro, y el reconocimiento de que el progreso es un vaivén, no una declaración. Lo que sí sostengo es una diferencia de probabilidades: una suposición enterrada en el código no puede ser interrogada por nadie; una suposición clavada en la pared, al menos, puede serlo. El medio no garantiza que alguien haga la pregunta correcta. Mejora las condiciones para que ocurra.

**La explicabilidad no es corrección.** También cierto, y la frase de Adele —"si no se puede explicar, no se despliega"— lo confunde si se lee como criterio único. Pero no compite con la verificación formal; la complementa en otro eje. Una prueba en Lean establece *que* un invariante se cumple. Una explicación establece *por qué elegimos ese invariante* y *quién carga con las consecuencias*. Yo tampoco querría un marcapasos cuyo firmware nadie ha probado formalmente. Pero tampoco querría uno cuyos invariantes están probados y cuya elección nadie puede justificar ante el paciente. La norma de Atelier no pide sustituir la prueba por la narrativa: pide que ninguna decisión de diseño quede exenta de rendir cuentas. Lo formal y lo legible no son rivales; son dos obligaciones distintas.

**La IA no es neutral.** Esta es la objeción filosóficamente más fuerte, y no solo la concedo: creo que *refuerza* la tesis central del ensayo. Si elegir qué tres consecuencias mostrar ya es ejercer juicio —y lo es: qué ejemplos históricos, qué grupos, qué horizonte temporal, qué modelo causal—, entonces ese encuadre no puede quedar fuera del contrato. Tiene que ser, él mismo, legible y cuestionable: qué preguntó el equipo, qué mostró el agente, qué dejó fuera y por qué. Eso es exactamente lo que el ensayo llama gobernanza como propiedad del medio. Una IA cuyo encuadre es invisible es una caja negra con buenos modales. La respuesta a "no existe una capa de evidencia neutral" no es fingir neutralidad: es hacer del encuadre un objeto más sobre la mesa, discutible como lo era la palabra "entregado".

# El género y la magia

Vayamos ahora a la pared mágica, porque ahí la impugnación acierta en el síntoma y se equivoca en el diagnóstico.

Sí: la pared presupone capacidades de razonamiento semántico que hoy no tenemos del todo. Pero eso no es un descuido del ensayo; es la convención constitutiva del género. La ficción de diseño funciona exactamente así: postula resuelto lo difícil para poder hacer la siguiente pregunta. Vannevar Bush no explicó cómo el Memex indexaba por asociación en microfilm —no podía; la tecnología no existía— y esa "trampa" no invalidó la pregunta, que tardó cincuenta años en encontrar respuesta y mientras tanto orientó a Engelbart, a Nelson y a media disciplina. El ensayo de Petricek al que Atelier responde entrevista a una diseñadora de un universo alternativo sin explicar la física del universo. Criticar la pared por mágica es criticar al Memex por no detallar los microfilms: técnicamente cierto, genéricamente fuera de lugar.

Y hay un segundo matiz, más incómodo para la objeción: la pared es bastante menos mágica en 2026 de lo que lo era el Memex en 1945. Detectar que dos personas usan "entregado" con definiciones incompatibles en una conversación es algo que los modelos de lenguaje actuales hacen razonablemente bien *hoy*. Lo que la pared hace en el ensayo no es resolver entrelazados de concurrencia ni probar liveness: es señalar un desacuerdo semántico y devolverlo a los humanos, que son quienes inventan "Custodia" y deciden el contrato. La lista de capacidades sobrehumanas que la impugnación atribuye a la pared —distinguir correlación de causalidad, predecir consecuencias, generar el estado de dominio ausente— es una lista de lo que haría falta para que la pared *decidiera*. Pero la pared no decide en ninguna escena del ensayo. Interrumpe, muestra y calla. La distancia entre ambas cosas es justamente la distancia entre automatizar y aumentar.

Dicho esto, la impugnación tiene razón en algo que conviene subrayar: si algún día existe ese sistema de razonamiento, el mérito no será "de la interfaz espacial". Será del conjunto — y el ensayo debería cargar menos las tintas en el decorado. Adele lo advierte ("si intentáis traducir esto a un IDE en 3D, os vais a perder"), pero es una advertencia que el propio texto no siempre respeta.

# El espacio no es incidental

Ahora bien, que el mérito sea del conjunto no convierte al espacio en decorado. La impugnación remata su argumento con una degradación elegante —si existiera ese sistema de razonamiento semántico, "la interfaz espacial es casi incidental"— y aquí ya no concedo.

Las interfaces con las que hoy colaboramos están aplanadas: una pantalla, un puntero, una persona conduciendo y las demás mirando. Todo lo que sabemos sobre cómo piensan los grupos —la atención compartida, el señalar, el disponer las cosas en el espacio, el hablar y tocar a la vez— queda embotellado en un cuello de un solo usuario. Un medio de computación espacial no es un adorno para esa colaboración: es su condición de posibilidad. En el taller caben varias manos a la vez sobre el mismo problema; la disposición espacial es parte del argumento —qué está cerca de qué, qué quedó en el margen—; y la multimodalidad —objetos físicos, papel, voz, gesto, proyección— deja que cada idea entre por el canal que mejor la expresa. Nada de eso lo aporta el razonador semántico. Lo aporta el espacio.

¿Utopía? Queda trabajo, sin duda. Pero no escribimos desde la pura especulación: nuestro proyecto actual de investigación en **DynaSpace** —el medio de computación espacial que sirve de base tecnológica a [DynaClassroom](https://dynaclassroom.com)— nos hace confiar en que este ingrediente del taller es alcanzable. Es la parte de Atelier que ya estamos prototipando.

# La semántica no desaparece (y nadie dijo que lo hiciera)

"No hay comportamiento antes de la representación." De acuerdo. Toda representación ejecutable define un lenguaje con semántica precisa, y esa semántica —orden, fallo, tiempo, cancelación— es la parte difícil. El ensayo no afirma lo contrario: afirma que la representación *primaria para pensar juntos* no tiene por qué ser la notación optimizada para la máquina. Son afirmaciones distintas. Por debajo de las tarjetas, Atelier genera sistemas ejecutables —el texto menciona explícitamente el *behavioral programming* de Harel como paradigma cercano— y alguien tiene que definir qué significa "salvo que el mensajero confirme la entrega" bajo *timeout*, partición de red y mensajes duplicados. Ese trabajo no desaparece. Sigue siendo un oficio, y Adele lo dice sin épica: "es un oficio, y como todo oficio, tiene un precio".

Y sí: el comportamiento ejecutable acaba siendo, en rigor, otro lenguaje más. Concedido. Pero no todos los lenguajes están a la misma distancia de cómo pensamos. La diferencia que vemos en un enfoque de escenarios a la Harel —y que el ensayo no detalla porque es ficción y transmite la visión a alto nivel— no es estética: es que describe el comportamiento de una forma mucho más natural. Se piensa en interacciones *entre* objetos, no *dentro* de cada objeto; cada escenario se describe por separado, tal como se cuenta ("cuando ocurra esto, entonces aquello; excepto si…"); y cómo se entremezclan unos comportamientos con otros deja de ser un problema que el programador resuelve esparciéndolo por la base de código: se delega en el motor de ejecución que los sincroniza. No es una especulación nuestra de última hora: [llevamos tiempo trabajando en esa dirección](/thoughts/2025/11/introducing-behavioral-programming-with-smalltalk/).

Lo que la impugnación llama "recrear la programación para el 10% difícil" yo lo llamaría de otro modo: **conservar la programación donde es insustituible y redistribuir el otro 90%**. La mayor parte de lo que hoy bloquea a los equipos no son entrelazados bizantinos: son desacuerdos de significado que viajan meses en tickets hasta estallar en producción. Que el 10% difícil siga requiriendo semántica formal y especialistas no es un fracaso del medio; es la razón de que Vera exista como *curadora* y no como traductora universal.

Y sobre la densidad del texto: concedida, y con entusiasmo. Nombrar, parametrizar, componer recursivamente, comparar, versionar, transformar mecánicamente — el texto es una tecnología intelectual extraordinaria y ningún taller sensato la abandonaría. Pero nótese que las tarjetas de Atelier no son cajas mudas: tienen nombre ("Custodia", "Reintento suave"), condiciones, excepciones, ejemplos vivos; se componen y entran en conflicto. Son, precisamente, notación — con otra superficie. Nadie propone poner SQLite sobre la mesa, igual que nadie propone discutir el significado de "entregado" leyendo el *diff* de un módulo de reintentos. La mesa no es el formato de almacenamiento del sistema: es la superficie de negociación del significado. Confundir ambas cosas es confundir el plano del arquitecto con el hormigón.

# El ejemplo era fácil a propósito

Sí, "una palabra para dos conceptos obviamente distintos" es el ejemplo fácil, y sí, DDD, las máquinas de estados y el *event sourcing* saben tratarlo. Pero el argumento del ensayo nunca fue "no existen técnicas para esto". Fue: **nuestro medio no obliga a usarlas cuando importa**. Todas esas técnicas viven en libros, en equipos que las conocen y en revisiones que llegan tarde; el desacuerdo de "entregado" convivió sin hablarse —una definición en métricas, otra en llamadas de soporte— no por falta de técnica, sino porque ningún elemento del medio de trabajo forzó el encuentro. Un ensayo ilustra con un caso que cabe en dos páginas; las diecisiete reglas razonables con estado emergente no caben, pero apuntan al mismo sitio: son exactamente la clase de problema para la que quieres simulación continua, invariantes visibles y —donde el rigor lo exige— métodos formales. Nada en Atelier es hostil a Lean. Si un invariante puede probarse, la pared es el sitio natural para mostrar qué está probado, qué solo testado y qué simplemente supuesto. Esa distinción, hoy, no la ve nadie que no vaya a buscarla.

# Modificable no significa "todo vale"

La objeción de seguridad lee "modificable por cualquiera" como "acceso de escritura universal", y con esa lectura tendría razón: nadie quiere el firmware del marcapasos abierto a ediciones anónimas. Pero el ensayo dice otra cosa, y la dice en la escena más tensa de las actas. Cuando el comité pregunta "si cualquiera puede tocar, ¿quién responde?", Adele no responde aboliendo los límites: responde con legibilidad, trazabilidad, guardarraíles, simulaciones obligatorias para cambios de alto impacto y **límites por consecuencias, no por jerarquías simbólicas**. Eso *son* fronteras de capacidad — con una diferencia: son parte visible del material, no privilegios heredados de un organigrama. "Estudiable por cualquiera" es incondicional; "modificable" está condicionado a una gobernanza que se puede leer. La distancia que el ensayo quiere abolir no es la que separa al cirujano del paciente: es la distancia *ritual* entre quienes pueden tocar el comportamiento y quienes solo pueden padecerlo sin ni siquiera poder estudiarlo.

# El observatorio ya está en el taller

Y así llegamos a la contrapropuesta, que es donde la impugnación deja de ser una impugnación.

Hacer de primera clase la teoría que rodea al programa; conectar código con conceptos, supuestos, invariantes, decisiones, tests, trazas, evidencia de producción y contraejemplos; dejar que la IA navegue continuamente entre esas representaciones; pinchar en `Mutex.acquire` y ver los invariantes que existe para preservar, los tests que los atestiguan, los bugs históricos que los motivaron y las propiedades de liveness aún sin probar.

Leo esa descripción y no veo una alternativa a Atelier. Veo Atelier con los pesos desplazados hacia el texto. De hecho, en su propio análisis del ensayo —previo a la crítica— el autor escribe que la idea genuinamente interesante es "hacer que la teoría representada por el programa sea de primera clase, continuamente ejecutable e inspeccionable *independientemente de su implementación textual*". No puedo estar más de acuerdo: esa frase es el ensayo. El análisis concede lo que la crítica disputa. El "observatorio de código" mantiene el código como artefacto preciso central y hace visible la teoría a su alrededor; Atelier pone la teoría en el centro y genera el artefacto ejecutable debajo. Son dos repartos distintos de la misma apuesta: **que la teoría deje de vivir solo en las cabezas**. Sobre cuál reparto es mejor para qué clase de sistema — esa sí es una discusión que merece la pena, y sospecho que la respuesta es "depende del sistema": el observatorio para el kernel y el CRDT, el taller para el dominio donde el desacuerdo semántico es el modo de fallo dominante. (No creo que sea casual que el ejemplo imposible de poner sobre la mesa fuera un CRDT: quien critica construye software local-first a diario —es el autor de [Evolu](https://evolu.dev)—, y desde esa ladera el 10% difícil no es el residuo, es el paisaje. Desde la ladera de los sistemas de dominio, el paisaje es "entregado".)

Todos miramos desde alguna ladera, y la nuestra también conviene declararla: en OSOCO, la visión de Atelier es el faro que guía un roadmap de investigación y desarrollo que incluye avances en un medio de computación espacial —el DynaSpace que mencionaba antes— y proyectos en torno al *Scenario-based Modeling* y el [*Behavioral Programming*](/thoughts/2025/11/introducing-behavioral-programming-with-smalltalk/). Sesgo contra sesgo, lo relevante no es desde qué ladera mira cada uno, sino el punto en el que ambas coinciden: reconocer que hay que poner en el centro la teoría del software.

En cuanto a Naur: la impugnación dice que su versión está más cerca de *Programming as Theory Building* que la mía. Puede ser. Pero recordemos qué diagnostica Naur: que la teoría del programa vive en las personas, que no está en el código ni en la documentación, y que muere cuando el equipo se disuelve. Las dos propuestas —observatorio y taller— son intentos de que esa teoría sobreviva como material de primera clase en lugar de evaporarse. Discutir cuál de las dos es más naüriana es discutir la decoración del portal. Lo importante es que ambas están al otro lado.

# La pared pide la palabra (otra vez)

Si esta conversación hubiera ocurrido en el taller, sospecho que la pared habría interrumpido hace tiempo. No para darnos la razón a ninguno de los dos, sino para proyectar, con su sobriedad habitual, algo así:

> **"Hay dos teorías compatibles en esta sala. El sistema no puede elegir por vosotros."**

Y debajo, dos tarjetas: *el código como centro, la teoría alrededor* y *la teoría como centro, el código debajo*. Con sus consecuencias: qué mejora, a quién sirve, dónde falla cada una.

El ensayo pedía exactamente esto: que el software fuera un medio donde las teorías se hacen visibles, se discuten y se someten a prueba. Que la primera impugnación seria de las actas haya llegado en forma de teoría rival, articulada y generosa, no es un contratiempo para Atelier. Es la primera evidencia de que el taller funciona — aunque, de momento, la pared seamos nosotros.

<hr class="section-divider"/>

*Las actas originales de la visita: [Cómo podríamos pensar el software](/thoughts/2026/01/as-we-may-think-software/) · [As We May Think Software (English)](/thoughts/2026/01/as-we-may-think-software-en/). El ensayo está archivado en Zenodo con el DOI [10.5281/zenodo.22260777](https://doi.org/10.5281/zenodo.22260777).*
