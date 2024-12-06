class Animal {
    #age
    constructor(name, food, energy, canReproduce) {
        this.name = name;
        this.food = food;
        this.energy = energy;
        this.canReproduce = canReproduce;
        this.#age = 20;

    }
    isAdult() {
        return this.#age > 18;
    }
}

export default Animal;