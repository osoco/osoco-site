+++
title = "On Magic Walls and Dense Notations"
subtitle = "Addendum to the minutes: a reply to an objection"
date = "2026-09-05T10:00:00Z"
months = [ "2026-09" ]
authors = [ "rafael-luque" ]
authorPhotos = [ "rafael-luque.jpg" ]
draft = "false"
tags = [ "vision", "future-of-computing", "media-for-thought", "osoco" ]
summary = "The minutes of the visit to Atelier have received their first serious objection: the wall is magic, semantics doesn't disappear, and text is an extraordinarily dense notation. This addendum replies point by point — conceding what must be conceded."
background = "on-magic-walls-two-theories.jpg"
backgroundSummary = "on-magic-walls-two-theories.jpg"
url = "/thoughts/2026/09/on-magic-walls-and-dense-notations/"
+++

*Este artículo también está disponible en español: [Sobre paredes mágicas y notaciones densas](/thoughts/2026/09/sobre-paredes-magicas-y-notaciones-densas/).*

*This article replies to a critique of the essay [As We May Think Software](/thoughts/2026/01/as-we-may-think-software-en/).*

<hr class="section-divider"/>

# An objection reaches the committee

When we published the minutes of the visit to Atelier, I expected two kinds of reaction: the enthusiasm of those who recognized the tradition the essay comes from, and the polite indifference of those who would file it under science fiction. A third kind has arrived, and it is much better: a full-blown objection.

A reader, [@steida](https://x.com/steida), took the essay seriously enough to take it apart piece by piece on X ([analysis](https://x.com/steida/status/2095462486103195968) and [critique](https://x.com/steida/status/2095462489995522202)). Let me summarize his objections, because they deserve to be quoted with precision:

1. **There is no behavior before language.** The moment something is executable, you have defined a language, whether it looks like Rust or like boxes on a table. The semantics — ordering, concurrency, failure, time, cancellation — are the hard part, and hiding them doesn't eliminate them.
2. **The wall is magic.** When the wall announces that there are two incompatible definitions of "delivered" in the room — how does it know? If an AI can reliably infer concepts, discover semantic conflicts and predict consequences, we've already solved an enormous fraction of the problem, and the spatial interface is almost incidental. Atelier isn't demonstrating a better medium: it's demonstrating an extraordinarily capable semantic reasoning system and attributing the result to the medium.
3. **The "delivered" example is too easy.** We already know how to handle it with DDD, state machines, event sourcing or types. The genuinely hard bugs are elsewhere: seventeen individually reasonable rules producing an unexpected emergent state, a retry protocol that violates an invariant only after a crash during a particular interleaving, an invariant that only breaks after months of schema evolution.
4. **Simulation is not contact with reality.** You only see the consequences your model and your data represent. The catastrophic assumption is usually the one nobody encoded.
5. **Translation doesn't disappear; it relocates.** From "domain → programmer → code" to "domain → behavioral representation → formal semantics → executable system". For the difficult 10%, you've recreated programming. And text keeps surviving every attempt to replace it because it is an extraordinarily dense notation for abstraction: you can name, parameterize, compose recursively, diff, version. Physical boxes are wonderful for explaining ten states; try putting Linux or SQLite on the table.
6. **The AI is not neutral.** Choosing what consequences to show is already judgment. An AI that says "here are the three relevant consequences" has already exercised enormous influence over the decision. There is no "evidence layer" cleanly separated from values.
7. **"Modifiable by anyone" goes too far.** Capability boundaries are not an elitist distinction: they are an essential correctness and security mechanism. And "if it can't be explained, it doesn't ship" conflates explainability with correctness: better to ship something I cannot explain to every stakeholder but whose critical invariants Lean has proved, than something everyone understands and nobody has proved correct.

His counter-proposal: don't replace code — make the **theory** surrounding it first-class. Connect code to concepts, assumptions, invariants, decisions, tests, traces and counterexamples, and let AI continuously navigate between those representations. A "code observatory" which, he says, is closer to Naur than Atelier itself is.

It is the best reading the essay has received. This addendum replies point by point, starting with what must be conceded.

# What I concede without a fight

Three of the objections are simply correct, and I'd rather say so before defending anything.

**Simulation is not contact with reality.** True. Atelier's table can only show the consequences its model represents, and the catastrophic assumption is usually the one nobody encoded. The essay, in fact, knows this: that is why the last wall of the workshop is not a dashboard but two handwritten columns — **"What we believe"** and **"What we saw"** — with a magnetic arrow moving back and forth between them. That arrow is a confession of fallibility: the explicit theory on one side, the evidence on the other, and the acknowledgment that progress is a back-and-forth, not a declaration. What I do maintain is a difference in odds: an assumption buried in code can be interrogated by no one; an assumption pinned to the wall can, at least, be interrogated. The medium doesn't guarantee that someone asks the right question. It improves the conditions under which that happens.

**Explainability is not correctness.** Also true, and Adele's rule — "if it can't be explained, it doesn't ship" — invites the confusion if read as the sole criterion. But it doesn't compete with formal verification; it complements it on a different axis. A Lean proof establishes *that* an invariant holds. An explanation establishes *why we chose that invariant* and *who bears the consequences*. I wouldn't want a pacemaker whose firmware no one has formally verified either. But neither would I want one whose invariants are proved and whose choice no one can justify to the patient. Atelier's rule doesn't ask to replace proof with narrative: it asks that no design decision be exempt from accountability. The formal and the legible are not rivals; they are two distinct obligations.

**The AI is not neutral.** This is the philosophically strongest objection, and I don't merely concede it: I believe it *strengthens* the essay's central thesis. If choosing which three consequences to show is already an exercise of judgment — and it is: which historical examples, which groups, which time horizon, which causal model — then that framing cannot sit outside the contract. It must itself be legible and contestable: what the team asked, what the agent showed, what it left out and why. That is exactly what the essay calls governance as a property of the medium. An AI whose framing is invisible is a black box with good manners. The answer to "there is no neutral evidence layer" is not to fake neutrality: it is to make the framing one more object on the table, as discussable as the word "delivered" was.

# The genre and the magic

Now to the magic wall, because there the objection gets the symptom right and the diagnosis wrong.

Yes: the wall presupposes semantic reasoning capabilities we don't fully have today. But that is not an oversight of the essay; it is the constitutive convention of the genre. Design fiction works exactly this way: it posits the hard part solved in order to ask the next question. Vannevar Bush never explained how the Memex indexed by association on microfilm — he couldn't; the technology didn't exist — and that "cheat" did not invalidate the question, which took fifty years to find its answer and meanwhile oriented Engelbart, Nelson and half a discipline. Petricek's essay, to which Atelier responds, interviews a designer from an alternative universe without explaining the physics of the universe. Criticizing the wall for being magic is criticizing the Memex for not detailing the microfilm: technically true, generically beside the point.

And there is a second nuance, less comfortable for the objection: the wall is considerably less magic in 2026 than the Memex was in 1945. Detecting that two people are using "delivered" with incompatible definitions in a conversation is something today's language models already do reasonably well. What the wall does in the essay is not resolve concurrency interleavings or prove liveness: it flags a semantic disagreement and hands it back to the humans, who are the ones who invent "Custody" and settle the contract. The list of superhuman capabilities the critique attributes to the wall — distinguishing correlation from causation, predicting consequences, generating the missing domain state — is a list of what the wall would need in order to *decide*. But the wall decides nothing in any scene of the essay. It interrupts, shows, and falls silent. The distance between those two things is precisely the distance between automating and augmenting.

That said, the objection is right about something worth underlining: if that reasoning system ever exists, the credit will not belong to "the spatial interface". It will belong to the whole — and the essay should lean less on the staging. Adele warns about this ("if you try to translate this into a 3D IDE, you'll miss it"), but it is a warning the text itself doesn't always heed.

# Space is not incidental

Now, that the credit belongs to the whole does not turn the space into staging. The objection closes its argument with an elegant demotion — if that semantic reasoning system existed, "the spatial interface is almost incidental" — and here I stop conceding.

The interfaces we collaborate through today are flattened: one screen, one pointer, one person driving while the others watch. Everything we know about how groups think — shared attention, pointing, arranging things in space, talking and touching at the same time — gets bottled through a single-user neck. A spatial computing medium is not an ornament for that collaboration: it is its condition of possibility. In the workshop, several pairs of hands fit on the same problem at once; the spatial arrangement is part of the argument — what sits close to what, what was left at the margin —; and multimodality — physical objects, paper, voice, gesture, projection — lets each idea enter through the channel that expresses it best. None of that comes from the semantic reasoner. It comes from the space.

Utopian? There is work left, no doubt. But we are not writing from pure speculation: our current research project on **DynaSpace** — the spatial computing medium that serves as the technological foundation of [DynaClassroom](https://dynaclassroom.com) — gives us confidence that this ingredient of the workshop is reachable. It is the part of Atelier we are already prototyping.

# Semantics doesn't disappear (and nobody said it would)

"There is no behavior before representation." Agreed. Every executable representation defines a language with precise semantics, and those semantics — ordering, failure, time, cancellation — are the hard part. The essay doesn't claim otherwise: it claims that the *primary representation for thinking together* need not be the notation optimized for the machine. Those are different claims. Beneath the cards, Atelier generates executable systems — the text explicitly names Harel's behavioral programming as a nearby paradigm — and someone still has to determine what "unless the courier confirms delivery" means under timeout, network partition and duplicate messages. That work does not disappear. It remains a craft, and Adele says so without epic: "it's a craft, and every craft has a price."

And yes: executable behavior does end up being, strictly speaking, yet another language. Conceded. But not all languages sit at the same distance from how we think. The difference we see in a Harel-style scenario approach — one the essay doesn't detail, because it is fiction conveying a vision at a high level — is not aesthetic: it describes behavior in a far more natural way. You think in interactions *between* objects rather than *inside* each object; each scenario is described separately, the way it is told ("when this happens, then that, except if…"); and how the different behaviors interweave stops being a problem the programmer solves by smearing it across a codebase: it is delegated to the execution engine that synchronizes the scenarios. Nor is this last-minute speculation on our part: [we have been working in that direction for a while](/thoughts/2025/11/introducing-behavioral-programming-with-smalltalk/).

What the critique calls "recreating programming for the difficult 10%" I would name differently: **keeping programming where it is irreplaceable, and redistributing the other 90%**. Most of what blocks teams today is not Byzantine interleavings: it is disagreements of meaning that travel for months inside tickets until they explode in production. That the difficult 10% still requires formal semantics and specialists is not a failure of the medium; it is the reason Vera exists as a *curator* and not as a universal translator.

And on the density of text: conceded, enthusiastically. Naming, parameterizing, composing recursively, diffing, versioning, transforming mechanically — text is an extraordinary intellectual technology, and no sensible workshop would abandon it. But note that Atelier's cards are not mute boxes: they have names ("Custody", "Soft retry"), conditions, exceptions, living examples; they compose and they conflict. They are, precisely, notation — with a different surface. Nobody proposes putting SQLite on the table, just as nobody proposes discussing the meaning of "delivered" by reading the diff of a retry module. The table is not the system's storage format: it is the surface where meaning gets negotiated. Confusing the two is confusing the architect's drawing with the concrete.

# The example was easy on purpose

Yes, "one word for two obviously different concepts" is the easy example, and yes, DDD, state machines and event sourcing know how to treat it. But the essay's argument was never "we lack techniques for this". It was: **our medium doesn't force us to use them when it matters**. All those techniques live in books, in teams that know them, and in reviews that arrive late; the "delivered" disagreement coexisted without speaking — one definition in metrics, the other in support calls — not for lack of technique, but because nothing in the working medium forced the encounter. An essay illustrates with a case that fits in two pages; the seventeen individually reasonable rules with emergent state do not fit, but they point in the same direction: they are exactly the class of problem you want continuous simulation, visible invariants and — where the stakes demand rigor — formal methods for. Nothing in Atelier is hostile to Lean. If an invariant can be proved, the wall is the natural place to show what is proved, what is merely tested, and what is simply assumed. Today, nobody sees that distinction unless they go looking for it.

# Modifiable doesn't mean "anything goes"

The security objection reads "modifiable by anyone" as "universal write access", and under that reading it would be right: nobody wants pacemaker firmware open to anonymous edits. But the essay says something else, and it says it in the tensest scene of the minutes. When the committee asks "if anyone can touch it, who is accountable?", Adele doesn't answer by abolishing boundaries: she answers with legibility, traceability, guardrails, mandatory simulations for high-impact changes and **boundaries defined by consequence rather than symbolic hierarchy**. Those *are* capability boundaries — with one difference: they are a visible part of the material, not privileges inherited from an org chart. "Studyable by anyone" is unconditional; "modifiable" is conditioned on a governance that can be read. The distance the essay wants to abolish is not the one separating the surgeon from the patient: it is the *ritual* distance between those who may touch behavior and those who may only suffer it — without even being allowed to study it.

# The observatory is already in the workshop

And so we reach the counter-proposal, which is where the objection stops being an objection.

Make the theory surrounding the program first-class; connect code to concepts, assumptions, invariants, decisions, tests, traces, production evidence and counterexamples; let AI continuously navigate between those representations; click on `Mutex.acquire` and see the invariants it exists to preserve, the tests that witness them, the historical bugs that motivated them, and the liveness properties that remain unproved.

I read that description and I don't see an alternative to Atelier. I see Atelier with the weights shifted toward text. In fact, in his own analysis of the essay — prior to the critique — the author writes that the genuinely interesting idea is "making the theory represented by the program first-class, continuously executable, and inspectable *independently of its textual implementation*". I could not agree more: that sentence is the essay. The analysis concedes what the critique disputes.

The "code observatory" keeps code as the central precise artifact and makes the theory around it visible; Atelier puts the theory at the center and generates the executable artifact beneath. They are two different weightings of the same bet: **that theory stop living only in people's heads**. Which weighting is better for which class of system — that is a discussion worth having, and I suspect the answer is "it depends on the system": the observatory for the kernel and the CRDT, the workshop for the domain where semantic disagreement is the dominant failure mode. (I don't think it's a coincidence that the impossible-to-put-on-the-table example was a CRDT: the critic builds local-first software daily — he is the author of [Evolu](https://evolu.dev) — and from that side of the mountain the difficult 10% is not the residue, it is the landscape. From the side of domain systems, the landscape is "delivered".)

We all look from some side of the mountain, and ours is worth declaring too: at OSOCO, the vision of Atelier is the lighthouse guiding a research and development roadmap that includes progress on a spatial computing medium — the DynaSpace mentioned above — and projects around *Scenario-based Modeling* and [*Behavioral Programming*](/thoughts/2025/11/introducing-behavioral-programming-with-smalltalk/). Bias against bias, what matters is not which side each of us looks from, but the point where both sides agree: recognizing that the theory of software belongs at the center.

As for Naur: the objection says its version is closer to *Programming as Theory Building* than mine. Perhaps. But recall what Naur diagnoses: that the program's theory lives in people, that it is present neither in the code nor in the documentation, and that it dies when the team dissolves. Both proposals — observatory and workshop — are attempts to make that theory survive as first-class material instead of evaporating. Arguing about which of the two is more Naurian is arguing about the portal's decoration. What matters is that both stand on the other side.

# The wall asks for the floor (again)

If this conversation had taken place in the workshop, I suspect the wall would have interrupted long ago. Not to hand either of us the win, but to project, with its usual sobriety, something like:

> **"There are two compatible theories in this room. The system cannot choose for you."**

And beneath it, two cards: *code at the center, theory around it* and *theory at the center, code beneath it*. With their consequences: what improves, whom it serves, where each one fails.

The essay asked for exactly this: for software to be a medium where theories become visible, get discussed, and are put to the test. That the first serious objection to the minutes arrived in the form of a rival theory — articulate and generous — is not a setback for Atelier. It is the first evidence that the workshop works. Even if, for now, we have to be the wall ourselves.

<hr class="section-divider"/>

*The original minutes of the visit: [As We May Think Software](/thoughts/2026/01/as-we-may-think-software-en/) · [Cómo podríamos pensar el software (Spanish)](/thoughts/2026/01/as-we-may-think-software/). The essay is archived on Zenodo under DOI [10.5281/zenodo.22260777](https://doi.org/10.5281/zenodo.22260777).*
