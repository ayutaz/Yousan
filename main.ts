class Clear{
    playerX: number
    playerY: number
    playerZ: number
    constructor() {
        this.playerX = 0
        this.playerY = 0
        this.playerZ = 0
    }
    public getPosition() {
        // getValueは配列指定 0 -> x,1 -> y...
        this.playerX = player.position().getValue(0)
        this.playerY = player.position().getValue(1)
        this.playerZ = player.position().getValue(2)
        player.say("player position:(" +
            this.playerX.toString() + "," +
            this.playerY.toString() + "," +
            this.playerZ.toString() + ")")
        this.playerY = positions.groundPosition(player.position()).getValue(1)
        player.say("地面の座標:" + this.playerY)
    }
    public call() {
        player.say(this.playerX.toString() + "," + this.playerY.toString())
    }
} 
