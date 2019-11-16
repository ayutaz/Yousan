class Clear{
    // プレイヤーの位置を保持する
    private playerX: number
    private playerY: number
    private playerZ: number
    private groundPositionY: number
    // 整地するための範囲変数
    private deleteRange: number
    private deleteHeight: number

    constructor() {
        this.playerX = 0
        this.playerY = 0
        this.playerZ = 0
        this.groundPositionY = 0
        this.deleteHeight = 0
        this.deleteRange = 0
    }
    public SetDeleteNumber(r: number, h: number) {
        this.deleteHeight = h
        this.deleteRange = r
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
