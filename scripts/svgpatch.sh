#! /bin/bash
## SVG Patch script - M.Schiedermeier, 2022
## maximilian.schiedermeier@mcgill.ca
## Literally just a call to the JAR file compiled form this repo:
## https://github.com/kartoffelquadrat/SvgPatcher
#
java -Djavax.xml.accessExternalDTD=all -jar ~/Code/SvgPatcher/target/svgpatcher.jar vectorBoard.svg patchedVectorBoard.svg /gvg/svguiactions.js
mv patchedVectorBoard.svg src/main/resources/static/

