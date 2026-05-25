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

  event.custom({
    type: 'create:crushing',
    ingredients: [
      { item: 'ohmymeteors:meteoric_chunk' }
    ],
    processing_time: 250,
    results: [
      { id: 'minecraft:raw_gold', chance: 0.5 },
      { id: 'minecraft:raw_copper', chance: 0.5 },
      { id: 'create:raw_zinc', chance: 0.5 },
      { id: 'minecraft:raw_iron', chance: 0.5 },
      { id: 'minecraft:redstone', chance: 0.5 },
      { id: 'minecraft:lapis_lazuli', chance: 0.5 }
    ]
  }).id('kubejs:crushing/meteoric_chunk')

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

  event.remove({ output: 'create_jet_boots:jet_boots' })
  event.shaped('create_jet_boots:jet_boots', [
    'E E',
    'CBC',
    'M M'
  ], {
    B: 'create:copper_diving_boots',
    C: 'create:cogwheel',
    E: 'create:electron_tube',
    M: 'ohmymeteors:meteoric_alloy'
  }).id('kubejs:shaped/jet_boots')
})
