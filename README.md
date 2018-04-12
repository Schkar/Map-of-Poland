# Map-of-Poland
# Interactive map of Poland. 

version 1.0

(map downloaded from simplemaps.com
************* Copyright (c) 2017 Pareto Softare, LLC DBA Simplemaps.com *******************
************* Free for Commercial Use, full terms at  http://simplemaps.com/resources/svg-license ************
)

Map comes with 439 Polish cities. Their location is based on latitude (N only) and longitude (E only).

__How does it work?__

Inside js file, there is an array __cities__. It is an array of objects - every object is a single city, with such properties as:
* name - self explanatory
* N - latitude in __decimal notation__ (this is important - check info below)
* E - longitude in __decimal notation__ (this is important - check info below)
* active - it is responsible for showing/hiding city.

__About decimal notation__

Usually coordinates are written as degrees, minutes and seconds (like this: 52°14'50.4"N 21°00'48.8"E). This, however, can be easily translated into decimal notation (which would be this for above coordinates: 52.247335, 21.013552). Google Maps gives both of those when checking up on point on map.

__But how does it know where to put a point on map?__

JavaScript checks for active cities inside cities array, grabs its N and E coordinates, translates them to X/Y coordiantes of SVG map and creates a "dot" on map in those coordiantes. Every "dot" has a name of city appearing on hover.

__But I don't like the colors. They are ugly :( __

Since it is a SVG file, one can easily manipulate every part of it through css. There is a hover effect and click effect on voivodships. Of course it can be changed to suit your needs.

__My hometown isn't in the array. What can I do to see it?__
It is quite easy to add new cities, towns, villages, places and more. You just need it's name and decimal coordinates. Add them somewhere in cities array and you're all set.

__I want to use it on my page!__
Feel free to do so and feel free to modify it - for both commercial and personal use. Attribution is appreciated!


