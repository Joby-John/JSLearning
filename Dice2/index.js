function rollDice()
{
    const guess = Number(document.getElementById("guess").value);
    const result = document.getElementById("result");
    const imagesResult = document.getElementById("imageResult");

    const values = [];
    const images = [];
    if(guess<7 &&  guess>0)
    {
        for(let i = 0; i<guess; i++)
        {
            const value = Math.floor(Math.random()*6)+1;

            values.push(value);
            images.push(`<img src = "./diceImages/${value}.png " alt = "Dice ${value}" class = "diceImg">`);
        }

        result.textContent = `Face: ${values.join(",")}`;
        imagesResult.innerHTML = images.join("");
    }
    else
    {
        result.textContent = `${guess} is an invalid input`;
        imagesResult.textContent = "";
    }
}