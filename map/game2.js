import {Tower} from "./tower.js";

export class game2 extends Phaser.Scene {
    constructor() {
        super({key: "game2"});
        this.towersArray;
    }

    preload ()
    {
    this.load.image('espagne', './assets/espana.png');
    this.load.image('allytower' , './assets/allytower.png');
    this.load.image('ennemytower', './assets/ennemytower.png');
    this.load.image('years', './assets/screen.png');
    }

    create(){

    this.espagne = this.add.sprite(400,300,'espagne').setScale(1.75);

    /*this.towers = this.physics.add.staticGroup();

    this.tower1 = this.towers.create(230,70,"allytower").setScale(0.15);
    this.tower1.body.setSize(30,75);*/

    this.towers = new Tower(this);
    /*this.tower2 = new Tower(this,120,80,"ennemytower,Saint-Jacques-De-Compostelle");
    this.tower3 = new Tower(this,400,90);
    this.tower4 = new Tower(this,620,130);
    this.tower5 = new Tower(this,120,80);
    this.tower6 = new Tower(this,120,80);
    this.tower7 = new Tower(this,120,80);
    this.tower8 = new Tower(this,120,80);
    this.tower9 = new Tower(this,120,80);
    this.tower10 = new Tower(this,120,80);
    this.tower11 = new Tower(this,120,80);
    this.tower12 = new Tower(this,120,80);
    this.tower13 = new Tower(this,120,80);*/

    /*this.tower2 = this.towers.create(120,80,"ennemytower").setScale(0.15).refreshBody();
    //this.tower2.bloublou = function(){};
    this.tower2.body.setSize(30,75);
    this.tower3 = this.towers.create(400,90,"ennemytower").setScale(0.15).refreshBody();
    this.tower3.body.setSize(30,75);
    this.tower4 = this.towers.create(620,130,"ennemytower").setScale(0.15).refreshBody();
    this.tower4.body.setSize(30,75);
    this.tower5 = this.towers.create(300,160,"ennemytower").setScale(0.15).refreshBody();
    this.tower5.body.setSize(30,75);
    this.tower6 = this.towers.create(500,160,"ennemytower").setScale(0.15).refreshBody();
    this.tower6.body.setSize(30,75);
    this.tower7 = this.towers.create(120,240,"ennemytower").setScale(0.15).refreshBody();
    this.tower7.body.setSize(30,75);
    this.tower8 = this.towers.create(340,260,"ennemytower").setScale(0.15).refreshBody();
    this.tower8.body.setSize(30,75);
    this.tower9 = this.towers.create(680,300,"ennemytower").setScale(0.15).refreshBody();
    this.tower9.body.setSize(30,75);
    this.tower10 = this.towers.create(500,300,"ennemytower").setScale(0.15).refreshBody();
    this.tower10.body.setSize(30,75);
    this.tower11 = this.towers.create(80,330,"ennemytower").setScale(0.15).refreshBody();
    this.tower11.body.setSize(30,75);
    this.tower12 = this.towers.create(480,400,"ennemytower").setScale(0.15).refreshBody();
    this.tower12.body.setSize(30,75);
    this.tower13 = this.towers.create(300,410,"ennemytower").setScale(0.15).refreshBody();
    this.tower13.body.setSize(30,75);
    this.tower14 = this.towers.create(200,430,"ennemytower").setScale(0.15).refreshBody();
    this.tower14.body.setSize(30,75);*/

    //this.towersArray = [this.tower2,this.tower3,this.tower4,this.tower5,this.tower6,this.tower7,this.tower8,this.tower9,this.tower10,this.tower11,this.tower12,this.tower13];

    this.years = this.add.image(680,40,'years').setScale(0.3);
    this.mapuissance = 0;
    this.mapuissancetext = this.add.text(20,20,'puissance : '+ this.mapuissance);

    this.puissance = "50";

    }

    update(){

        let x = pointer.x;
        let y = pointer.y;
        /*this.input.on('pointerdown', pointer => 
            {
                let x = pointer.x;
                let y = pointer.y;

                for (const i of this.towersArray) {
                    if((x > i.body.x && x < i.body.x + 30) && (y > i.body.y && y < i.body.y + 75)) {
                        const testButton = this.add.rectangle((i.body.x+82),(i.body.y+9),90,20, 0x6666ff).setInteractive()
                        .on('pointerover', () => this.rectangleTest())
                        .on('pointerout', () => this.rectangleOut());
                        this.attackButton = this.add.text((i.body.x+40),(i.body.y),'Attaquer').setInteractive()
                        .on('pointerover', () => this.enterButtonHoverState())
                        .on('pointerdown', () => this.updateButton())
                        .on('pointerout', () => this.enterButtonRestState());

                        if((x > this.attackButton.x && x < this.attackButton.x + 40) && (y > this.attackButton.y && y < this.attackButton.y + 10)){
                            i = this.towers.create(i.body.x,i.body.y,"allytower").setScale(0.15).refreshBody();
                            i.body.setSize(30,75);
                        }
                    }
                }
            });*/
        this.input.on('pointerdown', pointer => 
            {
                this.towers.update(x,y);
            });
    }

    rectangleTest(){
        
    }

    rectangleOut(){
        
    }

    updateButton(){
        
    }

    enterButtonHoverState(){
        this.attackButton.setStyle({fill : '#ff0'});
        //this.test = this.add.rectangle(200,200,50,50,0x6666ff);
        this.revealpuissance = this.add.text(200,200,this.puissance);
        const tween = this.tweens.add({
            targets:this.tower
        })
    }
    enterButtonRestState(){
        this.attackButton.setStyle({fill: '#fff'});
        this.revealpuissance.destroy();
    }
}

// IHM -> qualitatif -> tests et notes sur ce qui est bien pour l'utilisateur ou pas (points négatifs, points positifs)
// IHM -> quantitatif -> mesurer dans quelle mesure c'est bien -> + de 71,4% -> Donner des tâches à l'utilisateur et remplir questionnaire
// critères Personas
// faire des tests unitaires etc
