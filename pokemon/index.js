


async function fetchData()
{
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase().trim();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok)
        {
            throw new Error("Resource not found");
        }
        const pokemon = await response.json();
        
        const pokemonSprite = pokemon.sprites.front_default;

        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block"; 

    }

    catch(error)
    {
        console.error(error)
    }
}