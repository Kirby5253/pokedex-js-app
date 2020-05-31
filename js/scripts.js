// IIFE
var pokemonRepository = (function() {
	// Create initial empty array for Pokedex app
	var pokemonArray = [];

	// Create function to add new pokemon
	function add(pokemon) {
		if (typeof pokemon === 'object') {
			//Allowed only objects to be added
			return pokemonArray.push(pokemon);
		}
	}

	// Create function to list current pokemon
	function getAll() {
		return pokemonArray;
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

		// Adds event to show details in console of each button
		button.addEventListener('click', function(event) {
			showDetails(pokemon);
		});
	}

	// Add functionality to button click
	function showDetails(pokemon) {
		console.log(pokemon);
	}

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		showDetails: showDetails
	};
})();

pokemonRepository.getAll();

//Create function then run the forEach declaration after
function printPokemonArray(variable) {
	// Selects the list element in index
	pokemonRepository.addListItem(variable);
}

pokemonRepository.getAll().forEach(printPokemonArray);
