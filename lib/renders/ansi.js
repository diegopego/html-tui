var ansiColors = {
    // # Styles
    bold: ['\x1B[1m', '\x1B[22m'],
    italic: ['\x1B[3m', '\x1B[23m'],
    underline: ['\x1B[4m', '\x1B[24m'],
    strikethrough: ['\x1B[9m', '\x1B[29m'],

    // # Text colors
    // ## Grayscale
    'rgb(255, 255, 255)': ['\x1B[37m', '\x1B[39m'],
    'rgb(128, 128, 128)': ['\x1B[90m', '\x1B[39m'],
    'rgb(0, 0, 0)': ['\x1B[30m', '\x1B[39m'],
    // ## Colors
    'rgb(0, 0, 255)': ['\x1B[34m', '\x1B[39m'],
    'rgb(0, 255, 255)': ['\x1B[36m', '\x1B[39m'],
    'rgb(0, 128, 0)': ['\x1B[32m', '\x1B[39m'],
    'rgb(255, 0, 255)': ['\x1B[35m', '\x1B[39m'],
    'rgb(255, 0, 0)': ['\x1B[31m', '\x1B[39m'],
    'rgb(255, 255, 0)': ['\x1B[33m', '\x1B[39m'],
    'rgba(0, 0, 0, 0)': ['', ''],

    // # Background colors
    // ## Grayscale
    'rgb(255, 255, 255)BG': ['\x1B[47m', '\x1B[49m'],
    'rgb(0, 0, 0)BG': ['\x1B[49;5;8m', '\x1B[49m'],
    'rgb(128, 128, 128)BG': ['\x1B[40m', '\x1B[49m'],
    // ## Colors
    'rgb(0, 0, 255)BG': ['\x1B[44m', '\x1B[49m'],
    'rgb(0, 255, 255)BG': ['\x1B[46m', '\x1B[49m'],
    'rgb(0, 128, 0)BG': ['\x1B[42m', '\x1B[49m'],
    'rgb(255, 0, 255)BG': ['\x1B[45m', '\x1B[49m'],
    'rgb(255, 0, 0)BG': ['\x1B[41m', '\x1B[49m'],
    'rgb(255, 255, 0)BG': ['\x1B[43m', '\x1B[49m'],
    'rgba(0, 0, 0, 0)BG': ['', '']
};

/**
 *
 * @param {string} string
 * @param {string[]} style
 * @returns {*}
 */
function wrapString(string, style) {
    var pair = ansiColors[style];

    if (!pair) {
        return string;
    }

    return pair[0] + string + pair[1];
}

/**
 *
 * @param {TuiSymbol} symbol
 * @returns {string[]}
 */
function ansiSymbol(symbol) {
    var character = wrapString(symbol.char, symbol.style.color);
    character = wrapString(character, symbol.style.backgroundColor + 'BG');

    if (symbol.style.fontStyle === 'italic') {
        character = wrapString(character, 'italic');
    }

    if (symbol.style.fontWeight === 'bold') {
        character = wrapString(character, 'bold');
    }

    if (symbol.style.textDecoration === 'underline') {
        character = wrapString(character, 'underline');
    }

    if (symbol.style.textDecoration === 'line-through') {
        character = wrapString(character, 'strikethrough');
    }

    return character;
}

/**
 *
 * @param {Array<Array<(TuiSymbol)>>} box
 * @returns {string}
 */
export function ansi(box) {
    return box.map((row) => row.map(ansiSymbol).join('')).join('\n');
}
