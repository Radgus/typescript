// Void

// Explicito
function showInfo(user: any): any {
  console.log('User info: ',
    user.id,
    user.username,
    user.firstName
  )
  // return 'hola';
}

showInfo({
  id: 1, username: 'lux', firstName: 'Luis'
});

// ATipo Inferido
function showFormattedInfo(user:any) {
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
let unusable: void;
// unusable = null;
unusable = undefined;

// tipo Never

function handleError(code:number, message: string): never {

  // Process your code here
  // Generade a message
  throw new Error(`${message}. Code: ${code}`);

}

try {
  handleError(404, 'Not Found');
} catch (error) { }

function subNumbers(limit:number): never {
  let sum = 0;
  while (true) {
    sum++;
  }
}

subNumbers(10);
// ciclo infinito











