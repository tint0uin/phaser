

class map extends Phaser.Scene {
    constructor() {
      super({ key: "map" });
        this.isClicking = false;
        this.swipeDirection;
        this.canTurn = false;
        this.distance;
        this.minDistance = 7;
        this.player; // mettre le meme nom que le nom de la classe
    }

preload ()
{
this.load.image('map' , 'assets/map.png')
this.load.image('player', 'assets/boat.png');
this.load.image('game','assets/game.png');


}

create () {
    //création du BG
    this.add.image(400, 300, 'map');

    //création du joueur et de sa hitbox
    this.player = this.physics.add.sprite(400,300 , 'player').setScale(0.5);
    this.player.body.setSize(80 ,80);

    //création des point d'entrés de jeux
    game = this.physics.add.sprite(500,500,'game').setScale(0.1).setImmovable().refreshBody();

    //attribution de la fonction a executer l'ors d'une collision avec un point d'interêt
    this.physics.add.collider(this.player,game, this.gameLoad, null , this);
}

update () {
    //sauvegarde de la psotion de la souris l'ors du click
    if(!this.input.activePointer.isDown && this.isClicking == true) {
        this.player.setData("positionY", this.input.activePointer.position.y);
        this.player.setData("positionX", this.input.activePointer.position.x);
        this.isClicking = false;
        this.canTurn = true;
        this.distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, this.player.getData("positionX"),this.player.getData("positionY"));
    } else if(this.input.activePointer.isDown && this.isClicking == false) {
        this.isClicking = true;
    }

    //calcule des distance et des vitesse de chaque axe
    var dy = Math.abs(this.player.y - this.player.getData("positionY"));
    var dx = Math.abs(this.player.x - this.player.getData("positionX"));

    var vx = dx / dy;
    var vy = dy / dx;


    //cap vitesse 
    if (vx > 1) {
        vx = 1;
    }
    if (vy > 1) {
        vy = 1;
    }

    //application de la vitesse et de son signe
    if(dx <= this.minDistance) {
        this.player.setVelocityX(0);  
    } else if(this.player.x < this.player.getData("positionX")) {
        this.player.setVelocityX(400 * vx); 
    } else if(this.player.x > this.player.getData("positionX")) {
    this.player.setVelocityX(-400 * vx);
    }

    if(dy <= this.minDistance) {
        this.player.setVelocityY(0);  
    } else if(this.player.y < this.player.getData("positionY")) {
        this.player.setVelocityY(400 * vy);
    } else if(this.player.y > this.player.getData("positionY")) {
    this.player.setVelocityY(-400 * vy);
    }

    //rotation de joueur
    if (this.canTurn) {
        
        var angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.player.x, this.player.y, this.player.getData("positionX"),  this.player.getData("positionY"));
        this.player.setAngle(angle + 90);
        this.canTurn = false;
    }

    //normalisation de sa vittesse
    this.player.body.velocity.normalize().scale(200);


}

gameLoad() {
    this.scene.switch("game1");
}

}