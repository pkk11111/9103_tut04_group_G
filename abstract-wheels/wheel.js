class Wheel {
  constructor(x, y, baseRadius, palette) {
    this.x = x;
    this.y = y;
    this.baseRadius = baseRadius;
    this.palette = palette;   // Color set for this wheel
    this.rings = [];          // All ring layers inside the wheel

    this.rotation = random(TWO_PI);          // Initial rotation
    this.rotationSpeed = random(-0.01, 0.01); // Slow spinning motion
  }

  // Create multiple ring layers with random types and colors
  initRings() {
    let numRings = floor(random(3, 6));
    let step = this.baseRadius / numRings;
    let currentInner = 0;

    for (let i = 0; i < numRings; i++) {
      let innerR = currentInner;
      let outerR = currentInner + step;
      currentInner = outerR;

      // Random ring type
      let rnd = random();
      let type = rnd < 0.33 ? "solid" : rnd < 0.66 ? "dots" : "rays";

      let mainColor = random(this.palette);
      let secondaryColor = random(this.palette);

      this.rings.push(
        new Ring(innerR, outerR, type, mainColor, secondaryColor)
      );
    }
  }

  // Update wheel rotation and ring animations
  update() {
    this.rotation += this.rotationSpeed;
    for (let r of this.rings) r.update();
  }

  // Draw wheel, its shadows, and all ring layers
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);

    // Large soft background discs to increase visual density
    noStroke();
    fill(0, 35);
    ellipse(0, 0, this.baseRadius * 3.2, this.baseRadius * 3.2);

    fill(0, 55);
    ellipse(0, 0, this.baseRadius * 2.6, this.baseRadius * 2.6);

    // Offset shadow closest to the wheel
    fill(0, 80);
    ellipse(4, 6, this.baseRadius * 2.1, this.baseRadius * 2.1);

    // Draw all rings
    for (let r of this.rings) r.display();

    pop();
  }
}
