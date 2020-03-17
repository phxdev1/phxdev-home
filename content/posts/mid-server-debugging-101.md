---
title: MID Server Debugging 101
date: 2020-03-16T23:32:05.336Z
thumb_img_path: /images/screen_2x.jpg
layout: post
---
Having issues with your ServiceNow MID Server and don't know where to start? Here is a handy field list for debugging MID Server problems:

## 1. Is the MID Server Service running?

I know this sounds trivial but keep reading! Sometimes, services (especially in Windows) can just stop...Maybe we hit a halt code or perhaps an IO operation crashed. In any case, double check that the service is ACTUALLY running. You'd hate to jump into debugging only to find that the service wasn't running or was disabled on start up.

## 2. How much memory is provisioned?

Java loves memory! It's been a problem with the JRE (Java Runtime Environment) for YEARS! In the days of cheap, cheap hardware, sometimes it pays to just throw a few extra gigs of RAM at the problem. Make sure that you are OVER provisioning RAM instead of UNDER provisioning. Which makes a nice segue to...

## 3. When was the last time the server was rebooted?

Because of the memory issues, we need to make a fresh reboot every now and then. Once a month (during patching, you ARE patching...RIGHT?!) is more than enough. In my lab at home, I've let servers run for months only to return and have some funky behavior. A quick reboot if the system has been online for triple digit days can fix A LOT of headaches. Side note, if you have a properly configured cluster, the reboot shouldn't be an issue as the workload transitions to the other node(s).

## 4. How many different processes are you running?

The MID Server is really the workhorse of the ServiceNow platform. "Used and abused" is the way I like to describe it. It's very easy to stand up a new Discovery scan in ServiceNow and not realize we're already scanning a bunch of devices. Similarly, if one MID Server is handling ALL of the REST messages for your platform, it's going to get overloaded as it processes each one. Remember, the MID Server is a FIFO (First In, First Out) queue. If I give it 10 requests and then wait patiently, request #9 doesn't take any longer than request #1. It's just that requests 1 - 8 have to finish before #9 is even ready to begin processing. 

## 5. Are Discovery Scans/Orchestration jobs finishing completely?

The last thing you need is a GIANT scan that runs and doesn't finish. This would then overlap to the next interval when the scan runs. Make sure you're completely finishing scans by making sure they are spaced far enough apart. My friend [Jace Benson](jace.pro) had this EXACT issue not too long ago. His scans where hitting the maximum runtime and canceling out. But it only presented itself when his MID Servers reported themselves has being down.

![](/images/mid-server-debugging-with-jace.png "MID Server Debugging in the SNDevs Slack Channel")

I hope these tips help you as a starting point! As always, if you have questions, please feel free to reach out for help on [Twitter](https://twitter.com/phxdev), [LinkedIn](https://www.linkedin.com/in/phxdev/) or send me a [fully encrypted message on Keybase](https://keybase.io/phxdev/chat)!