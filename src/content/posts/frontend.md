---
layout: ../../layout/PostLayout.astro
title: "Frontend - the red-headed stepchild of product development"
pubDate: "03 Feb 2024"
link: "frontend"
published: true
tags: ['frontend', 'engineering', 'career']
---

# Frontend - the red-headed stepchild of product development

Producing a digital product is a funny business. Many, many people have to think and strategize, work together, and determine what to build and how to build it, launch, and market the product. It is hard to tell who is the most responsible for a successful product launch. Sales? would not happen without a killer app to sell. Engineering? would not even know what to build or how to market without talented designers/PMs and salespeople. So it is clearly a "it takes a village" type of endeavor, but recognition is not equal.

Recognition is not equal in most aspects of life so why would it be equal in software development? On paper, tech work should be easier to tokenize the amount of work and show ROI on each development cycle. If you work on a piece of functionality like a new checkout component, ideally it should be easy to showcase your part of the work, how it fits in the business goals, and after a while what usage impacts it had. But reality is never that straightforward.

From the perspective of C-Suite in mid-large startups, or even a small startup leadership, this is a rough approximation of how the "importance" pecking order shakes out:

1. Architecture, data storage, and business logic (backend)
2. Security and reliability (backend SRE/Security focus)
3. Design
4. Frontend
5. QA
6. Frontend niches -> Accessibility experts, CSS wizards, UX researchers

It may look unfair if you work in any of the 3-6 categories or have different ideas of what is valuable. But this is how it falls in almost all software product companies. This is not a reflection of how "hard" each field is, for example, frontend niche of accessibility is arguably harder than managing optimal database queries. You can study various accessibility topics for years and adapt the knowledge to multiple quirks of the browsers with never-ending spec changes and anti-patterns of developers. This is hard work and it is a moving target. How many new ways can you optimize MySQL queries each year? Not many, if any.

Frontend devaluation hits close to home as I am mostly focused on frontend work. This has been documented for years by [Swyx](https://twitter.com/swyx/status/1682748872047886337) who has spoken of a silent frontend ceiling. The basic idea is simple -> backend devs will likely never report to frontend devs. Looking at VP of eng roles, directors, and engineering managers, they are almost always filled with people with backend background, nobody comes from design or pure frontend background. This is often reflected in C-Suite company addresses or kudos given, at best you may get a shoutout because you were part of the team that was composed of backend engineers or great designers. I believe that most of the leadership thinks of frontend as a group of engineers who basically take designs in Figma and clumsily remake them in code. If Figma or another tool would have reliable exporting functionality they would take out the middleman -> frontend engineer and let their backend engineers template out the UI.

**If you are a frontend engineer, what do you do about this?**

There are options. None of them easy, but you have to pivot to either the design side or backend/systems/data side:
- Become extremely good at design, UX and work very very closely with PMs/Designers. You may think you are already doing this but you are not, you have to become an advocate of the user, and your understanding of how business works and what brings revenue should be second to only PM. You are so good at executing and understanding what to build that they loop you in every decision and client/stakeholder conversation, you own the user experience and execute at a very high level. Your time of waiting for tickets to drop or Figma designs to be completed is over. This is the only path to positions like Director of Product.
- Intentionally move away from frontend focus to backend focus. Going fullstack is okay, temporarily, but learn how the current system works, what database is used and how we are talking to it. Learn everything about authentication and authorization, start contributing to backend in your company. Maybe you are waiting on somebody to build you a route, don't wait, build it yourself and ask for some eyes on it. People are usually happy to see initiative and if you don't completely mess up, you will get ahead. Talk to your manager, and get your frontend work done but start focusing your learning on backend systems and not the latest React canary versions of yet another way to render a `<button>` on a webpage. This is the path to EM/Director of Eng role.

Is there anything else besides these two options? What if you are passionate about QA, can create CSS masterpieces, or can teach best accessibility practices? If your goal is career progression at a mid to large company I suggest going either the product or backend/security engineering route. If you can monetize your frontend niche and do not care about roles like director/VP - don't worry about it and get even better, there is always a niche to explore and teach. But if you are a generalist frontend engineer, you are on shaky ground.

Plan accordingly.
