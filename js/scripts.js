// Create initial empty array for Pokedex app
var pokemonList = [];

//Establish first three entries in Pokedex array
pokemonList[0] = {
	name: 'Bulbasaur',
	heightMeters: 0.7,
	type: 'grass, poison',
	weightKg: 6.9,
	evolvesInto: 'Ivysaur'
};

pokemonList[1] = {
	name: 'Charmander',
	height: 0.6,
	type: 'fire',
	weightKg: 8.5,
	evolvesInto: 'Charmeleon'
};

pokemonList[2] = {
	name: 'Squirtle',
	height: 0.5,
	type: 'water',
	weightKg: 9,
	evolvesInto: 'Wartortle'
};

console.log(pokemonList);
