/*
 * Game state
 * ==========
 */
import Player from '../objects/Player';
import Enemy from '../objects/Enemy';

import Pools from '../objects/Pools';
 
export default class Game extends Phaser.State 
{
	create() 
	{
		this.game.spritePools = new Pools(this.game, 
		{
			'Enemy':
			{
				'class': Enemy,
				'count': 25
			}
		});
		
		// set up keys
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.keys = this.game.input.keyboard.addKeys({ 'shoot': Phaser.KeyCode.Z });
		
		this.game.stage.backgroundColor = "#273a15";
		this.bg01 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg');
		this.bg02 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg');
		this.bg02.tilePosition.x = this.bg02.width/2;
		
		this.player = new Player(this.game, this.game.world.centerX, this.game.world.centerY, 'testguy');
		this.game.add.existing(this.player);
		
		this.player.spawnProjectile.add(this.spawnProjectile, this);
	}

	update()
	{
		this.bg01.tilePosition.y += 1;
		this.bg02.tilePosition.y += 2;
		
		// todo: make a proper input thing
		this.player.moveX = this.cursors.left.isDown ? -1 : this.cursors.right.isDown ? 1 : 0;
		this.player.moveY = this.cursors.up.isDown ? 1 : 0;
		this.player.shoot = this.keys['shoot'].isDown;
	}
	
	spawnProjectile(x = 0, y = 0, p = 'bullet01', xDir = 1, owner = this)
	{
		// todo: implement object pools and proper prototypes and stuff
		var s = this.game.add.sprite(x, y, p);
		
	}
}
