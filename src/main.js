console.log('main Platzi');
//number
// Explicito
var phone;
phone = 1;
phone = 54234567;
// phone = 'hola'; // Error
// Inferido
var phoneNumber = 54234567;
// phoneNumber = true;  // Error
// Tipo: Boolean
var isPro;
isPro = true;
// isPro = 'fsda';
var isUserPro = false;
isUserPro = true;
// Strings
var username = 'luis';
// Template String
// Uso de back-tick `
var message = "Hola ".concat(username);
console.log('message: ', message);
var userInfo;
userInfo = "\n  User Info:\n  username: ".concat(username, "\n  firstName: ").concat(username, " Aviles\n  phone: ").concat(phone, "\n  isPro: ").concat(isPro, "\n");
console.log('userInfo', userInfo);
