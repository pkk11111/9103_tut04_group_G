# 9103_tut04_group_G

Code Architecture Overview

This project uses object-oriented structure to allow each team member to modify or extend a different part without conflicts.

1. Composition

Manages the entire scene:

Generates wheel positions in a loose grid

Creates wheels + connectors

Calls update() and display() for all elements

Ideal for teammates working on layout or global animations

2. Wheel

Represents each circular shape:

Holds multiple rings

Has rotation animation

Manages its own color palette

Ideal for teammates working on circle behavior or animations

3. Ring

One layer of the wheel:

Types: "solid", "dots", "rays"

Procedurally generates patterns

Can be easily extended with new pattern types

Ideal for teammates designing new textures or visual styles

4. Connector

Curved, animated lines between circles:

Quadratic bezier curve with slight noise animation

Ideal for teammates adding motion, effects, or interaction

5. sketch.js

Main p5.js file:

Creates canvas

Manages draw loop

Calls Composition methods

Should stay simple so the framework stays stable

6. constants.js

Stores:

Color palettes

Background color

(You can also add more style presets here later)