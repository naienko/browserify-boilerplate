/*
    Author: Panya
    Name: carFactory.js
    Purpose: Produces a new car from a factory
*/
const CarFactory = (make, model) => {
    const newCar = {
        "make": make,
        "model": model
    };

    return newCar;
};

export default CarFactory;