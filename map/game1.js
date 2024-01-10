import {Player} from "./player.js";

export class game1 extends Phaser.Scene {
    constructor() {
        super({key: "game1"});
        this.isClicking = false;
        this.canTurn = false;
        this.distance;
        this.minDistance = 7;
        this.proue;
        this.enemie;
        this.enemies;
        this.speed = 300;
        this.pointerX;
        this.pointerY;
    }

    

    preload() {
        this.load.image('sea', './assets/sea.png');
        this.load.image('player', './assets/boat.png');
        this.load.image('enemie', 'assets/enemie_boat.png');
    }

    create() {
        //création du BG
        this.add.image(300, 400, 'sea');

        //création du joueur et de ces hitbox
        // this.player = this.physics.add.sprite(400, 300, 'player').setSize(80,80);
        // this.proue = this.physics.add.image();
        // this.proue.body.setCircle(15);

        this.player = new Player(this,400 ,300);

        //création des énemies
        //this.enemie = this.physics.add.sprite(200, 200, 'enemie').setSize(40,110).setImmovable(true);
        this.enemies = this.physics.add.group({
            key: 'enemie',
            repeat: 2,
            setXY: {x:200, y:200, stepX: 400}
        });

        
        //attribution de la fonction a executer lors d'une collison avec un enemie
        //this.physics.add.collider(this.proue,this.enemie, this.attack, null , this);

        //attribution de la fonction a executer l'ors d'une collison avec un enemie et le joueur
        //this.physics.add.collider(this.player,this.enemie, this.hit, null , this);

    }

    update() {
        if (!this.input.activePointer.isDown && this.isClicking == true) {
                this.pointerY =  this.input.activePointer.position.y;
                this.pointerX = this.input.activePointer.position.x;
                this.isClicking = false;
                this.canTurn = true;
            }else if (this.input.activePointer.isDown && this.isClicking == false) {
                this.isClicking = true;
            }

        this.player.update(this.pointerX , this.pointerY);
        
    
    }
    // update() {
    //     //sauvegarde de la psotion de la souris l'ors du click
    //     if (!this.input.activePointer.isDown && this.isClicking == true) {
    //          this.player.setData(("positionY"), this.input.activePointer.position.y);
    //          this.player.setData(("positionX"), this.input.activePointer.position.x);
    //          this.isClicking = false;
    //          this.canTurn = true;
    //     }else if (this.input.activePointer.isDown && this.isClicking == false) {
    //         this.isClicking = true;
    //     }

    //     //calcule des distance et des vitesse de chaque axe
    //     var dy = Math.abs(this.player.y - this.player.getData("positionY"));
    //     var dx = Math.abs(this.player.x - this.player.getData("positionX"));

    //     var vx = dx / dy;
    //     var vy = dy / dx;


    //     //cap vitesse 
    //     if (vx > 1) {
    //         vx = 1;
    //     }
    //     if (vy > 1) {
    //         vy = 1;
    //     }

    //     //application de la vitesse et de son signe
    //     if(dx <= this.minDistance) {
    //         this.player.setVelocityX(0);  
    //     } else if(this.player.x < this.player.getData("positionX")) {
    //         this.player.setVelocityX(vx); 
    //     } else if(this.player.x > this.player.getData("positionX")) {
    //     this.player.setVelocityX(-vx);
    //     }

    //     if(dy <= this.minDistance) {
    //         this.player.setVelocityY(0);  
    //     } else if(this.player.y < this.player.getData("positionY")) {
    //         this.player.setVelocityY(vy);
            
    //     } else if(this.player.y > this.player.getData("positionY")) {
    //     this.player.setVelocityY(-vy);
        
    //     }

    //     //rotation de joueur
    //     if (this.canTurn) {
    //         var angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.player.x, this.player.y, this.player.getData("positionX"),  this.player.getData("positionY"));
    //         this.player.setAngle(angle + 90);
    //         this.canTurn = false;
    //     }

    //     //normalisation de sa vittesse
    //     this.player.body.velocity.normalize().scale(200);
        
        
        
    //     //positionnement de la hitbox de la proue
    //     this.centerBodyOnXY(this.proue, this.player.body.x + 40, this.player.body.y - 18);
    //     this.proue.body.updateCenter();
    //     Phaser.Math.RotateAround(this.proue.body.center, this.player.body.center.x, this.player.body.center.y, this.player.rotation);
    //     this.centerBodyOnPoint(this.proue, this.proue.body.center);

    //     //copy de la vélocité pour les collsiion
    //     this.proue.body.velocity.copy(this.player.body.velocity);
    //     for (enemie of this.enemies.children    )
    //     if (this.proue.body.touching && (this.enemie.body.touching.left || this.enemie.body.touching.right)) {
    //         killAndHide(this.enemie);
    //     }
    // }

    // //centre l'object a par rapport a x,y
    // centerBodyOnXY (object, x, y) {
    //     object.body.position.set(
    //         x - object.body.halfWidth,
    //         y - object.body.halfHeight
    //     );
    // }

    // centerBodyOnPoint (a, p) {
    //     this.centerBodyOnXY(a, p.x, p.y);
    // }

    // attack() {
    //     //console.log("win");
    // }

    // hit() {
    //     //console.log("loose");
    // }

    

}

