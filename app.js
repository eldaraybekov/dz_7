// задание 1
class WorkerTypeOne {
    name;
    surname;
    rate;
    days;
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(rate, days) {
        let salary = this.rate * this.days;
        return salary;
    }
}
let workeOne = new WorkerTypeOne('coфия', 'голубева', 10, 31);
console.log(workeOne.name);
console.log(workeOne.surname);
console.log(workeOne.rate);
console.log(workeOne.days);
console.log(workeOne.getSalary());
let workeTwo = new WorkerTypeOne('саша', 'иванова', 20, 41);
console.log(workeTwo.name);
console.log(workeTwo.surname);
console.log(workeTwo.rate);
console.log(workeTwo.days);
console.log(workeTwo.getSalary());

// задание 2
class WorkerTypeTwo {
    #name;
    #surname;
    #rate;
    #days;
    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    getName() {
        return this.#name;
    }
    getSurname() {
        return this.#surname;
    }
    getRate() {
        return this.#rate;
    }
    getDays() {
        return this.#days;
    }
    getSalary(rate, days) {
        let salary = this.#rate * this.#days;
        return salary;
    }
}
workeTwo = new WorkerTypeTwo('саша', 'Иванова', 10, 31);
console.log(workeTwo.getName());
console.log(workeTwo.getSurname());
console.log(workeTwo.getRate());
console.log(workeTwo.getDays());
console.log(workeTwo.getSalary());

