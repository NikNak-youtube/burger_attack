controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.vy += -500
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (forward) {
        mySprite2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `)
    }
    mySprite2.vx += -300
    forward = 0
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(forward)) {
        mySprite2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `)
    }
    mySprite2.vx += 300
    forward = 1
})
let forward = 0
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    ...........ccccc66666...........
    ........ccc4444444444666........
    ......cc444444444bb4444466......
    .....cb4444bb4444b5b444444b.....
    ....eb4444b5b44444b44444444b....
    ...ebb44444b4444444444b444446...
    ..eb6bb444444444bb444b5b444446..
    ..e6bb5b44444444b5b444b44bb44e..
    .e66b4b4444444444b4444444b5b44e.
    .e6bb444444444444444444444bb44e.
    eb66b44444bb444444444444444444be
    eb66bb444b5b44444444bb44444444be
    fb666b444bb444444444b5b4444444bf
    fcb666b44444444444444bb444444bcf
    .fbb6666b44444444444444444444bf.
    .efbb66666bb4444444444444444bfe.
    .86fcbb66666bbb44444444444bcc688
    8772effcbbbbbbbbbbbbbbbbcfc22778
    87722222cccccccccccccccc22226678
    f866622222222222222222222276686f
    fef866677766667777776667777fffef
    fbff877768f86777777666776fffffbf
    fbeffeefffeff7766688effeeeefeb6f
    f6bfffeffeeeeeeeeeeeeefeeeeebb6e
    f66ddfffffeeeffeffeeeeeffeedb46e
    .c66ddd4effffffeeeeeffff4ddb46e.
    .fc6b4dddddddddddddddddddb444ee.
    ..ff6bb444444444444444444444ee..
    ....ffbbbb4444444444444444ee....
    ......ffebbbbbb44444444eee......
    .........fffffffcccccee.........
    ................................
    `, SpriteKind.Enemy)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . 4 d d e 4 4 4 e f . . . 
    . . . . e d d e 2 2 2 2 f . . . 
    . . . . f e e f 4 4 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `, SpriteKind.Player)
forward = 1
mySprite2.y = 100
mySprite.setVelocity(60, 20)
mySprite.setFlag(SpriteFlag.BounceOnWall, true)
mySprite2.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdate(function () {
    if (mySprite.overlapsWith(mySprite2)) {
        game.over(false)
    } else {
        mySprite2.vy = 30
    }
})
