---
layout: post
category : blog
title: Flickr photo recommendations
tags:
- weekend-project
- flickr
- photos
- project
---

#### tl;dr

I built a photo recommendation service for flickr based on your favourited photos. Use it [here](http://favrk.com).

#### Flickr is a social network

Flickr is arguably the number one photo sharing website in the world. Yahoo has been investing in it somewhat recently,
and that has seen a boost to the site's usability and layout.

I enjoy photography, but I don't use flickr as my [primary photo site](http://half.tone.im) (that honour goes to [SmugMug](http://www.smugmug.com)).

Rather, I use flickr because a number of my friends post their photos on there - I also use it to discover photographers
I was not aware of.

Until recently, my process for discovering new photographers involved looking at the favourited photos of photographers
I had already found. Flickr doesn't have a mechanism for recommending photos or photographers.

It's odd, because
as a "social network" for photos, one would expect that this was a fantastic mechanism for flickr to keep people engaged
(by recommending new interesting content for people to look at).

Anyway, they have a pretty good [api](http://www.flickr.com/services/api/) so, as a weekend project - I built a photo recommendation
service for flickr.

### Photo recommendations

The concept is very simple - the service looks at the photos you've favourited, and who else have favourited those same
photos. Based on those people who you share existing favourited photos with, it then shows you photos that they have
favourited, which you haven't.

This is based on the concept that if you share a few favourites with them, you probably have a similar taste in
photos.

<img src="/assets/img/favrk.com.png">

The site is built on Google App Engine and Amazon AWS, and is live at [favrk.com](http://favrk.com) - the name rhymes with
maverick - its a mash up between favourite (or favorite if you're American) and recommendation (rk).

It works pretty well for me - but I'd love to hear your [feedback](http://twitter.com/xlfe).

Viva la weekend project!
