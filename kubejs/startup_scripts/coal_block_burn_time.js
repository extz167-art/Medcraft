ItemEvents.modification(event => {
  event.modify('minecraft:coal_block', item => {
    item.setBurnTime(1600)
  })
})
