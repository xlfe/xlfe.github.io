---
layout: post
category : blog
title: Private Health Insurance Obfuscation (Part 2)
tags:
- health-insurance
- data
---

In part one of this series [I outlined](/blog/2013/11/21/private-health-insurance-opacity/) why I think a
[commitment](http://www.finance.gov.au/blog/2013/05/22/australia-joins-open-government-partnership/) to Open Government
is important, catalogued and refuted the [Private Health Insurance Ombudsman's](http://www.phio.gov.au) spurious submissions
as to why I should remove a [spreadsheet](/blog/2013/09/23/private-health-insurance/)
of private health insurance policies in Australia from my website, and explored
the options for Open Government advocates to pursue a progressive outcome on the use and reuse of public Government data.


This post continues those themes - primarily I am catloguing my experiences in the hope that others may find them
informative.

### Freedom of information?

Given that no Government Agency appears to be responsible for encouraging individual agencies to cooperate and comply
with the Government's stated declaration to 'Open Government', I had few avenues available to pursue the PHIO on their
submission; all I really wanted was acknowledgment that copyright is not applicable to the spreadsheet of private health
insurance policies [I published](/blog/2013/09/23/private-health-insurance/) and that they should not be bullying people
for making pricing information available to the public.

In order to do that, I figured they might need a little prodding.... So on 1st October 2013 I lodged a [Freedom of Information
request](/assets/FOI-PHIO-Docs/FOI 20131 Acknowledgement.pdf) with the PHIO for their full database.

I was very careful in my wording of the request, to ensure that they would provide the requested documents in a
machine readable format, and not scanned PDFs or something equally useless.

This wording comes from an earlier Office of the Australia Information Commissioner (OAIC)
[judgement](http://www.oaic.gov.au/images/documents/freedom-of-information/ic-review-decicions/2013-AICmr57.pdf) which
explored the differences between making documents available in machine readable form and in "pseudo-print" format. Important
reading for all Open Government advocates I would suggest.

### What extra data is available?

Before I continue the story, I want to quickly catalog the extra data a successful FOI request would provide.

The spreadsheet of Private Health Insurance policies I compiled contained 43,000 records with the following details:

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

While this is a good start, it is far from a detailed look at what each policy provides. Here is an example of
the detail on the PHIO website:

<a href="/assets/img/ComparePolicies.png"><img src="/assets/img/ComparePoliciesSmall.png"></a>

As you can see, the additional data pertains to the level of benefits and limits provided by the plans.

### FOI requests - you might have to pay a fee

The FOI Act allows for agencies to recover reasonable costs in responding to FOI requests. I have no issue with that, I
think it is an important aspect of our Freedom of Information system.

I was [informed](/assets/FOI-PHIO-Docs/FOI 20131 Notice of charges.pdf) that I would have to pay a charge, not just to
access the documents, but for the PHIO to make a decision on whether to release the documents.

I appealed their charge decision on the basis that _access to the documents is in the general public interest or in the
interest of a substantial section of the public_.

I thought this made sense, given that almost half of the Australian population holds some form of Private Health Insurance.

I further argued that providing this information to the public was one of the functions that the PHIO was required to
perform under [legislation](http://www.comlaw.gov.au/Details/C2012C00278):

    s238‑5 - Functions of Private Health Insurance Ombudsman
     (d)  collecting and publishing (in written form and on the Internet) information
          about the complying health insurance products available to people, in order
          to assist people to understand the entitlements and benefits available under
          those products;

Unfortunately (but not surprisingly) their internal review [did not find in my favour](/assets/FOI-PHIO-Docs/Notice of charge decision 20131 14112013.pdf).
Here are a few selections of their response:

> This office is funded by a levy on private health insurance consumers, who are already able to access the information
you have requested via the website www.privatehealth.gov.au;

tl;dr - We already provide a website, so why would consumers want another one?

> The best source of information for consumers about private health insurance is on the website www.privatehealth.gov.au,
where the information is presented in a consumer friendly way, along with important consumer advice and warnings which will
not be available if portions of the website's information are extracted and put onto the internet in database form;

tl;dr - Our website is great (they obviously don't [look at the stats](/blog/2013/11/21/private-health-insurance-opacity/))
and we need to protect consumers from the raw data anyway.

> While you may have a personal or professional interest in having access to this data in a database format, the data in this
format is not of interest to a substantial portion of the public.

tl;dr - We can't imagine how you might make the data more accessible but obviously no one but you is interested in it

> PHIO also has a significant reporting function... PHIO, through its complains handling and advice services, is aware of
the issues of concern to consumers in relation to private health insurance and we tailor our reporting and publications
to meet the need for additional information that we identify through complaints and enquiries to the office;

tl;dr - We already do research and analysis on the data, no other research or analysis is needed

> The cost of supplying this data is $1420 per request and for the information to be useful, it would need to be requested
several times a year to maintain current information. __PHIO receives many similar requests for this data from
commercial and other organisations__ and therefore the potential cost of regularly supplying this data without charge to
a number of organisations would negatively affect this office's ability to carry out its core objective under legislation
of protecting health insurance consumers, which would not be in the public interest.

tl;dr - We already have a number of people interested in the data, and if more people saw how useful it was they might
want to get access to it regularly!

Now I am sympathetic to the argument that agencies shouldn't be required to respond to costly requests that are going to
severely impact their ability to perform their functions. But is this really the case here?

Well they spend [more than $180,000](https://www.tenders.gov.au/?event=public.advert.showClosed&AdvertUUID=57BAF65B-FA4B-94D0-5CCAB4179536FC75)
 per year on maintaining www.privatehealth.gov.au. What do you think? Perhaps they could build in a regular
 extract of the database into the website?! They don't seem to be spending it on modernising the experience at least...

__Unfortunately each of their stated reasons is contrary to the [Government's declaration]
(http://www.finance.gov.au/blog/2013/05/22/australia-joins-open-government-partnership/) to Open Government__. A good demonstration
of why there should be an agency tasked with education and support for the initiative.

### And onto their decision

Last week (after numerous delays and extensions) I received [the PHIO's decision](/assets/FOI-PHIO-Docs/Response to FOI 2013-1.pdf)
 on whether they could release the documents to me in a computer readable form, which they make available on their website.

To my surprise, there was no mention anywhere of copyright in their response. Is that one spurious argument put to bed?
One can only hope so.

### Success, sort-of

The PHIO agreed to release the requested documents based on whether a insurer had agreed to have the data on their
policies released (or not).

Of the 35 Private Health Insurance companies in Australia, 27 agreed to have their policy details released - 8 insurers
 did not agree.

The insurers that agreed:

* AU
* BUPA
* CDHBF
* CUA
* GMHBA
* GU Corporate
* HBF
* Health.com.au
* Healthguard (GMF and Central West)
* HIF
* Latrobe
* Mildura
* NIB
* Onemedifund
* Peoplecare
* QCH
* St Lukes
* Westfund
* ACA
* Defence Health
* HCI
* Phoenix
* Police Health
* Reserve Bank
* Teachers Health
* Transport
* TUH

8 insurers that [are holding out](/assets/FOI-PHIO-Docs/Schedule of documents 2013-1.docx):

* AHM
* HCF
* Health Partners
* Medibank
* Doctors' Health
* RT Health
* CBHS
* Navy

The PHIO claimed exemption from releasing the data for those 8 insurers based on two sections of the Freedom of Information
Act:

 * Section 38: Secrecy
 * Section 47E(d): Substantial adverse effect on the operation of the agency

### Secret data? You've got to be joking

Their first claimed exemption relies on the argument that the health insurers' plan pricing and coverage information is
__protected information__.

I knew I shouldn't have felt pleased that they had dropped their copyright argument...

While it is true that the Private Health Insurance Act provides strong protection against disclosure of
_protected information_, __it is laughable to submit that information on the insurers plans and pricing, publicly available
from the PHIO websites, and other sources, is such _protected information_, and therefore exempt from my FOI request under the
secrecy exemptions__.

I would laugh, too, if I hadn't wasted so much time on this.

I have (thankfully) never had to refer a complaint with my private health insurer to the PHIO for dispute resolution,
but I presume that where the Act refers to _protected information_, it is a reference to personal health details provided
to the PHIO either by an individual or by an insurer to resolve a dispute, and not the __publically available__ private
health policies of the insurers.

I didn't even bother responding to the PHIO on this point. I'll leave that one to the OAIC review of their decision.

### Adverse effect?

Their second claimed exemption rests on the following logic:

* The PHIO submits that under the Private Health Insurance Act the insurers are required to provide
standard information statements (SIS) to the PHIO, but that they are not obliged to provide them in the PHIO's
preferred format
* The PHIO submits that insurers could meet their obligations under the Act by providing the SIS statements as a
bulk upload of several thousand files in PDF format if they wanted to.
* The PHIO submits that they believe it is likely that some insurers might chose to do this if they were dissatisfied
with the PHIO releasing their data under the FOI request.
* They claim that if an insurer chose to do this, the PHIO would no longer be able to provide their existing service
to the wider community.

So __based on the PHIO decision-maker's assessment of the likelihood of Insurers taking pejorative action,
they are claiming an exemption from the FOI Act on the basis that releasing the plans and pricing details for those
insurers who have not agreed to the release would not be in the public interest as it would likely
result in substantial adverse effect to the operation of the PHIO.__

Again, I shouldn't have been surprised, but I thought that a FOI request my help to clarify the issues. It seems not.

Again, I would laugh.... but let's break down this argument instead.

### Does the PHIO have the powers to specify the format it receives the SIS statements in?

I'm not lawyer, and this isn't legal advice, so let me just quote form the [Act](http://www.comlaw.gov.au/Details/C2012C00278)
and I'll let you make your own mind up:

    96‑1  Giving standard information statements on request

    A private health insurer must ensure that, if:
      (a)  the Secretary of the Department; or
      (b)  the Council; or
      (c)  the Private Health Insurance Ombudsman;

    requests the private health insurer for the standard information statements for a
    complying health insurance product of the insurer, the insurer gives the person
    who made the request up to date copies of the statements, as soon as practicable
    after being asked and by the method (if any) specified by the person.

Note: __and by the method (if any) specified by the person.__

and...

    96‑15  Giving additional information on request
    (1)  Any of the following:
     (a)  the Secretary of the Department;
     (b)  the Council;
     (c)  the Private Health Insurance Ombudsman;
     may request a private health insurer for specified information about, or
     in relation to a complying health insurance product or products, or a
     complying health insurance policy, of the insurer.

    (2)  The request must:
     (a)  be in writing; and
     (b)  specify the time by which the information requested is to be given.

    (3)  The request may specify the manner and form in which
         the information requested is to be given.

    (4)  A private health insurer must ensure that the request is complied with,
         by the time specified in the request or any longer time allowed by the
         person who made the request.

Note: The request may specify the __manner and form in which the information requested is to be given__.

...it sounds to me like they can, under legislation, request the standard information statements from the insurers
in their preferred format. So that argument appears moot.

Oh, but hold on, they also say in their [FOI response](/assets/FOI-PHIO-Docs/Response to FOI 2013-1.pdf):

> Insurers consider the information as commercially valuable and __as part of negotations with insurers for
their cooperation in supplying data in the format requested, the Government agreed that information would not be
released without authority being granted by the insurer__.

Right.

__So we finally get to the actual reason why the PHIO is so reticent to release the data__.

### Adverse effect, really?

I find it hard to believe that any health fund would take such action. I certainly am not convinced it is
"likely", as the FOI guidelines require.

Considering the PHIO wrote to all the insurers, I thought I might ask them on what basis they made their submission.
I asked:

    You are claiming an exemption under section 47E(d). You will note that the
    FOI guidelines state that:

        5.13 The test requires the decision maker to assess the likelihood of
              the predicted or forecast event, effect or damage occurring after
              disclosure of a document.

    You are submitting that it is likely that insurers dissatisfied with the release
    of their data without their authority would take the action to stop using your
    preferred content management system and instead submit their standard information
    statements in bulk PDF format.

    I am interested in the correspondence because I was wondering if that had informed
    your basis for making the above submission.

    That is, can you advise whether you have received any statements from one or more
    of the insurers that suggests they would take such action if you were to release
    the data without their authority?

    If you do not have such a statement, on what basis do you submit that this
    action is likely to occur?

Their response:

    In answer to your question, no, health insurers did not advise this office in writing
    that they would take such action. Such comments would normally be made directly to
    the Department of Health, etc, not us.

    [The decision maker] is basing it on stakeholder comments made during the development
    of the website in 2006/7 and since then by, other verbal communications.

Jumping at shadows? I don't know. Again I have already wasted too much time on this, so I will have to leave
it to the OAIC review to decide.

### Why are AHM, HCF, Medibank, Health Partners and others holding out?

But in reality, __how likely is it that any of AHM, HCF, Health Partners, Medibank, Doctors' Health, RT Health, CBHS or
the Navy health fund would take pejorative action against the PHIO__?

Especially considering that 27 out of 35 insurers are happy to have their plans pricing and details published in a
spreadsheet, so anyone can compare and analyse them.

__What do those 8 funds have to hide__?

__Does anyone know anyone at these health funds I can ask?__

### In the meanwhile

FOI appeals can take 12 months or more. I have asked for the data for those funds that have agreed, so hopefully that
will be available shortly.

But in the meanwhile I am pleased to [make available an updated spreadsheet](/assets/data/PrivateHealthPolicies-Feb2014.zip) comparing all
available plans in the market. See my [previous](/blog/2013/09/23/private-health-insurance/) post for format details.

It is not as detailed as I would like, but it will have to do for now.







