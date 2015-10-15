---
layout: post
category : blog
title: Trends in APS employment
tags:
- data
---

### 5 years of APS jobs data

Ever since [I started]({% post_url 2013-05-26-moreaccessablegazette %}) working on the APS jobs data, I've wanted
to conduct an aggregate analysis of the trends in APS employment.

Today I'm pleased to be able to release unit-record level data corresponding to the past 5 years of APS jobs notices.


This is a significant subset of the same data that you can [explore interactively on APSjobs.info](https://www.APSjobs.info)

#### The importance of open-data

The value of [open-data](http://en.wikipedia.org/wiki/Open_data) is that it empowers citizens, helps small business,
creates value, improves the efficiency of Government and helps solve real-world problems.

This data set is an example of the Australian Public Service's commitment to transparency and accountability.
Until now, the data has been locked up in a difficult to use format; the work I've completed has added value by making
this data more accessible to citizens and business. If my work is embraced by the APS, I believe the increased
accessibility of this public data has the potential to improve efficiency and deliver further public benefits.

#### Data source

The records contained in this data set are derived from the [Australia Public Service Gazette Notices](http://www.apsjobs.gov.au).
These notices are published by the [Australian Public Service Commission](http://www.apsc.gov.au) as directed by
[The Commissioners Directions](http://www.comlaw.gov.au/Details/F2013L00448) under the
[Public Service Act (1999)](http://www.comlaw.gov.au/Series/C2004A00538).

The Gazette notices are not a complete record of all engagements, movements and separations from
the Australian Public Service.

#### What is the Gazette

>   The electronic Public Service Gazette (the Gazette) contains notices required to be
    published under Chapter 2 of the Australian Public Service Commissioner's Directions
    2013 (the Directions). Notices include vacancies  and employment decisions (including
    staff movements, engagements and promotions).

>   As well as vacancies available in the APS (including Senior Executive Service, APS
    agency head and particular APS statutory office vacancies), the Gazette may contain
    vacancies and staff movements in the Australian Parliamentary Service. It may also
    contain vacancies available in non-APS Australian Government agencies.

>   The Gazette is incorporated in the APSjobs website which allows job seekers to search
    for vacancies, staff movements and other notices. APSjobs is also the electronic
    lodgement system for agencies to place notices in the Gazette.

[Source](http://www.apsc.gov.au/aps-employment-policy-and-advice/recruitment-and-selection/gazette)

#### Attribution

This data set is made available under a [Creative Commons license](http://creativecommons.org/licenses/by/3.0/au/). You
should include the following notice in any subsequent use or publication of the full data set:

>   This data set is made available under a Creative Commons license by pvtl
    and is derived from the APS Gazette notices published by the Australian Public
    Service Commission on the APSjobs website under a Creative Commons By
    Attribution license.

For a shorter attribution summary, something like mentioning the source as as _APSjobs data, derived from the
APS Gazette notices by pvtl_ would suffice I think.

#### Time period

These datasets refer to data [published](https://www.apsjobs.gov.au/) in the APS Employment Gazette
between 9 Aug 2007 (PS 31 2007) and 22 August 2013 (PS 33 2013) inclusive.

This comprises:

* 78,813 employment opportunities
* 174,666 Gazette notices, in the following categories:
 * engagements
 * transfers
 * promotions
 * retirements / terminations
 * cancellations
 * corrigenda

The [data set](/assets/data/apsjobs/apsjobs-5yrs-v1.0.zip) (~5.8MB zip file) comprises:

* 24,240 records relating to jobs to which no appointment appears to have been
  Gazetted - that is the job appears to be "unfilled" `unfilled.csv`
* 17,592 records relating to appointments of which no corresponding job notice
  is available `orphans.csv`
* 12,550 records relating to retirements and terminations `retirements.csv`
* 138,209 records relating to engagements, promotions and transfers `appointments.csv`
* 1,400 records of corrigenda `corrigenda.csv`
* 1,978 records of cancellations `cancellations.csv`

I have included some further comments on three of the files below.

#### - orphans.csv

An orphaned record is a engagement, promotion or transfer notice for which the
corresponding job notice is not included in the dataset.

There are 17,592 orphaned records in contrast to a total of 174,666 notices of all types in the
data set (includes Retirements/Terminations, Special notices etc)

There are a number of reasons that a related job notice might not be included:

* The job was advertised before 9 Aug 2007 (16,746 or 95% of records in this category)
* No Notice Number reference is found in the notice (1,169 or 7.6%)
 * This could be due to either no NN being included in the notice (likely), or a bug in my PDF parser (unlikely, I hope!)

* Where a notice number is included, and the Gazette referenced is within the date sample, the job was
  never published in the Gazette
 * (522 records or ~3%)

These records do not include notices modified by subsequent publications of corrections/cancellations - to simplify
the data I have removed notices subject to a subsequent correction/cancellation notice.

* 1177 notices removed due to corrections
* 1763 notices removed due to cancellations

To determine what happened with each of the 'orphan' records someone would have to:

* Manually check each notice published and then go back and manually look for the job listing
* Where the published data is incorrect and no correction exists, go back to the APSC and ask them to
  publish a correction

#### - corrections.csv

1400 Corrigenda notices:

 * using a rough regex classification:
  * `grep -v AGS corrigenda.txt | `
  * `grep -v -E -i "(spell|spelt|name)" |`
  * `grep -v -i -E "(date|commence)" |`
  * `grep -v -i ISAC |`
  * `grep -v -i -E "(locat|region|state)" |`
  * `grep -i -v -E "(department|agency)" |`
  * `grep -i -v -E "(classification|level|APS)"`
 * Around 550 appear to be corrections to AGS numbers
 * Around 117 appear to be spelling corrections
 * Around 270 appear to be corrections to dates
 * Around  54 appear to be notices relating to ISAC (?) promotion decisions
 * Around  55 appear to be correcting the position location
 * Around  47 appear to be correcting department/agency name
 * Around  51 appear to be correcting classificaiton/level
 * The remaining ~250 are corrections to job references

#### - cancellations.csv

1,763 records are removed from the other files (but listed in cancellations.csv).

### Ping back

If you publish any analysis of this data and would like me to include a link to your analysis below, please
drop me a line <script>email();</script>
