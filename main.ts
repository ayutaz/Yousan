class Clear{
    // プレイヤーの位置を保持する
    playerX: number
    playerY: number
    playerZ: number
    groundPositionY: number
    // 整地するための範囲変数
    deleteRange: number
    deleteHeight: number

    constructor() {
        this.playerX = 0
        this.playerY = 0
        this.playerZ = 0
        this.groundPositionY = 0
        this.deleteHeight = 50
        this.deleteRange = 0
    }
    public SetDeleteNumber(r: number, h: number) {
        this.deleteHeight = h
        this.deleteRange = r
    }
    public GetPosition() {
        // getValueは配列指定 0 -> x,1 -> y...
        this.playerX = player.position().getValue(0)
        this.playerY = player.position().getValue(1)
        this.playerZ = player.position().getValue(2)
        player.say("player position:(" +
            this.playerX + "," +
            this.playerY + "," +
            this.playerZ + ")")
        this.groundPositionY = positions.groundPosition(player.position()).getValue(1)
        player.say("地面の座標:" + this.groundPositionY)
    }

    public AllClear() {
        for (let horizon = -29999999; horizon < 29999999; horizon+200){
            for (let vertical = -29999999; vertical < 29999999; vertical+200){
                blocks.fill(
                    Block.Air,
                    positions.createWorld(horizon, 1, vertical),
                    positions.createWorld(horizon + 100,101,vertical + 100)
                )
                blocks.fill(
                    Block.Air,
                    positions.createWorld(horizon + 101, 101, vertical + 101),
                    positions.createWorld(horizon + 200,200,vertical + 200)
                )
            }
        }
    }
    public Large () {
        test.GetPosition()
        // 自分の位置から実行した場合岩盤以下になる場合は，deleteHeightの値を変更する
        if(test.playerY - test.deleteHeight <= 0) test.deleteHeight = test.playerY -1
        // 深さ指定なし，広さ指定なし
        for(let i = test.playerY;i > test.playerY - test.deleteHeight;i-- ){
            blocks.fill(
                Block.Air, 
                positions.createWorld(test.playerX -50,i,test.playerZ -50), 
                positions.createWorld(test.playerX + 49,i - 1,test.playerZ + 49)
            )
        }
    }
} 
