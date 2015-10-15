---
layout: post
category : blog
title: Where does the vast majority of value come from?
tags:
- data_science
---

I recently heard from a friend who was teaching themselves [R](http://r-project.org) and [python](http://python.org). One
question they had was around which models they should be using. There are certainly plenty to choose from:

* Linear regression
* Logistic regression
* Regression with regularisation
* Neural Network
* Support Vector Machine
* Naïve Bayes
* Nearest Neighbors
* Decision Tree
* Ensemble Methods (Random Forest, Gradient Boosted Tree)

For someone getting started in the world of data-science, as well as for more experienced practitioners, it is easy to
get bogged down in the vast technical detail of the many potential modelling options.

My advice to my friend was to put that aside to begin with because, in my view, the __vast majority__ of the value of
data mining does not come from a particular model, but rather from understanding your data in detail, which should
allow for sophisticated feature selection.

Of course this all of this depends on whether you have _enough_ data to address the problem.

### Having enough (of the right) stuff

There is an [ongoing debate](/blog/2012/07/03/how-much-data-is-enough/) around whether sophisticated machine-learning
algorithms will replace humans experts. I am firmly of the view that they will (with caveats of course) - but
even within the practitioners of our science, there is a debate around whether research should focus on the technical
sophistication of modelling techniques or whether the focus should be applying existing models to larger and larger
data.

One group believes that simple methods applied to big-data provides value, while another group believes that increasing
the sophistication of models applied to small-data is better. I believe the former, and I would suggest that was the
belief of the most successful big-data companies, of which Google is the leader. Google's success is due to its ability
to apply automated techniques to vast data, not due to the advanced models it uses. That's not to say the models it
uses aren't advanced, but rather that they are second to the value added by Google operating at scale.

### Understand your data's features

This is all to say just that feature selection and data handling are the first stop in delivering value to business.
Get those right and go from there. A simple decision tree or random forest operating with great data will beat more
sophisticated models operating with mediocre data any day of the week.
