"use strict";

function toHEX(rgb) {
    if (rgb.charAt(0) === "#") {
        return rgb;
    }

    const rgbaRegex = /^rgba?\([\s+]?(?:(\d{1,3})[\s+]?,)?[\s+]?(\d{1,3})[\s+]?,[\s+]?(\d{1,3})[\s+]?/i;
    const match = rgb.match(rgbaRegex);

    if (!match) {
        throw new Error('invalid input');
    }

    const [, red, green, blue] = match;

    const redHex = ("0" + parseInt(red, 10).toString(16)).slice(-2);
    const greenHex = ("0" + parseInt(green, 10).toString(16)).slice(-2);
    const blueHex = ("0" + parseInt(blue, 10).toString(16)).slice(-2);

    return `#${redHex}${greenHex}${blueHex}`;
}