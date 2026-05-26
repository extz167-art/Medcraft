const RHA_ARMOR_SHAPES = ['hardsteel', 'layeredsteel', 'rivetedsteel', 'slashedsteel']

const RHA_ARMOR_TIERS = [
  { material: 'Composite', colors: ['rota', 'scale', 'gorge'], toughness: 20 },
  { material: 'Ceramite', colors: ['gelb', 'garupan', 'grizzly'], toughness: 20 },
  { material: 'Steelhide', colors: ['charcoal', 'jet', 'slate'], toughness: 40 },
  { material: 'Phantomite', colors: ['gravel', 'dust', 'kampfgrau'], toughness: 30 }
]

BlockEvents.modification(event => {
  RHA_ARMOR_TIERS.forEach(tier => {
    tier.colors.forEach(color => {
      RHA_ARMOR_SHAPES.forEach(shape => {
        event.modify(`rha:${shape}${color}`, block => {
          block.setExplosionResistance(tier.toughness)
        })
      })
    })
  })
})
