ServerEvents.recipes(event => {
  event.shaped('4x medcraft:basic_research_pack', [
    'PPP',
    'CRC',
    'PPP'
  ], {
    C: 'minecraft:copper_ingot',
    P: 'minecraft:paper',
    R: 'minecraft:redstone'
  }).id('medcraft:research_pack/basic')

  event.shaped('2x medcraft:logistics_research_pack', [
    ' C ',
    'RBR',
    ' H '
  ], {
    B: 'medcraft:basic_research_pack',
    C: 'create:cogwheel',
    H: 'minecraft:chest',
    R: 'minecraft:redstone'
  }).id('medcraft:research_pack/logistics')

  event.shaped('2x medcraft:metallurgy_research_pack', [
    ' I ',
    'RBR',
    ' F '
  ], {
    B: 'medcraft:basic_research_pack',
    F: 'minecraft:blast_furnace',
    I: 'minecraft:iron_ingot',
    R: 'minecraft:redstone'
  }).id('medcraft:research_pack/metallurgy')

  event.shaped('2x medcraft:energy_research_pack', [
    ' G ',
    'RBR',
    ' C '
  ], {
    B: 'medcraft:basic_research_pack',
    C: 'createaddition:connector',
    G: 'minecraft:gold_ingot',
    R: 'minecraft:redstone'
  }).id('medcraft:research_pack/energy')

  const labRecipes = [
    { type: 'basic', energyPerTick: 64, time: 1200 },
    { type: 'logistics', energyPerTick: 96, time: 1200 },
    { type: 'metallurgy', energyPerTick: 96, time: 1200 },
    { type: 'energy', energyPerTick: 128, time: 1200 }
  ]

  labRecipes.forEach(recipe => {
    event.recipes.modular_machinery_reborn
      .machine_recipe('medcraft:research_lab', recipe.time)
      .width(120)
      .height(60)
      .requireItem(SizedIngredient.of(`medcraft:${recipe.type}_research_pack`, 10), 10, 18)
      .requireEnergyPerTick(recipe.energyPerTick, 10, 38)
      .produceItem(SizedIngredient.of(`medcraft:${recipe.type}_research_data`, 1), 80, 18)
      .jei()
      .id(`medcraft:research_lab/${recipe.type}_research_data`)
  })
})
