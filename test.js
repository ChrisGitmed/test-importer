// Both of these will work, you just need to toggle the `type' property in the package.json to
// either "commonjs" or "module" 

// import { addNumber } from 'test-package';
const { addNumber } = require('test-package')

const result = addNumber(1, 2);
console.log('result: ', result);
