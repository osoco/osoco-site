+++
title = "Charlas de desayuno en OSOCO"
url = "charlas-desayuno-hashmaps"
subtitle = "Sobre HashMaps"
date = "2022-03-01T20:00:00Z"
months = [ "2022-03" ]
authors = [ "rafael-luque" ]
authorPhotos = [ "rafael-luque.jpg" ]
draft = "false"
tags = [ "osoco", "about", "charlas-desayuno", "hashmaps" ]
summary = ""
background = "bread.jpg"
backgroundSummary = "bread.jpg"
+++

En OSOCO tenemos por costumbre compartir un rato de descanso y conversación durante la mañana. Hay quien aprovecha para tomarse un café o cualquier otra cosa, pero lo importante es que podamos hablar un rato sobre cualquier asunto, no necesariamente relevante, ni relacionado con nuestro trabajo.

Aunque ya lo hacíamos anteriormente, durante la *era COVID* ha demostrado ser una costumbre útil para sentirnos más cercanos y poder compartir cualquier inquietud o simplemente un momento de risas. 

A veces aprovechamos esos desayunos y alguien se anima a introducir algún tema al resto. Se trata de pequeñas charlas de carácter muy informal. Una mezcla de *lightning talk* y conversación de desayuno que llamamos ***breakfast speechs*** o **charlas de desayuno**. 

Los temas no son necesariamente técnicos. A veces ni siquiera son aplicables inmediatamente a nuestro trabajo cotidiano. Se trata más bien de un espacio para aprender algo nuevo de nuestros compañeros; en realidad, cualquier cosa interesante que amplie un poco nuestros horizontes o nos cambie la perspectiva. Sin necesidad de formalidades, ni de tener que invertir demasiado tiempo. 

En nuestro tablón podéis ver algunos de los temas anteriores y de los propuestos para el futuro. Como se puede comprobar, los temas van desde la psicología o la física a las matemáticas y la historia del software.

{{<figure src="/images/thoughts/desayunos-tecnicos-trello.png" width="80%">}}

<hr class="section-divider"/>

Hemos empezado a grabar estos desayunos técnicos y hemos pensado que alguien podría tener interés, con lo que empezaremos a publicar algunos de ellos, aunque os recuerdo que son charlas (a veces conversaciones y debates) muy, muy informales.

De momento comenzamos con dos charlas en las que hablamos sobre **HashMaps**, desde su funcionamiento interno a un nivel muy básico, hasta algunas cuestiones más avanzadas como ataques de denegación de servicio, *open addressing* y *closed addressing*, principio de cercanía de referencias (*reference locality*) o jerarquías de memoria.

## Parte 1
{{< vimeo 684797556 >}}

## Parte 2
{{< vimeo 681323911 >}}

## Referencias

* Parte 1:
  * Open Addressing: https://en.wikipedia.org/wiki/Open_addressing
  * Factor de carga y capacidad inicial de HashMap en Java: https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html#HashMap--
  * Presentación sobre el ataque de denegación de servicio "Effective Denial of Service attacks against web application platforms": https://www.youtube.com/watch?v=R2Cq3CLI6H8
  * TREEIFY_THRESHOLD definido en HashMap a partir de Java 8: https://hg.openjdk.java.net/jdk8/jdk8/jdk/file/687fd7c7986d/src/share/classes/java/util/HashMap.java#l257
* Parte 2:
  * *What Every Programmer Should Know About Memory*: https://akkadia.org/drepper/cpumemory.pdf
  * *Locality of Reference*: https://en.wikipedia.org/wiki/Locality_of_reference

## Créditos

- **Imagen de cabecera**: Fotografía por <a href="https://pixabay.com/photos/tools-awl-pliers-antique-equipment-1083796" target="_blank">Pexels</a> de pixaby.com con <a href="https://pixabay.com/service/license/" target="_blank"_>licencia Pixabay</a>.


