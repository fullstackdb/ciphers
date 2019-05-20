const encode = require('./encode');
const { solveCipherc } = require('./decode');

/**
 * @constant alphabet - dictionary
 */
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
  * @function solveKTC
  * @description Keyword Transposition Cipher (JavaScript)
  * @param {Number} countOfTestCases - integer which indicates number of test cases
  * @param {...any} testCasesInput - For each test case in , two additional lines will follow,
  * one containing the keyword, and one containing the ciphertext, respectively.
  * @returns {void}
*/
function solveKTC(countOfTestCases, ...testCasesInputs) {
    const solveCipher = solveCipherc(alphabet);

    for (let i = 0; i < countOfTestCases; i++) {
        const [keyword, ciphertext] = testCasesInputs.slice(i * 2);

        console.log(solveCipher(keyword, ciphertext));
    }
}

const messageText = 'ILOVE SOLVI NGPRO GRAMM INGCH ALLEN GES';
const messageKey = 'SPORT';
/**
 * @constant messageKeyword - encoded message
 */
const messageKeyword = encode({
    keyword: messageKey,
    phrase: messageText,
    alphabet: alphabet
});

const anotherMessageText = 'CRYPT OLOGY';
const anotherMessageKey = 'SECRET';
/**
 * @constant anotherMessageKeyword - encoded message
 */
const anotherMessageKeyword = encode({
    keyword: anotherMessageKey,
    phrase: anotherMessageText,
    alphabet: alphabet
});

solveKTC(
    2,
    messageKey,
    messageKeyword,
    anotherMessageKey,
    anotherMessageKeyword,
);
