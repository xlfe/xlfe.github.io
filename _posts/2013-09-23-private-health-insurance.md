---
layout: post
category : blog
title: Open data and private health insurance
tags:
- health-insurance
- open-data
- data
---

### On open data

The concept of open-data is interesting - it's not just about publishing information, it is about _how_ that
information is published. 

Very often, [information is accessible to the public]({% post_url 2013-05-26-moreaccessablegazette %}) in human readable 
formats (PDF I'm thinking of you!), but those formats are not at all easy to use for any sort of data mining or repurpose of 
the information.

So while the information might be available to the public to view as imagined by the publisher, it's not readily available
to *add value* to, or to create something new.

### Private Health Insurance

The Australian Government runs [PrivateHealth.Gov.Au](http://www.privatehealth.gov.au) - a site which provides information about
the private health policies available in Australia.

They allow you to [compare policies](http://www.privatehealth.gov.au/dynamic/compare.aspx), but only at a very narrow level.

To view the available policies, you have to select:

* the state you'd like cover in
* the number of adults to be covered 
* how many dependants are covered, and;
* **what type of policy you want** - hospital only, general treatment or a combined policy

So if you're trying to figure out whether you can afford hospital only or a combined policy, you have to do multiple searches.

If you wanted to answer interesting questions like which fund is most expensive, or has the most policies in my State, or in which
state is private health insurance the cheapest, you'd need to goto the [Private Health Insurance Ombudsman](http://www.phio.org.au/)
Annual Reports, and hope that they had already answered the question.

### Private Health Policies, all of them

A couple of weeks ago, a colleague asked me to see if there was any way to answer these sorts of questions, without having to click
through pages. "Couldn't you just compare the policies in a spreadsheet?" she asked.

Well, now she (and anyone else) can.

I am pleased to make available the web scraped policies - note this data is from August 2013 and may not reflect the most
recent prices or available policies.

Download [PrivateHealthPolicies-August2013.csv.zip](/assets/data/PrivateHealthPolicies-August2013.csv.zip) (~800kb)

The csv file contains 43,082 records, with the following columns:

* `adults` (number of adults covered by the policy)
* `category` (describes the number of adults and dependents covered)
* `code` (Health Insurer's 3 leter ID)
* `cover` (Combine or GeneralHealt or Hospita - describes the type of cover)
* `dependents` (YoungAdult or ChildrenOrStudent - describes the dependents covered)
* `fund` (Health Insurer's name)
* `level_of_cover_general` (None or Basic or Medium or Comprehensive - describes the level of general cover provided)
* `level_of_cover_hospital` (None or Basic or Medium or Comprehensive - describes the level of hospital cover provided)
* `monthly_premium` (cost of the policy without the Government rebate)
* `policy_name` (name of the policy)
* `state` (the state the policy is offered in)
* `status` (Is policy open (available) or closed for sale)
* `type` (Hospital or General or Combined - the type of policy)
* `monthly_premium_with_rebate` (cost of the policy after the Government rebate)

NB - In the initial release of the data on 23rd Sept 2013 I incorrectly described the status column as
`(Whether the policy is restricted or open to everyone)`. This was corrected at 3.15pm Canberra time on 
24 September 2013 and the corrected definition now appears above.


### Attribution

This data set is made available under a [Creative Commons license](http://creativecommons.org/licenses/by/3.0/au/). You
should include the following notice in any subsequent use or publication of the full data set:

>   This data is made available under a Creative Commons license by pvtl
    and is derived from the Private Health Insurance website privatehealth.gov.au 
    published by The Office of the Private Health Insurance Ombudsman under a 
    Creative Commons By Attribution license http://www.ag.gov.au/cca

For a shorter attribution summary, something like mentioning the source as as _derived from the
privatehealth.gov.au site by pvtl_ would suffice I think.

### Now, over to you

So now, what can you do with this data? Please [let me know](http://twitter.com/xlfe).










