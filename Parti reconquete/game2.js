class game2 extends Phaser.Scene {
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

    this.espagne = this.add.sprite(800,450,'espagne').setScale(2);

    this.towers = this.physics.add.staticGroup();

    this.tower1 = this.towers.create(600,175,"allytower").setScale(0.15);
    this.tower1.body.setSize(30,75);

    this.tower2 = this.towers.create(920,450,"ennemytower").setScale(0.15).refreshBody();
    this.tower2.body.setSize(30,75);
    this.tower3 = this.towers.create(470,200,"ennemytower").setScale(0.15).refreshBody();
    this.tower3.body.setSize(30,75);
    this.tower4 = this.towers.create(1050,250,"ennemytower").setScale(0.15).refreshBody();
    this.tower4.body.setSize(30,75);
    this.tower5 = this.towers.create(1120,450,"ennemytower").setScale(0.15).refreshBody();
    this.tower5.body.setSize(30,75);
    this.tower6 = this.towers.create(480,380,"ennemytower").setScale(0.15).refreshBody();
    this.tower6.body.setSize(30,75);
    this.tower7 = this.towers.create(850,210,"ennemytower").setScale(0.15).refreshBody();
    this.tower7.body.setSize(30,75);
    this.tower8 = this.towers.create(650,300,"ennemytower").setScale(0.15).refreshBody();
    this.tower8.body.setSize(30,75);
    this.tower9 = this.towers.create(700,400,"ennemytower").setScale(0.15).refreshBody();
    this.tower9.body.setSize(30,75);
    this.tower10 = this.towers.create(425,500,"ennemytower").setScale(0.15).refreshBody();
    this.tower10.body.setSize(30,75);
    this.tower11 = this.towers.create(600,600,"ennemytower").setScale(0.15).refreshBody();
    this.tower11.body.setSize(30,75);
    this.tower12 = this.towers.create(900,580,"ennemytower").setScale(0.15).refreshBody();
    this.tower12.body.setSize(30,75);
    this.tower13 = this.towers.create(745,625,"ennemytower").setScale(0.15).refreshBody();
    this.tower13.body.setSize(30,75);

    this.towersArray = [this.tower2,this.tower3,this.tower4,this.tower5,this.tower6,this.tower7,this.tower8,this.tower9,this.tower10,this.tower11,this.tower12,this.tower13];

    this.years = this.add.image(1400,75,'years').setScale(0.5);
    this.nbsoldats = 0;
    this.puissance = this.add.text(20,20,'puissance : '+ this.nbsoldats);

    }

    update(){

        this.input.on('pointerdown', pointer => 
            {
                let x = pointer.x;
                let y = pointer.y;

                for (const i of this.towersArray) {
                    if((x > i.body.x && x < i.body.x + 30) && (y > i.body.y && y < i.body.y + 75)) {
                        this.attackButton = this.add.text((i.body.x+40),(i.body.y),'Attaquer').setInteractive()
                        .on('pointerover', () => this.enterButtonHoverState())
                        .on('pointerdown', () => this.updateButton(i))
                        .on('pointerout', () => this.enterButtonRestState());

                        if((x > attackButton.x && x < attackButton.x + 40) && (y > attackButton.y && y < attackButton.y + 10)){
                            i = this.towers.create(i.body.x,i.body.y,"allytower").setScale(0.15).refreshBody();
                            i.body.setSize(30,75);
                        }
                    }
                }
            });
    }

    updateButton(GameObject){
        
    }

    enterButtonHoverState(){
        this.attackButton.setStyle({fill : '#ff0'});
    }
    enterButtonRestState(){
        this.attackButton.setStyle({fill: '#fff'});
    }

}