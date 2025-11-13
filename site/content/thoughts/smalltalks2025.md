+++
title = "Introducing Behavioral Programming with Smalltalk"
url = "smalltalks-2025"
subtitle = "Smalltalks 2025"
date = "2025-11-13T10:00:00Z"
months = [ "2025-11" ]
authors = [ "rafael-luque", "francisco-javier-luque" ]
authorPhotos = [ "rafael-luque.jpg", "francisco-javier-luque.jpg" ]
draft = "false"
tags = [ "osoco", "smalltalk", "behavioral programming", "GToolkit", "conference" ]
summary = "Talk *Introducing Behavioral Programming with Smalltalk* presented at Smalltalks 2025 Conference in Buenos Aires."
background = "smalltalks2025-fiuba.jpg"
backgroundSummary = "smalltalks2025-fiuba.jpg"
+++

This year we had the chance to participate in Smalltalks for the very first time, joining the 2025 edition in Buenos Aires. It turned out to be a wonderful experience—not only because of the conference itself, but also because it gave us the chance to meet a new community and share our work with people who genuinely love Smalltalk.

We were struck by the warmth, energy, and enthusiasm of the Argentine Smalltalk community. Powered by the FAST foundation, it’s an incredibly active and welcoming group, and getting to know its members was both inspiring and deeply enjoyable. Their passion for teaching, collaborating, and pushing the language forward made the whole event feel especially meaningful to us.

On a personal level, being there also felt like closing a long-running circle. More than 20 years ago, every book or article I read about the software engineering ideas that fascinated me—TDD, Refactoring, Agile, CRC Cards, OOP—kept leading back to the groundbreaking work of Alan Kay’s Smalltalk group at Xerox PARC in the ’70s and ’80s. Eventually, curiosity got the best of me and I bought a small Spanish-language book called **Programando con Smalltalk: Un ambiente de objetos vivos**, written by **Diego Gómez Deck**. He was an argentine Smalltalker working in Spain at the time, and although the book was short and introductory, it was exactly the spark I needed. It pushed me to start tinkering with Smalltalk (Squeak) and to dive deeper into the language.

{{<figure src="/images/thoughts/programando-con-smalltalk.jpg" width="25%">}}

And now, more than two decades later, getting to share a talk about Smalltalk in Argentina —the home of the author who unknowingly set me on this path— felt like everything had gently come full circle.

<hr class="section-divider"/>

## Talk's Description

What if your program’s behavior scenarios —requirements or use cases— and your code could be one and the same? Behavioral Programming (BP), introduced by David Harel, makes this possible.

In this talk, we’ll introduce the BP approach and explore it through practical examples implemented in Smalltalk.

## Talk's Slides with Notes

Welcome to this talk about a different way of thinking about software —one that is closer to how we naturally understand and describe behavior, rather than how we usually code it.

The subtitle *"The Quest for Executable Knowledge"* reflects what I personally believe programming is really about: **turning our understanding of a system into executable models**.

{{<figure src="/images/thoughts/smalltalks2025-slides/1000.png" width="100%">}}

#### 1.1 What's Behavioral Programming?

So, let's begin with the obvious question: What's Behavioral Programming?

Behavioral Programming is a new paradigm focused on building systems by composing behaviors incrementally —in a way that is closer to how we think about scenarios, rather than how we normally structure control flow.

{{<figure src="/images/thoughts/smalltalks2025-slides/1001.png" width="100%">}}

#### 1.2 Scientific Work and Evolution

BP is not a single tool. It's a researh line spanning over 25 years.

BP builds on decades of research by David Harel and others. It started with a first paper about Live Sequence Charts by Werner Damm and David Harel on 1999. Then the book *"Come, Let's Play"* by David Harel and Rami Marelli on 2003. Then Scenario-Based Programming evolved into Behavioral Programming that was introduced in an article on 2010.

Finally, the wonderful BPjs tool suite were introduced on 2017 by a Ben-Gurion University research group. This is the BP engine we've currently integrated in our solution for Smalltalk.

{{<figure src="/images/thoughts/smalltalks2025-slides/1002.png" width="100%">}}

### 2 Motivations

Let's talk a bit about the motivations of BP, or why we need yeat another paradigm?

{{<figure src="/images/thoughts/smalltalks2025-slides/1003.png" width="100%">}}

#### 2.1 The Climb Up of the Abstraction Ladder

We've made an incredible progress in programming languages —each step giving us more abstraction and expressive power.

{{<figure src="/images/thoughts/smalltalks2025-slides/1004.png" width="100%">}}

#### 2.2 And yet...

Even if you work in one of the most beautiful environments ever created —obviously Smalltalk— the essence of programming still feels too hard.

{{<figure src="/images/thoughts/smalltalks2025-slides/1005.png" width="100%">}}

#### 2.3 The Elephant in the Room of Software

There is an elephant in the room. Something is fundamentally wrong with how we build software.

Probably some of you feel the same than me, even if we don't know exactly what is the problem or how to articulate it.

Programming is too hard —not because computers themselves, but because out tools force us into very unnatural ways of thinking.

{{<figure src="/images/thoughts/smalltalks2025-slides/1006.png" width="100%">}}

#### 2.4 The Cognitive Gap

We all program everyday —not machines, but people.

We express behavior naturally using rules, examples and constraints. That's how we think.

However, in traditional programming, we're basically forced to translate —both forward and backward— between our natural way of describing behavior and the structure the system under development should have to be executable: control flow, functions, objects, whatever.

{{<figure src="/images/thoughts/smalltalks2025-slides/1007.png" width="100%">}}

#### 2.5 The Two-End Tunnel Digging Metaphor

David Harel described this tension with this metaphor that I believe is a very nice description of what software developers have been doing for decades...

{{<figure src="/images/thoughts/smalltalks2025-slides/1008.png" width="100%">}}

#### 2.6.1 Digging the Tunnel from Both Ends

Here's how Harel imagined the problem...

On the left side, we are trying to push "the how" closer to people. We've raised the abstraction level —from machine code to higher-level languages, OOP, AOP or even moldable development environments like GToolkit.

On the right side, we are trying to push "the what" closer to code. We've invented richer ways to capture our understanding —from OOAD to TDD, DDD, Event Storming, etc.

But yet, **the gap in the middle is the costly and error-prone process of programming today**.

{{<figure src="/images/thoughts/smalltalks2025-slides/1009.png" width="100%">}}

#### 2.6.2 Digging the Tunnel from Both Ends

But yet, we, as software developers, are the ones basically digging the mountain and moving back and forth through that tunnel, translating human understanding (at the right side of the mountain) into the executable artifacts (at the left side), and again translating the machine's code back intro human meaning when we need to understand the software in order to fix bugs or evolve it.

{{<figure src="/images/thoughts/smalltalks2025-slides/1010.png" width="100%">}}

### 2.7 Can Programming Be Liberated?

But, why the tunnel is so hard to complete.

Several authors have written about the constraints of programming and how to liberate it.

For example, John Backus in hist Turing Award lecture in 1977 titled "Can Programming Be Liberated from the von Neumann Style?".

In 2008 Harel published a pun intended essay titled "Can Programming Be Liberated, Period?". Not specifically from the von Neumann style, but simply liberating it in a more general way.

{{<figure src="/images/thoughts/smalltalks2025-slides/1011.png" width="100%">}}

#### 2.7.1 The Three Straightjackets of Programming

In this article, Harel points to three main issues or straightjackets of programming.

These are the walls inside the mountain that exlain why the gap persists.

The first —that we must express programs as symbolic artifacts— is something that he tried to address with his earlier work on Scenario-Based Programming and the Play-In technique, allowing us to capture behavior directly from the user interactions.

It's very interesting, but it's out of the scope of this talk, because we're focusing on BP, rather than SBP.

The second one is about something we've already mentioned.

The third one —that we must structure behavior according to the system's structure— it's about a kind of tension between inter-object and intra-object views.

{{<figure src="/images/thoughts/smalltalks2025-slides/1012.png" width="100%">}}

#### 2.7.2 Inter-Object vs Intra-Object Duality

On the one hand, we have inter-object, scenario-based descriptions —the way we naturally think, one story cutting across several components ("one story for all relevant objects").

On the other hand, we have intra-object, state-basd descriptions—the way systems are traditionally implemented, each module owning its complete description ("all pieces of stories for one object").

{{<figure src="/images/thoughts/smalltalks2025-slides/1013.png" width="100%">}}

#### 2.8 Motivations Summed Up

The essence of BP is to bring programming closer to how we actually think —one behavior, one scenario at a time.

{{<figure src="/images/thoughts/smalltalks2025-slides/1015.png" width="100%">}}

### 3 Hello World à la BP

All right —enough theory and philosophy for now.

Let's see Behavioral Programming in action right inside Smalltalk using the Gt4Bp library. This is Hello World à la Behavioral Programming.

{{<figure src="/images/thoughts/smalltalks2025-slides/1016.png" width="100%">}}

#### 3.1 Hello World (non deterministic variant)

Here we have 2 b-threads —one requesting the "Hello" event, the other "World".

There's no synchronization between them, so each run may produce a different order: sometime "Hello World", sometimes "World Hello". And that's perfectly fine —because each behavior acts independently.What we have so far is pure concurrency without coordination.

{{<figure src="/images/thoughts/smalltalks2025-slides/1017.png" width="100%">}}

#### 3.2 Hello World: Enforcing Order

To enforce the intended order we add a third b-thread. We don't modify the existing behavior. We just add another behavior that constraints the interaction.

{{<figure src="/images/thoughts/smalltalks2025-slides/1018.png" width="100%">}}

#### 3.3 Key Takeaways

This tiny example already captures the spirit of Behavioral Programming...

{{<figure src="/images/thoughts/smalltalks2025-slides/1019.png" width="100%">}}

### 4 Conceptual Overview of Behavioral Programming

Each b-thread is a small, independent scenario —a strand of behavior that says: "under these conditions, I want this to happen".

Many b-threads run together concurrently and meet at synchronization points, where they coordinate through shared events.

{{<figure src="/images/thoughts/smalltalks2025-slides/1020.png" width="100%">}}

#### 4.1 How It Works Behind the Scenes?

When a b-thread reaches a point that requires synchronization, it waits until all other b-threads reach their own synchronization points.

At these points, each b-thread specifies three sets of events:

  * Requested events – proposed to be triggered; the b-thread asks to be notified when any occurs.
  * Waited-for events – not requested, but the b-thread wants to be notified when any is triggered.
  * Blocked events – events that this b-thread currently forbids from being triggered.

Once all these declarations are collected, the engine then selects one event that is requested and not blocked, and triggers it. Every b-thread that was waiting for or requesting that event moves forward —others stay paused until the next synchronization point.

{{<figure src="/images/thoughts/smalltalks2025-slides/1021.png" width="100%">}}

### 5 Gt4Bp: When BP meets Smalltalk

Gt4Bp is a very early prototype —a basic library that already allows us to execute and even verify Behavioral Programs directly from GToolkit.

Although it was initially developed inside GToolkit, it doesn’t rely heavily on GToolkit-specific features. So our next step is to evolve it into a generic Behavioral Programming library for all Smalltalk dialects, which we’re calling **Bp4St**.

{{<figure src="/images/thoughts/smalltalks2025-slides/1022.png" width="100%">}}

#### 5.1 Gt4Bp Architecture

Event synchronization and formal verification, are handled by the BPjs Bridge, which delegates them to the Java BPjs engine.

From Smalltalk, however, everything looks unified: you start or stop a program, send events, observe events, vrify and even inspect counterexamples directly in GToolkit.

{{<figure src="/images/thoughts/smalltalks2025-slides/1024.png" width="100%">}}

#### 5.2 Gt4Bp Features

{{<figure src="/images/thoughts/smalltalks2025-slides/1025.png" width="100%">}}

### 6 The ADVISE Project

Gt4Bp is a development effort part of a wider project called ADVISE:

{{<figure src="/images/thoughts/smalltalks2025-slides/1026.png" width="100%">}}

#### 6.1 ADVISE: Two Approaches

{{<figure src="/images/thoughts/smalltalks2025-slides/1027.png" width="100%">}}

#### 6.2 ADVISE: A Vision of Wise Computing

{{<figure src="/images/thoughts/smalltalks2025-slides/1028.png" width="100%">}}

#### 6.3 ADVISE: The Role of OSOCO: SMToolkit

{{<figure src="/images/thoughts/smalltalks2025-slides/1029.png" width="100%">}}

### 7 Why Behavioral Programming Matters

If I had to summarize Behavioral Programming in one idea, it’s about focusing on what should happen rather than how to make it happen.

It lets us describe behaviors incrementally and compositionally, verify them formally, and connect human reasoning directly to execution.

It’s more than a technique —it’s a step towards turning our understanding into executable knowledge.

{{<figure src="/images/thoughts/smalltalks2025-slides/1030.png" width="100%">}}

### 8 Q&amp;A

Thank you so much for your attention. I’d love to hear your questions or thoughts.

{{<figure src="/images/thoughts/smalltalks2025-slides/1031.png" width="100%">}}



