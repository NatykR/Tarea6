//.- Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas. 
//let pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle']


let pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle']

for (let i = 0; i < pokemons.length; i++){
    pokemons.push(pokemons[i].toUpperCase())
}

console.log(pokemons)