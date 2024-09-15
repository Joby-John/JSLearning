//fisher-Yates algorithm

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'Q', 'K', 'J' ];

shuffle(cards);


function shuffle(array)
{
    let n = array.length;

    for(let i = n-1; i>=0; i--)
    {
        const random = Math.floor(Math.random()*(i+1));
        //now swap array[i] with array[random]

        [array[i], array[random]] = [array[random], array[i]];

    }
}

console.log(cards);