---
title: Stop Writing Code - Fish tanks, BBQ and Flow Designer
subtitle: What do fish tanks, BBQ and Flow Designer have in common? In this post
  I explore why we need to stop writing code so we can make our projects more
  maintainable for the low-code, no-code crowd.
date: 2020-07-11T01:59:29.735Z
thumb_img_path: /images/thumb-believable-tank.png
layout: post
---
# Stop writing code!

Ok, ok! That might be a LITTLE dramatic. We don't need to fully stop writing code, just stop writing some of your code. At the very least, start asking yourself "should I really be writing this in code?". 

Have you had time to sit down and check out Flow Designer yet? Seriously, it's going to replace Workflows and if you've caught an episode of Let's Code Happy Hour lately, it is truly becoming the go-to tool! The graphical interface allows developers and non-developers a like to alter business logic in the platform. With the "Record Updated" and "Record Created" triggers, I'm a firm believer that Flow Designer may actually replace Business Rules some day as well (blasphemy, I know...).

"But Mark! What the Hell does this have to do with fish tanks and BBQ!? And WHY would I need to stop writing code!?"

## Fish Tanks and BBQ

If you find yourself in the Phoenix, Arizona area (specifically North Scottsdale) I can't recommend [Tom's Thumb](https://www.facebook.com/thethumbbbq/) enough. It's some of the best BBQ in Arizona! On top of the restaurant it's also a gas station, bakery, car wash, quick lube and market (trust me). It's been featured on Food Network's [Diner's Drive-Ins and Dives](https://www.foodnetwork.com/shows/diners-drive-ins-and-dives/episodes/arizona-all-stars) and gets a 4.5 rating on [TripAdvisor](https://www.tripadvisor.com/Restaurant_Review-g31350-d3801458-Reviews-The_Thumb_Tom_s_Thumb_Fresh_Market-Scottsdale_Arizona.html). They have also been featured on Tanked for the amazing salt water fish tank they have in the middle of the restaurant.

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/yKZgwakRgmw' frameborder='0' allowfullscreen></iframe></div>



Who do you think cleans and maintains this fish tank? What happens when the pH balance goes wonky? Do you think the owner, chef, pit master, baker, lube guys or cashiers can fix anything in that tank when things need to be altered? My guess would be they have an experienced professional that comes in to perform maintenance or they call somebody at all hours when something is wrong. Tom's Thumb employs a small legion of folks, none of whom are qualified to address this beautiful work of art because...well, it SEEMED like a good idea!

## Stop Building Fish Tanks

What does this have to do with code? Well...writing tons of Javascript is like building fish tanks in BBQ joints. At the time, it seems like a great idea because it serves a purpose. But once we're done, there isn't anybody to maintain the code except an experienced professional! In certain situations, we even pay consultants to come in, sling some code and then drop out of the picture. We can't always afford to pay someone full time to stick around. I know! I used to BE one of those guys!  

Wouldn't it be nice if we could build all our Business Rules, Workflows and Scheduled Jobs somewhere that allows even the chefs to clean the tank?

## Enter Flow Designer

Flow Designer is a visual representation of different steps. Instead of writing code, you drag and drop "data pills" into slots to interact with almost anything found in the ServiceNow platform. You can trigger these flows to run on a schedule or when a record is created, updated or deleted. You can even call a Flow from a Scripted REST API. The main advantage to this is that it takes the sting out of maintenance. I can set a Business Analyst, Junior Developer or even a Project Manager in front of this interface and they won't be as intimidated as if they were staring down the business end of a Script Include. 

![](/images/maxresdefault-1-.jpg)

So imagine this scenario. You build out an amazing Flow Designer Flow and move on to your next pressing issue. Instead of being bugged with every little change for the life of the project, you can just hand it over to someone else. Let the no-code and low-code users maintain this and you can focus on the "big picture".

## You're Not Out of the Job Yet

We'll never eliminate code completely! It's always going to be there. Flow Designer doesn't have analogues for everything we do in the platform. Even when you dig down on building actions, you can still replace the "data pill" slots with small scripts! Integrations are still going to be a headache. JSON needs parsed, variables need set. The paradigm has just shifted. We now get to expose our functions as consumable actions inside of the Flow Designer instead of consuming them in a Script Include.