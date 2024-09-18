// fetch : FUnction used for making HTTP requests to fetch resources.
//          (JSON style data, images, files)
//          simplifies asynchronous data fetching in the javascript and 
//          used for interacting with API's to retrieve and send data
//          asynchronously over the web.
//          fetch(url, {options})
//          fetch(url, {method: "GET"}) //to get some data
//          fetch(url, {method: "POST"})//to send some data
//          fetch(url, {method: "PUT"})//to replace data
//          fetch(url, {method: "DELETE"})//to delete data
//          fetch(url, {method: "GET"}) //this is the default


async function getPockemon()
{

    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        if(!response.ok)
        {
            throw new Error("Pokemon not found");
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error)
    {
        console.error(error);
    }
}

getPockemon();