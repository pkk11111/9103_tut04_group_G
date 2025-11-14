class Composition {
  constructor() {
    this.wheels = [];      // All wheel objects in the scene
    this.connectors = [];  // Curved lines connecting wheels
  }

  // Create the initial layout of wheels and connectors
  initLayout() {
    const cols = 4;
    const rows = 4;
    const margin = 120;

    // Base grid spacing for positioning wheels
    const spacingX = (width - margin * 2) / (cols - 1);
    const spacingY = (height - margin * 2) / (rows - 1);

    this.wheels = [];
    this.connectors = [];

    // Main wheels in a loose grid
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        let x = margin + i * spacingX + random(-20, 20);
        let y = margin + j * spacingY + random(-20, 20);
        let r = random(60, 90);        // Slightly smaller than before
        let palette = random(PALETTES);

        let wheel = new Wheel(x, y, r, palette);
        wheel.initRings();
        this.wheels.push(wheel);
      }
    }

    // Extra small wheels to fill gaps and add density
    for (let i = 0; i < 6; i++) {
      let x = random(margin, width - margin);
      let y = random(margin, height - margin);
      let r = random(30, 45);          // Much smaller
      let palette = random(PALETTES);

      let wheel = new Wheel(x, y, r, palette);
      wheel.initRings();
      this.wheels.push(wheel);
    }

    // Randomly generate connectors between wheels
    for (let k = 0; k < this.wheels.length; k++) {
      if (random() < 0.75) {           // More connectors than before
        let w = this.wheels[k];
        let endX = w.x + random(-110, 110);
        let endY = w.y + random(-110, 110);
        this.connectors.push(
          new Connector(w, createVector(endX, endY))
        );
      }
    }
  }

  // Update animation for all elements
  update() {
    for (let w of this.wheels) w.update();
    for (let c of this.connectors) c.update();
  }

  // Draw wheels and connectors
  // Betty: Add some texture to background & change the layer wheel and connector.
  display() {
    for (let i = 0; i < 2; i++) {
      noStroke();
      fill(65, 105, 255, 18);
      ellipse(random(width), random(height), random(80, 160));
    }
    for (let w of this.wheels) w.display();
    for (let c of this.connectors) c.display();
    
  }
}
