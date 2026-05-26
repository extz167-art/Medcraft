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
const RHA_ALLOWED_ARMOR_COLORS = new Set([
  'rota',
  'scale',
  'gorge',
  'gelb',
  'garupan',
  'grizzly',
  'charcoal',
  'jet',
  'slate',
  'gravel',
  'dust',
  'kampfgrau'
])

ServerEvents.recipes(event => {
  RHA_ARMOR_COLORS.forEach(color => {
    RHA_ARMOR_SHAPES.forEach(shape => {
      if (!RHA_ALLOWED_ARMOR_COLORS.has(color)) {
        event.remove({ output: `rha:${shape}${color}` })
      }
    })

    event.remove({ output: `rha:hatch${color}` })
  })

  event.remove({ output: 'rha:slashedsteelgold' })
  event.remove({ output: 'rha:slashedsteelnotex' })
})
