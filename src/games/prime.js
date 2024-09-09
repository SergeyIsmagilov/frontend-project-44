import startBrain, { getRandomInt } from '../index.js';

const primeDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  // числа меньше 2 не могут быть простыми
  if (num < 2) {
    return false;
  }

  // проверять имеет смысл до квадратного корня из проверяемого числа
  const numSqrt = Math.sqrt(num);

  for (let i = 2; i <= numSqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeLogic = () => {
  // тут тоже можно настроить генерацию так, чтобы простые числа появлялись чаще для интереса
  const randomInt = getRandomInt();

  // записываем правильный ответ
  const primeAnswer = isPrime(randomInt) ? 'yes' : 'no';

  // задаём вопрос пользователю
  console.log(`Question: ${randomInt}`);

  // возвращаем правильный ответ
  return primeAnswer;
};

const playPrime = () => {
  startBrain(primeDescription, primeLogic);
};

export default playPrime;
