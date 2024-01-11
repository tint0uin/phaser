export class Tower{
    constructor(scene,x,y,gender,name){

        this.scene = scene;
        this.puissance = 0;

        this.towers = this.scene.physics.add.staticGroup();

        this.towers.create(x,y,gender).setScale(0.15).refreshBody();

        this.towerdefense = this.towers.create(230,70,'allytower').setScale(0.15).refreshBody().setSize(30,75);
        this.towerdefense.name = "Oviedo";

        this.tower1 = this.towers.create(120,80,"ennemytower").setScale(0.15).refreshBody();
        this.tower1.setSize(30,75);
        this.tower1.name = 'Saint-\nJacques-\nDe-Compostelle';

        this.tower2 = this.towers.create(400,90,"ennemytower").setScale(0.15).refreshBody();
        this.tower2.setSize(30,75);
        this.tower2.name = "Pampelune";

        this.tower3 = this.towers.create(620,130,"ennemytower").setScale(0.15).refreshBody();
        this.tower3.setSize(30,75);
        this.tower3.name = "Barcelone";

        this.tower4 = this.towers.create(300,160,"ennemytower").setScale(0.15).refreshBody();
        this.tower4.setSize(30,75);
        this.tower4.name = "Valladolid";

        this.tower5 = this.towers.create(500,160,"ennemytower").setScale(0.15).refreshBody();
        this.tower5.setSize(30,75);
        this.tower5.name = "Saragosse";

        this.tower6 = this.towers.create(120,240,"ennemytower").setScale(0.15).refreshBody();
        this.tower6.setSize(30,75);
        this.tower6.name = "Coimbra";

        this.tower7 = this.towers.create(340,260,"ennemytower").setScale(0.15).refreshBody();
        this.tower7.setSize(30,75);
        this.tower7.name = "Tolède";

        this.tower8 = this.towers.create(680,300,"ennemytower").setScale(0.15).refreshBody();
        this.tower8.setSize(30,75);
        this.tower8.name = "Palma";

        this.tower9 = this.towers.create(500,300,"ennemytower").setScale(0.15).refreshBody();
        this.tower9.setSize(30,75);
        this.tower9.name = "Valence";

        this.tower10 = this.towers.create(80,330,"ennemytower").setScale(0.15).refreshBody();
        this.tower10.setSize(30,75);
        this.tower10.name = "Lisbonne";

        this.tower11 = this.towers.create(480,400,"ennemytower").setScale(0.15).refreshBody();
        this.tower11.setSize(30,75);
        this.tower11.name = "Murcie";

        this.tower12 = this.towers.create(300,410,"ennemytower").setScale(0.15).refreshBody();
        this.tower12.setSize(30,75);
        this.tower12.name = "Cordoue";

        this.tower13 = this.towers.create(200,430,"ennemytower").setScale(0.15).refreshBody();
        this.tower13.setSize(30,75);
        this.tower13.name = "Séville";

        for(const i of this.towers.children.entries){
            

            this.nom = this.scene.add.text(i.body.x-20,i.body.y+80,i.name);
        }

        return this;
    }

    update(x,y){
        for(const i of this.towers.children.entries){
            if((x > i.body.x && x < i.body.x + 30) && (y > i.body.y && y < i.body.y + 75)) {
                this.hitboxbutton = this.scene.add.text((i.body.x +40),(i.body.y+29),"Stats");

                const testButton = this.scene.add.rectangle((i.body.x+82),(i.body.y+9),90,20, 0xff0000);
                
                this.attackButton = this.scene.add.text((i.body.x+40),(i.body.y),'Attaquer').setInteractive()
                .on('pointerover', () => this.enterButtonHoverState(i))
                .on('pointerdown', () => this.updateButton())
                .on('pointerout', () => this.enterButtonRestState())
                if((x > this.attackButton.x && x < this.attackButton.x + 40) && (y > this.attackButton.y && y < this.attackButton.y + 10)){
                    i = this.towers.create(i.body.x,i.body.y,"allytower").setScale(0.15).refreshBody();
                    i.body.setSize(30,75);
                }
            }
        }

        //si le nombre de villes conquises est supérieur à ... alors il est possible d'attaquer ...
    }

    enterButtonHoverState(i){
        this.attackButton.setStyle({fill : '#ff0'});
        //this.test = this.add.rectangle(200,200,50,50,0x6666ff);
        this.revealpuissance = this.scene.add.text(200,200,this.puissance);
    }
    enterButtonRestState(){
        this.attackButton.setStyle({fill: '#fff'});
        this.revealpuissance.destroy();
    }

    onPointerOver(){
        this.add.text(this.body.x,this.body.y,this.name);
    }
}