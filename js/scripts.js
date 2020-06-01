// IIFE
var pokemonRepository = (function() {
	// Create initial empty array for Pokedex app
	var pokemonArray = [];

	// Creates a variable to access pokemon API
	var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

	var modalContainer = document.querySelector('#modal-container');

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
		button.classList.add('pokemon-name');

		// Appends button to the list item
		listItem.appendChild(button);

		// Appends the list item to the list
		indexList.appendChild(listItem);

		// Adds event to show details in console of each button
		button.addEventListener('click', function(event) {
			showModal(pokemon);
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
	function showModal(pokemon) {
		modalContainer.innerHTML = '';

		var modal = document.createElement('div');
		modal.classList.add('modal');

		var pokemonName = document.createElement('h1');
		pokemonName.classList.add('pokemon-name');
		pokemonName.innerText = pokemon.name;

		var pokemonPicture = document.createElement('img');
		pokemonPicture.innerHTML = '<img src= "pokemon.sprites.front_default">';

		var pokemonWeight = document.createElement('p');
		pokemonWeight.innerText = pokemon.weight;

		var pokemonType = document.createElement('p');
		pokemonType.innerText = pokemon.types;

		// Closes modal with close button
		var closeButtonElement = document.createElement('button');
		closeButtonElement.classList.add('modal-close');
		closeButtonElement.innerText = 'Close';
		closeButtonElement.addEventListener('click', hideModal);

		modal.appendChild(closeButtonElement);
		modal.appendChild(pokemonName);
		modal.appendChild(pokemonPicture);
		modal.appendChild(pokemonType);
		modal.appendChild(pokemonWeight);
		modalContainer.appendChild(modal);

		modalContainer.classList.add('is-visible');
	}

	function hideModal() {
		modalContainer.classList.remove('is-visible');
	}

	//Allows modal to be closed on escape key
	window.addEventListener('keydown', (e) => {
		var modalContainer = document.querySelector('#modal-container');
		if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
			hideModal();
		}
	});

	//Allows modal to be closed on clicking div
	modalContainer.addEventListener('click', (e) => {
		// Since this is also triggered when clicking INSIDE the modal
		// We only want to close if the user clicks directly on the overlay
		var target = e.target;
		if (target === modalContainer) {
			hideModal();
		}
	});

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		showModal: showModal,
		loadList: loadList,
		loadDetails: loadDetails,
		hideModal: hideModal
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

document.querySelector('#show-modal').addEventListener('click', () => {
	showModal('Modal Title', 'This is the modal content!');
});
