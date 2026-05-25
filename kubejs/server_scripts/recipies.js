ServerEvents.recipes(event => {
  event.remove({ output: 'computercraft:computer_normal' })
  event.recipes.create.mechanical_crafting('computercraft:computer_normal', [
    ' C ',
    'GGG',
    'EEE',
    'POS',
    ' C '
  ], {
    C: 'create:andesite_casing',
    G: 'minecraft:glass',
    O: 'create_connected:control_chip',
    E: 'create:electron_tube',
    S: 'createaddition:gold_spool',
    P: 'create:precision_mechanism'
  })

  event.remove({ output: 'computercraft:computer_advanced' })
  event.recipes.create.mechanical_crafting('computercraft:computer_advanced', [
    ' B ',
    'FCG',
    ' T '
  ], {
    B: 'create:brass_casing',
    C: 'computercraft:computer_normal',
    T: 'simulated:linked_typewriter',
    G: 'create:golden_sheet',
    F: 'create:encased_fan'
  })

  event.remove({ id: 'computercraft:pocket_computer_normal' })
  event.recipes.create.pressing(Item.of('computercraft:pocket_computer_normal'), 'computercraft:computer_normal')
    .id('kubejs:pressing/pocket_computer_normal')

  event.remove({ id: 'computercraft:pocket_computer_advanced' })
  event.recipes.create.pressing(Item.of('computercraft:pocket_computer_advanced'), 'computercraft:computer_advanced')
    .id('kubejs:pressing/pocket_computer_advanced')


  event.remove({ output: 'dndesires:handheld_saw' })
  event.recipes.create.mechanical_crafting('dndesires:handheld_saw', [
    ' I ',
    ' M ',
    'CHL',
    'CBL',
    ' S '
  ], {
    S: 'create:mechanical_saw',
    B: 'create:andesite_casing',
    H: 'create:clutch',
    M: 'create:precision_mechanism',
    C: 'create:cogwheel',
    L: 'create:large_cogwheel',
    I: 'create:brass_ingot'
  })

  event.remove({ output: 'dndesires:handheld_drill' })
  event.recipes.create.mechanical_crafting('dndesires:handheld_drill', [
    ' I ',
    ' M ',
    'CHL',
    'CBL',
    ' S '
  ], {
    S: 'create:mechanical_drill',
    B: 'create:brass_casing',
    H: 'create:clutch',
    M: 'create:precision_mechanism',
    C: 'create:cogwheel',
    L: 'create:large_cogwheel',
    I: 'create:brass_ingot'
  })

  event.remove({ output: 'ohmymeteors:meteoric_alloy' })
  event.recipes.create.mixing('ohmymeteors:meteoric_alloy', [
    '2x minecraft:iron_ingot',
    '2x ohmymeteors:meteoric_chunk'
  ]).id('kubejs:mixing/meteoric_alloy')

  event.recipes.create.crushing([
    Item.of('minecraft:raw_gold').withChance(0.5),
    Item.of('minecraft:raw_copper').withChance(0.5),
    Item.of('create:raw_zinc').withChance(0.5),
    Item.of('minecraft:raw_iron').withChance(0.5),
    Item.of('minecraft:redstone').withChance(0.5),
    Item.of('minecraft:lapis_lazuli').withChance(0.5)
  ], 'ohmymeteors:meteoric_chunk').id('kubejs:crushing/meteoric_chunk')

  event.remove({ output: 'sophisticatedbackpacks:upgrade_base' })
  event.shaped('sophisticatedbackpacks:upgrade_base', [
    'SIS',
    'IMI',
    'SIS'
  ], {
    S: '#c:strings',
    I: '#c:ingots/iron',
    M: 'ohmymeteors:meteoric_alloy'
  }).id('kubejs:shaped/upgrade_base')
})
