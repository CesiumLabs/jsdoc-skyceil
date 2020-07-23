/* Simple Class */
class Rectangle {

    /**
     * The OP Rectangle Class
     * @param {Number} height - Height of the Rectangle
     * @param {Number} width - Width of the Rectangle
     */
    constructor(height, width) {

        /**
         * Height
         * @property {Number} height
         */
        this.height = height;

        /**
         * Width
         * @property {Number} width
         */
        this.width = width;
    }
    
    /**
     * Area of the Rectangle
     * @property {Number} area
     */
    get area () {
        return this.calcArea();
    }
    
    /**
     * Calculates the Area
     * @returns {Number}
     */
    calcArea () {
        return this.height * this.width;
    }

    /**
     * Checks if there is height and width
     * @returns {Boolean}
     */
    static hasValues () {
        return !!(this.height && this.width);
    }
}

const square = new Rectangle(10, 10);

console.log(square.area); // Excellent Useful Class

/* Entended Class Example */
class Animal {
    
    /**
     * The Wild Animal Class
     * @param {String} name - Name of the Animal
     */
    constructor(name) {
        /**
         * Name
         * @property {String} name
         */
        this.name = name;
    }

    /**
     * Make the Animal speak
     * @returns {Void}
     */
    speak () {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    
    /**
     * The Wild Animal Class
     * @param {String} name - Name of the Animal
     */
    constructor(name) {
        super(name); // You must know what's happenin'
    }

    /**
     * Make the Dog speak
     * @returns {Void}
     */
    speak () {
        console.log(`${this.name} barks.`);
    }
}

let d = new Dog('Mitzie');

d.speak(); // Mitzie barks.

/* Simple Interface */
/**
 * @typedef SimpleTypeDef
 * @type {Object}
 * @property {String} simply
 */