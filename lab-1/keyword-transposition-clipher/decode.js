const { createCipherKey } = require('./utils');

/**
 * @public
 * @param {string} keyword;
 * @param {string} phrase - encoded message;
 * @param {string} alphabet;
 */
function solveCipher(key, phrase, alphabet) {
    const cipher = createCipherKey(key, alphabet);

    return Array.prototype.map.call(phrase, function (i) {
        return i === ' ' ? ' ' : alphabet[cipher.indexOf(i)];
    }).join('');
}

/**
 * @public
 * @param {string} alphabet;
 * @returns {function}
 */
function solveCipherc(alphabet) {
    return (key, phrase) => {
        const cipher = createCipherKey(key, alphabet);

        return Array.prototype.map.call(phrase, function (i) {
            return i === ' ' ? ' ' : alphabet[cipher.indexOf(i)];
        }).join('');
    }
}

module.exports = {
    solveCipher,
    solveCipherc
};
