

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

create ()
{
this.add.image(400, 300, 'map');
this.player = this.physics.add.sprite(400,300 , 'player').setScale(0.5);
this.player.body.setSize(80 ,80);

game = this.physics.add.sprite(500,500,'game').setScale(0.1).setImmovable().refreshBody();

//this.physics.add.collider(player, game);
//this.cameras.main.startFollow(player);
//this.cameras.main.setZoom(2);

this.physics.add.collider(this.player,game, this.gameLoad, null , this);
    

}

update ()
{
if(!this.input.activePointer.isDown && this.isClicking == true) {
    this.player.setData("positionY", this.input.activePointer.position.y);
    this.player.setData("positionX", this.input.activePointer.position.x);
    this.isClicking = false;
    this.canTurn = true;
    this.distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, this.player.getData("positionX"),this.player.getData("positionY"));
} else if(this.input.activePointer.isDown && this.isClicking == false) {
    this.isClicking = true;
}

var dy = Math.abs(this.player.y - this.player.getData("positionY"));
var dx = Math.abs(this.player.x - this.player.getData("positionX"));



var vx = dx / dy;
var vy = dy / dx;



if (vx > 1) {
    vx = 1;
}
 if (vy > 1) {
    vy = 1;
}

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





if (dx <= this.minDistance && dy <= this.minDistance) {
    this.canTurn = false;
}

if (this.canTurn) {
    var angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.player.x, this.player.y, this.player.getData("positionX"),  this.player.getData("positionY"));
    this.player.setAngle(angle + 90);
    this.canTurn = false;
}


}

gameLoad() {
    this.scene.switch("game1");
}

}