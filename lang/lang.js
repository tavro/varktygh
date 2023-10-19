function getRandomConsonant() {
    return getRandomElement(consonants);
}

function getRandomVowel() {
    return getRandomElement(vowles);
}

function getUniqueConsonant(previous) {
    var consonant = getRandomConsonant();
    while(consonant === previous) {
        consonant = getRandomConsonant();
    }
    return consonant;
}

function getUniqueVowel(previous) {
    var vowel = getRandomVowel();
    while(vowel === previous) {
        vowel = getRandomVowel();
    }
    return vowel;
}

function getRandomConsonants(amount) {
    var last = getRandomConsonant();
    var res = last;
    for(let i = 0; i < amount-1; i++) {
        last = getUniqueConsonant(last);
        res += last;
    }
    return res;
}