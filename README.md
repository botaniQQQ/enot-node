# Generate URL for payment in Enot.

## Installation

```
npm i enot-node
```

## Usage

```javascript
const enot = require('enot-node');

console.log(enot({
    "oa": "99",
    "o": "ID_234",
    "m": "14963",
}, 'secret_word_1'));
/* =>
{
    "signature": "dfc2448091e2cc4191fc283435593e21",
    "url": "https://enot.io/pay?
        oa=99&
        o=ID_234&
        m=14963&
        s=dfc2448091e2cc4191fc283435593e21"
}
 */

console.log(enot({
    "amount": "99",
    "merchant_id": "ID_234",
    "merchant": "14963",
}, 'secret_word_2'));
/* =>
{
    "signature": "c0905625cf96d7730487a4dda69c6a09"
}
 */
```

## API

### enot(params, word)

#### params

Type: `object`

URL parameters.

#### word

Type: `string`

Enot secret word 1|2.

## Test

```
npm test
```