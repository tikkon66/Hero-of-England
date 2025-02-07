window.addEventListener("load", () => {
    // const CoorDebug = document.getElementById("CoorCheck");
    // const SpawnButton = document.getElementById("SpawnEnemy");

    const config = {
        type: Phaser.AUTO,
        width: 1000,
        height: 700,
        backgroundColor: '#3498db',
        scene: {
            preload: preload,
            create: create,
            update: update
        },
        physics: {
            default: 'arcade',
            arcade: {
                debug: true
            }
        },
    };

    const game = new Phaser.Game(config);
    let GameOver = false;

    let Player;
    let Enemy;

    let cursors;
    let isDashing = false;
    let Dash;

    let score = 0;

    function preload() {
        this.load.image('MC', '../img/MC.png');
    }

    function create() {
        Player = this.physics.add.sprite(500, 350, 'MC');
        Player.body.setSize(30, 30);
        // Player.body.setOffset(35, 25);
        Player.setCollideWorldBounds(true);

        Enemy = this.physics.add.group();
        Enemy.create(100, 100, 'MC');
        Enemy.getChildren().forEach((sprite) => {
            sprite.body.setSize(30, 30);
            sprite.body.setOffset(35, 25);
        });

        // EnemyCount = Enemy.getChildren();

        this.physics.add.collider(Enemy, Enemy);

        let scoreText = this.add.text(10, 10, `Score: ${score}`, { fontSize: '32px', fill: '#FFF' });

        cursors = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });

        Dash = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.physics.add.collider(Player, Enemy, () => {
            GameOver = true;
        })
        this.physics.add.overlap(Player, Enemy, () => {
            GameOver = true;
        })

        this.time.addEvent({
            delay: 1000,
            callback: () => {
                score++;
                scoreText.setText(`Score: ${score}`);
            },
            callbackScope: this,
            loop: true
        })
        this.time.addEvent({
            delay: 5000,
            callback: () => {
                EnemySpawn();
            },
            callbackScope: this,
            loop: true
        })
    }

    let lastFired = 0;
    function update(time) {
        if (GameOver == true) {
            this.scene.stop();
        }

        if (!isDashing) {
            let speed = 160;
            Player.setVelocity(0);
            if (cursors.left.isDown) Player.setVelocityX(-speed);
            if (cursors.right.isDown) Player.setVelocityX(speed);
            if (cursors.up.isDown) Player.setVelocityY(-speed);
            if (cursors.down.isDown) Player.setVelocityY(speed);
            Player.body.velocity.normalize().scale(speed);
        }

        if (Phaser.Input.Keyboard.JustDown(Dash) && !isDashing && time > lastFired) {
            dash(this);
            makeInvincible(Player);
            lastFired = time + 2000;
        }

        Enemy.children.iterate(enemy => {
            this.physics.moveToObject(enemy, Player, 120);
            enemy.body.velocity.normalize().scale(120);
        });

    }

    function dash(scene) {
        isDashing = true;
        let dashSpeed = 400;
        let dashDuration = 200;

        let dashX = Player.body.velocity.x > 0 ? dashSpeed : Player.body.velocity.x < 0 ? -dashSpeed : 0;
        let dashY = Player.body.velocity.y > 0 ? dashSpeed : Player.body.velocity.y < 0 ? -dashSpeed : 0;

        Player.setVelocity(dashX, dashY);
        Player.body.velocity.normalize().scale(600);

        scene.time.delayedCall(dashDuration, () => {
            Player.setVelocity(0);
            isDashing = false;
        });
    }
    function makeInvincible(player) {
        player.setAlpha(0.5); // Make the player semi-transparent for feedback

        // Disable collision
        player.body.checkCollision.none = true;

        // Re-enable collision after 2 seconds
        player.scene.time.delayedCall(500, () => {
            player.body.checkCollision.none = false;
            player.setAlpha(1); // Restore visibility
        });
    }
    function EnemySpawn() {
        let EnemyX, EnemyY;
        if (Player.x > 500 && Player.y < 350) {
            EnemyX = Math.abs(Player.x - 500);
            EnemyY = Math.abs(Player.y + 350);
        }
        else if (Player.x < 500 && Player.y < 350) {
            EnemyX = Math.abs(Player.x + 500);
            EnemyY = Math.abs(Player.y + 350);
        }
        else if (Player.x < 500 && Player.y > 350) {
            EnemyX = Math.abs(Player.x + 500);
            EnemyY = Math.abs(Player.y - 350);
        }
        else if (Player.x > 500 && Player.y > 350) {
            EnemyX = Math.abs(Player.x - 500);
            EnemyY = Math.abs(Player.y - 350);
        }
        Enemy.create(EnemyX, EnemyY, "MC");
        Enemy.getChildren().forEach((sprite) => {
            sprite.setCollideWorldBounds(true);
            sprite.body.setSize(30, 30);
            sprite.body.setOffset(35, 25);
        });
    }
    // CoorDebug.addEventListener("click", () => {
    //     alert(`X: ${Player.x}, Y: ${Player.y}`);
    // })
    // let i = 0;
    // SpawnButton.addEventListener("click", () => {
    //     EnemySpawn();
    //     // alert(`X: ${EnemyCount[i].x}, Y: ${EnemyCount[i].y}`);
    //     i++;
    // })
})
