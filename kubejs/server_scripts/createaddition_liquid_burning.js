ServerEvents.recipes(event => {
  event.remove({ id: 'createaddition:liquid_burning/lava' })
  event.remove({ id: 'createaddition:liquid_burning/ethanol' })
  event.remove({ id: 'createaddition:liquid_burning/biofuel' })

  event.custom({
    type: 'createaddition:liquid_burning',
    burn_time: 4800,
    ingredients: [
      {
        type: 'fluid_tag',
        amount: 1000,
        fluid_tag: 'minecraft:lava'
      }
    ],
    results: [],
    superheated: false
  }).id('kubejs:liquid_burning/lava')

  event.custom({
    type: 'createaddition:liquid_burning',
    burn_time: 4800,
    ingredients: [
      {
        type: 'fluid_tag',
        amount: 1000,
        fluid_tag: 'c:bioethanol'
      }
    ],
    results: [],
    superheated: false
  }).id('kubejs:liquid_burning/bioethanol')
})
