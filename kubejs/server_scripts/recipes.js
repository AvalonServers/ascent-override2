// priority: 0

ServerEvents.recipes(event => {
	event.remove({ id: 'tempad:tempad' });
	event.remove({ id: 'tempad:he_who_remains_tempad' });

	// remove blast furnace recipe for ad astra steel
	event.remove({
		type: 'minecraft:blasting',
		output: 'ad_astra:steel_ingot'
	});

	// replace ad astra book recipe with 
});

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});
