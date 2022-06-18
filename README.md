# Generic Vector Game

A minimal template for vector based browser games.

## About

What you actually want

 * game board that entered, maximizes space, just scales perfectly. (Ref to Generic...)
 * support for vector based board layouts, design with preferred vector workbench.
 * targeted element manipulation, for selective updates of UI elements.

This repo is a minimal setup of all required to support the above. Can be used as template for your own games. Also comes with instructions, what needs to be done to swap default graphics by your own game design.

## Try it out

How to test the sample ui:

 * Clone this repo
 * Power up with ```mvn clean package spring-boot:run``` (requires java, maven)
 * Access the landing page: [```http://127.0.0.1:8080/board```](http://127.0.0.1:8080/board).

Features:
 
 * resize
 * Based on SVG, link to SVG / Omnigraffle file.
 * targeted manipulation (click an element to toggle colour)

## Custom Board

 * 

## Internals

How does it actually work.

 * Perfect fit. Not so simple with CSS. A lot easier to just do the maths yourself and scale things with JS. This logic is in:... Algo described in ...
    * Note: The rendering algorithm is even sophisticated enough to perfectly scale and position overlay elements, so in principle you can stack multiple svgs using their relative postions. See...
 * Custom SVGs. Most thingys export svgs that will be regognized out of box. Just make your own... name it... place it in...
 * Custom IDs. Depends on your Graphic tool, but for OmniGraffle I provided a little script that ensures the IDs you set in the software are also used as object IDs.
    * Set Object IDs in omnigraffle
    * Export SVG
    * Patch SVG (ensures the ids are actually used as SVG ids, not anything else)
    * Adapt JS listeners

## Contact / Pull Requests

Contact information for bug reports and pull requests:

 * Author: Maximilian Schiedermeier ![email](markdown/email.png)
 * Github: [Kartoffelquadrat](https://github.com/kartoffelquadrat)
 * Webpage: [McGill University, School of Computer Science](https://www.cs.mcgill.ca/~mschie3)
 * License: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)