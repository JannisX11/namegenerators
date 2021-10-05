
function generateT3iName() {
	let subjects = [
		'Die Insel',
		'Der Turm',
		'Im Zeichen',
		'Die Rache',
		'Der Spuk',
		'Das Geheimnis',
		'Der Schatz',
		'Dies Schüsse',
		'Die Spur',
		'Im Bann',
		'Dies Karten',
		'Die Meuterei',
		'Die Musik',
		'Die Nacht',
		'Das Gesicht',
		'Das Labyrinth',
		'Die Botschaft',
		'Das Tal',
		'Das Erbe',
		'Das Gift',
		'Der Mann',
		'Der Schatz',
		'Die Panik',
		'Die Höhle',
		'Die Schlucht',
		'Das Auge',
		'Die Villa',
		'Der Tauchgang',
		'Im Reich',
		'Die Legende',
		'Im Auge',
		'Die Kammer',
		'Dies Signale',
		'Das Geheimnis',
		'Im Reich',
		'Die Straße',
		'Der Friedhof',
		'Das Phantom',
		'Der Dämon',
		'Der Nebel',
		'Das Tuch',
		'Die Nacht',
		'Das Biest',
		'Dies Bilder',
		'Die Botschaft',
		'Im Netz',
		'Die Sonne',
		'Der Gegner',
		'Der Rivale',
		'Dies Zwillinge',
		'Die Treppe',
		'Der Fluch',
		'Die Mine',
		'Die Spinne',
		'Der Papagei',
		'Der Wal',
		'Das Haus',
		'Der Weg',
		'Der Pfad',
		'Das Schloss',
		'Die Insel',
		'Der Schatten',
		'Die SMS',
		'Der Schrecken',
		'Das Phantom',
		'Das Gespenst',
		'Der Geist',
		'Der Rächer',
		'Das Eis',
	]
	let themes = [
		'des Schreckens',
		'des Grauens',
		'des Vergessens',
		'des Toten',
		'des Todes',
		'der Toten',
		'des Tigers',
		'im Hotel',
		'der Särge',
		'am Bergsee',
		'aus dem Dunkel',
		'des Rabens',
		'ins Nichts',
		'des Voodoo',
		'des Bösen',
		'auf hoher See',
		'des Teufels',
		'des Wolfes',
		'der Götter',
		'von Geisterhand',
		'des Meisterdiebes',
		'ohne Kopf',
		'per E-Mail',
		'der Mönche',
		'im Park',
		'der Dämonen',
		'des Drachen',
		'ins Ungewisse',
		'der Gaukler',
		'des Sturms',
		'der Rätsel',
		'aus dem Jenseits',
		'des Bauchredners',
		'der Ungeheuer',
		'des Spielers',
		'der Rache',
		'der Tiger',
		'aus der Unterwelt',
		'des Drachen',
		'der Finsternis',
		'des Piraten',
		'des Goldes',
		'über Hollywood',
		'aus dem Grab',
		'aus dem Moor',
		'aus dem Meer',
	]
	let adjectives = [
		'geheimnisvolle',
		'unsichtbare',
		'kalte',
		'heimliche',
		'geheime',
		'schreckliche',
		'dunkle',
		'grüne',
		'rote',
		'Super',
		'blaue',
		'rätselhafte',
		'gefährliche',
		'silberne',
		'schwarze',
		'weiße',
		'graue',
		'verschollene',
		'schreiende',
		'finstere',
		'blutende',
	]

	let subject = subjects.random();

	let name;
	let hasArticle = ['Der', 'Die', 'Das'].includes(subject.substr(0, 3));
	let isPlural = subject.substr(0, 4) == 'Dies';
	if (isPlural) subject = subject.replace(/^Dies/, 'Die');
	let doAdj = hasArticle && Math.random() < 0.35;
	if (doAdj) {
		let parts = subject.split(' ');
		let adjective = adjectives.random();
		if (isPlural) adjective = adjective + 'n';
		parts.splice(1, 0, adjective);
		name = parts.join(' ');

	} else {
		let theme = themes.random();
		name = subject + ' ' + theme;
	}

	if (!doAdj && Math.random() > 0.4) {
		name = name.replace(/^\w+ /, '');

	} else if (hasArticle && Math.random() < 0.2) {
		name = 'und ' + name.substr(0, 1).toLowerCase() + name.substr(1);
	}
	
	return name;
}
