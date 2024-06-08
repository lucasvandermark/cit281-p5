module.exports = class Monster {
    constructor({monsterName = "Unknown", minimumLife = 0, currentLife = 100} = {}) {
        this.monsterName = monsterName;
        this.minimumLife = minimumLife;
        this.currentLife = currentLife;
        this.isAlive = currentLife >= minimumLife;
    }

    updateLife(lifeChangeAmount) {
        this.currentLife -= lifeChangeAmount;
        this.currentLife = this.currentLife < 0 ? 0 : this.currentLife;
        this.isAlive = this.currentLife > this.minimumLife;
    }

    getRandomInteger(minimumLifeDrain, maximumLifeDrain) {
        return Math.floor(Math.random() * (maximumLifeDrain - minimumLifeDrain)) + minimumLifeDrain;
    }
    randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
        if  (minimumLifeDrain > maximumLifeDrain) {
            console.log(`Error: Minimum life drain ${minimumLifeDrain} must not exceed maximum life drain ${maximumLifeDrain}`);
            return;
        }

        const lifeDrain = (this.getRandomInteger(minimumLifeDrain, maximumLifeDrain + 1))
        console.log(`${this.monsterName} random power drain of ${lifeDrain}`)
        this.updateLife(lifeDrain);
    }
}