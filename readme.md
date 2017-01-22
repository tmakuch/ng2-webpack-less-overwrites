# Adding/Overwriting less variables across the application

### Problem:
I want to be able to specify my custom color for my depdendencies (i.e. imported components).

### Solution - approach
Imported dependencies (components) need to use (publicly documented) variables.

### Solution - technical aspects
Lets add my custom file (with my variables) to all imported less files.

### When does it work
When we are creating said components as part as larger framework.

## Why does it works?
Less variables are [lazy](http://lesscss.org/features/#variables-feature-lazy-loading).

## Possible problems
Overwriting vendor less variables.
Possible solutions:
- prefixes for variables,
- good exclusion patterns in webpack loaders.