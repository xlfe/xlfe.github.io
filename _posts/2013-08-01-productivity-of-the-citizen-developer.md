---
layout: post
category : blog
title: The productivity of the citizen developer
tags:
- data science
---

#### Where is evidence based IT?

I would like to see a more formal treatment of technical debt and the cost of complexity in designing
and building large (IT) systems.

[There] [1] are [countless] [2] [examples] [3] of large IT projects failing or running well over budget. Sound policy
development usually makes reference to an evidence base (and as Economists, we place a large emphasis on the quality of
data behind assumptions) - but there is little in the way of evidence-backed IT forecasting.

Typical IT project costings are based on estimates of the work required and time/resources to complete the work. The
fundamental problem with this approach is that it leaves the project open to significant planning fallacy (the term
coined by Kahneman and Tversky in 1979); humans are inherently optimistic - we systematically underestimate the amount
of work required to complete a task.

That in itself is not surprising (take a look at [this list of cognitive biases] [4], FYI) - what is surprising is that
there is not a more formal treatment of this problem in large IT projects.


Frameworks that embrace iterative development (for example, [Scrum](http://www.scrumalliance.org/)) massively reduce the
risk of imperfect planning because they remove the assumption of perfect foresight while encouraging a strong feedback loop (aka process improvement). While
these concepts are by no means new in more mature fields like manufacturing - in IT development, we still have a long
way to go.

[1]: http://www.theguardian.com/society/2013/may/24/universal-credit-danger-failing-whitehall-review
[2]: http://delimiter.com.au/2011/11/23/vic-government-it-in-flames-1-4-billion-over-budget-all-projects-late-or-failed/
[3]: http://calleam.com/WTPF/?tag=examples-of-failed-it-project
[4]: http://en.wikipedia.org/wiki/List_of_cognitive_biases

#### Cognitive surplus is changing our world

Clay Shirkey's [2010 TED talk](http://www.ted.com/talks/clay_shirky_how_cognitive_surplus_will_change_the_world.html)
introduces the notion of _cognitive surplus_: the spare brain cycles (which have always existed) that are now being
amplified by digital technologies (which have only recently become ubiquitous).

Open-source software ([free as in freedom](http://www.gnu.org/philosophy/free-sw.html)) is, in large part, both the
result and the driver of this explosion in cognitive surplus. It has lowered the barriers to an incredible range of
technologies and capabilities. The network effect derived from allowing anyone to consume and contribute to an
open-source project must be astronomical.

One great specimen of these effects being captured is [Kaggle](http://www.kaggle.com) - _the_ platform for data-science
competitions worldwide. Their business is a result of the huge number of professionals, and amateurs alike, looking for
interesting problems to solve in their leisure time.

Another emergent feature of this cognitive surplus is _the citizen developer_ - people who have embraced
 various computer science topics (for example, programming), but never formally studied computer science.

#### The citizen developer

The term _Citizen Developer_ was popularised in the 1980s by James Martin in the book 'Application development without
programmers' - it's not something that is particularly new. What is new is that in the last decade the sophistication
of the technology available to these developers has increased exponentially - resulting in a matched increase in productivity.

Today:  We can access [vast troves of data](http://aws.amazon.com/datasets/8172056142375670) and then
 [process it at scale](http://aws.amazon.com/elasticmapreduce/) using just a credit card.
We can use a [rapid application framework](http://emberjs.com/) to maximise productivity and minimise development time
 while building an application. We can __instantly__ deploy that application to [the same infrastructure](https://cloud.google.com/)
Google uses to power their billion dollar business. We can do all this from the comfort of our local coffee shop.

The only capital investment required is time. The ecosystems that support citizen developers are inherently open and
defined by a fierce competition of ideas, but are vast enough that the long tail ensures a place for everyone. Where
creative disruption is the new creative destruction and emergent behavior is king.

Richard Hickey's [fantastic (but rather developer focused) presentation](http://www.infoq.com/presentations/Simple-Made-Easy)
outlines some of the reasoning around the concept _convention over configuration_ (or simplicity over easiness) - which
explains why using standard open frameworks as building blocks avoids the problems associated with complexity in large
systems.

This does not seem to be a concept that many large enterprises or Governments are comfortable with - the failure
to apply evidence based project management to IT projects is only one symptom.

From the perspective of a citizen developer, questions of technical debt and complexity are front and center. How long
is it going to take me to solve a problem using language A versus language B? What is the trade-off between my initial
investment to learn a framework and its discounted future value? How much of my available time in the future am I going
to have to spend maintaining a system if I build it on X vs Y?

Of course there is no single correct answer - but competition is the key. The open-source ecosystem is so productive
because it encourages a multitude of competing technologies and platforms, each building on what came before, each open
to innovation and to disruption.

For large enterprise and Governments, this is the secret - think and act like a citizen developer - because for the
citizen developer failure is acceptable and inevitable but failing to learn from that is not.

_This is a cross post from [Club Troppo](http://clubtroppo.com.au/2013/08/01/guest-post-by-felix-barbalet-the-productivity-of-the-citizen-developer/)_
