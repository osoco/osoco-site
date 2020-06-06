+++
title = "Notes about a next software world"
subtitle = "An eXtreme DDD approach"
date = "2020-06-05"
months = [ "2020-06" ]
authors = [ "rafael-luque" ]
authorPhoto = "rafael-luque.jpg"
draft = "false"
tags = [ "blue-plane", "osoco", "future-software", "vision", "design", "media-for-thought" ]
summary = ""
background = "wanderer-over-sea-of-fog.jpg"
backgroundSummary = "wanderer-over-sea-of-fog.jpg"
+++

In his recently published article *[Bits of History, Words of Advice](https://gbracha.blogspot.com/2020/05/bits-of-history-words-of-advice.html)*, Gilad Bracha tries to answer the question **"Why didn't Smalltalk take over the world?"**. In turn, 
Allen Wirfs-Brock has posted a nice response in his essay *[The Rise and Fall of Comercial Smalltalk](http//www.wirfs-brock.com/allen/posts/914)* complementing Gilad's reflections. Allen describes the historical context of the *commercial Smalltalk* era (the *[Early History of Smalltalk](http://worrydream.com/EarlyHistoryOfSmalltalk/)* by Alan Kay just finishes when 
Smalltalk-80 is released to the *wild* world) and several reasons why Smalltalk didn't win. 

Leaving the pragmatical reasons aside, I think the deeper explanation is
that Smalltalk was invented as a research platform to provide the software foundations for Alan Kay's vision about 
personal computing &mdash;the [Dynabook](http://www.vpri.org/pdf/hc_pers_comp_for_children.pdf).

Allen's post explains it very clearly:

> Smalltalk wasn’t created to rule the software world, it was created to enable the invention of a new software world.

I started my interest in Smalltalk about 2005 when I read about his idiosyncrasies and ubiquitous influence in the 
*[Naked Objects](https://www.goodreads.com/book/show/2638796-naked-objects)* book. I have been
learning and practicing Smalltalk since those days &mdash;using *[Squeak](https://squeak.org/)* 
and *[Pharo](https://pharo.org/)*&mdash; and finally adopting Pharo Smalltalk into the OSOCO's stack. 

However, as Allen describes, Smalltalk is not only a great environment for general-purpose programming that we can use
as software consultants, but an exceptional research tool to *invent the future* of software.

I think the exposition to Smalltalk and his 
[design principles](https://www.cs.virginia.edu/~evans/cs655/readings/smalltalk.html) made me inevitably 
think that *[The Computer Revolution Hasn't Happened Yet](http://www.vpri.org/pdf/m2007007a_revolution.pdf)* 
and an alternative software world is desirable and possible. I've been wandering around this idea since a long
time ago until last year we started **[Blue Plane](https://blueplane.xyz)**, a very small research initiative
supported by OSOCO, for long-term thinking and projects about the future of software.

We are still defining our particular vision of a new software world in Blue Plane: What is our goal? What principles will drive our designs? How we imagine the future of software? However, I found some rough notes I wrote in 2016 about these
ideas. We have read and think a lot about it since 2016, but these notes describe our starting point, and 
I think they are still fundamentally relevant, so I have decided to publish them now.

<hr class="section-divider"/>

### Introduction

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

### Some hypothesis of work

It is safe to say that we all share a feeling of unease as far as the general state of software is
concerned: development is difficult, achieving correctness is difficult, levels of software reuse are low,
feedback loops are too long, etc.

In our vision we have pointed some of the possible causes of this apparent failure, and argued 
that we need to be bolder in interpreting the original vision of the object thinking philosophy.

An argument can be made that the contemporary mainstream understanding of objects is but a pale shadow 
of the original idea. Further, it can be argued that the mainstream understanding of objects is, in practice, 
antithetical to the original intent (reference *Object Thinking* by David West here).

We could identify the some working hypothesis to implement our vision.

#### Programming as a representation of knowledge

Programming is a representation of thought, so programmers should be able to focus their
attention on the problem space rather than the solution space. 
   
Our current programming languages and tools appart us far from the domain concepts. Even using those languages relatively bening &mdash;like "pure" object-oriented programming languages&mdash; it is still required too much attention and dedicated effort to the implementation details.

#### A medium for thinking and learning

Following the previous hypothesis, we must get away from pencil-and-paper thinking and 
create a new dynamic medium for thinking and learning software. In our previous post *[Designing media for thought with 
moldable development](https://osoco.es/thoughts/2019/05/designing-media-for-thought-with-moldable-development/)* you
can read about how we applied a *constructivist* approach to the development of a software library.

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

### Main challenges

Finally, we could propose some research challenges:

1. Bring programmers inmerse into the domain model and avoid any kind of distractions by
working permanently within a "pure" conceptual modeling environment. This conceptual environment must provide a whole view of a software system, including all necessary aspects of its function (behaviour), interaction (system integrations and user interactions) and data (structure).

2. Build a domain-aware runtime environment &mdash;for instance, a kind of domain-aware virtual machine&mdash; able to interpret any valid conceptual model. This runtime environment should enable very fast feedback loops based on our incomplete and still work-in-progress models.

3. Experiment with new media for working with dynamic and powerful representations to think and learn about our software systems.

<hr class="section-divider"/>

Thanks to Javier Luque, Milton Lopez, Tudor Gîrba, Shalabh Chaturvedi, Marcel Wiher and Joël Franusic for their corrections and feedback on the draft of this post.

### References

- [The Death of Object-Oriented Programming](https://www.youtube.com/watch?v=ifW0qEJ7OTM). Oscar Nierstrasz. Software Composition Group, University of Bern, Switzerland.
- [Conceptual-Model Programming: A Manifesto](https://www.deg.byu.edu/papers/Manifesto.pdf). David W. Embley, Stephen W. Liddle, and Oscar Pastor.
- [The Humane Representation of Thought](http://worrydream.com/TheHumaneRepresentationOfThought/note.html). Bret Victor.
- [Media for Thinking the Unthinkable](http://worrydream.com/MediaForThinkingTheUnthinkable/). Bret Victor.
- [Patterns of Software: Tales from the Software Community](https://www.goodreads.com/book/show/685486.Patterns_of_Software). Richard P. Gabriel.
- [Object Thinking](https://www.goodreads.com/book/show/43940.Object_Thinking). David West.
- [Domain-Driven Design: Tackling Complexity in the Heart of Software](https://www.goodreads.com/book/show/179133.Domain_Driven_Design). Eric Evans.
- [The Nature of Software Development](https://www.goodreads.com/en/book/show/23016056-the-nature-of-software-development). Ron Jeffries.
- [The CRC Card Book](https://www.goodreads.com/book/show/3437937-the-crc-card-book). David Bellin and Susan Suchman.

### Credits

- **Header photo**: *Wanderer above the Sea of Fog* oil on canvas by <a href="https://en.wikipedia.org/wiki/Caspar_David_Friedrich" target="_blank">Caspar David Friedrich</a> circa 1818.




