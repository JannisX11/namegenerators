function generateTeamName() {
	var subjects = [
		'Pathway',
		'5T',
		'CC',
		'MC',
		'37',
		'ABC',
		'Entity',
		'Duh',
		'Area',
		'Zyclone',
		'Anybloom',
		'Leverbloom',
		'Cleverbloom',
		'King',
		'Poly',
		'Sapphire',
		'Obsidian',
		'Wizard',
		'World',
		'Cactus',
		'Pumpkin',
		'Melon',
		'Redstone',
		'Piston',
		'Beacon',
		'Llama',
		'Ship',
		'Totem',
		'Prison',
		'Impulse',
		'Town',
		'Ice',
		'Snow',
		'Raft',
		'Winter',
		'Summer',
		'Wind',
		'Lava',
		'Magma',
		'Nether',
		'Ender',
		'Animal',
		'Stronghold',
		'Castle',
		'Fortress',
		'Potato',
		'Village',
		'Dragon',
		'Zombie',
		'Ghost',
		'Sky',
		'Desert',
		'Barnyard',
		'Party',
		'Arena',
		'Palette',
		'Free',
		'Furniture',
		'City',
		'Anime',
		'Gratis',
		'Noob',
		'Elemental',
		'Memory',
		'Carrot',
		'3D',
		'Western',
		'Maker',
		'Monster',
		'Chunk',
		'Block',
		'Loot',
		'Space',
		'Planet',
		'Spirit',
		'TNT',
		'Color',
		'Rod',
		'Biome',
		'Diamond',
		'Emerald',
		'Ninja',
		'Downtown',
		'River',
		'Cube',
		'Bow',
		'Stone',
		'Boat',
		'Elder',
		'Pixel',
		'Game',
		'Infinity',
		'Advanced',
		'Creeper',
		'Enderman',
		'Skeleton',
		'Wolf',
		'Horse',
		'Wither',
		'Guardian',
		'Parrot',
		'Shulker',
		'Elytra',
		'Witch',
		'Sheep',
		'Pig',
		'Cow',
		'Chicken',
		'Squid',
		'Mushroom',
		'Jungle',
		'Mesa',
		'Forest',
		'Cave',
		'Ravine',
		'Ocean',
		'Mountain',
		'Quest',
		'Tower',
		'Mega',
		'Giga',
		'Ultra',
		'Cat',
		'Phantom',
		'Drowned',
		'Panda',
		'Bamboo',
		'Pirate',
		'Pizza',
		'Escape',
		'Attack',
		'Factory',
		'Smash',
		'Splash',
		'Quest',
		'Sweeper',
		'PVP',
		'Runner',
		'Guardian',
		'Adventure',
		'Shuffle',
		'Brawl',
		'Blitz',
		'Game',
		'Skyblock',
		'Play',
		'Combat',
		'Crusader',
		'Hunt',
		'Tower',
		'Party',
		'Festival',
		'Apocalypse',
		'Challenger',
		'Parade',
		'Rumble',
		'Fuse',
		'Power',
		'Rampage',
		'Destruction',
		'Clash',
		'Hour',
		'Walker',
		'Block',
		'Defense',
		'Defender',
		'Control',
		'Drop',
		'Rush',
		'Punch',
		'Dodge',
		'Catcher',
		'Miner',
		'Misfit',
		'Craft',
		'Survival',
		'Dimension',
		'Seeker',
		'Sunboot',
		'Moonboat',
		'Piki',
		'Leverlike',
		'Nitrik',
		'Waypoint',
		'Beacon',
		'Starfish',
		'Jellyfish',
		'Fall',
		'Swordfish',
		'StracciatellaBurp',
		'Lab',
		'Nova',
		'North',
		'South',
		'East',
		'West',
		'Aura',
		'Glowsquid',
		'Moobloom',
		'Iceologer',
		'Tiger',
		'Lion',
		'Elephant',
	]
	var forms = [
		'Studios',
		'Studios',
		'Studio',
		'Creations',
		'Squared',
		'Society',
		'Cubed',
		'Cube',
		'Crew',
		'One',
		'BT',
		'Digital',
		'Concepts',
		'$works',
		'$ception',
		'$scape',
		'$crew',
		'$craft',
		'$ia',
		'$blocks',
		'Designs',
		'Schematics',
		'Solutions',
		'Builds',
		'Games',
		'Blocks',
		'Bridge',
		'Wizards',
		'Squirrel',
		'Pixel',
		'in$',
		'Club',
		'Craft',
		'Quest',
		'Productions',
		'Maps',
		'Team $',
		'Project $',
		'$lab',
		'Lab',
	]

	var form = forms.random();
	var subject = subjects.random();
	if (form.includes('$')) {
		var result = form.replace(/\$/g, subject)
	} else {
		var result = `${subject} ${form}`
	}

	return result;
}

