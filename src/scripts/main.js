/*
Author: Panya
Name: main.js
Purpose: Entry point of our application
*/
import CarFactory from "./carFactory";
import garage from "./garage";

// Create two cars using the function you imported
const mustang = CarFactory("Ford", "Mustang");
const accord = CarFactory("Honda", "Accord");
const santafe = CarFactory("Hyundai", "Santa Fe");
const sierra = CarFactory("GMC", "Sierra");

/// Store the cars in the garage
garage.store(mustang);
garage.store(accord);
garage.store(santafe);
garage.store(sierra);

console.table(garage.inventory());
console.table(garage.retrieve(sierra));