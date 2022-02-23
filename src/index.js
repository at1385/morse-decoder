const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const binaryAlphanumericChars = expr.match(/.{1,10}/g);
    const binaryMorseChars = binaryAlphanumericChars.map((item) => item.match(/.{1,2}/g));
    const morseChars = binaryMorseChars.map((item) => item.map((char) => char = (char === '00') ? '' : (char === '10') ? '.' : (char === '11') ? '-' : '*').join(''));

    return morseChars.map((item) => item = (MORSE_TABLE[item]) ? MORSE_TABLE[item] : ' ').join('');
}

module.exports = {
    decode
}
