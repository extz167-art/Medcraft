MMREvents.machines(event => {
  event.create('medcraft:research_lab')
    .name('Research Lab')
    .color('#4f7fff')
    .structure(
      MMRStructureBuilder.create()
        .pattern([
          [
            'baa',
            'aaa',
            'aac'
          ],
          [
            'ama',
            'a a',
            'aaa'
          ],
          [
            'aaa',
            'aea',
            'aaa'
          ]
        ])
        .keys({
          a: ['modular_machinery_reborn:casing_plain'],
          b: ['#modular_machinery_reborn:inputbus'],
          c: ['#modular_machinery_reborn:outputbus'],
          e: ['#modular_machinery_reborn:energyinputhatch']
        })
    )
})
