const container = document.getElementById('container')

const _baseURL_Currency = 'https://v6.exchangerate-api.com/v6/';

const _API_KEY = 'dae898a1a40af6bc3986215a';
let country_code = ['USD', 'EUR', 'KGS', 'KZT', 'CNY', 'JPY', 'GBP']
let url = `${_baseURL_Currency}${_API_KEY}/latest/`;

for (let i = 0; i < country_code.length; i++) {
    let code = country_code[i]

    let list = document.createElement('div')
    list.classList = 'list'

    let valuta = document.createElement('div')
    valuta.innerHTML = `${code}/RUB`
    list.append(valuta)

    let kurs = document.createElement('div')

    fetch(`${url}${code}`)
        .then(response => response.json())
        .then(data => {
            let toCurrency = data.conversion_rates['RUB']
            let result = (1 * toCurrency).toFixed(2)
            console.log(result)
            // if (result < 1 ){
            //     let res = result.split('.')
            //     console.log(res)
            //     kurs.innerHTML = res[1]
            // } else {
            //     kurs.innerHTML = result
            // }
            kurs.innerHTML = result
        })
    list.append(kurs)
    container.append(list)
}