export class Enemie {
    constructor(scene) {
        this.scene = scene;
        this.enemies = this.scene.physics.add.group();
        

        this.enemies.create(200, 200, 'enemie');

       

        return this;
    }

    kill(enemie) {
       
        enemie.destroy();
    }

    collideWith(gameObject) {
        this.scene.physics.add.collider(this.enemies, gameObject);
        return this;
    }


    update(player) {
        for(const enemie of this.enemies.children.entries) {
            
            if (!player.proue.body.touching.none && (enemie.body.touching.left || enemie.body.touching.right)) {
                
                this.kill(enemie);
            }
        }
    }
}