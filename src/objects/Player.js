/*
 * Player
 * ======
 *
 * main player object duh
 */

export default class Player extends Phaser.Sprite 
{
	constructor(game, ...args) 
	{
		super(game, ...args);

		// graphics props
		this.anchor.setTo(0.5, 0.5);

		// physics props
		this.game.physics.arcade.enable(this);
		this.body.bounce.y = 0;
		this.body.gravity.y = 300;
		this.body.collideWorldBounds = true;
				
		// custom attributes
		this.lastXDir = 1;			// 1 if facing right, -1 if facing left
		this.nextShot = 0;			// next time player is allowed to shoot
		this.shotCooldown = 50;		// ms between each shot
		
		// movement input
		this.moveX = 0;
		this.moveY = 0;
		this.shoot = false;
		this.movementSpeed = 150;
		this.jumpForce = 350;
		
		// spawn projectile signal
		this.spawnProjectile = new Phaser.Signal();
	}

	update() 
	{
		this.move();
		if (this.game.time.time >= this.nextShot && this.shoot)
			this.fire();
		
	}
	
	move()
	{
		// player movement
		this.body.velocity.x = 0;
				
		if(this.moveX < 0)
		{
			this.body.velocity.x = -this.movementSpeed;
			//this.animations.play('left');
			this.lastXDir = -1;
		}
		else if(this.moveX > 0)
		{
			this.body.velocity.x = this.movementSpeed;
			//this.animations.play('right');
			this.lastXDir = 1;
		}
		else
		{
			this.animations.stop();
			//this.frame = 4;
		}
		
		// jumping
		if (this.moveY > 0)
		{
			this.body.velocity.y = -this.jumpForce;
		}
	}
	
	fire()
	{
		this.spawnProjectile.dispatch(this.x, this.y, 'bullet01', this.lastXDir, this);
		this.nextShot = this.game.time.time + this.shotCooldown;
	}
}
