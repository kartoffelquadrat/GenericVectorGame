#! /bin/bash
## SVG Patch script - M.Schiedermeier, 2022
## maximilian.schiedermeier@mcgill.ca
##
## This script patches SVG files to apply object IDs set via omnigraffle as object IDs.
## If in OmniGraffle an object, e.g. a rectangle was provided with "Object Data Name": "ID-FOO", then exported. This string is not yet used as object id in the svg representation.
## Running this script ensures all id strings set with omnigraffle are then likewise copied for the corresponding object id.
## This allows a subsequent selection and manipulation of these objects via JS DOM operations.
