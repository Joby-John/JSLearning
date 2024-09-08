const subscribe = document.getElementById("myCheckBox");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const gpay = document.getElementById("gpay");

const subResult  = document.getElementById("subresult");
const payResult  = document.getElementById("payresult");

const button = document.getElementById("submit");

console.log("Working");

function display()
{
    if(subscribe.checked)
    {
        subResult.textContent = "You are subscribed";
    }
    else
    {
        subResult.textContent = "You are not subscribed";
    }

    // Check payment method selected
    if (visa.checked) {
        payResult.textContent = "Payment method: Visa";
    } else if (mastercard.checked) {
        payResult.textContent = "Payment method: MasterCard";
    } else if (gpay.checked) {
        payResult.textContent = "Payment method: GPay";
    } else {
        payResult.textContent = "No payment method selected";
    }
}

button.onclick = display;