var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

game.state.add('play',{
	preload:function() {
		game.load.image('Minimare', 'assests/allacrost_enemy_sprites/Minimare.png');
		},
		create: function () {
			var MinimareSprite = game.add.sprite(450, 290, 'Minimare');
			MinimareSprite.anchor.setTo(0.5, 0.5);
			
		},
		render: function() {
			game.debug.text('Adventure Awaits!', 250, 290);
		}
});

game.state.start('play');
