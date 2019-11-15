class Clear{
    // 自分の現在の位置を取得
public getPosition() {
    // getValueは配列指定 0 -> x,1 -> y...
    playerX = player.position().getValue(0)
    playerY = player.position().getValue(1)
    playerZ = player.position().getValue(2)
    player.say("player position:(" + playerX.toString() + "," + playerY.toString() + "," + playerZ.toString() + ")")
    playerY = positions.groundPosition(player.position()).getValue(1)
    player.say("地面の座標:" + playerY)
}
} 
