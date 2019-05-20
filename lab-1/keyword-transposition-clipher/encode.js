
const { createCipherKey } = require('./utils');


/**
  * @public
  * @function createCipher
  * @description Create Keyword Transposition Cipher (JavaScript)
  * @param {Object} args
  * @param {string} args.keyword
  * @param {string} args.phrase
  * @param {string} args.alphabet
  * @returns {string} encoded message
  * @example
  * encode({
  *     keyword: 'SPORT',
  *     phrase: 'ILOVE SOLVI NGPRO GRAMM INGCH ALLEN GES',
  *     alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  * })
  * => 'LDXTW KXDTL NBSFX BFOII LNBHG ODDWN BWK'
*/
function createCipher({ keyword, phrase, alphabet }) {
    const cipherKey = createCipherKey(keyword, alphabet);

    return Array.prototype.map.call(phrase, function (i) {
        return i === ' ' ? ' ' : cipherKey[alphabet.indexOf(i)];
    }).join('');
}

// console.log(createCipher({
//     keyword: 'SPORT',
//     phrase: 'ILOVE SOLVI NGPRO GRAMM INGCH ALLEN GES',
//     alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
// }));

module.exports = createCipher;
