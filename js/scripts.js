var pokemonRepository = (function() {
	// Create initial empty array for Pokedex app
	var pokemonList = [];

	// Create function to add new pokemon
	function add(pokemon) {
		if (typeof pokemon === 'object') {
			//Allowed only objects to be added
			return pokemonList.push(pokemon);
		}
	}

	// Create function to list current pokemon
	function getAll() {
		return pokemonList;
	}

	return {
		add: add,
		getAll: getAll
	};
})();

pokemonRepository.getAll();

//Establish first three entries in Pokedex array
pokemonRepository.add({
	pokemonName: 'Bulbasaur',
	heightMeters: 0.7,
	pokemonType: [ 'grass', 'poison' ],
	weightKg: 6.9,
	evolvesInto: 'Ivysaur'
});

pokemonRepository.add({
	pokemonName: 'Charizard',
	heightMeters: 1.7,
	pokemonType: [ 'fire' ],
	weightKg: 8.5,
	evolvesInto: 'none'
});

pokemonRepository.add({
	pokemonName: 'Squirtle',
	heightMeters: 0.5,
	pokemonType: [ 'water' ],
	weightKg: 9,
	evolvesInto: 'Wartortle'
});

pokemonRepository.add({
	pokemonName: 'Pikachu',
	heightMeters: 0.4,
	pokemonType: [ 'electric' ],
	weightKg: 6,
	evolvesInto: 'Raichu'
});

pokemonRepository.add({
	pokemonName: 'Snorlax',
	heightMeters: 2.1,
	pokemonType: [ 'normal' ],
	weightKg: 460,
	evolvesInto: null
});

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

pokemonRepository.getAll().forEach(printPokemonList);

// function printPokemonList(pokemon) {
// 	// Create a loop to list out the pokemon in order
// 	if (pokemon.heightMeters > 1) {
// 		document.write(
// 			'<p>' +
// 				pokemon.pokemonName +
// 				' (' +
// 				pokemon.heightMeters +
// 				" meters) - <span class='big-boys'>Wow, that's big!</span></p>"
// 		);
// 	} else {
// 		document.write('<p>' + pokemon.pokemonName + ' (' + pokemon.heightMeters + ' meters)</p>');
// 	}
// }

// pokemonRepository.getAll().forEach(printPokemonList);
