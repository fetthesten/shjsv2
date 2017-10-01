/*
 * BulletMachinegun
 * ================
 *
 * test machinegun bullet
 */

export default class BulletMachinegun extends Phaser.Sprite 
{
	constructor(game, ...args) 
	{
		super(game, 0, 0, 'bullet01', ...args);

		// graphics props
		this.anchor.setTo(0.5, 0.5);

		// physics props
		this.game.physics.arcade.enableBody(this);
		this.body.bounce.y = 3;
		this.body.gravity.y = 50;
		
		this.lifetime = 3000;
		this.spawntime = this.game.time.time;
		
		this.checkWorldBounds = true;
		this.outOfBoundsKill = true;
	}
	
	reset()
	{
		super.reset();
		
		
	}
	
	init(xPos, yPos, xDir, owner)
	{
		this.x = xPos;
		this.y = yPos;
		this.body.velocity.x = 1200 * xDir;
		var spread = 100 * Math.random() - 50;
		this.body.velocity.y = spread;
		this.angle = this.body.angle;
		this.scale.x = 1 * xDir;
		this.owner = owner;
		this.spawntime = this.game.time.time;
	}

	update() 
	{
		this.angle = this.body.angle;

		if (this.game.time.time >= this.spawntime + this.lifetime)
		{
			this.kill();
		}
	}
}
