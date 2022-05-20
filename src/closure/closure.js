const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

const moneyyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyyBox: $${saveCoins}`)
    }
    return countCoins;
};

let myMoneyBox = moneyyBox();

myMoneyBox(4); // 4 como valor inicial
myMoneyBox(6); // como resultado da diez porque se suma el 4 inicial mas los 6
myMoneyBox(10); // Y por último da como resultado 20, por la suma del anterior resultado, con el valor ingresado en este punto
