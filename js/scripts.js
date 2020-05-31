// IIFE
var pokemonRepository = (function() {
	// Create initial empty array for Pokedex app
	var pokemonArray = [];

	// Creates a variable to access pokemon API
	var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

	// Create function to add new pokemon
	function add(pokemon) {
		return pokemonArray.push(pokemon);
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
		button.innerText = pokemon.name;

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

	// Function to load pokemon list from API
	function loadList() {
		return fetch(apiUrl)
			.then(function(response) {
				return response.json();
			})
			.then(function(json) {
				json.results.forEach(function(item) {
					var pokemon = {
						name: item.name,
						detailsUrl: item.url
					};
					add(pokemon);
				});
			})
			.catch(function(e) {
				console.error(e);
			});
	}

	function loadDetails(item) {
		var url = item.detailsUrl;
		return fetch(url)
			.then(function(response) {
				return response.json();
			})
			.then(function(details) {
				// Now we add the details to the item
				item.imageUrl = details.sprites.front_default;
				item.height = details.height;
				item.types = details.types;
			})
			.catch(function(e) {
				console.error(e);
			});
	}

	// Add functionality to button click
	function showDetails(pokemon) {
		pokemonRepository.loadDetails(pokemon).then(function() {
			console.log(pokemon);
		});
	}

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		showDetails: showDetails,
		loadList: loadList,
		loadDetails: loadDetails
	};
})();

pokemonRepository.getAll();

//Create function then run the forEach declaration after
function printPokemonArray(variable) {
	// Selects the list element in index
	pokemonRepository.addListItem(variable);
}

// Creates list of pokemon with their name on button
pokemonRepository.loadList().then(function() {
	pokemonRepository.getAll().forEach(function(pokemon) {
		pokemonRepository.addListItem(pokemon);
	});
});
