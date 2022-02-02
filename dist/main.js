"use strict";
console.log('main Platzi');
//number
// Explicito
let phone;
phone = 1;
phone = 54234567;
// phone = 'hola'; // Error
// Inferido
let phoneNumber = 54234567;
// phoneNumber = true;  // Error
// Tipo: Boolean
let isPro;
isPro = true;
// isPro = 'fsda';
let isUserPro = false;
isUserPro = true;
// Strings
let username = 'luis';
// Template String
// Uso de back-tick `
let message = `Hola ${username}`;
console.log('message: ', message);
let userInfo;
userInfo = `
  User Info:
  username: ${username}
  firstName: ${username} Aviles
  phone: ${phone}
  isPro: ${isPro}
`;
console.log('userInfo', userInfo);
