ServerEvents.recipes(event => {
  // Remove every built-in Create Ore Excavation vein definition.
  // Veins are recipe-like entries that decide what underground resources can be found.
  event.remove({ type: 'createoreexcavation:vein' })

  // Remove every built-in item drilling recipe.
  // Drilling recipes decide which items a drilling machine outputs from a matching vein.
  event.remove({ type: 'createoreexcavation:drilling' })

  // Remove every built-in fluid extracting recipe.
  // Extracting recipes decide which fluids an extractor outputs from a matching vein.
  event.remove({ type: 'createoreexcavation:extracting' })

  // vein(name, icon) adds a new vein.
  // The first argument is a JSON text component shown in UI.
  // The second argument is the item/block icon shown for the vein.
  event.recipes.createoreexcavation.vein('{"text":"Stone Vein"}', 'minecraft:stone')
    // placement(spacing, separation, salt) controls world placement.
    // spacing is the average distance between matching vein starts in chunks.
    // separation is the minimum chunk distance between matching veins.
    // salt is a unique number used by worldgen; matching all three placement values can cause veins to overwrite each other.
    .placement(64, 8, 1573907181)
    // veinSize(min, max) controls finite-vein size as a multiplier of the server config base amount.
    // If finite veins are disabled/default infinite is true, this only matters when finite generation is enabled.
    .veinSize(10, 30)
    // biomeWhitelist(tagOrId) limits where the vein can generate.
    // kubejs:no_natural_resource_veins is an empty biome tag, so these veins do not naturally generate.
    .biomeWhitelist('kubejs:no_natural_resource_veins')
    // id(...) is the recipe id and also the vein id used by drilling/extracting recipes.
    .id('kubejs:stone_vein')

  // drilling(output, veinId, ticks) adds an item output recipe for a vein.
  // The third argument is extraction time in ticks at 32 RPM.
  event.recipes.createoreexcavation.drilling(
    [
      // Multiple outputs here mean each successful drilling cycle produces both items.
      Item.of('minecraft:cobblestone'),
      // Item.of('minecraft:stone'),
      // coeutil.processingOutput(item, chance) adds an output with a 0-1 chance.
      coeutil.processingOutput('minecraft:andesite', 0.1),
      coeutil.processingOutput('minecraft:diorite', 0.05),
      coeutil.processingOutput('minecraft:granite', 0.01)
    ],
    'kubejs:stone_vein',
    20
  )
    // stress(value) sets the SU/RPM stress requirement. Default examples use 256.
    .stress(256)
    .id('kubejs:drilling/stone_cobblestone')



  event.recipes.createoreexcavation.vein('{"text":"Lava Reservoir"}', 'minecraft:lava_bucket')
    // This placement is intentionally different from the other veins so it has its own distribution.
    .placement(96, 8, 709368741)
    .veinSize(8, 20)
    .biomeWhitelist('kubejs:no_natural_resource_veins')
    .id('kubejs:lava_reservoir')

  // extracting(outputFluid, veinId, ticks) adds a fluid output recipe for a vein.
  // Fluid amounts use bucket shorthand: 2B = 2 buckets.
  event.recipes.createoreexcavation.extracting('500x minecraft:lava', 'kubejs:lava_reservoir', 40)
    // stress(value) controls how much stress the extractor requires.
    .stress(256)
    .id('kubejs:extracting/lava')



  event.recipes.createoreexcavation.vein('{"text":"Deepslate Vein"}', 'minecraft:deepslate')
    .placement(64, 8, 195684023)
    .veinSize(10, 30)
    .biomeWhitelist('kubejs:no_natural_resource_veins')
    .id('kubejs:deepslate_vein')

  event.recipes.createoreexcavation.drilling(
    [
      Item.of('minecraft:cobbled_deepslate'),
      coeutil.processingOutput('minecraft:tuff', 0.1) 
    ],
    'kubejs:deepslate_vein', 
    200)
    .stress(256)
    .id('kubejs:drilling/deepslate')

  event.recipes.createoreexcavation.vein('{"text":"Andesite Vein"}', 'minecraft:andesite')
    .placement(64, 8, 113684921)
    .veinSize(10, 30)
    .biomeWhitelist('kubejs:no_natural_resource_veins')
    .id('kubejs:andesite_vein')

  event.recipes.createoreexcavation.drilling(
    [
      Item.of('minecraft:andesite'),
      coeutil.processingOutput('minecraft:cobblestone', 0.15),
      coeutil.processingOutput('minecraft:diorite', 0.08),
      coeutil.processingOutput('minecraft:granite', 0.08)
    ],
    'kubejs:andesite_vein',
    200
  )
    .stress(256)
    .id('kubejs:drilling/andesite')

  event.recipes.createoreexcavation.vein('{"text":"Calcite Vein"}', 'minecraft:calcite')
    .placement(64, 8, 194720385)
    .veinSize(8, 24)
    .biomeWhitelist('kubejs:no_natural_resource_veins')
    .id('kubejs:calcite_vein')

  event.recipes.createoreexcavation.drilling(
    [
      Item.of('minecraft:calcite'),
      coeutil.processingOutput('minecraft:cobblestone', 0.1),
      coeutil.processingOutput('minecraft:amethyst_block', 0.04),
      coeutil.processingOutput('minecraft:amethyst_shard', 0.01)
    ],
    'kubejs:calcite_vein',
    200
  )
    .stress(256)
    .id('kubejs:drilling/calcite')

  event.recipes.createoreexcavation.vein('{"text":"Asurine Vein"}', 'create:asurine')
    .placement(96, 8, 682941507)
    .veinSize(6, 18)
    .biomeWhitelist('kubejs:no_natural_resource_veins')
    .id('kubejs:asurine_vein')

  event.recipes.createoreexcavation.drilling(
    [
      Item.of('create:asurine'),
      coeutil.processingOutput('create:raw_zinc', 0.12),
      coeutil.processingOutput('create:crushed_raw_zinc', 0.2)
    ],
    'kubejs:asurine_vein',
    300
  )
    .stress(384)
    .id('kubejs:drilling/asurine')

  event.recipes.createoreexcavation.vein('{"text":"Veridium Vein"}', 'create:veridium')
    .placement(96, 8, 170392458)
    .veinSize(6, 18)
    .biomeWhitelist('kubejs:no_natural_resource_veins')
    .id('kubejs:veridium_vein')

  event.recipes.createoreexcavation.drilling(
    [
      Item.of('create:veridium'),
      coeutil.processingOutput('minecraft:raw_copper', 0.12),
      coeutil.processingOutput('create:crushed_raw_copper', 0.2)
    ],
    'kubejs:veridium_vein',
    300
  )
    .stress(384)
    .id('kubejs:drilling/veridium')

  event.recipes.createoreexcavation.vein('{"text":"Ochrum Vein"}', 'create:ochrum')
    .placement(96, 8, 890134266)
    .veinSize(6, 18)
    .biomeWhitelist('kubejs:no_natural_resource_veins')
    .id('kubejs:ochrum_vein')

  event.recipes.createoreexcavation.drilling(
    [
      Item.of('create:ochrum'),
      coeutil.processingOutput('minecraft:raw_gold', 0.12),
      coeutil.processingOutput('create:crushed_raw_gold', 0.2)
    ],
    'kubejs:ochrum_vein',
    300
  )
    .stress(384)
    .id('kubejs:drilling/ochrum')

  event.recipes.createoreexcavation.vein('{"text":"Crimsite Vein"}', 'create:crimsite')
    .placement(96, 8, 306715924)
    .veinSize(6, 18)
    .biomeWhitelist('kubejs:no_natural_resource_veins')
    .id('kubejs:crimsite_vein')

  event.recipes.createoreexcavation.drilling(
    [
      Item.of('create:crimsite'),
      coeutil.processingOutput('minecraft:raw_iron', 0.12),
      coeutil.processingOutput('create:crushed_raw_iron', 0.2)
    ],
    'kubejs:crimsite_vein',
    300
  )
    .stress(384)
    .id('kubejs:drilling/crimsite')

  // Other available options from Create Ore Excavation's KubeJS API:
  // .alwaysFinite() forces a vein to be finite even if the global config defaults to infinite veins.
  // .alwaysInfinite() forces a vein to be infinite even if finite veins are enabled globally.
  // .priority(value) resolves duplicate veins/recipes; higher values win.
  // .biomeBlacklist(tagOrId) excludes biomes instead of whitelisting them.
  // .drill(itemId) on drilling/extracting requires a specific drill item instead of the #createoreexcavation:drills tag.
  // .fluid(fluidOrAmount) on drilling/extracting requires an input fluid, for example '10x minecraft:lava'.
  // coeutil.processingOutput(item, chance) can be used inside drilling output arrays for chance-based item outputs.
})
