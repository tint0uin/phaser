import { Enemie } from "./enemie.js";
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
        this.load.image('t', 'assets/bomb.png');
    }

    create() {
        //création du BG
        this.add.image(400, 300, 'sea');

        //création du joueur et de ces hitbox
        // this.player = this.physics.add.sprite(400, 300, 'player').setSize(80,80);
        // this.proue = this.physics.add.image();
        // this.proue.body.setCircle(15);

        this.player = new Player(this,400 ,300);
        this.enemies = new Enemie(this).collideWith(this.player.physicObj).collideWith(this.player.proue);
        this.player.CollideWith(this.enemies.physicObj);



        //création des énemies
        //this.enemie = this.physics.add.sprite(200, 200, 'enemie').setSize(40,110).setImmovable(true);
        // this.enemies = this.physics.add.group({
        //     key: 'enemie',
        //     repeat: 2,
        //     setXY: {x:200, y:200, stepX: 400}
        // });

        
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
            }else {
                this.canTurn = false;
            }

        this.player.update(this.pointerX , this.pointerY, this.canTurn);

        this.enemies.update(this.player);
        
    
    }
   

    

}

