const pokeApi = {}

pokeApi.getPokemon = ( offset=0, limit=10 )=> {
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'
    fetch(url)
    .then((response)=>{return response.json()})
    .then((jsonBody)=>jsonBody.results)
    .catch((error)=>{console.error('Error fetching data:', error);})
}
