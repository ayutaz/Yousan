class Clear{
    playerX: number
    playerY: number
    playerZ: number
    groundPositionY: number
    deleteRange: number
    deleteHeight: number
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
        this.groundPositionY = positions.groundPosition(player.position()).getValue(1)
        player.say("地面の座標:" + this.groundPositionY)
    }
} 
