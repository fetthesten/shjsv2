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
		super(game, ...args);

		// graphics props
		this.anchor.setTo(0.5, 0.5);

		// physics props
		this.game.physics.arcade.enable(this);
		this.body.bounce.y = 3;
		this.body.gravity.y = 100;
		this.body.collideWorldBounds = false;
		this.body.velocity.x = 800 * xDir;
		var spread = 100 * Math.random() - 50;
		this.body.velocity.y = spread;
		this.angle = s.body.angle;
		this.scale.x *= xDir;
	}

	update() 
	{
    
	}
}
