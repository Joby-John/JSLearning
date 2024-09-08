function hi(username)
{
    window.alert(`hi ${username}`);
    window.alert(`hello ${username}`);

    return (1+2);
}
//window.alert(`${hi(window.prompt("Enter your name"))}`);
evenOrOdd(Number(window.prompt("Enter a number")));

function evenOrOdd(number)
{
    window.alert(number%2 === 0 ? window.alert("Even") : window.alert("odd"));
    return;
}

