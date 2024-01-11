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

    this.towers = new Tower(this);

    this.years = this.add.image(680,40,'years').setScale(0.3);
    this.mapuissance = 0;
    this.mapuissancetext = this.add.text(20,20,'puissance : '+ this.mapuissance);

    this.puissance = "50";

    }

    update(){
        this.input.on('pointerdown', pointer => 
        {
            let x = pointer.x;
            let y = pointer.y;
            this.towers.update(x,y);
        });
        
    }
}

// IHM -> qualitatif -> tests et notes sur ce qui est bien pour l'utilisateur ou pas (points négatifs, points positifs)
// IHM -> quantitatif -> mesurer dans quelle mesure c'est bien -> + de 71,4% -> Donner des tâches à l'utilisateur et remplir questionnaire
// critères Personas
// faire des tests unitaires etc
