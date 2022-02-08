// Explicita

let nullVariable: null;
nullVariable = null;
// nullVariable = 1; // marca error

let otherVariable = null;
otherVariable = 'test';

console.log('nullVaraible ', nullVariable);
console.log('otherVariable ', otherVariable);

// undefined
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test2';

let otherUndefined = undefined;
otherUndefined = 3;

console.log('undefinedVariable ', undefinedVariable);
console.log('otherUndefined ', otherUndefined);

// Null and Undefined: como subtipos
// --strictNullChecks
let albunName: string;
// albunName = null;
// albunName = undefined;
