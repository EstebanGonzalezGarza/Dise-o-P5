let ellipses = []; // Arreglo para almacenar las elipses

function setup() {
    createCanvas(2000, 2000);
}

function draw() {
  background(220);

  // Actualizar y mostrar cada elipse en el arreglo
  for (let i = 0; i < ellipses.length; i++) {
    ellipses[i].update();
    ellipses[i].display();
  }

  // Crear una nueva elipse si el mouse es presionado
  if (mouseIsPressed) {
    let newEllipse = new Ellipse(mouseX, mouseY);
    ellipses.push(newEllipse);
  }
}

// Clase para representar las elipses
class Ellipse {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = random(20, 50); // Diámetro aleatorio
    this.speed = random(1, 5); // Velocidad de caída aleatoria
    this.color = color(random(255), random(255), random(255)); // Color aleatorio
  }

  update() {
    this.y += this.speed; // Actualizar la posición en el eje Y
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}