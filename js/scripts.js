// Create initial empty array for Pokedex app
var pokemonList = [];

//Establish first three entries in Pokedex array
pokemonList[0] = {
	pokemonName: 'Bulbasaur',
	heightMeters: 0.7,
	pokemonType: [ 'grass', 'poison' ],
	weightKg: 6.9,
	evolvesInto: 'Ivysaur'
};

pokemonList[1] = {
	pokemonName: 'Charizard',
	heightMeters: 1.7,
	pokemonType: [ 'fire' ],
	weightKg: 8.5,
	evolvesInto: 'none'
};

pokemonList[2] = {
	pokemonName: 'Squirtle',
	heightMeters: 0.5,
	pokemonType: [ 'water' ],
	weightKg: 9,
	evolvesInto: 'Wartortle'
};

// Create a loop to list out the pokemon in order, and
for (var i = 0; i < 3; i++) {
	if (pokemonList[i].heightMeters > 1) {
		document.write(
			'<p>' + pokemonList[i].pokemonName + ' (' + pokemonList[i].heightMeters + " meters) - Wow, that's big!</p>"
		);
	} else {
		document.write('<p>' + pokemonList[i].pokemonName + ' (' + pokemonList[i].heightMeters + ' meters)</p>');
	}
}
