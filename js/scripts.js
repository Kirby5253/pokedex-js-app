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

	function addListItem(pokemon) {
		var indexList = document.querySelector('.pokemon-list');

		// Create an li element for each pokemon
		var listItem = document.createElement('li');

		// Create a button for each pokemon
		var button = document.createElement('button');

		// Adds pokemon names to buttons
		button.innerText = pokemon.pokemonName;

		//Add class to the button element
		button.classList.add('pokemonSelectorButton');

		// Appends button to the list item
		listItem.appendChild(button);

		// Appends the list item to the list
		indexList.appendChild(listItem);
	}

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem
	};
})();

pokemonRepository.getAll();

//Establish entries in Pokedex array
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
function printPokemonList(variable) {
	// Selects the list element in index
	pokemonRepository.addListItem(variable);
}

pokemonRepository.getAll().forEach(printPokemonList);
