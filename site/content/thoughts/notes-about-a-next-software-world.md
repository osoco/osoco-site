+++
title = "Notes about a next software world"
subtitle = "An eXtreme DDD approach"
date = "2020-06-04"
months = [ "2020-06" ]
authors = [ "rafael-luque" ]
authorPhoto = "rafael-luque.jpg"
draft = "false"
tags = [ "osoco", "DDD", "design", "media-for-thought", "object thinking" ]
summary = ""
background = "wanderer-over-sea-of-fog.jpg"
backgroundSummary = "wanderer-over-sea-of-fog.jpg"
+++

Software industry statistics as a whole have failed to improve much since NATO Software Conference at 1968, 
when **software engineering** and **scientific management** were introduced as means for resolving 
the *software crisis*. Unfortunately abandoned projects, cost and time overruns, 
and bloated, buggy software still dominate the landscape.

In spite of the efforts to mitigate this situation &mdash;like XP, Agile, software craftsmanship or DDD&mdash; 
the reality is that a usual software project stack involves an increasingly larger number of programming
languages, DSLs, frameworks, systems, tools, techniques and processes, so it is a fact that the
**accidental complexity** in our day-to-day software projects is increasing to unbearable levels.

As we have conceived the software development, we see as natural that once a programmer has
adquired enough knowledge about a problem domain and has conceived a mental model for this
domain we must wait for days or weeks before seeing a running prototype, and maybe months before a
production-quality piece of software be ready.

We argue that **this is an unacceptable consequence of our failed conception about the software
development activity, but not an inherent characteristic to the nature of software development**.

Nowadays, the programming we have invented requires developers to jump continuously between very
different thinking levels &mdash;like the conceptual, the source code or the runtime levels&mdash; 
trying to tracing back and forth between a domain concept and the code that represents it, 
or between a defect and the affected source code or application benaviour.

We claim that **programming should be reconsidered as a mainly modelling activity and programmers
should be able to capture their applications in an executable domain model from which to obtain
running prototypes efforlessly and immediately**.

In the other hand, we have constrained the developers range of experiences in a tiny subset of their
intellectual capabilities: sitting at a desk, staring at a computer screen and typing in a keyboard
like modern typists. We think this is the wrong way to understand or think about a complex system. 
The right way is to model it and explore it. So **we need a new kind of medium to create 
"dynamic models" in real time in the middle of a modelling conversation with other developers or 
domain experts**.

We invision **a new breed of dynamic and fully conceptual modeling environment** in order to enable
programmers to work through every development stage: analysis, specification, design,
implementation, deployment, evolution, etc. at the conceptual level, and explore their dynamic
models as a thinking and learning tool.

<hr class="section-divider"/>

### State of the art

Software engineers are little concerned with the representation and processing of domain knowledge
and too much concerned with the solution space considerations.

Until now, the focus has been on the least tractable representation of the software problem: the code.
The code has several disadvantages as a tool for thinking:
  - It's extremely complex.
  - It's hard to reason about, forcing programmers to run the code in their heads.
  - It's hard to change, adapt or reuse.
  
The promise of object-oriented programming, and of high-level programming languages themselves, has yet to
be fulfilled. That promise is to make plain to computers and to other programmers the communication
of the computational intentions of a programmer or a team of programmers.

The failure of programming languages to do this is the result of a variety of failures to take seriously
the needs of people in programming, rather than the needs of the computer and the language/compiler/framework 
author. To some degree, this failure can be attributed to our failure to take seriously the needs 
of the programmer.

Several initiatives have appeared in the last years trying to tackle the software complexity by focusing
our attention on the knowledge of the domain, picking apart the most tricky, intricate problems with
models, and shaping the software around those models.

Perhaps the most prominent initiative in this direction is the **Domain-Driven Design** (DDD) approach
proposed by Eric Evans in 2003. Since then the DDD principles have been slowly spreaded and
adopted by an incipient community of practitioners. In spite of these efforts, most software projects
continue both ignoring the relevance of the domain knowledge and doing a poor previous modelling work
withouth getting much real benefits at the end.

In our opinion, DDD has laid out some useful ideas and practices. However, we could try to take the
DDD phylosophy and values until their last consequences in a kind of **eXtreme DDD** mindset.

### Hypothesis

It is safe to say that we all share a feeling of unease as far as the general state of software is
concerned: development is difficult, achieving correctness is difficult, levels of software reuse are low,
feedback loops are too long, etc.

In our vision we have pointed some of the possible causes of this apparent failure, and argued 
that we need to be bolder in interpreting the original vision of the object thinking philosophy.

An argument can be made that the contemporary mainstream understanding of objects is but a pale shadow 
of the original idea. Further, it can be argued that the mainstream understanding of objects is, in practice, 
antithetical to the original intent (David West, Object Thinking).

We could identify the some working hypothesis to implement our vision.

#### Programming as a representation of knowledge

Programming is a representation of thought, so programmers should be able to focus their
attention on the problem space rather than the solution space. 
   
Our current programming languages and tools appart us far from the domain concepts. Even using those languages relatively bening &mdash;like "pure" object-oriented programming languages&mdash; it is still required too much attention and dedicated effort to the implementation details.

#### A medium for thinking and learning

Following the previous hypothesis, we must get away from pencil-and-paper thinking and 
create a new dynamic medium for thinking and learning software (you can read our previous post about 
developing tools for thought). 

Even when working on the computer, we still think in representations that were invented for the medium of paper. Programming languages are written languages and they were designed for writing. Indeed, what programmers think is determined by the language they use, but some languages or media allow you to think "better" than others (weak Sapir–Whorf hypothesis or “linguistic relativity”). 

To understand and build complex systems, we need powerful new representations, and we need a new medium to work with these representations. Our screens and keyboards are pencil and paper metaphors that constrain us to mostly simple symbolic representations. 

The next new medium representations should draw on all
the modes of understanding of the human brain like visual, aural, tactile, kinesthetic and
spatial.

#### A dynamic medium

The new media should also be dynamic because to understand a system it's not
enough to see one static representation or its state at a time. You should see the system
running and evolving to be able to fully understand its dynamics.

<hr class="section-divider"/>

In summary, our vision argue that we should revisit our traditional programming paradigms to
address these issues.

### Challenges

Finally, we could propose some research challenges:

1. Bring programmers inmerse into the domain model and avoid any kind of distractions by
working permanently within a "pure" conceptual modeling environment. This conceptual environment must provide a whole view of a software system, including all necessary aspects of its function (behaviour), interaction (system integrations and user interactions) and data (structure).

2. Build a domain-aware runtime environment &mdash;for instance, a kind of domain-aware virtual machine&mdash; able to interpret any valid conceptual model. This runtime environment should enable very fast feedback loops based on our incomplete and still work-in-progress models.

3. Experiment with new media for working with dynamic and powerful representations to think and learn about our software systems.


### References

- The Death of Object-Oriented Programming. Oscar Nierstrasz. Software Composition Group, University of Bern, Switzerland.
- Conceptual-Model Programming: A Manifesto. David W. Embley, Stephen W. Liddle, and Oscar Pastor.
- [The Humane Representation of Thought](http://worrydream.com/TheHumaneRepresentationOfThought/note.html). Bret Victor.
- [Media for Thinking the Unthinkable](http://worrydream.com/MediaForThinkingTheUnthinkable/). Bret Victor.
- Patterns of Software: Tales from the Software Community. Richard P. Gabriel.
- Object Thinking. David West.
- Domain-Driven Design:Tackling Complexity in the Heart of Software. Eric Evans.
- Implementing Domain-Driven Design. Vernon Vaughn.
- Domain-Driven Design Reference: Definitions and Pattern Summaries. Eric Evans.
- The Nature of Software Development. Ron Jeffries.
- The CRC Card Book. David Bellin and Susan Suchman.

### Credits

- **Header photo**: *Wanderer above the Sea of Fog* oil on canvas by <a href="https://en.wikipedia.org/wiki/Caspar_David_Friedrich" target="_blank">Caspar David Friedrich</a> circa 1818.




