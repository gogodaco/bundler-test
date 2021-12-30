import bold from './bold.cjs';
import italic, {italicTagName} from './italic';

let isBold = true;

export function sayHello(name) {
  const formatter = isBold ? bold : italic;
  console.log(formatter);

  isBold = !isBold;

  return `Hello! ${formatter(name)}!`;
}

console.log(sayHello('정환')); // 'Hello! <b>정환</b>!'
console.log(sayHello('정환')); // 'Hello! <i>정환</i>!'
console.log(bold.boldTagName); // 'b'
console.log(italicTagName); // 'i'



const node = document.createElement('div');
node.innerText = 'this is dynamically created by script';
document.body.appendChild(node);