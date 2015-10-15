---
layout: post
category : blog
title: An analysis of the Adobe password dump
tags:
- data
- adobe
---

### We estimate that the Adobe Systems breach likely exposes more than 64 million users to identity theft


On 3 October, security researcher Brian Krebs [announced](http://krebsonsecurity.com/2013/10/adobe-to-announce-source-code-customer-data-breach/)
that login data for an undetermined number of Adobe accounts had been stolen from Adobe Systems.

A few days ago, Krebs [reported](http://krebsonsecurity.com/2013/10/adobe-breach-impacted-at-least-38-million-users/)
 that a file called 'users.tar.gz', believed to be the stolen credentials, had been posted on a number of forums. He also
 reported that the file contained the email addresses and encrypted passwords for approximately **150 million** accounts.

As a long time Adobe user (and member of their online community) I was curious as to how easy it was to get ahold of that
file (and whether my credentials were included).

It turns out that a [quick search on twitter](https://twitter.com/search?q=users.tar.gz&src=typd&f=realtime) is all it takes
to find a link to download the file.

Sitting in that file is the email address and encrypted password for 127m users (~22.7m had an empty password).

If a user registered with Adobe is using the same password for their email or other online accounts, then they
are now likely exposed to having their accounts hijacked.

This is why security professionals warn against [reusing your password for different accounts](http://xkcd.com/792/).

While Adobe has asked *active* users to reset their passwords, this is only indirectly likely to make those users who
have reused their password elsewhere any safer.

But if you're reading this, you probably already knew that.

#### ~150 million credentials, but how many duplicate passwords?

The file contains just over 150 million credentials, including my own. But how do we calculate how many of the
credentials are likely to expose their owners to identity theft?

We need to be able to estimate the proportion of valid credentials that are re-used.

So how common is it for a user to re-use their password across multiple accounts (opening them up to the danger of
having all their accounts breached if any of them get cracked)?

In 2011, Security researcher Joseph Bonneau [estimated](http://www.lightbluetouchpaper.org/2011/02/09/measuring-password-re-use-empirically/)
password reuse by intersecting two separate leaked password databases. This resulted in a sample of 522 credentials,
which was narrowed down further, to eventually get an estimated password reuse rate of around **43%**.

I'm not going to try to intersect the credentials from users.tar.gz with another database. Instead I'm going to take
advantage of a little know but [incredibly useful feature](https://support.google.com/mail/answer/12096?hl=en)
 of Gmail whereby you can create aliases for your Gmail address simply by adding a _+alias_ to your address.

For example if your address was you@gmail.com you would also receive any emails sent to you+ALIAS@gmail.com - this
powerful feature allows you to enter an email alias for each site you signup to. It also allows you to signup
multiple times to the same site - so let's see how many Gmail users of the Adobe site did that (I know I did!).

#### Calculating password reuse among Gmail alias users

There were approximately 24,672,244 credentials which appear to be Gmail accounts (using a simple check to see if the
email address contained either @gmail or @googlemail).

This comprised 25,650 aliases and 24,646,594 non-aliased credentials (where an alias is defined as having at least one
+ character in the part of the address before the @).

In addition to aliases, because Gmail accepts mail at multiple domains (gmail.com, googlemail.com and others) there appear
to be many users who have created accounts using them@gmail.com and them@googlemail.com (etc..)

Excluding those credentials without a password hash (5,711,479) we get the following figures:

* 21,104 '+ aliases'
* 18,939,661 domain aliases and non-aliases
* 18,960,765 total credentials using a Gmail address
* 18,882,224 unique Gmail addresses

The difference between the last two figures (78,541) is the upper limit on the number of potential duplicated user/password
combinations for Gmail users.

### ~51%: the rate of password reuse among duplicate accounts owned by Gmail users

There were 39,766 credentials with at least one duplicate account/password hash credential - so, out of those users
savvy enough to either use Gmails' [plus alias feature](https://support.google.com/mail/answer/12096?hl=en) or
[multiple domains](https://support.google.com/mail/answer/159001?hl=en) around half also used duplicate passwords.

### Password reuse among other users is likely to be higher.

The ~51% estimate is likely to be the lower-bound as I would suggest the more tech savvy the user, the less likely they
are to re-use passwords. The estimate from the research performed by Bonneau supports this as the users in his sample
 were likely very tech savvy users (having accounts on rootkit.org...).

To get the headline figure of 'more than 64 million' we take the number of credentials (~127m) and divide by 2 - to get a
 lower bound estimate of number of users exposed to identity theft.

This exposure is [dependent](http://arstechnica.com/security/2013/11/how-an-epic-blunder-by-adobe-could-strengthen-hand-of-password-crackers/)
on the encryption keys being cracked or leaked, which given the value of this data for blackhats that seems fairly likely.

## Other analysis

#### Popular aliases

The top 5 aliases used - the first is not surprising, but I would not have guessed the others.

* 10523 adobe
* 569 1
* 512 old
* 263 spam
* 218 macromedia

#### Number of credentials by domain

Here's the top 130 domains and number of emails at each:

* 32570254 @hotmail.com
* 24035484 @gmail.com
* 17816245 @yahoo.com
* 3478697 @aol.com
* 1498843 @hotmail.fr
* 1443838 @msn.com
* 1411362 @hotmail.co.uk
* 1249906 @comcast.net
* 1248373 @mail.ru
* 1235477 @live.com
* 1226279 @web.de
* 997799 @yahoo.co.jp
* 967101 @qq.com
* 962018 @gmx.de
* 664353 @yahoo.com.tw
* 659968 @naver.com
* 656127 @sbcglobal.net
* 653994 @yahoo.fr
* 645368 @163.com
* 624427 @yahoo.co.uk
* 596945 @hotmail.it
* 569060 @ymail.com
* 534438
* 517466 @t-online.de
* 490972 @yahoo.com.br
* 452062 @verizon.net
* 446538 @libero.it
* 444376 @yahoo.com.hk
* 441127 @googlemail.com
* 402349 @me.com
* 386840 @yandex.ru
* 382399 @yahoo.co.in
* 380833 @yahoo.es
* 375301 @hotmail.es
* 369009 @live.fr
* 367178 @yahoo.de
* 362989 @cox.net
* 361863 @hotmail.de
* 358280 @mac.com
* 348748 @aim.com
* 339228 @hanmail.net
* 326852 @wanadoo.fr
* 320503 @btinternet.com
* 315394 @adobe.com
* 315185 @bellsouth.net
* 313531 @orange.fr
* 296583 @att.net
* 285371 @gmx.net
* 282896 @wp.pl
* 278697 @126.com
* 270278 @free.fr
* 267769 @rediffmail.com
* 240912 @earthlink.net
* 240303 @rocketmail.com
* 239042 @live.co.uk
* 227493 @yahoo.ca
* 216796 @yahoo.it
* 201959 @yahoo.com.mx
* 197057 @shaw.ca
* 190732 @bigpond.com
* 187787 @charter.net
* 180190 @freenet.de
* 175967 @hotmail.co.jp
* 171948 @nate.com
* 169779 @yahoo.co.id
* 169373 @mundopositivo.com.br
* 165182 @o2.pl
* 162987 @live.it
* 162297 @bluewin.ch
* 160435 @alice.it
* 153149 @rambler.ru
* 152310 @bol.com.br
* 151077 @rogers.com
* 148757 @live.nl
* 148316 @gmx.at
* 146084 @arcor.de
* 144482 @sina.com
* 142465 @sympatico.ca
* 140689 @windowslive.com
* 140658 @live.com.mx
* 140623 @seznam.cz
* 136781 @laposte.net
* 135810 @ig.com.br
* 132925 @ntlworld.com
* 132859 @optonline.net
* 130428 @tiscali.it
* 124420 @mail.com
* 120887 @yahoo.com.cn
* 120539 @yahoo.com.au
* 119277 @yahoo.com.ar
* 107418 @live.ca
* 106387 @live.de
* 106301 @nifty.com
* 105691 @abv.bg
* 104570 @uol.com.br
* 99435 @yahoo.com.vn
* 96850 @terra.com.br
* 94705 @optusnet.com.au
* 94593 @telus.net
* 94040 @bk.ru
* 93588 @juno.com
* 93530 @domain.com
* 92613 @outlook.com
* 91294 @freemail.hu
* 86327 @virgilio.it
* 86085 @interia.pl
* 82645 @meinoyo.com
* 80920 @yahoo.com.sg
* 80762 @videotron.ca
* 80491 @online.de
* 79856 @ybb.ne.jp
* 78373 @mailinator.com
* 77961 @skynet.be
* 76682 @netscape.net
* 76493 @walla.com
* 75771 @sky.com
* 75749 @tiscali.co.uk
* 75743 @telenet.be
* 75496 @blueyonder.co.uk
* 73524 @telia.com
* 72416 @gmx.ch
* 72412 @list.ru
* 71878 @planet.nl
* 71551 @op.pl
* 71168 @tin.it
* 70147 @yahoo.com.ph
* 69666 @inbox.ru
* 69349 @yahoo.in
* 69253 @home.nl
* 66195 @sfr.fr
* 66128 @bigpond.net.au




