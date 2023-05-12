@namespace
class SpriteKind:
    element = SpriteKind.create()

banned_from_artwork = ["georgi"]


#sprites
air = sprites.create(assets.image("Air"), SpriteKind.element)
air.set_position(20, 20)

element
list of all possible interactions with the element - e.g. water interacts with x y z
The result of an element interacting with another 

air = create element
air.data = [water, earth, air]
air.sprite data extension = "air"
air.store in database key pair = "earth": "swamp"



overlap with earth

def create_new_element(parent_element, over_lap_element):
    database query parent element data extension string ("air") -> "swamp"
    if string == "swamp":
        spawn_swamp
    


water = sprites.create(assets.image("water"), SpriteKind.element)
water.set_position(120, 100)
water.data = [1, 2, 3, 4, 5]
fire = sprites.create(assets.image("fire"), SpriteKind.element)
fire.set_position(20, 100)
earth = sprites.create(assets.image("Earth"), SpriteKind.element)
earth.set_position(120, 20)
cursor = sprites.create(assets.image("Cursor"), SpriteKind.player)
cursor.set_scale(1, ScaleAnchor.MIDDLE)
controller.move_sprite(cursor)

def pick_up(element, cursor):
    if controller.A.is_pressed():
        element.set_position(cursor.x, cursor.y)
sprites.on_overlap(SpriteKind.element, SpriteKind.player, pick_up)

def on_overlap_tile(water, fire):
    steam = sprites.create(assets.image("Steam"), SpriteKind.element)
scene.on_overlap_tile(SpriteKind.element, fire, on_overlap_tile)
database.list_add_value("", 0)