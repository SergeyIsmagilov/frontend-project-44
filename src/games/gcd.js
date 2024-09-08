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
  // так как НОД для двух нулей не определён,
  // стоит исключить вероятность того, что оба числа будут равны нулю
  const randomInt1 = getRandomInt(1, 100);
  const randomInt2 = getRandomInt();

  console.log(`Question: ${randomInt1} ${randomInt2}`);

  const gcdAnswer = findGcd(randomInt1, randomInt2);

  return gcdAnswer;
};

const playGcd = () => {
  startBrain(gcdDescription, gcdLogic);
};

export default playGcd;
