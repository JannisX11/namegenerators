
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
		'Madness',
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
