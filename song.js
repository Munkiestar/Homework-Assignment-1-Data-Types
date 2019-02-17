// Homework Assignment #1: Data Types


// two Objects that represents my favorite childhood bands
// with function showAllData() we log all bands info at once;

let ratm = {
	artist: 'Rage Against The Machine',
	albumsName: [
		'R.A.T.M.',
		'Evil Empire',
		'The Battle of Los Angeles',
		'Renegades',
	],
	yearFormed: 1990,
	city: 'Los Angeles',
	genre: 'Industrial',
	grammyWon: true,
	// shows all band's info
	showAllData: function(){
		console.log('Artist: ' + this.artist);
		console.log('Albums: ' + this.albumsName);
		console.log('Formed: ' + this.yearFormed);
		console.log('City: ' + this.city);
		console.log('Genre: '+ this.genre);
		console.log('Grammy won: ' + this.grammyWon);
		}
	};
	

let bodyCount = {
	artist: 'Body Count',
	albumsName: [
		'Cop Killer',
		'Born Dead',
		'Violent Demise: The Last Days',
		'Murder 4 Hire',
		'Manslaughter',
		'Bloodlust'
	],	
	yearFormed: 1991,
	city: 'Los Angeles',
	genre: 'Hard Core',
	grammyWon: false,
	// shows all band's info
	showAllData: function(){
		console.log('Artist: ' + this.artist);
		console.log('Albums: ' + this.albumsName);
		console.log('Formed: ' + this.yearFormed);
		console.log('City: ' + this.city);
		console.log('Genre: '+ this.genre);
		console.log('Grammy won: ' + this.grammyWon);
		}
};

// ratm.showAllData();
// bodyCount.showAllData();