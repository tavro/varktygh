"use strict";

function roundToDecimal(v, d = 0) {
    const m = Math.pow(10, d);
    return Math.round(v * m) / m;
}

function minMax(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function lim(v) {
    return minMax(v, 0, 100);
}

function normalize(val, min, max) {
    return minMax((val - min) / (max - min), 0, 1);
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}