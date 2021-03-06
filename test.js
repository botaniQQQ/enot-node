const enot = require('./');

console.log(enot({
    "oa": "99",
    "o": "ID_234",
    "m": "14963",
}, 'secret_word_1'));

console.log(enot({
    "AMOUNT": "99",
    "MERCHANT_ORDER_ID": "ID_234",
    "MERCHANT_ID": "14963",
}, 'secret_word_2'));