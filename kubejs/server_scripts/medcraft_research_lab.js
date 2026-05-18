MMREvents.machines(event => {
  event.create('medcraft:research_lab')
    .name('Research Lab')
    .color('#4f7fff')
    .structure(
      MMRStructureBuilder.create()
        .pattern([
          [
            'III',
            'ICI',
            'OOO'
          ],
          [
            'AAA',
            'AEA',
            'AAA'
          ]
        ])
        .keys({
          A: 'modular_machinery_reborn:casing_plain',
          C: 'modular_machinery_reborn:controller',
          E: 'modular_machinery_reborn:energyinputhatch_normal',
          I: 'modular_machinery_reborn:inputbus_normal',
          O: 'modular_machinery_reborn:outputbus_normal'
        })
    )
})
