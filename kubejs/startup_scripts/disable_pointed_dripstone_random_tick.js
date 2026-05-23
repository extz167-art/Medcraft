BlockEvents.modification(event => {
  event.modify('minecraft:pointed_dripstone', block => {
    block.setIsRandomlyTicking(false)
  })
})
