// priority: 0

ServerEvents.recipes(event => {
	// Change recipes here
	event.remove({ id: 'tempad:tempad' })
	event.remove({ id: 'tempad:he_who_remains_tempad' })
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
