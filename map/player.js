
export class Player {
    constructor(scene, x, y) {
        this.scene = scene;

        this.minDistance = 7;
        this.canTurn = false;
        this.speed = 300;

        this.physicObj = this.scene.physics.add.sprite(x, y, 'player').setSize(80,80);
        this.proue = this.scene.physics.add.image();
        this.proue.body.setCircle(15);

        return this;
    }

    update(x, y, canTurn) {
        //console.log(this.body.y , this.body.x);
        //console.log(x, y);
        let dy = Math.abs(this.physicObj.y - y);
        let dx = Math.abs(this.physicObj.x - x);

        let vx = dx / dy;
        let vy = dy / dx;

        if (vx > 1) {
            vx = 1;
        }
        if (vy > 1) {
            vy = 1;
        }

        

        if ( dx <= this.minDistance) {
            this.physicObj.setVelocityX(0);
        } else if (this.physicObj.x < x) {
            this.physicObj.setVelocityX(vx);
        } else if (this.physicObj.x > x) {
            this.physicObj.setVelocityX(-vx);
        }
        
        if (dy <= this.minDistance) {
            this.physicObj.setVelocityY(0);
        } else if (this.physicObj.y < y) {
            this.physicObj.setVelocityY(vy);
        } else if (this.physicObj.y > y) {
            this.physicObj.setVelocityY(-vy);
        }

        if (canTurn) {
            let angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.physicObj.x, this.physicObj.y, x, y);
            this.physicObj.setAngle(angle + 90);
            canTurn = false;
        }

        this.physicObj.body.velocity.normalize().scale(this.speed);

        this.centerBodyOnXY(this.proue, this.physicObj.body.x + 40, this.physicObj.body.y - 18);
        this.proue.body.updateCenter();
        Phaser.Math.RotateAround(this.proue.body.center, this.proue.body.center.x, this.physicObj.body.center.x, this.physicObj.body.center.y, this.physicObj.rotation);
        this.centerBodyOnPoint(this.proue, this.proue.body.center);

        this.proue.body.velocity.copy(this.physicObj.body.velocity);

    }


    centerBodyOnXY (object, x, y) {
        object.body.position.set(
            x - object.body.halfWidth,
            y - object.body.halfHeight
        );
    }

    centerBodyOnPoint (a, p) {
        this.centerBodyOnXY(a, p.x, p.y);
    }
}