namespace SpriteKind {
    export const element = SpriteKind.create()
}

// sprites
let air = sprites.create(assets.image`Air`, SpriteKind.element)
air.setPosition(20, 20)
let water = sprites.create(assets.image`water`, SpriteKind.element)
water.setPosition(120, 100)
let fire = sprites.create(assets.image`fire`, SpriteKind.element)
fire.setPosition(20, 100)
let earth = sprites.create(assets.image`Earth`, SpriteKind.element)
earth.setPosition(120, 20)
let cursor = sprites.create(assets.image`Cursor`, SpriteKind.Player)
cursor.setScale(1, ScaleAnchor.Middle)
controller.moveSprite(cursor)
sprites.onOverlap(SpriteKind.element, SpriteKind.Player, function pick_up(element: Sprite, cursor: Sprite) {
    if (controller.A.isPressed()) {
        element.setPosition(cursor.x, cursor.y)
    }
    
})
scene.onOverlapTile(SpriteKind.element, fire, function on_overlap_tile(water: Sprite, fire: tiles.Location) {
    let steam = sprites.create(assets.image`Steam`, SpriteKind.element)
})
