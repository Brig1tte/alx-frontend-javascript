export default function guardrail(mathFunction) {
  const queue = [];
  queue.push('Guardrail was processed');

  try {
    const value = mathFunction();
    queue.push(value);
  } catch (error) {
    queue.push(error.message);
  }

  return queue;
}

const mathFunction = () => 1000;
const queue = guardrail(mathFunction);
console.log(queue); // [ 1000, 'Guardrail was processed' ]

const mathFunction = () => {
  throw new Error('Math function failed');
};
const queue = guardrail(mathFunction);
console.log(queue); // [ 'Math function failed', 'Guardrail was processed' ]
