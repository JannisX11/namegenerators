Array.prototype.random = function() {
	var i = Math.floor(Math.random()*this.length);
	return this[i];
}

function generateRealmsName() {
	var subjects = [
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
		'Town',
		'Ice',
		'Snow',
		'Raft',
		'Car',
		'Vertex',
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
		'Elemental',
		'Memory',
		'Carrot',
		'3D',
		'Western',
		'Makers',
		'Monster',
		'Chunk',
		'Block',
		'Space',
		'Planet',
		'Spirit',
		'TNT',
		'Color',
		'Rod',
		'Biome',
		'Diamond',
		'Emerald',
		'Gold',
		'Ninja',
		'Downtown',
		'River',
		'Cube',
		'Bow',
		'Stone',
		'Boat',
		'Trash',
		'Elder',
		'Pixel',
		'Destruction',
		'Game',
		'Minigame',
		'Infinity',
		'Advanced',
		'Creeper',
		'Enderman',
		'Skeleton',
		'Wolf',
		'Horse',
		'Wither',
		'Guardian',
		'Survival',
		'Parkour',
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
		'Maze',
		'Motor',
		'Forest',
		'Cave',
		'Ravine',
		'Ocean',
		'Mountain',
		'Quest',
		'Tower',
		'Deadly',
		'Mega',
		'Giga',
		'Ultra',
		'Quick',
		'Cat',
		'Phantom',
		'Drowned',
		'Panda',
		'Bamboo',
		'Pirate',
		'Pizza',
		'Flood',
		'Section',
	]
	var actions = [
		'Battle',
		'Assault',
		'Escape',
		'Break',
		'Run',
		'Jump',
		'Parkour',
		'Attack',
		'Factory',
		'Smash',
		'Dodger',
		'Chamber',
		'Heist',
		'Course',
		'Splash',
		'Spleef',
		'Chess',
		'Quest',
		'Sweeper',
		'Deathmatch',
		'Six',
		'PVP',
		'Runner',
		'Guardian',
		'Adventure',
		'Shuffle',
		'Brawl',
		'Blitz',
		'Games',
		'Wars',
		'War',
		'Game',
		'Play',
		'Combat',
		'Crusader',
		'Hunt',
		'Tower',
		'Party',
		'Festival',
		'Apocalypse',
		'Challenge',
		'Parade',
		'Rumble',
		'Fuse',
		'Power',
		'Forces',
		'Rampage',
		'Destruction',
		'Skywars',
		'Dig',
		'Clash',
		'Hour',
		'Walker',
		'Block',
		'Defense',
		'Defender',
		'Control',
		'Drop',
		'Duel',
		'Rush',
		'Kids',
		'Punch',
		'Dodge',
		'Catcher',
		'Busters',
		'Miner',
		'Craft',
		'Bash',
		'Survival',
		'Dimension',
		'Golf',
		'Polo',
		'Hide',
		'Seek',
		'Seeker',
		'Hide and Seek',
		'of the Gods',
		'of the Depth',
		'of the Ocean',
		'of the Unforgotten',
		'of Wizards',
	]
	var bl = [
		'WorldWar',
		'WorldWars',
		'GameGames',
		'3Dof the Gods',
		'3Dof the Depth',
		'3Dof the Ocean',
		'Quickof the Gods',
		'Quickof the Depth',
		'Quickof the Ocean',
		'Ultraof the Gods',
		'Ultraof the Depth',
		'Ultraof the Ocean',
		'Ultraof the Gods',
		'Ultraof the Depth',
		'Ultraof the Ocean',
		'Deadlyof the Gods',
		'Deadlyof the Depth',
		'Deadlyof the Ocean',
		'DesertKids',
		'DeadlyWars',
		'DeadlyWar',
	]
	function ch(n) {
		return Math.random() < n
	}
	var s = subjects[Math.floor( Math.random()*subjects.length )]
	if (ch(0.5)) {
		var a = actions[ Math.floor( Math.random()*actions.length  )]
	} else {
		var i = 0;
		var a;
		while (i < 100) {
			a = actions[ Math.floor( Math.random()*actions.length  )]
			if (a.substr(0,1) === s.substr(0,1)) {
				i = 1600
			}
			i++;
		}
	}
	if (s == a || bl.includes(s+a)) {
		return generateRealmsName();
	} else {
		var r = s+(ch(0.9) || a.includes(' ') ? ' ' : '')+a
		return r;
	}
}

function generateContentName() {

	var subjects = [
		'Farm',
		'Dinosaurs',
		'Dinosaur',
		'Pets',
		'High School',
		'TNT',
		'Skyblock',
		'Sam & Danni',
		'Dan & Sammy',
		'Dam & Sunny',
		'Villa',
		'Racing',
		'Ninja',
		'Vikings',
		'Police',
		'Dropper',
		'Monsters',
		'Furniture',
		'Space',
		'Pirate',
		'Alien',
		'Zombie',
		'Food',
		'Vegetables',
		'Baby',
		'Boomer',
		'Virus',
		'Cop',
		'Yolo',
	]
	var context = [
		'Craft',
		'Station',
		'Finder',
		'Park',
		'City',
		'Resort',
		'Spawn',
		'Mash Up',
		'Living',
		'Tree',
		'Island',
		'Skyblock',
		'Life',
		'RPG',
		'Age',
		'Roleplay',
		'Teens',
		'People',
		'Knights',
		'Heroes',
		'Kingdom',
		'School',
		'Fashion',
		'High',
		'++',
		'HD',
		'Explorer',
		'Collectors',
		'Adventure',
		'Parkour',
		'Sport',
		'Beauty',
	] 
	var themes = [
		'Classic',
		'Modern',
		'Advanced',
		'Haunted',
		'Galactic',
		'Jurassic',
		'Medieval',
		'Ancient',
		'Anime',
		'Cute',
		'City',
		'Vintage',
		'Super',
		'Extreme',
		'Lucky',
		'Frozen',
		'High School',
		'Hoodie',
	]
	var structures = [
		'$t $s',
		'$t $s',
		'$t$s',
		'$s: $t',
		'$s: $t',
		'$s $c',
		'$s $c',
		'$s $c: $t',
		'$t $s $c',
		'$t $s $s $c',
		'$t $s - $s $c',
		'$s',
		'$s $s $c',
		'$s: $s',
	]

	var strc = structures.random();
	strc = 
	strc.replace(/\$s/g, () => subjects.random())
		.replace(/\$c/g, () => context.random())
		.replace(/\$t/g, () => themes.random());

	return strc;
}

function generateTeamName() {
		var subjects = [
		'Pathway',
		'5T',
		'CC',
		'MC',
		'37',
		'ABC',
		'Entity',
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
		'Craft',
		'Survival',
		'Dimension',
		'Seeker',
		'Sunboot',
		'Moonboat',
		'Piki',
		'Leverlike',
	]
	var forms = [
		'Studios',
		'Studios',
		'Studio',
		'Creations',
		'Squared',
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
		'$ia',
		'Designs',
		'Schematics',
		'Builds',
		'Games',
		'Blocks',
		'Wizards',
		'Club',
		'Craft',
		'Quest',
		'Productions',
		'Maps',
		'Team $',
		'Project $',
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



function generateJobTitle() {
	// Executive Pun Supervisor
	
	var levels = [
		'Lead',
		'Chief',
		'Executive',
		'Main',
		'Senior',
		'Technical',
		'Mechanical',
		'Full Stack',
		'Deputy',
		'First',
		'Second',
		'Professional',
		'Backup',
		'Cute',
		'Pirate',
		'Experienced',
		'Highly Productive',
		'',
	]
	var subjects = [
		'Creeper',
		'Feature',
		'Skin',
		'Skyblock',
		'Dinosaur',
		'Furniture',
		'Block',
		'Production',
		'Sound',
		'Design',
		'Level',
		'Keyart',
		'Anime',
		'Recruitment',
		'Marketing',
		'Explosives',
		'Model',
		'Molang',
		'Hiring and Firing',
		'Bee',
		'Bug',
		'QA',
		'Rubber Duck',
		'Algorithm',
		'Something',
		'Googling',
		'Trial and Error',
		'Nope this doesn\'t work',
		'Recursion',
		'Furniture Delivery',
		'Pun',
		'Joke',
		'Slogan',
		'Cheesy Dialog',
		'Crash',
		'Payout',
		'Feature Creep',
		'Quality',
		'Level Design',
		'Lucky Block',
		'Skinpack',
		'Food Skinpack',
		'Drama',
		'Destruction',
		'Texture Pack',
		'Exposure',
		'Cave Update',
		'High School Anime',
		'PARTY',
		'Procrastination',
		'Boat Fixing',
		'Motivation',
		'Money',
		'Communication',
		'Timezone',
		'Extreme Pirate Beauty',
		'Cute Vegetable High School Kingdom',
		'High School Furniture Age',
		'Galactic Furniture Pet',
		'Yolo Life',
		'Quality Restriction',
		'Mass Production',
		'Planned Obsolescence',
		'Player Frustration',
		'Anticlimactic',
		'Supervising',
		'Directing',
		'Artistry',
		'Production',
		'Engineering',
		'Rebranding',
		'Copy Paste',
		'Backup',
		'Voxel',
		'Sneaker Collection',
		'LagFox',
		'"Other"',
	]
	var jobs = [
		'Supervisor',
		'Artist',
		'Officer',
		'Creator',
		'Division Supervisor',
		'Guru',
		'Expert',
		'Consultant',
		'Producer',
		'Director',
		'Developer',
		'Builder',
		'Lead',
		'Designer',
		'Manager',
		'Architect',
		'Engineer',
		'CEO',
		'Mechanic',
		'Head of %',
		'Head of % Division',
		'Head of % and %',
		'% and % Expert',
		'Expert for %',
		'%: Modern',
	]

	let job = jobs.random()
	if (job.includes('%')) {
		return job.replace(/%/g, _ => subjects.random())
	} else {
		return [levels.random(), subjects.random(), job].join(' ')
	}
}