import {game1} from "./game1.js";
import {map} from "./map.js";

var config = {
    type : Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
    arcade: {
        debug: true
    }
},
scene: [map, game1]
};

var game = new Phaser.Game(config);
game.scene.start("map");