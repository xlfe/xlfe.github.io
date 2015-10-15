---
layout: post
category : blog
title: A more accessable APS Gazette
tags:
- Australian Public Service
- data
- data cleansing
---

#### The APS Gazette

Since 2010 I've been interested in analysing the data that is contained in the
[APS Gazette](https://www.apsjobs.gov.au/NoBot/gazettedownloads.aspx), but unfortunately despite the regular format of
the gazette notices, their published format does not lend itself to aggregate analysis in any form.

There is also the [APS Statistical Bulletin](http://www.apsc.gov.au/about-the-apsc/parliamentary/aps-statistical-bulletin)
which provides aggregated statistics on a annual (soon to be six monthly basis).

In contrast the APS Gazette publishes individual level detail of all job opportunities, engagements, promotions, transfers
and terminations/seperations every week.

The type of questions that could be answered using this detailed data include (thanks to Adam Sheppard for suggesting
the last two):

* What job types are in demand
* What proportion of job opportunities are not filled?
* How fast is the fastest rise through the APS levels?
* Which agencies promote the fastest
* Are there more promotions internal to an agency than external (that is, do agencies have a bias for promoting
  internals, or bringing new people in who were a level below at their previous agency)?
* What is the average time between promotions that occur within an agency vs promotions where a person's last
  movement (promotion or at level) was from another agency?

So with some of those questions in mind, I set out to convert the APS Gazette into a usable format.

#### August 2007 to May 2013

There was a format change to the Gazette in August 2007 (PS 31 2007) to its current format. I have focussed on
the current format, and that has resulted in detailed data on approximately:

* 76,662 Employment opportunities
* 72,434 Engagements
* 65,692 Promotions
* 16,232 Movement
* 11,885 Retirements / terminations (seperations)

#### From the beginning

The first part of the process was collecting all of the gazettes - neither the APSJobs website nor the [NLA Pandora Archive]
(http://pandora.nla.gov.au/tep/75984) has the full set easily accessible - although Pandora is close. If you're
missing one, you can ask me or probably the NLA or APSC can provide it too. I chose to use the PDF format Gazettes, but
you could use a similar process to parse the DOC format too.

Unfortunately each PDF appeared to be named somewhat haphazardly. I settled on a _YYYY-PS-NN_ format where YYYY is the year
and NN is the gazette number.

The next step was to convert the PDFs into text. I tried a number of options, including [tesseract](https://code.google.com/p/tesseract-ocr/)
and [OCRopus](https://code.google.com/p/ocropus/) but in the end realised that I didn't need to perform any OCRing, and so
settled on pdf2txt from [PDFMiner](http://www.unixuser.org/~euske/python/pdfminer/) which outputted pretty clean plain text
files from the PDFs.

The next step was the slowest - building a semantic parsing engine to read each gazette and extract just the relevant parts.

#### Initial analysis

At the moment I have only started on the high level analysis.
For example, there are some interesting cyclic features to each of the series:

<script src="/assets/js/d3.min.js"></script>
<script src="/assets/js/line.js"></script>


#### Employment opportuntities
<div class="chart" id="emp"></div>

#### Engagements
<div class="chart" id="eng"></div>

#### Promotions
<div class="chart" id="prom"></div>

#### Movements / transfers
<div class="chart" id="move"></div>

#### Separations
<div class="chart" id="canc"></div>

<script>

var parseDate = d3.time.format("%Y-%m-%d").parse;

d3.csv("/assets/data/psgazette_summary.csv", function(error, data) {
  data.forEach(function(d) {
    d.date = parseDate(d.date);
    d.emp = +d.employmentopp;
    d.move = +d.movement;
    d.eng = +d.engagement;
    d.prom = +d.promotion;
    d.canc = +d.cancellation;
  });

  emp_opp = lineChart().x(function(d) { return d.date; })
        .y(function(d) { return +d.employmentopp; });
  d3.select("#emp").datum(data).call(emp_opp);

  move = lineChart().x(function(d) { return d.date; })
        .y(function(d) { return +d.move; });
  d3.select("#move").datum(data).call(move);

  promotions = lineChart().x(function(d) { return d.date; })
        .y(function(d) { return +d.prom; });
  d3.select("#prom").datum(data).call(promotions);

  canc = lineChart().x(function(d) { return d.date; })
        .y(function(d) { return +d.canc; });
  d3.select("#canc").datum(data).call(canc);

  eng = lineChart().x(function(d) { return d.date; })
        .y(function(d) { return +d.eng; });
  d3.select("#eng").datum(data).call(eng);

  });

</script>

In the next few days I'm hoping to dig into the detail more. For example, I need to parse each notice type to extract
features related specifically to the notice.

Depending how far I get, I may try to release the parsing tools I'm using and put together an entry for
[GovHack](http://www.govhack.org).

For now all I can offer for download is the [summary statistics](/assets/data/psgazette_summary.csv) but _watch this space_ 
for more to come...

