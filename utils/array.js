"use strict";

function last(array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error('invalid input');
    }

    return array[array.length - 1];
}

function unique(array) {
    if (!Array.isArray(array)) {
        throw new Error('invalid input');
    }

    return [...new Set(array)];
}

function getTypedArray(max) {
    if (maxValue < 0 || maxValue > 4294967295) {
        throw new Error('invalid input');
    }

    if (max <= 255) {
        return Uint8Array;
    }
    if (max <= 65535) {
        return Uint16Array;
    }

    return Uint32Array;
}

function createTypedArray({max, length, from}) {
    if (typeof max !== 'number' || typeof length !== 'number' || !Array.isArray(from)) {
        throw new Error('invalid input');
    }

    const typedArray = getTypedArray(max);
    if (!from) {
        return new typedArray(length);
    }
    
    return typedArray.from(from);
}