
let body = document.querySelector(".body");
let button = document.querySelector(".js-changeBackgroundButton");
let changeWord = document.querySelector(".js-nextColorName");

button.addEventListener("click", () => {
    body.classList.toggle("body--grey");
    changeWord.innerText = body.classList.contains("body--grey") ? "białe" : "szare";
});

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.8425;
let rateUSD = 4.9417;
let rateGBP = 5.5096;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;
        case "USD":
            result = amount / rateUSD;
            break;
        case "GBP":
            result = amount / rateGBP;
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;

});
