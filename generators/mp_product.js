
function generateContentName() {

	var themes = [
		'Classic',
		'Modern',
		'Advanced',
		'Haunted',
		'Galactic',
		'Mutant',
		'Jurassic',
		'Medieval',
		'Ancient',
		'Anime',
		'Cute',
		'City',
		'Vintage',
		'Super',
		'Extreme',
		'Luxury',
		'Best',
		'Frozen',
		'High School',
		'Hoodie',
		'Teen',
		'Military',
		'Neon',
		'Pastel',
		'Steampunk',
		'Rainbow',
		'Lucky',
		'Lucky Block',
		'Unlucky Block',
		'PersonPlayz',
		'Soft',
		'Haunted',
		'Tropical',
		'Tribal',
		'Lost',
		'Infinity',
		'Mystery',
		'Better',
		'One Block',
		'Blocky',
		'Epic',
	]
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
		'Fantasy',
		'Breakfast',
		'Bubble',
		'Helicopter',
		'Plane',
		'Car',
		'Supercar',
		'Supercar',
		'Tiki',
		'City',
		'Assassin',
		'Food',
		'Vegetables',
		'Baby',
		'Boomer',
		'Virus',
		'Cop',
		'Yolo',
		'Teens',
		'Mobs',
		'Knights',
		'Popstar',
		'K-Pop',
		'Zombies',
		'Zombie',
		'Candy',
		'Firefighter',
		'Noob',
		'Pro',
		'Piston',
		'Winter',
		'Spring',
		'Summer',
		'Fall',
	]
	var context = [
		'Craft',
		'Station',
		'Finder',
		'Maker',
		'Creator',
		'Viewer',
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
		'Escape',
		'Mansion',
		'Arena',
		'Teens',
		'People',
		'Knights',
		'Gamers',
		'Heroes',
		'Kingdom',
		'Land',
		'School',
		'Fashion',
		'Merch',
		'High',
		'++',
		'HD',
		'Explorer',
		'Collectors',
		'Adventure',
		'Parkour',
		'Sport',
		'Beauty',
		'Teen',
		'Pack',
		'Folk',
		'Swag',
		'Creatures',
		'Mobs',
		'Block',
		'Animals',
		'World',
		'Tale',
	]
	var structures = [
		'$t $s',
		'$t $s',
		'$t$s',
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
		'$s vs $s',
		'$s vs $s',
	]

	var strc = structures.random();
	strc = 
	strc.replace(/\$s/g, () => subjects.random())
		.replace(/\$c/g, () => context.random())
		.replace(/\$t/g, () => themes.random());

	return strc;
}