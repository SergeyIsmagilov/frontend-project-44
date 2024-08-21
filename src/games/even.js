import startBrain, { getRandomInt } from '../index.js';

const evenDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (num) => (num % 2) === 0;

const evenLogic = () => {
  const randomInt = getRandomInt();

  console.log(`Question: ${randomInt}`);

  // записываем правильный ответ
  const evenAnswer = isNumberEven(randomInt) ? 'yes' : 'no';

  return evenAnswer;
};

const playEven = () => {
  startBrain(evenDescription, evenLogic);
};

export default playEven;
