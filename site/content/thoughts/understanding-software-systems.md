+++
title = "Comprendiendo Sistemas de Software"
url = "comprendiendo-sistemas-software-ddd-hispano"
subtitle = "Creando Herramientas de Dominio"
date = "2022-01-25T20:00:00Z"
months = [ "2022-01" ]
authors = [ "rafael-luque" ]
authorPhotos = [ "rafael-luque.jpg" ]
draft = "false"
tags = [ "osoco", "pharo", "smalltalk", "DDD", "moldable-development", "GToolkit" ]
summary = "Charla *Comprendiendo Sistemas de Software* presentada en el grupo DDD Hispano."
background = "tools.jpg"
backgroundSummary = "tools.jpg"
+++

Material de la charla ***Comprendiendo sistemas de software creando herramientas de dominio*** presentada en el grupo [DDD Hispano](https://www.meetup.com/dddhispano/events/282381711/).

<hr class="section-divider"/>

## Descripción

Las herramientas que utilizamos tienen un gran impacto sobre los hábitos mentales de los desarrolladores, afectando directamente cómo construimos, percibimos y razonamos acerca del software. Como dijo Marshall McLuhan: 

<blockquote>We shape our tools, and thereafter our tools shape us.</blockquote>

Los principales IDEs manejan de una forma genérica las aplicaciones, independientemente de que modelen dominios muy diferentes. Existe un salto entre el modelo mental, normalmente basado en abstracciones del dominio, con el que desarrollamos y el modelo genérico y de más bajo nivel al que nos obligan nuestras herramientas.

Incluso cuando siguiendo aproximaciones como **Domain-Driven Design (DDD)** conseguimos diseñar las aplicaciones de software en términos de abstracciones del dominio del problema, no podremos aprovechar todo el potencial de estas abstracciones mientras nuestras herramientas no incorporen y sean "conscientes" de esas abstracciones específicas de nuestro dominio.

En esta charla mostramos ejemplos de ***moldable development***, una aproximación diferente al desarrollo de software que propone adaptar continuamente nuestras herramientas para incorporar las abstracciones del dominio concreto en que estemos trabajando.

Usamos algunos ejemplos prácticos de cómo se pueden incorporar las ideas del *"desarrollo maleable"* al proceso de desarrollo de software, de manera que podrás crear extensiones específicas del dominio de tu aplicación a medida que la construyes, de una manera ágil y con un coste asequible.

Como resultado de esta nueva forma de entender el proceso de desarrollo podrás razonar, visualizar y comunicar tus sistemas de software directamente en términos de tus abstracciones de dominio.

En los ejemplos emplearemos **Glamorous Toolkit**, un IDE open source y maleable basado en **Pharo**, pero no será necesario ningún conocimiento previo sobre estas tecnologías. El objetivo no será un lenguaje concreto, sino incorporar conceptos de desarrollo maleable a nuestro proceso de desarrollo, con independencia de cuál sea tu lenguaje de programación de preferencia.

## Vídeo de la presentación

{{< youtube 4RQVTf82b_w >}}

## Slides

<iframe src="https://drive.google.com/file/d/1-0Zh7HFiKgmhP2Rtq5jVnq3LMEhzK09J/preview" width="640" height="480" allow="autoplay"></iframe>

## Referencias

* **Blue Ocean Strategy: How to Create Uncontested Market Space and Make the Competition Irrelevant**. W. Chan Kim. Renée Mauborgne. 2005. https://www.goodreads.com/book/show/4898.Blue_Ocean_Strategy
* **Why software is eating the world**. Marc Andreessen. 2011. https://a16z.com/2011/08/20/why-software-is-eating-the-world/
* **The long-term growth rate of evolving software: Empirical results and implications**. Hatton, L, Spinellis, D, van Genuchten, M. J Softw Evol Proc. 2017; 29:e1847. https://doi.org/10.1002/smr.1847
* **Blue Plane**: https://blueplane.xyz/
* Holzmann, **Landing a Spacecraft on Mars** in IEEE Software, vol. 30, no. 2, pp. 83-86, March-April 2013, doi: 10.1109/MS.2013.32. https://ieeexplore.ieee.org/document/6470593
* L. Erlikh, **Leveraging legacy system dollars for e-business in IT Professional**, vol. 2, no. 3, pp. 17-23, May-June 2000. https://ieeexplore.ieee.org/document/846201
* **Engineering a Safer World: Systems Thinking Applied to Safety**. Nancy G.
Leveson. 2012. https://www.goodreads.com/book/show/13697424-engineering-a-safer-world
* **Problem Frames: Analysing & Structuring Software Development Problems**. Michael A. Jackson. 2000. https://www.goodreads.com/book/show/292011.Problem_Frames
* **Data and Reality**. Willian Kent. 2000. https://www.goodreads.com/book/show/1753248.Data_and_Reality
* **Facts and Fallacies of Software Engineering**. Robert L. Glass. 2002. https://www.goodreads.com/book/show/83792.Facts_and_Fallacies_of_Software_Engineering
* R. L. Glass, **Frequently forgotten fundamental facts about software
engineering** in IEEE Software, vol. 18, no. 3, pp. 112-111, May-June 2001, doi:
10.1109/MS.2001.922739. https://ieeexplore.ieee.org/document/922739
* Thomas D. LaToza, Gina Venolia, and Robert DeLine. 2006. **Maintaining
mental models: a study of developer work habits**. In Proceedings of the
28th international conference on Software engineering (ICSE '06).
Association for Computing Machinery, New York, NY, USA, 492–501. DOI:
https://doi.org/10.1145/1134285.1134355
* Roberto Minelli, Andrea Mocci and, and Michele Lanza. 2015. **I know what
you did last summer: an investigation of how developers spend their time**.
In Proceedings of the 2015 IEEE 23rd International Conference on Program
Comprehension (ICPC '15). IEEE Press, 25–35.
https://dl.acm.org/doi/10.5555/2820282.2820289
* **Software Design Decoded: 66 Ways Experts Think**. Marian Petre, André van
der Hoek, Yen Quach. 2002. https://www.goodreads.com/book/show/29889476-software-design-decoded
* **Humane Assessment**:
  * Web: https://moldabledevelopment.com/
  * GToolkit: https://gtoolkit.com/
  * Moldable Development en Curry On London 2019: https://www.youtube.com/watch?v=Pot9GnHFOVU
  * Tesis Moldable Tools de Andreis Chis: http://scg.unibe.ch/archive/phd/chis-phd.pdf
* **Pharo Smalltalk**:
  * Curso de Pharo tipo MOOC: https://mooc.pharo.org/
  * Libros gratuitos sobre Pharo: http://books.pharo.org/
* **Roassal**:
  * Web: http://agilevisualization.com/
  * Libro *Agile Visualization with Pharo*: https://link.springer.com/book/10.1007/978-1-4842-7161-2
* **Moose**:
  * Web: https://moosetechnology.org/
  * Moose Query: https://moosequery.ferlicot.fr/
  



## Créditos

- **Imagen de cabecera**: Fotografía por <a href="https://pixabay.com/photos/tools-awl-pliers-antique-equipment-1083796/" target="_blank">dbreen</a> de pixaby.com con  <a href="https://pixabay.com/service/license/" target="_blank"_>licencia Pixabay</a>.


