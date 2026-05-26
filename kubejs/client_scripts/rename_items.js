ClientEvents.lang('en_us', event => {
  event.renameItem('tfmg:circuit_board', 'Advanced Circuit Board')

  const armorNames = [
    ['rota', 'Rota', 'Composite'],
    ['scale', 'Scale', 'Composite'],
    ['gorge', 'Gorge', 'Composite'],
    ['gelb', 'Gelb', 'Ceramite'],
    ['garupan', 'Garupan', 'Ceramite'],
    ['grizzly', 'Grizzly', 'Ceramite'],
    ['charcoal', 'Charcoal', 'Steelhide'],
    ['jet', 'Jet', 'Steelhide'],
    ['slate', 'Slate', 'Steelhide'],
    ['gravel', 'Gravel', 'Phantomite'],
    ['dust', 'Dust', 'Phantomite'],
    ['kampfgrau', 'Kampfgrau', 'Phantomite']
  ]

  const armorShapes = [
    ['hardsteel', 'Hardened'],
    ['layeredsteel', 'Layered'],
    ['rivetedsteel', 'Rivited'],
    ['slashedsteel', 'Slashed']
  ]

  armorNames.forEach(([colorId, colorName, material]) => {
    armorShapes.forEach(([shapeId, shapeName]) => {
      const id = `rha:${shapeId}${colorId}`
      const name = `${colorName} ${shapeName} ${material}`
      const key = `${shapeId}${colorId}`
      event.add(`block.rha.${key}`, name)
      event.add(`item.rha.${key}`, name)
      event.renameBlock(id, name)
      event.renameItem(id, name)
    })
  })
})
