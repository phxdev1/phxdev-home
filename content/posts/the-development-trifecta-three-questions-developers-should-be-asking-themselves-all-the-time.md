---
title: >-
  The Development Trifecta: Three Questions Developers Should Be Asking
  Themselves All the Time
date: 2019-10-09T14:38:11.313Z
layout: post
---
These three questions are the most powerful tool any developer can wield: 

> "Is it scalable?"
> "Is it secure?"
> "Is it maintainable?"

Every line of code, function, class, script, file, project, UML diagram, database, concept, proposed solution, and architecture should stand up to these these questions.

I've shutdown long winded meetings by asking these questions. I've written some of the most beautiful code I'd ever seen, reevaluated, and dumped it. I've even had managers hand me an award for asking these questions and keeping them honest. These questions are immensely valuable! Lets break them down:

## Is is Scalable?


This is probably the most complicated question of them all. We can't just write one off code. Devs tell ourselves that we will just "come back to that part and refactor when the time comes" but how often to we get that luxury? When we build something and it has an inherit flaw from the beginning, we're setting ourselves up for failure.

This is the place where UI/UX come into play as well. We can't lock the UI because we're waiting on a call to server side. You can manually train 5 users on this interface now, but when it grows to 20, they need to be able to figure it out themselves.

Hard lessons are learned here. Widgets fail here.

A word of caution on this though, oftentimes we end up in a trap of "analysis paralysis". Anything can be scaled infinitely with infinite resources. We might not have those resources (read time, money, patience) to make this fully scalable at the moment. Note these points and communicate! "We don't have X so there is an upper limit of Y". One of two things may happen here; you scare somebody into getting the resources you need or you are told you can come back later.

## Is it Secure?


![That's not my department](https://media3.giphy.com/media/kqQwLMXzBmmQg/source.gif)
We often don't want to admit it, but security really is our department. We can harden every server, lock access to every database, and make our environment look like Fort Knox but if we write a back door into something or create a huge vulnerability, all of that is for nothing. 

[Take a look at the HITECH act, specifically section 13404(c)](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/hitechact.pdf).

> (c) APPLICATION OF CIVIL AND CRIMINAL PENALTIES.—In the
> case of a business associate that violates any provision of subsection
> (a) or (b), the provisions of sections 1176 and 1177 of the Social
> Security Act (42 U.S.C. 1320d–5, 1320d–6) shall apply to the business associate with respect to such violation in the same manner
> as such provisions apply to a person who violates a provision
> of part C of title XI of such Act. 

Guess what! We're that "Business Associate" (yes, even as a contractor). That means that as a developer, we can be held **_PERSONALLY RESPONSIBLE_** in the case of a leak of PII or HIPAA data!

This goes way beyond just HIPAA and PII. We never store or transmit plain text credentials, we prevent script and SQL injection. We validate data on the client side AND the server side. Libraries from sources we don't know are on the naughty list and we _NEVER_ set them to auto update for the same reason.

The same logic from above applies, you probably are not going to get the time to "fix it later", do it correctly now.

## Is it Maintainable?


This question is the most easily dismissed. Of course we can maintain it! We wrote it! 

Can we though? We're rockstars! We are constantly building, fixing and going to meetings. In one week, one month, or one year's time are you going to be able to handle the fly-bys, one off change requests and break-fix this code needs? Now we have to deliver on our current project _AND_ help with the dev effort on our last project. It gets over whelming and leads to a huge amount of burn out.

Maybe we want to import a library we love. But what happens when support for that library goes away or the updates stop coming? Are others on our team going to be able to fix issues when that black box no longer works and nobody can contact the dev?

Yes, yes comments go here too but we can't forget about code readability! It does  no good if I hire a junior and it takes them 6 months to a year to get up to speed. We can write dazzling one liner conditionals in Javascript but they are hard to read and following along with. Every language has this issue, it's not just Javascript. Avoid the confusion, white space is our friend!

\#Final Thoughts
As careers change and grow, so will these questions. We might not find them applicable in every situation, there is always an exception to the rule. I'm interested in your thoughts! Are these enough? Am I missing one? Please let me know in the comments or connect with me on Twitter [@phxdev](https://twitter.com/phxdev). Happy clicking!
