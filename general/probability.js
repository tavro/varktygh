function getRandomBoolean() {
    return Math.random() >= 0.5;
}

function getOrderProbabilisticRandomElement(seq) {
    const random = Math.random();
    const probabilities = seq.map((_, index) => (seq.length - index) / (seq.length * (seq.length + 1) / 2));
    
    let cumulativeProbability = 0;
    for (let i = 0; i < probabilities.length; i++) {
        cumulativeProbability += probabilities[i];
        if (random < cumulativeProbability) {
            return seq[i];
        }
    }
}