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
    // Sprites
    let Player;
    let Enemies;
    let Enemy;
    let Attack;
    // Controls, Movement and scoring
    let GameOver = false;
    let cursors;
    let isDashing = false;
    let isAttacking = false;
    let Dash;
    let direction = 'RightRun';
    let score = 0;

    function preload() {
        this.load.image('MC', './img/MC.png');
        // Idle Images
        this.load.image('IdleRight', './img/samurai/stay_right.png');
        this.load.image('IdleLeft', './img/samurai/stay_left.png');
        // Samurai Running Images
        this.load.image('RunLeft1', './img/samurai/run1_left.png');
        this.load.image('RunLeft2', './img/samurai/run2_left.png');
        this.load.image('RunLeft3', './img/samurai/run3_left.png');
        this.load.image('RunLeft4', './img/samurai/run4_left.png');

        this.load.image('RunRight1', './img/samurai/run1_right.png');
        this.load.image('RunRight2', './img/samurai/run2_right.png');
        this.load.image('RunRight3', './img/samurai/run3_right.png');
        this.load.image('RunRight4', '../img/samurai/run4_right.png');
        // Samurai Attack Images
        this.load.image('AttackRight', './img/samurai/Attack.png');
        this.load.image('AttackLeft', './img/samurai/Attack_left.png');
        // Demon Idle Images
        this.load.image('DemIdleDown', './img/demon/demons_stand_down.png');
        this.load.image('DemIdleUp', './img/demon/demons_stand_up.png');
        this.load.image('DemIdleRight', './img/demon/demons_stand_right.png');
        this.load.image('DemIdleLeft', './img/demon/demons_stand_left.png');
        // Demon Running Images
        this.load.image("DemRunDown1", './img/demon/demons_walk1_down.png');
        this.load.image("DemRunDown2", './img/demon/demons_walk2_down.png');

        this.load.image("DemRunUp1", './img/demon/demons_walk1_up.png');
        this.load.image("DemRunUp2", './img/demon/demons_walk2_up.png');

        this.load.image("DemRunRight1", './img/demon/demons_walk1_right.png');
        this.load.image("DemRunRight2", './img/demon/demons_walk2_right.png');

        this.load.image("DemRunLeft1", './img/demon/demons_walk1_left.png');
        this.load.image("DemRunLeft2", './img/demon/demons_walk2_left.png');
    }

    function create() {
        // Player animation
        this.anims.create({
            key: 'RightRun',
            frames: [
                { key: 'RunRight1' },
                { key: 'RunRight2' },
                { key: 'RunRight3' },
                { key: 'RunRight4' }
            ],
            frameRate: 5,  // Frames per second
            repeat: -1  // Infinite loop
        });
        this.anims.create({
            key: 'LeftRun',
            frames: [
                { key: 'RunLeft1' },
                { key: 'RunLeft2' },
                { key: 'RunLeft3' },
                { key: 'RunLeft4' }
            ],
            frameRate: 5,  // Frames per second
            repeat: -1  // Infinite loop
        });
        // Enemies animation
        this.anims.create({
            key: 'DemRunLeft',
            frames: [
                { key: 'DemRunLeft1' },
                { key: 'DemRunLeft2' }
            ],
            frameRate: 5,  // Frames per second
            repeat: -1  // Infinite loop
        });
        this.anims.create({
            key: 'DemRunRight',
            frames: [
                { key: 'DemRunRight1' },
                { key: 'DemRunRight2' }
            ],
            frameRate: 5,  // Frames per second
            repeat: -1  // Infinite loop
        });
        this.anims.create({
            key: 'DemRunUp',
            frames: [
                { key: 'DemRunUp1' },
                { key: 'DemRunUp2' }
            ],
            frameRate: 5,  // Frames per second
            repeat: -1  // Infinite loop
        });
        this.anims.create({
            key: 'DemRunDown',
            frames: [
                { key: 'DemRunDown1' },
                { key: 'DemRunDown2' }
            ],
            frameRate: 5,  // Frames per second
            repeat: -1  // Infinite loop
        });
        // Adding a player sprite
        Player = this.physics.add.sprite(500, 350, 'IdleRight');
        // Prevents player from leaving scene borders
        Player.setCollideWorldBounds(true);
        // Adding an enemies sprite group as they are pretty similar
        Enemies = this.physics.add.group();
        // We create a new sprite and add it in the group as it is important for handling attack logic
        Enemy = this.physics.add.sprite(100, 100, 'MC');
        Enemies.add(Enemy);
        EnemiesCount = Enemies.getChildren();
        // Prevents enemies from passing through each other
        this.physics.add.collider(Enemies, Enemies);
        // Checks whether the player has touched enemy or not
        this.physics.add.collider(Player, Enemies, () => {
            GameOver = true;
        })
        this.physics.add.overlap(Player, Enemies, () => {
            GameOver = true;
        })
        // Movement keys
        cursors = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });
        // Dash key
        Dash = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        // Attack key
        this.input.on('pointerup', () => {
            Attacking(this, Player, Enemies)
        });
        // Scoring
        let scoreText = this.add.text(10, 10, `Score: ${score}`, { fontSize: '32px', fill: '#FFF' });
        this.time.addEvent({
            delay: 1000,
            callback: () => {
                score++;
                scoreText.setText(`Score: ${score}`);
            },
            callbackScope: this,
            loop: true
        })
        // Spawns an enemy after 5 seconds
        this.time.addEvent({
            delay: 5000,
            callback: () => {
                EnemySpawn(this);
            },
            callbackScope: this,
            loop: true
        })
    }
    // Variable needed for tracking the cooldowns
    let lastFired = 0;
    function update(time) {
        // Stops the game after player touches an enemy
        if (GameOver == true) {
            this.scene.stop();
        }
        // Movement
        if (!isDashing && !isAttacking) {
            let speed = 160;
            // Handle horizontal movement
            if (cursors.left.isDown) {
                Player.setVelocityX(-speed);
                Player.anims.play(direction, true);
                direction = 'LeftRun';
            } else if (cursors.right.isDown) {
                Player.setVelocityX(speed);
                Player.anims.play(direction, true);
                direction = 'RightRun';
            } else {
                Player.setVelocityX(0); // Stop horizontal movement if no keys pressed
            }

            // Handle vertical movement independently
            if (cursors.up.isDown) {
                Player.setVelocityY(-speed);
                Player.anims.play(direction, true);
            } else if (cursors.down.isDown) {
                Player.setVelocityY(speed);
                Player.anims.play(direction, true);
            } else {
                Player.setVelocityY(0); // Stop vertical movement if no keys pressed
            }

            // Check if completely stationary to play idle animation
            if (Player.body.velocity.x === 0 && Player.body.velocity.y === 0) {
                Player.anims.stop()
                switch (direction) {
                    case 'LeftRun':
                        Player.setTexture('IdleLeft');
                        break;
                    case 'RightRun':
                        Player.setTexture('IdleRight');
                        break;
                }
            }
            // Sets the same speed for both horizontal/vertical and diagonal movement
            Player.body.velocity.normalize().scale(speed);
        }
        // Checks whether the dash is possible or not
        if (Phaser.Input.Keyboard.JustDown(Dash) && !isDashing && time > lastFired && (Player.body.velocity.x != 0 || Player.body.velocity.y != 0)) {
            dash(this);
            makeInvincible(Player);
            lastFired = time + 2000;
        }
        // Make enemies follow the player
        Enemies.children.iterate(Enemies => {
            this.physics.moveToObject(Enemies, Player, 120);
            Enemies.body.velocity.normalize().scale(120);
        });
        // Loop needed for their animation
        for (let i = 0; i < EnemiesCount.length; i++) {
            const radians = Math.atan2(EnemiesCount[i].body.velocity.x, EnemiesCount[i].body.velocity.y)
            let degrees = Phaser.Math.RadToDeg(radians);

            // Normalize to 0-360°
            degrees = (degrees + 360) % 360;
            if (degrees >= 315 || degrees < 45) {
                // Right (0° ± 45°)
                EnemiesCount[i].anims.play('DemRunDown', true);
            } else if (degrees >= 45 && degrees < 135) {
                // Up (90° ± 45°)
                EnemiesCount[i].anims.play('DemRunRight', true);
            } else if (degrees >= 135 && degrees < 225) {
                // Left (180° ± 45°)
                EnemiesCount[i].anims.play('DemRunUp', true);
            } else if (degrees >= 225 && degrees < 315) {
                // Down (270° ± 45°)
                EnemiesCount[i].anims.play('DemRunLeft', true);
            }
        }
    }

    function dash(scene) {
        isDashing = true;
        let dashSpeed = 400;
        let dashDuration = 200;

        let dashX = Player.body.velocity.x > 0 ? dashSpeed : Player.body.velocity.x < 0 ? -dashSpeed : 0;
        let dashY = Player.body.velocity.y > 0 ? dashSpeed : Player.body.velocity.y < 0 ? -dashSpeed : 0;

        Player.setVelocity(dashX, dashY);
        Player.body.velocity.normalize().scale(600);
        // Ends the dash after a certain amount of time
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
    function Attacking(scene, player, enemy) {
    // Still in need of improvement
        isAttacking = true;
        if (direction == "RightRun") {
            Attack = scene.physics.add.sprite(player.x + 50, player.y, null);
            player.setTexture("AttackRight");
        }
        else if (direction == "LeftRun") {
            Attack = scene.physics.add.sprite(player.x - 50, player.y, null);
            player.setTexture("AttackLeft");
        }
        Attack.body.setSize(50, 90);
        Attack.setAlpha(0);
        // Removes an enemy after overlapping with their sprite
        scene.physics.add.overlap(Attack, Enemies, (attack, enemy) => {
            enemy.destroy();
            Enemies.remove(enemy, true, true);
        })
        scene.time.delayedCall(200, () => {
            Attack.destroy();
            isAttacking = false;
        })
        console.log("Attack");
    }
    function EnemySpawn(scene) {
        let EnemyX, EnemyY;
        // Spawns an enemy based on player's position
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
        Enemy = scene.physics.add.sprite(EnemyX, EnemyY, 'MC');
        Enemies.add(Enemy);
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