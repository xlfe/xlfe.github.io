---
layout: post
category : blog
title: How much data is enough?
tags:
- data science

---

There is a war raging in academia and business between those who believe domain-specific knowledge
trumps data mining and machine learning techniques and those who evangelize having lots and lots of
data and fantastic algorithms as a superior proposition to domain-expertise. Technical papers will
continue to be published arguing both aspects, and I doubt many in business are comfortable picking
either as an exclusive approach.

What would be interesting, however, is if we could derive a rule of thumb or back of the envelope calculation
that represented the trade off between data and domain-knowledge.

#### What is the question?

Let's start by asking what is the purpose of data or domain expertise in the business context?
Obviously the answer is to reduce entropy.

So given that is the objective, I think we could select an appropriate approach by examining the
source of entropy - where entropy is due to having a large number of actors, you're going to need
commensurate data - where that entropy is due to the decisions or actions of small number of actors,
domain expertise is the data required.

That is not to say domain knowledge is not required in the former case - but it would be a different
type of domain knowledge - for example you'd want domain knowledge on how to adequately capture, on a
large scale, the characteristics required to address the challenge. In the latter case however, you'd want
deeper domain knowledge to understand the likely decisions of the smaller group (where by definition each
actor has more influence and needs to be understood at a deeper level).
