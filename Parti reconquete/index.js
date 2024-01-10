var config = {
    type : Phaser.AUTO,
    width: 1600,
    height: 900,
    physics: {
        default: 'arcade',
    arcade: {
        debug: true
    }
},
scene:[game2]
};

var game = new Phaser.Game(config);
game.scene.start("game2");