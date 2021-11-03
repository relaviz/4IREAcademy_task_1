// Условие задачи:
// Вам нужно оформить программу конвертер валют, используя пройденные темы.
// Программа должна уметь переводить 5 валют друг в друга (валюты на ваше усмотрение). 
// Пользователь вводит сначала название валюты, затем вводит сумму, и название валюты в которую хочет перевести, 
// после чего получает ответ (для общения с пользователем используем prompt и alert подробнее [тут](https://learn.javascript.ru/alert-prompt-confirm)). 
// Если пользователь ввел что-то неверно, нужно повторить ввод этой информации. 
// По окончании конвертации спросить у пользователя хочет ли он произвести конвертацию еще раз. Если да - то повторить все о'и. Если нет - выполнить выход из программы.

// Fixed exRate
const UAH = 1;
const USD = 26.29;
const EUR = 30.43;
const RUB = 0.36;
const PLN = 6.58;

let confirmMessag;

do {
    let currency;
    let sum;
    let exchangeCurrency;

    do {
        currency = prompt(
            `Введите валюту: 
        USD - американский доллар
        UAH - украинская гривна
        EUR - Евро
        RUB - российский рубль
        PLN - польский злотый 
        `, 'UAH');



        
    } while (
        currency !== 'UAH' &&
        currency !== 'USD' &&
        currency !== 'EUR' &&
        currency !== 'RUB' &&
        currency !== 'PLN'
    );

    do {
        sum = prompt('Введите сумму:', '100');
    console.log(isNaN(sum))        
    } while (isNaN(sum) === true || sum < 0);

    do {
        exchangeCurrency = prompt(
            `Введите валюту, в которую хотите конвертировать:
        USD - американский доллар
        UAH - украинская гривна
        EUR - Евро
        RUB - российский рубль
        PLN - польский злотый 
        `, 'EUR');
    } while (exchangeCurrency !== 'UAH' &&
    exchangeCurrency !== 'USD' &&
    exchangeCurrency !== 'EUR' &&
    exchangeCurrency !== 'RUB' &&
    exchangeCurrency !== 'PLN');
    // console.log(currency);
    // console.log(sum);

    if (currency === 'UAH' && exchangeCurrency === 'UAH') {
        alert(sum);
    } else if (currency === 'UAH' && exchangeCurrency === 'USD') {
        alert(sum * UAH / USD)
    } else if (currency === 'USD' && exchangeCurrency === 'UAH') {
        alert(sum * USD)
    } else if (currency === 'USD' && exchangeCurrency === 'USD') {
        alert(sum);
    } else if (currency === 'UAH' && exchangeCurrency === 'EUR') {
        alert(sum * UAH / EUR)
    } else if (currency === 'EUR' && exchangeCurrency === 'UAH') {
        alert(sum * EUR)
    } else if (currency === 'EUR' && exchangeCurrency === 'EUR') {
        alert(sum)
    } else if (currency === 'UAH' && exchangeCurrency === 'RUB') {
        alert(sum * UAH / RUB)
    } else if (currency === 'RUB' && exchangeCurrency === 'UAH') {
        alert(sum * RUB)
    } else if (currency === 'RUB' && exchangeCurrency === 'RUB') {
        alert (sum)
    } else if (currency === 'UAH' && exchangeCurrency === 'PLN') {
        alert(sum * UAH / PLN)
    } else if (currency === 'PLN' && exchangeCurrency === 'UAH') {
        alert(sum * PLN)
    } else {
        alert(sum);
    }

    confirmMessage = confirm("Провести операцию еще раз?")
} while (confirmMessage === true);