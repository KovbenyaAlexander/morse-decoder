const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = [];
    let morseCode;
    let encodedWord;
    for (let i = 0; i < expr.length; i += 10) {
        encodedWord = [];
        morseCode = [];
        if (expr[i] === `*`) {
            result.push(` `);
        }
        for (let j = i; j < i + 10; j++) {
            encodedWord.push(expr[j]);
        }
        for (let k = 0; k < 10; k++) {
            if (encodedWord[k] === `1` && encodedWord[k + 1] === `0` && k % 2 == 0) {
                morseCode.push(`.`);
            }
            if (encodedWord[k] === `1` && encodedWord[k + 1] === `1` && k % 2 == 0) {
                morseCode.push(`-`);
            }
        }
        for (let [code, letter] of Object.entries(MORSE_TABLE)) {
            if (code === morseCode.join(``)) {
                result.push(letter);
                break;
            }
        }
    }
    return result.join('');
}

module.exports = {
    decode
}