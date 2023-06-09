let elementList: { [key: string]: Element } = {
    "Air": new Element("Air",
        { "Fire": "Smoke", "Water": "Mist", "Earth": "Dust", "Air": "Pressure", "Animal": "Bird", "Atmosphere": "Pressure", "City": "Smog", "Cloud": "Sky", "Cold": "Chill", "Container": "Scuba Tank", "Dinosaur": "Pterodactyl", "Egg": "Bird", "Electricity": "Ozone", "Energy": "Heat", "Fish": "Flying Fish", "Heat": "Warmth", "Idea": "Gas", "Land": "Dust", "Lava": "Stone", "Lizard": "Dragon", "Metal": "Rust", "Meteoroid": "Meteor", "Motion": "Wind", "Mouse": "Bat", "Paper": "Kite", "Pebble": "Sand", "Planet": "Atmosphere", "Pressure": "Wind", "Rain": "Mist", "Rock": "Sand", "Science": "Gas", "Sky": "Atmosphere", "Small": "Gust", "Soil": "Dust", "Squirrel": "Flying Squirrel", "Steam": "Mist", "Steel": "Rust", "Stone": "Sand", "Sugar": "Cotton Candy", "Wave": "Sound", "Wine": "Vinegar", "Wood": "Flute" },
        img`
    . . . . . . . . . . . . . . . .
    . 1 . . . . . . . 1 . . . . . .
    1 1 1 . . 1 . . 1 1 1 . . 1 . .
    . . . . 1 1 1 . . . . . 1 1 1 .
    . 1 . . . . . . . 1 . . . . . .
    1 1 1 . . 1 . . 1 1 1 . . 1 . .
    . . . . 1 1 1 . . . . . 1 1 1 .
    . 1 . . . . . . . 1 . . . . . .
    1 1 1 . . 1 . . 1 1 1 . . 1 . .
    . . . . 1 1 1 . . . . . 1 1 1 .
    . 1 . . . . . . . 1 . . . . . .
    1 1 1 . . 1 . . 1 1 1 . . 1 . .
    . . . . 1 1 1 . . . . . 1 1 1 .
    . 1 . . . . . . . 1 . . . . . .
    1 1 1 . . 1 . . 1 1 1 . . 1 . .
    . . . . 1 1 1 . . . . . 1 1 1 .
    `, 1),
    "Dust": new Element("Dust", {}, img`
    . . . . . . d . . . . . . . . .
    . . . . . . . . . . d . . . d .
    . . . . . . . . . . . . . . . .
    . . d d . . d . d . . . d . . .
    . . d . . . . . . . . d d d . .
    . . . . . . . . . d d d d d . .
    . . . . . d . . d d d d . . . .
    . . . . . . . d d d d d d . . .
    . d d d . . d d d . . . . . . .
    . d d d d . d d . . . . . . d .
    . . d d d d d . . . . . . . . .
    . . . d d d . . . . d d d . . .
    . . . d d d . . . d d d d d d d
    . . . d d d d d d d d d d d d d
    . d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    `, 1),
    "Earth": new Element("Earth",
        {
            "Water": "Mud", "Fire": "Lava", "Air": "Dust", "Earth": "Land",
            "Pressure": "Stone"
        },
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . e e e e . . . . . .
            . . . . . e e e e e e . . . . .
            . . . . e e e e d e e e . . . .
            . . . . e e e e e e d e . . . .
            . . . e e e d e e e d e e . . .
            . . e e e e e e e e e e e e . .
            . . e d d e e e e e e e d e e .
            . e e e e e e e e e e e e d e .
            e e d e e e e e e e e e e e e e
        `, 1),
    "Energy": new Element("Energy", {}, img`
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . .
    . 5 . . . . . . . . . . . . 5 .
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . 5 5 5 5 . . . . 5
    5 . . . . . 5 5 5 5 . . . . . 5
    5 . . . . 5 5 5 5 . . . . . . 5
    5 . . . 5 5 5 5 . . . . . . . 5
    5 . . 5 5 5 5 5 5 5 5 5 . . . 5
    5 . . . 5 5 5 5 5 5 5 5 5 . . 5
    5 . . . . . . 5 5 5 5 5 . . . 5
    5 . . . . . 5 5 5 5 5 . . . . 5
    5 . . . . 5 5 5 5 5 . . . . . 5
    5 . . . 5 5 5 5 5 . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    . 5 . . . . . . . . . . . . 5 .
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . .
    `, 1),
    "Fire": new Element("Fire",
        { "Earth": "Lava", "Fire": "Energy", "Water": "Steam", "Air": "Smoke" },
        img`
    . . . . . . . . . . . . . . . .
    . . . . . . . 2 2 2 . . . . . .
    . . . . . . . 2 4 2 . . . . . .
    . . . . . . 2 2 4 2 2 . . . . .
    . . . . . . 2 4 4 4 2 . . . . .
    . . . . . 2 2 4 5 4 2 2 . . . .
    . . . . 2 2 4 4 5 4 4 2 2 . . .
    . . . 2 2 4 4 5 5 5 4 4 2 2 . .
    . . . 2 4 4 5 5 1 5 5 4 4 2 . .
    . . . 2 4 5 5 1 1 1 5 5 4 2 . .
    . . . 2 4 5 1 1 1 1 1 5 4 2 . .
    . . . 2 4 5 1 1 1 1 1 5 4 2 . .
    . . . 2 4 4 5 1 1 1 5 5 4 2 . .
    . . . 2 2 4 5 5 5 5 5 4 2 2 . .
    . . . . 2 2 4 4 4 4 4 2 2 . . .
    . . . . . 2 2 2 2 2 2 2 . . . .
    `, 1),
    "Lava": new Element("Lava", {}, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . 2 2 . . . . . .
    . . . . . . . 2 2 2 2 . . . . .
    . . . . . . 2 2 4 4 4 2 2 2 2 .
    . . . . 2 2 4 4 4 4 4 4 4 4 4 2
    . . 2 2 4 4 4 5 5 5 5 5 5 5 4 2
    . 2 4 4 4 5 5 5 4 5 5 4 5 5 4 2
    2 4 4 4 5 5 4 5 5 5 5 5 5 5 4 2
    2 4 5 5 5 4 4 5 4 5 5 5 4 5 4 2
    2 4 5 5 5 5 5 5 5 5 4 5 5 4 2 .
    2 4 4 5 5 5 5 4 5 5 5 4 4 4 2 .
    . 2 4 4 4 5 5 5 5 5 4 4 2 2 . .
    . . 2 2 4 4 4 4 4 4 2 2 . . . .
    . . . . 2 2 2 2 2 2 . . . . . .
    . . . . . . 2 2 2 . . . . . . .
    `, 1),
    "Mist": new Element("Mist", {}, img`
    . . . . . . . . . . . . . . . .
    . 1 1 1 . . . . . 1 1 1 . . . .
    . . . . . 1 1 1 . . . . . 1 1 1
    . 1 1 1 . . . . . 1 1 1 . . . .
    . . . . . 1 1 1 . . . . . 1 1 1
    . 1 1 1 . . . . . 1 1 1 . . . .
    . . . . . 1 1 1 . . . . . 1 1 1
    . 1 1 1 . . . . . 1 1 1 . . . .
    . . . . . 1 1 1 . . . . . 1 1 1
    . 1 1 1 . . . . . 1 1 1 . . . .
    . . . . . 1 1 1 . . . . . 1 1 1
    . 1 1 1 . . . . . 1 1 1 . . . .
    . . . . . 1 1 1 . . . . . 1 1 1
    . 1 1 1 . . . . . 1 1 1 . . . .
    . . . . . 1 1 1 . . . . . 1 1 1
    . . . . . . . . . . . . . . . .
    `, 1),
    "Mud": new Element("Mud", {}, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . e e . . . . . . . . .
    . . . e e e e e . . e e e e . .
    . . e e e e e e e e e e e e e .
    . e e e e e e e e e e e e e . .
    e e e e e e e e e e e e e . . .
    e e e e e e e e e e e e e . . .
    e e e e e e e e e e e e e . . .
    . e e e e e e e e e e e e e . .
    . . e e . . . e e e e e e e e .
    . . . . . . . . e e e e e e . .
    . . . . . . . . . . e e e . . .
    . . . . . . . . . . . . . . . .
    `, 1),
    "Smoke": new Element("Smoke", {}, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . c c c . . . . . .
        . . c c c . c c c c . . . . . .
        . . c c c c c c c c . . . . . .
        . . c c c c c c . . c c . . . .
        . . . c c c c . . c c c . . . .
        . . . . c c c . . c c c . . . .
        . . . . c c c c c . . . . . . .
        . . . . c c c c c c . . . . . .
        . . . . c c c c c c c . . . . .
        . . . . c c c c c c c . . . . .
        . . . . c c c c c c c . . . . .
        . . . . . c c c c c c . . . . .
        . . . . . . . c c . . . . . . .
    `, 1),
    "Steam": new Element("Steam", {}, img`
        . . . . . . . . . . . . . . . .
        . . . 1 1 1 1 1 . . . . . . . .
        . . 1 1 1 1 1 1 1 . . 1 1 . . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . 1 1 . 1 1 1 1 1 1 1 1 1 1 1 1
        . . . . 1 1 1 1 1 1 1 1 1 1 1 .
        . . . . . 1 1 1 1 1 . . . 1 1 .
        . . . . . . 1 1 1 . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . . 1 . . . . . . . .
    `, 1),
    "Water": new Element("Water",
        { "Earth": "Mud", "Air": "Mist", "Fire": "Steam", "Water": "Puddle" },
        img`
    . . . . . . . . . . . . . . . .
    . . . . . . . 9 9 9 . . . . . .
    . . . . . . . 9 8 9 . . . . . .
    . . . . . . 9 9 8 9 9 . . . . .
    . . . . . . 9 8 8 8 9 . . . . .
    . . . . . 9 9 8 9 8 9 9 . . . .
    . . . . 9 9 8 8 9 8 8 9 9 . . .
    . . . 9 9 8 8 9 9 9 8 8 9 9 . .
    . . . 9 8 8 9 9 9 9 9 8 8 9 . .
    . . . 9 8 9 9 9 9 9 9 9 8 9 . .
    . . . 9 8 9 9 9 9 9 9 9 8 9 . .
    . . . 9 8 9 9 9 9 9 9 9 8 9 . .
    . . . 9 8 8 9 9 9 9 9 9 8 9 . .
    . . . 9 9 8 9 9 9 9 9 8 9 9 . .
    . . . . 9 9 8 8 8 8 8 9 9 . . .
    . . . . . 9 9 9 9 9 9 9 . . . .
    `, 1),
    "Pressure": new Element("Pressure",
        { "Earth": "Stone" },
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . 1 1 1 1 1 . .
            . . . . . . . . . 1 1 1 1 1 1 .
            . . . . . . . . . 1 1 1 1 1 1 1
            . . . . . . . . . . 1 1 1 1 1 1
            . . . . . . . . . . 1 1 1 1 1 1
            . . . f f f f f . . . . 1 1 1 1
            . . f 1 2 1 2 1 f . . . 1 1 1 .
            . f 2 1 2 1 2 1 1 f . . . . . .
            . f 1 2 1 1 1 2 2 f . . . . . .
            . f 1 1 1 8 1 1 1 f . . . . . .
            . f 2 2 1 8 8 2 1 f . . . . . .
            . f 1 1 2 1 8 1 2 f . . . . . .
            . . f 2 1 1 8 1 f . . . . . . .
            . . . f f f f f . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, 1),
    "Stone": new Element("Stone",
        {},
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f . . . . . .
            . . . . f f c c c c f f . . . .
            . . . f c c c c c c c c f . . .
            . . f c c c c c c c c c c f . .
            . . f c c c c c c c c c c f . .
            . f c c c c c c c c c c c c f .
            . f c c c c c c c c c c c c f .
            f c c c c c c c c c c c c c c f
            f c c c c c c c c c c c c c c f
            f c c c c c c c c c c c c c c f
            f c c c c c c c c c c c c c c f
            . f c c c c c c c c c c c c f .
            . . f c c c c c c c c c c f . .
            . . . f f f f f f f f f f . . .
            . . . . . . . . . . . . . . . .
        `, 1),
    "Land": new Element("Land",
        {},
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . 7 . . . . . . . . . .
            . . . . 7 e 7 . . . . . . . . .
            . . 7 . 7 e 7 . . . . . . . . .
            . 7 7 7 . e . . . . . . . . . .
            . 7 e 7 . e . 7 7 7 7 . . . . .
            . . e . . 7 7 7 7 7 7 7 7 . . .
            . . e 7 7 7 7 7 7 7 7 7 7 7 7 .
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        `, 1),
    "Puddle": new Element("Puddle",
        {},
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . 5 5 . . . . . . . . .
            . . . . . 5 5 . . . . . . . . .
            . . . 9 9 5 5 9 9 9 . . . . . .
            . . 9 9 9 5 5 9 9 9 9 9 . . . .
            . . 9 9 9 5 5 5 5 9 9 9 . . . .
            . . 9 9 9 5 5 5 5 9 9 9 . . . .
            . . 9 9 9 9 9 9 9 9 9 9 . . . .
            . . . 9 9 9 9 9 9 9 9 9 . . . .
            . . . . 9 9 9 9 9 9 . . . . . .
            . . 9 9 . . . . . . . . . . . .
            . . 9 9 . . . . . . . . . . . .
            . . . . . . . 9 9 . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, 1),
    "Acid Rain": new Element("Acid Rain",
        { "Planet": "Venus" },
        img`
            . . . . . . . . . . . . . . . .
            . . . . c c c c c c c c . . . .
            . . c c c c c c c c c c c c . .
            . c c c c c c c c c c c c c c .
            . c c c c c c c c c c c c c c .
            . . c c c . . . . c c c . . . .
            . . c c . . . . . c c . . . 7 .
            . . . . . . . . . . 7 . . . 7 .
            . . 7 . . . 7 . . . 7 . . . . .
            . . 7 . . . 7 . . . . . 7 . . .
            . . . . . . . . . . . . 7 . . .
            . . . 7 . . . . . 7 . . . . . .
            . . . 7 . . 7 . . 7 . 7 . . . .
            . . . . . . 7 . . . . 7 . 7 . .
            . . . . 7 . . . 7 . . . . 7 . .
            . . . . 7 . . . 7 . . . . . . .
        `, 1),
    "Airplane": new Element("Airplane",
        { "Alien": "UFO", "Animal": "Bird", "Atmosphere": "Rocket", "Barn": "Hangar", "Blade": "Helicopter", "Container": "Hangar", "Dinosaur": "Pterodactyl", "Egg": "Bird", "Fabric": "Parachute", "House": "Hangar" },
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            1 . . . 8 . . . . . . . . . . .
            1 1 . . 1 1 . . . . . . . . . .
            1 1 1 1 1 1 1 1 1 1 1 1 1 . . .
            1 1 1 9 1 9 1 9 1 9 1 9 1 9 . .
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            . . . . 1 1 1 1 . . . . . . . .
            . . . . 1 1 1 . . . . . . . . .
            . . . . 1 1 . . . . . . . . . .
            . . . . 2 . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, 1),
}