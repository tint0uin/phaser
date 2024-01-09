class game1 extends Phaser.Scene {
    constructor() {
        super({key: "game1"});
        this.isClicking = false;
        this.canTurn = false;
        this.distance;
        this.minDistance = 7;
        this.proue;
        this.enemie;
        this.speed = 300;
    }

    

    preload() {
        this.load.image('sea', 'assets/sea.png');
        this.load.image('player', 'assetes/boat.png');
        this.load.image('enemie', 'assets/enemie_boat.png');
    }

    create() {
        //création du BG
        this.add.image(400, 300, 'sea');

        //création du joueur et de ces hitbox
        this.player = this.physics.add.sprite(400, 300, 'player').setSize(90,90);
        this.proue = this.physics.add.image();
        this.proue.body.setCircle(10);

        //création des énemies
        this.enemie = this.physics.add.sprite(200, 200, 'enemie');

        //attribution de la fonction a executer lors d'une collison avec un enemie
        this.physics.add.collider(this.proue,this.enemie, this.attack, null , this);

        //attribution de la fonction a executer l'ors d'une collison avec un enemie et le joueur
        this.physics.add.collider(this.player,this.enemie, this.hit, null , this);

    }

    update() {
        //sauvegarde de la psotion de la souris l'ors du click
        if (!this.input.activePointer.isDown && this.isClicking == true) {
             this.player.setData(("positionY"), this.input.activePointer.position.y);
             this.player.setData(("positionX"), this.input.activePointer.position.x);
             this.isClicking = false;
             this.canTurn = true;
        }else if (this.input.activePointer.isDown && this.isClicking == false) {
            this.isClicking = true;
        }

        this.player.setAngularVelocity(50);
        //this.proue.position.set(x - a.halfWidth, y - a.halfHeight)
        //this.centerBodyOnXY(this.proue, this.player.body.x, this.player.body.y);

        
    }

    //centre l'object a par rapport a x,y
    centerBodyOnXY (object, x, y) {
        console.log(object);
        object.position.set(
            x - object.halfWidth,
            y - object.halfHeight
        );
    }

    

}

