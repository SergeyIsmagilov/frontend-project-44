import startBrain, { getRandomInt } from '../index.js';

const gcdDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

// можно добавить проверку на то, не равен ли НОД 1, чтобы играть было интереснее
const gcdLogic = () => {
  let randomInt1 = getRandomInt();
  const randomInt2 = getRandomInt();

  // так как НОД для двух нулей не определён,
  // стоит исключить вероятность того, что оба числа будут равны нулю
  while (randomInt1 === 0) {
    randomInt1 = getRandomInt();
  }

  console.log(`Question: ${randomInt1} ${randomInt2}`);

  const gcdAnswer = findGcd(randomInt1, randomInt2);

  return gcdAnswer;
};

const playGcd = () => {
  startBrain(gcdDescription, gcdLogic);
};

export default playGcd;
