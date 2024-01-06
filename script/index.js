

const getTotal = (nameOfTheMonth) => {
    const amountWithCurrency = document.querySelector(`#${nameOfTheMonth}Amount`).innerText;
    const frequency = document.querySelector(`#${nameOfTheMonth}Frequency`).innerText;

    const amount = amountWithCurrency.replace(/\$/g, '');
    const currency = amountWithCurrency.charAt(0);


    const total = amount * frequency;
    document.querySelector(`#${nameOfTheMonth}Total`).innerText = `${currency}${total}`;

    return total;
}



const triggerSumButton = document.querySelector('#triggerSumButton');


triggerSumButton.addEventListener("click", function () {

    const januaryTotal = getTotal('january');
    const februaryTotal = getTotal('february');
    const marchTotal = getTotal('march');
    const aprilTotal = getTotal('april');
    const mayTotal = getTotal('may');
    const juneTotal = getTotal('june');

    const sum  = januaryTotal + februaryTotal + marchTotal+ aprilTotal+ mayTotal + juneTotal;

    document.querySelector('#result').innerText = `Bravo!!! You were able to save $${sum} in the last six months.`;
});
