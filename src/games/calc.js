import startBrain, { getRandomInt } from '../index.js';

const calcDescription = 'What is the result of the expression?';

// ограничивает максимальное значение операнда при умножении числом 20
const multiplicationSimplifier = 0.2;

const calcLogic = () => {
  let operand1 = getRandomInt();
  let operand2 = getRandomInt();
  let operator = '';
  let caclAnswer = 0;

  // обеспечим равную вероятность для каждого из трёх операторов
  const randomizeOperator = Math.floor(Math.random() * 9);

  switch (true) {
    case (randomizeOperator < 3):
      operator = '+';
      caclAnswer = operand1 + operand2;
      break;
    case (randomizeOperator < 6):
      operator = '-';
      caclAnswer = operand1 - operand2;
      break;
    default:
      operator = '*';
      operand1 = Math.ceil(operand1 * multiplicationSimplifier);
      operand2 = Math.ceil(operand2 * multiplicationSimplifier);
      caclAnswer = operand1 * operand2;
  }

  console.log(`Question: ${operand1} ${operator} ${operand2}`);

  return caclAnswer;
};

const playCalc = () => {
  startBrain(calcDescription, calcLogic);
};

export default playCalc;
