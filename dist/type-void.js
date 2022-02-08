"use strict";
// Void
// Explicito
function showInfo(user) {
    console.log('User info: ', user.id, user.username, user.firstName);
    // return 'hola';
}
showInfo({
    id: 1, username: 'lux', firstName: 'Luis'
});
// ATipo Inferido
function showFormattedInfo(user) {
    console.log(`
    id: ${user.id}
    username: ${user.username}
    firstName: ${user.firstName}
  `);
}
showFormattedInfo({
    id: 1, username: 'lux', firstName: 'Luis'
});
// null y undefined son un subtipo de void
let unusable;
// unusable = null;
unusable = undefined;
// tipo Never
function handleError(code, message) {
    // Process your code here
    // Generade a message
    throw new Error(`${message}. Code: ${code}`);
}
try {
    handleError(404, 'Not Found');
}
catch (error) { }
function subNumbers(limit) {
    let sum = 0;
    while (true) {
        sum++;
    }
}
subNumbers(10);
// ciclo infinito
