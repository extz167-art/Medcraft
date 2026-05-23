const MEDCRAFT_RESEARCH_TYPES = [
  'basic',
  'logistics',
  'metallurgy',
  'energy'
]

function medcraftTitleCase(value) {
  return value
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

StartupEvents.registry('item', event => {
  MEDCRAFT_RESEARCH_TYPES.forEach(type => {
    const name = medcraftTitleCase(type)

    event.create(`medcraft:${type}_research_pack`)
      .displayName(`${name} Research Pack`)

    event.create(`medcraft:${type}_research_data`)
      .displayName(`${name} Research Data`)
  })
})
