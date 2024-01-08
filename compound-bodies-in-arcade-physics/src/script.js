
document.getElementById('version').textContent = 'Phaser v' + Phaser.VERSION;

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  loader: {
    baseURL: 'https://labs.phaser.io',
    crossOrigin: 'anonymous'
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var asteroid, ship, cursors, s1, s2, s3;

var RotateAround = Phaser.Math.RotateAround;

new Phaser.Game(config);

function preload () {
  this.load.image('background', 'assets/tests/space/nebula.jpg');
  this.load.image('ship', 'assets/sprites/x2kship.png');
  this.load.spritesheet('asteroid', 'assets/tests/space/asteroid4.png', { frameWidth: 64 });
}

function create () {
  this.add.image(0, 0, 'background');

  ship = this.physics.add.image(0, 0, 'ship');

  // ship.setDrag(300);
  ship.setMaxVelocity(600);
  ship.setVelocity(50, 0);

  this.cameras.main.startFollow(ship);
  this.cameras.main.setZoom(2);

  s1 = this.physics.add.image();
  s1.body.setCircle(20);
  s1.setBounce(1);
  s1.setDebugBodyColor(0xffff00);

  s2 = this.physics.add.image();
  s2.body.setCircle(10);
  s2.setBounce(1);
  s2.setDebugBodyColor(0xffff00);

  s3 = this.physics.add.image();
  s3.body.setCircle(10);
  s3.body.setBounce(1);
  s3.setDebugBodyColor(0xffff00);

  asteroid = this.physics.add.image(200, 0, 'asteroid');
  asteroid.setImmovable(true);

  this.physics.add.collider(asteroid, [s1, s2, s3], function (_asteroid, shipComponent) {
    var v = shipComponent.body.velocity;

    ship.body.velocity.copy(v);
    s1.body.velocity.copy(v);
    s2.body.velocity.copy(v);
    s3.body.velocity.copy(v);
  });

  cursors = this.input.keyboard.createCursorKeys();
  
  this.add.text(-50, -50, 'Move ship with cursor keys');
}

function update (time, delta) {
  if (cursors.left.isDown) {
    ship.setAngularVelocity(-120);
  } else if (cursors.right.isDown) {
    ship.setAngularVelocity(120);
  } else {
    ship.setAngularVelocity(0);
  }

  if (cursors.up.isDown) {
    this.physics.velocityFromRotation(ship.rotation, 600, ship.body.acceleration);
  } else {
    ship.setAcceleration(0);
  }

  // These are the original positions, at rotation 0.
  centerBodyOnBody(s1.body, ship.body);
  centerBodyOnXY(s2.body, ship.body.x + 25, ship.body.y + 10);
  centerBodyOnXY(s3.body, ship.body.x + 25, ship.body.y + 55);

  // Rotations need to be calculated center to center.
  ship.body.updateCenter();
  s2.body.updateCenter();
  s3.body.updateCenter();

  // Rotate the centers around the ship
  RotateAround(s2.body.center, ship.body.center.x, ship.body.center.y, ship.rotation);
  RotateAround(s3.body.center, ship.body.center.x, ship.body.center.y, ship.rotation);

  // Reposition the bodies back onto the centers!
  centerBodyOnPoint(s2.body, s2.body.center);
  centerBodyOnPoint(s3.body, s3.body.center);

  // For proper collisions.
  s1.body.velocity.copy(ship.body.velocity);
  s2.body.velocity.copy(ship.body.velocity);
  s3.body.velocity.copy(ship.body.velocity);
}

function centerBodyOnBody (a, b) {
  a.position.set(
    b.x + b.halfWidth - a.halfWidth,
    b.y + b.halfHeight - a.halfHeight
  );
}

function centerBodyOnPoint (a, p) {
  centerBodyOnXY(a, p.x, p.y);
}

function centerBodyOnXY (a, x, y) {
  a.position.set(
    x - a.halfWidth,
    y - a.halfHeight
  );
}
