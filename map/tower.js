export class Tower{
    constructor(scene,x,y,gender,name){

        this.scene = scene;
        this.puissance = 0;

        this.towers = this.scene.physics.add.staticGroup();

        this.towers.create(x,y,gender).setScale(0.15).refreshBody();
       
        //this.towersArray = [];

        for (let i = 0; i < 10; i++) {
            this.newTower = this.towers.create(100+ i * 10, 100 + i * 10 , 'ennemytower').setScale(0.15).refreshBody().setSize(30,75);
            /*if(gender == "ennemytower"){
                this.tower.name = name;
            }*/
            //this.newTower.add(this.towersArray,this.newTower);
        }

        /*this.towers = this.physics.add.staticGroup();

        this.tower1 = this.towers.create(230,70,"allytower").setScale(0.15);
        this.tower1.body.setSize(30,75);
        this.tower1.name = "Oviedo";

        this.tower2 = this.towers.create(120,80,"ennemytower").setScale(0.15).refreshBody();
        this.tower2.body.setSize(30,75);
        this.tower2.name = "Saint-Jacques-De-Compostelle";

        this.tower3 = this.towers.create(400,90,"ennemytower").setScale(0.15).refreshBody();
        this.tower3.body.setSize(30,75);
        this.tower3.name = "Pampelune";

        this.tower4 = this.towers.create(620,130,"ennemytower").setScale(0.15).refreshBody();
        this.tower4.body.setSize(30,75);
        this.tower4.name = "Barcelone";

        this.tower5 = this.towers.create(300,160,"ennemytower").setScale(0.15).refreshBody();
        this.tower5.body.setSize(30,75);
        this.tower5.name = "Valladolid";

        this.tower6 = this.towers.create(500,160,"ennemytower").setScale(0.15).refreshBody();
        this.tower6.body.setSize(30,75);
        this.tower6.name = "Saragosse";

        this.tower7 = this.towers.create(120,240,"ennemytower").setScale(0.15).refreshBody();
        this.tower7.body.setSize(30,75);
        this.tower7.name = "Coimbra";

        this.tower8 = this.towers.create(340,260,"ennemytower").setScale(0.15).refreshBody();
        this.tower8.body.setSize(30,75);
        this.tower8.name = "Tolède";

        this.tower9 = this.towers.create(680,300,"ennemytower").setScale(0.15).refreshBody();
        this.tower9.body.setSize(30,75);
        this.tower9.name = "Palma";

        this.tower10 = this.towers.create(500,300,"ennemytower").setScale(0.15).refreshBody();
        this.tower10.body.setSize(30,75);
        this.tower10.name = "Valence";

        this.tower11 = this.towers.create(80,330,"ennemytower").setScale(0.15).refreshBody();
        this.tower11.body.setSize(30,75);
        this.tower11.name = "Lisbonne";

        this.tower12 = this.towers.create(480,400,"ennemytower").setScale(0.15).refreshBody();
        this.tower12.body.setSize(30,75);
        this.tower12.name = "Murcie";

        this.tower13 = this.towers.create(300,410,"ennemytower").setScale(0.15).refreshBody();
        this.tower13.body.setSize(30,75);
        this.tower13.name = "Cordoue";

        this.tower14 = this.towers.create(200,430,"ennemytower").setScale(0.15).refreshBody();
        this.tower14.body.setSize(30,75);
        this.tower14.name = "Séville";*/

        return this;
    }

    update(x,y){
        for(const i of this.towers.children.entries){
            if((x > i.body.x && x < i.body.x + 30) && (y > i.body.y && y < i.body.y + 75)) {
                const testButton = this.add.rectangle((i.body.x+82),(i.body.y+9),90,20, 0x6666ff).setInteractive()
                .on('pointerover', () => this.rectangleTest())
                .on('pointerout', () => this.rectangleOut());
                this.attackButton = this.add.text((i.body.x+40),(i.body.y),'Attaquer').setInteractive()
                .on('pointerover', () => this.enterButtonHoverState())
                .on('pointerdown', () => this.updateButton())
                .on('pointerout', () => this.enterButtonRestState())
                if((x > this.attackButton.x && x < this.attackButton.x + 40) && (y > this.attackButton.y && y < this.attackButton.y + 10)){
                    i = this.towers.create(i.body.x,i.body.y,"allytower").setScale(0.15).refreshBody();
                    i.body.setSize(30,75);
                }
            }
        }

                /*for (const i of this.towersArray) {
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
                }*/

        //si le nombre de villes conquises est supérieur à ... alors il est possible d'attaquer ...

    }

    enterButtonHoverState(){
        this.attackButton.setStyle({fill : '#ff0'});
        //this.test = this.add.rectangle(200,200,50,50,0x6666ff);
        this.revealpuissance = this.add.text(200,200,this.puissance);
        /*const tween = this.tweens.add({
            targets:this.tower
        })*/
    }
    enterButtonRestState(){
        this.attackButton.setStyle({fill: '#fff'});
        this.revealpuissance.destroy();
    }

    onPointerOver(){
        this.add.text(this.body.x,this.body.y,this.name);
    }
}