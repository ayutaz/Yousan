class Clear{
    playerX: number
    playerY: number
    playerZ: number
    public getPosition() {
        this.playerX = player.position().getValue(0)
        this.playerY = player.position().getValue(1)
        this.playerZ = player.position().getValue(2)
        player.say(this.playerX.toString() + ",")
    }
} 
