"use strict";

function roundToDecimal(v, d = 0) {
    const m = Math.pow(10, d);
    return Math.round(v * m) / m;
}

function round(s, d = 1) {
    return s.replace(/[\d\.-][\d\.e-]*/g, function (n) {
        return roundToDecimal(n, d);
    });
}

function capitalize(str) {
    if (!str) return str;
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

function splitInTwo(str) {
    const half = str.length / 2;
    const ar = str.split(" ");
    
    if (ar.length < 2) {
        return ar;
    }

    let first = "", last = "", middle = "", rest = "";

    ar.forEach((w, d) => {
        if (d + 1 !== ar.length) {
            w += " ";
        }
        rest += w;
        
        if (!first || rest.length < half) {
            first += w;
        }
        else if (!middle) {
            middle = w;
        }
        else {
            last += w;
        }
    });

    if (!last) {
        return [first, middle];
    }
  
    if (first.length < last.length) {
        return [first + middle, last];
    }

    return [first, middle + last];
}

function parseTransform(str) {
    if (!str) {
        return [0, 0, 0, 0, 0, 1];
    }

    const a = str
    .replace(/[a-z()]/g, "")
    .replace(/[ ]/g, ",")
    .split(",");
    
    return [a[0] || 0, a[1] || 0, a[2] || 0, a[3] || 0, a[4] || 0, a[5] || 1];
}

JSON.isValid = str => {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
};
