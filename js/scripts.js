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

//Create function then run the forEach declaration after
function printPokemonList(pokemon) {
	// Create a loop to list out the pokemon in order
	if (pokemon.heightMeters > 1) {
		document.write(
			'<p>' +
				pokemon.pokemonName +
				' (' +
				pokemon.heightMeters +
				" meters) - <span class='big-boys'>Wow, that's big!</span></p>"
		);
	} else {
		document.write('<p>' + pokemon.pokemonName + ' (' + pokemon.heightMeters + ' meters)</p>');
	}
}

pokemonList.forEach(printPokemonList);

// Create a function within the forEach
pokemonList.forEach(function(pokemon2) {
	if (pokemon2.heightMeters > 1) {
		document.write(
			'<p>' +
				pokemon2.pokemonName +
				' (' +
				pokemon2.heightMeters +
				" meters) - <span class='big-boys'>Wow, that's big!</span></p>"
		);
	} else {
		document.write('<p>' + pokemon2.pokemonName + ' (' + pokemon2.heightMeters + ' meters)</p>');
	}
});
