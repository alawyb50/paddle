namespace SpriteKind {
    export const leftpuddle = SpriteKind.create()
    export const rightPuddle = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.leftpuddle, function (sprite, otherSprite) {
    left_pudle.vy = sprite.vx * -1
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rightPuddle, function (sprite, otherSprite) {
    right_puddle.vy = sprite.vx * -1
    info.player2.changeScoreBy(1)
})
function craete_ball () {
    ball = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . 6 6 6 5 5 6 6 6 . . . . 
. . . 7 7 7 7 6 6 6 6 6 6 . . . 
. . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
. . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
. 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
. 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
. 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
. 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
. . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
. . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
. . . 6 8 8 8 8 8 8 8 8 6 . . . 
. . . . 6 6 8 8 8 8 6 6 . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    ball.setVelocity(100, 100)
    ball.setFlag(SpriteFlag.BounceOnWall, true)
    ball.y = randint(0, 120)
}
function creat_puddle () {
    left_pudle = sprites.create(img`
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . 1 8 8 8 8 . . . . . . 
. . . . . 1 8 8 8 8 . . . . . . 
. . . . . 1 8 8 8 8 . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . 1 8 8 8 8 . . . . . . 
. . . . . 1 8 8 8 8 . . . . . . 
. . . . . 1 8 8 8 8 . . . . . . 
. . . . . 1 8 8 8 8 . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . 1 8 8 8 8 . . . . . . 
. . . . . 1 8 8 8 8 . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . 1 8 8 8 8 . . . . . . 
. . . . . 1 8 8 8 8 . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
`, SpriteKind.leftpuddle)
    controller.moveSprite(left_pudle, 0, 100)
    left_pudle.setFlag(SpriteFlag.StayInScreen, true)
    left_pudle.left = 0
}
function create_right_puddle () {
    right_puddle = sprites.create(img`
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . 6 6 6 6 1 . . . . . . 
. . . . . 6 6 6 6 1 . . . . . . 
. . . . . 6 6 6 6 1 . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . 6 6 6 6 1 . . . . . . 
. . . . . 6 6 6 6 1 . . . . . . 
. . . . . 6 6 6 6 1 . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . 6 6 6 6 1 . . . . . . 
. . . . . 6 6 6 6 1 . . . . . . 
. . . . . 6 6 6 6 1 . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . 6 6 6 6 1 . . . . . . 
. . . . . 6 6 6 6 1 . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
`, SpriteKind.rightPuddle)
    controller.player2.moveSprite(right_puddle)
    right_puddle.setFlag(SpriteFlag.StayInScreen, true)
    right_puddle.right = 160
}
let ball: Sprite = null
let right_puddle: Sprite = null
let left_pudle: Sprite = null
craete_ball()
creat_puddle()
create_right_puddle()
