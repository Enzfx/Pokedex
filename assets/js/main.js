const pokemonList= document.getElementById('pokemonList')
const LoadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 151
const limit = 10
let offset = 0

 function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons=[])=> {
        const newHtml = pokemons.map((pokemon)=>`
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type.toLowerCase()}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>`)
            .join('')

             pokemonList.innerHTML += newHtml
    })
}

loadPokemonItems(offset, limit)

LoadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsNexPage = offset + limit

   if (qtdRecordsNexPage >= maxRecords) {
        const newLimit = maxRecords - offset                
        loadPokemonItems(offset, newLimit)
        LoadMoreButton.parentElement.removeChild(LoadMoreButton)
   } else {
        loadPokemonItems(offset, limit)
   }
        
})