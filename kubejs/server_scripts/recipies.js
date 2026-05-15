ServerEvents.recipes(event => {
  // remove normal recipe
  event.remove({ output: 'computercraft:computer_normal' })

  // add create mechanical crafting recipe
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



  // remove normal recipe
  event.remove({ output: 'computercraft:computer_advanced' })

  // add create mechanical crafting recipe
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



  // remove normal recipe
  event.remove({ output: 'dndesires:handheld_saw' })

  // add create mechanical crafting recipe
  event.recipes.create.mechanical_crafting('dndesires:handheld_saw', [
    ' I ',
    ' M ',
    'CHL',
    'CBL',
    ' S '
  ], {
    S: 'create:mechanical_saw',
    B: 'create:brass_casing',
    H: 'create:clutch',
    M: 'create:precision_mechanism',
    C: 'create:cogwheel',
    L: 'create:large_cogwheel',
    I: 'create:brass_ingot'
  })
})