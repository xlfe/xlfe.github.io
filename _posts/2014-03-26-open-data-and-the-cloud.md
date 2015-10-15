---
layout: post
category : blog
title: RF Map AU - open-data and the cloud
tags:
- project
- data
- ACMA
- SDR
- Google Maps
---

### Software-defined radio

I'm naturally very curious about the way the world works, and I've always been fascinated by electronics - when I was
much younger I used to spend my spare time soldering together electronic components in kits purchased from DickSmith.
At one stage, taking apart an old amplifier, (much to my parents horror) I accidentally electrocuted myself and had to
spend a night in hospital under observation. Needless to say I learned some things the hard way!

Anyway - one thing that always fascinated me was the concept of radio-frequency electronics - that there were these
invisible radio waves all around us that allowed information to be sent over the air.

The history of radio is very interesting in itself - something I won't go into here - but a few years ago I came across
some videos showing how a linux kernel developer discovered that a cheap ($20) USB TV Tuner could be used to receive FM
radio - where most of the processing was done [in software](http://en.wikipedia.org/wiki/Software-defined_radio#Amateur_and_home_use).

Now aside from the sheer-geekery of all this - I think software defined radio is incredibly important because it allows
companies developing hardware components to reduce their prototype and iteration times - hugely important for
effective product innovation.

There is also the education aspect of SDR - because there is a bunch of
[open-source](http://www.youtube.com/watch?v=LzgDZytr7no&list=PL618122BD66C8B3C4) software which makes learning RF
engineering alot of fun, I think it puts this kind of stuff into the realm of high-school science experiment instead
of university level engineering degree.

### ACMA RadCom Register

So what has all this got to do with open-data? Well the Australian Communications and Media Authority publishes a
[Register of Radiocommunication Licenses](http://www.acma.gov.au/Industry/Spectrum/Radiocomms-licensing/Register-of-radiocommunications-licences)
that shows all licensed radio communication sites in Australia. To be fair, their
 [search](http://www.acma.gov.au/Industry/Spectrum/Radiocomms-licensing/Apparatus-licences/searching-the-licence-register-apparatus-licensing-acma)
 [interface](http://web.acma.gov.au/pls/radcom/register_search.main_page)
 [isn't that bad](http://web.acma.gov.au/pls/radcom/site_proximity.main_page)
 - but it is a bit slow if you zoom out, and it often seemed to give an error of
 "Too many sites to display - zoom in further or use a more selective filter."

 Well ACMA publishes the [full dataset on CD](http://www.acma.gov.au/Industry/Spectrum/Radiocomms-licensing/Register-of-radiocommunications-licences/spectrum_15).
 The license they provide the data under is pretty good - its not 'creative commons' but it does allow for full derivate
 works to be made, with a caveat that forbids spamming the license holders.

Other people have had the same idea, of course - one well known site is the [Australian Geographical RadioFrequency Map]
(http://maps.spench.net/rf/‎) built by [Balint Seeber](http://spench.net). It's pretty good, but again it suffers from the problem
that it doesn't scale that well - the data is hosted in on a single server.

Wouldn't it be great if we could easily put this sort of geographic information in the cloud?

### The power of the cloud

I recently stumbled across
[Google Maps Engine](http://www.google.com/enterprise/mapsearth/products/mapsengine.html?hl=en_GB) - Google's
Enterprise product that allows businesses to harness the technology behind Google Maps.

I signed up and literally within a few hours was able to upload the site locations from a CSV file onto Google Map Engine,
style the layers and [publish](https://mapsengine.google.com/05844253492924602134-11853667273131550346-4/mapview/) the
data.

[<img src="/assets/img/google-maps-rf.png">](https://mapsengine.google.com/05844253492924602134-11853667273131550346-4/mapview/)

The result is impressive. I've got a few other ideas planned for this data (perhaps involving a D3js visualisation)
so will post here when they've come to fruition.

This might sound like a sales pitch for Google - I am a big fan of their cloud platform (I use Google App Engine
extensively) - but it's not meant to be a sales pitch for Google - rather my point is more that open-data drives
innovation in use of that data for service delivery.



