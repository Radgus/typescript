"use strict";
// TYpe: object
let user;
user = {};
user = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
console.log('user: ', user);
// Object vs object(Clase JS vs tipo TS)
const myObj = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
const isInstance = myObj instanceof Object; // clase Object JavaScript
console.log('isInstance: ', isInstance);
console.log('myObj.username: ', myObj.username);
// console.log('user.username: ', user.username);
