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



Herman's Change:

1. Conversion of Solid Rings into Dashed Rings

I modified the solid ring type so that it is rendered using a dashed stroke instead of a continuous line.
This provides a segmented, hand-drawn appearance that better matches the stylistic qualities of the reference artwork.

2. Dashed Outer Outline on Wheels

I changed the outer boundary of each wheel from a solid circle to a clean, evenly spaced dashed outline.
This subtle adjustment enhances the overall visual readability of each wheel without altering its core structure.

3. Added a Centre Core Circle in Each Wheel

I added a small palette-based centre circle to each wheel, creating a more defined focal point and improving resemblance to the reference artwork’s concentric visual motifs.
This is a purely aesthetic addition that does not modify the wheel’s geometry.

4. Added a Dark-Tone Colour to Each Palette

I expanded each colour palette by adding one deep-tone colour to strengthen contrast and unify the appearance of shadows, outlines, and darker ring elements.
This maintains colour harmony while giving the codebase more flexibility when rendering dark accents.

5. Connector Colour Adjustment

I updated the connector colour to be selected from the wheel’s palette rather than using a fixed value, ensuring better colour correspondence between wheels and their connecting lines.