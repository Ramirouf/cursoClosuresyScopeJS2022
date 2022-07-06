function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`Money in the box: ${saveCoins}`);
}

moneyBox(5);
moneyBox(10);
moneyBox(20);
moneyBox(50);
moneyBox(100);

function moneyBox() {
    let saveCoins = 0;
    function save(coins) {
        saveCoins += coins;
        console.log(`Money in the box: ${saveCoins}`);
    }
    return save;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(20);

const moneyBoxAna = moneyBox();
moneyBoxAna(5);
moneyBoxAna(7);
moneyBoxAna(13);