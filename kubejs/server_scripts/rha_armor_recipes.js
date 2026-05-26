const RHA_ARMOR_SHAPES = ['hardsteel', 'layeredsteel', 'rivetedsteel', 'slashedsteel']
const RHA_ARMOR_COLORS = [
  '_4bo',
  'algae',
  'ardenne',
  'azure',
  'blush',
  'cactus',
  'camel',
  'charcoal',
  'cherenkov',
  'coral',
  'desert',
  'dust',
  'garupan',
  'gelb',
  'gink',
  'gorge',
  'gravel',
  'grizzly',
  'hide',
  'horizon',
  'jet',
  'kampfgrau',
  'kat',
  'ley',
  'olive',
  'panzergrau',
  'parade',
  'patton',
  'pine',
  'rota',
  'scale',
  'sensha',
  'slate',
  'snow',
  'type'
]
const RHA_ARMOR_TIERS = [
  {
    material: 'composite',
    anchor: 'hardsteelrota',
    colors: ['rota', 'scale', 'gorge'],
    ingredients: [
      'minecraft:iron_block',
      '4x create:andesite_alloy',
      'tfmg:concrete_mixture',
    ]
  },
  {
    material: 'ceramite',
    anchor: 'hardsteelgelb',
    colors: ['gelb', 'garupan', 'grizzly'],
    ingredients: [
      'minecraft:iron_block',
      '4x minecraft:brick',
      'minecraft:clay',
      'minecraft:calcite'
    ]
  },
  {
    material: 'steelhide',
    anchor: 'hardsteelcharcoal',
    colors: ['charcoal', 'jet', 'slate'],
    ingredients: [
      'minecraft:iron_block',
      'ohmymeteors:meteoric_alloy',
      'tfmg:heavy_plate',
      'create:brass_sheet'
    ]
  },
  {
    material: 'phantomite',
    anchor: 'hardsteelgravel',
    colors: ['gravel', 'dust', 'kampfgrau'],
    ingredients: [
      'minecraft:iron_block',
      'ohmymeteors:meteoric_alloy',
      '2x tfmg:aluminum_sheet',
      'tfmg:silicon_ingot'
    ]
  }
]

ServerEvents.recipes(event => {
  RHA_ARMOR_COLORS.forEach(color => {
    RHA_ARMOR_SHAPES.forEach(shape => {
      event.remove({ output: `rha:${shape}${color}` })
    })

    event.remove({ output: `rha:hatch${color}` })
  })

  event.remove({ output: 'rha:slashedsteelgold' })
  event.remove({ output: 'rha:slashedsteelnotex' })

  RHA_ARMOR_TIERS.forEach(tier => {
    const tierBlocks = []
    tier.colors.forEach(color => {
      RHA_ARMOR_SHAPES.forEach(shape => {
        tierBlocks.push(`${shape}${color}`)
      })
    })

    event.recipes.create.mixing(`4x rha:${tier.anchor}`, tier.ingredients)
      .heated()
      .id(`kubejs:rha/${tier.material}/${tier.anchor}`)

    tierBlocks.forEach(input => {
      tierBlocks.forEach(output => {
        if (input !== output) {
          event.stonecutting(`rha:${output}`, `rha:${input}`)
            .id(`kubejs:rha/${tier.material}/stonecutting/${input}_to_${output}`)
        }
      })
    })
  })
})
