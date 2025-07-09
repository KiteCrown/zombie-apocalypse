controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (saasdokodasp == 0) {
        myBall2 = carnival.createProjectileBallFromSprite(img`
            5 5 5 5 
            5 5 5 5 
            5 5 5 5 
            5 5 5 5 
            `, mySprite, SpriteKind.Projectile)
        saasdokodasp = 1
        timer.after(d, function () {
            saasdokodasp = 0
        })
    }
})
statusbars.onStatusReached(StatusBarKind.Energy, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    statusbar.max += 5
    statusbar.value = 0
    d += -50
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    statusbar.value += 1
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.setGameOverMessage(true, "GAME OVER!")
    game.setGameOverEffect(true, effects.melt)
    game.setGameOverPlayable(true, music.melodyPlayable(music.wawawawaa), false)
    game.gameOver(true)
})
let mySprite2: Sprite = null
let myBall2: Ball = null
let mySprite: Ball = null
let statusbar: StatusBarSprite = null
let d = 0
let saasdokodasp = 0
saasdokodasp = 0
d = 700
let spanwwq = 1500
let sadsda = 10
tiles.loadMap(tiles.createSmallMap(tilemap`level2`))
statusbar = statusbars.create(50, 4, StatusBarKind.Energy)
statusbar.value = 0
statusbar.max = 3
statusbar.positionDirection(CollisionDirection.Bottom)
statusbar.setBarBorder(1, 5)
mySprite = carnival.create(img`
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    `, SpriteKind.Player, 80, 60)
mySprite.controlBallWithArrowKeys()
mySprite.setTraceMulti(carnival.Tracers.Part)
game.onUpdateInterval(spanwwq, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . 
        . . 2 2 2 2 . . 
        . . 2 6 2 2 . . 
        . . 2 6 6 2 . . 
        . . 6 6 6 2 . . 
        . . 6 6 6 6 . . 
        . . 6 6 6 6 . . 
        . . 6 6 6 6 . . 
        `, SpriteKind.Enemy)
    mySprite2.follow(mySprite, sadsda)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile0`)
})
game.onUpdateInterval(20000, function () {
    sadsda += 5
    spanwwq += -30
})
