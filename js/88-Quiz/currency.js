//a8b89dbd453777492d38
(async function hi() {
    'use strict';
    let response = await fetch("https://free.currconv.com/api/v7/countries?apiKey=[]");
    let countries = await response.json();
    console.log(countries);
    let convertFrom = document.getElementById('convertFrom');
    let convertTo = document.getElementById('convertTo');
    let results = document.getElementById('results');

    convertTo.addEventListener('change', () => {
        currencyFetch(convertFrom.value, convertTo.value)
    })

    async function currencyFetch(convertFrom, convertTo) {

        let response2 = await fetch(`https://free.currconv.com/api/v7/convert?q=${convertFrom}_${convertTo}&compact=ultra&apiKey=[]`);
        let exchangeRate = await response2.json();
        console.log(exchangeRate);
        results.innerText = "";

        let text = document.getElementById('convertFrom');
        let convertFromText = text.options[text.selectedIndex].text;
        let text2 = document.getElementById('convertTo');
        let convertToText = text2.options[text2.selectedIndex].text;

        results.append(`${convertFromText} =>  ${convertToText} ${JSON.stringify(exchangeRate)}`);
        new Currencies(`${convertFromText} =>  ${convertToText}`, `${JSON.stringify(exchangeRate)}`)

    }

    class Currencies {
        constructor(name, exchangeRate) {
            this.name = name;
            this.exchangeRate = exchangeRate;
            console.log(this.name, this.exchangeRate);

            let results2 = document.getElementById('results2');
            results2.innerText = "";
            results2.append(this.name, this.exchangeRate);
            console.log(this);
        }
    }
})();

