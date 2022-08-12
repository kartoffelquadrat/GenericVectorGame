# Generic Vector Game

A minimal template and demo for svg based browser games.

## About

A fancy game UI is easier designed in a vector editor than in plan HTML/CSS. Yet there are some hurdles before your SVG may serve as a decent browser game.  
This repo serves as demo and template for the most standard features:

 * [Perfect size and position](src/main/resources/static/style.css): The UI shows centered and uses as much space as available. On Window resize, the sprite adapts dynamically.
 * [Custom, SVG based board](#custom-board): The UI shown originates a Vector-Editor (Omnigraffle). It was exported to SVG and [auto patched](https://github.com/kartoffelquadrat/SvgPatcher). No manual changes were made to the svg file.
 * [Targeted DOM manipulation](src/main/resources/static/uiactions.js): The top right tile changes to a random colour on click. JavaScript registers interaction and modifies the DOM.

## Try it out

Build and run

 * Clone this repo
 * Power up the backend with ```mvn clean package spring-boot:run``` (requires java, maven)
 * Access the landing page: [```http://127.0.0.1:8080/gvg/board```](http://127.0.0.1:8080/gvg/board).

Test

 * Resize and be happy about perfect responsive adapting.
 * Click like crazy on the top right tile and watch the colours change.

 > If you are wondering why we need a server - you cannot modify the DOM of a loaded SVG with JavaScript, if the file resides on disk. That is actually a security feature of your browser. So we use a webserver to bypass file-system access of the SVG.
    
## How to mod

If you want to use your own SVG and DOM manipulations, here is what needs to be done:

 * Craft your own SVG in a vector program, e.g. *Omnigraffle*. Then export to SVG and [send the SVG through the Patcher](https://github.com/kartoffelquadrat/SvgPatcher).
 * Define your own DOM listeners in ```registry.js```
 * Define your own DOM manipulations in ```uiactions.js```
 * Clean, build, deploy: ```mvn clean package spring-boot:run```
 * Access at [http://127.0.0.1:8080/gvg/board](http://127.0.0.1:8080/gvg/board)
    
## Future extensions

 * [Draggable elements](https://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/)
 * [Server Side State Attributes](...), e.g. generate new colour on server side
 * [Automatic Long Poll Updates](https://github.com/kartoffelquadrat/AsyncRestLib) for multi client support

## Contact / Pull Requests

Contact information for bug reports and pull requests:

 * Author: Maximilian Schiedermeier ![email](markdown/email.png)
 * Github: [Kartoffelquadrat](https://github.com/kartoffelquadrat)
 * Webpage: [McGill University, School of Computer Science](https://www.cs.mcgill.ca/~mschie3)
 * License: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
