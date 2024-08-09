import readlineSync from 'readline-sync';

// функции

const getUserName = () => readlineSync.question('May I have your name? ');

// случайное целое в диапазоне от 0 до 100 включительно
const getRandomInt = () => Math.floor(Math.random() * 101);

const isNumberEven = (num) => (num % 2) === 0;

const playRound = () => {
  const randomInt = getRandomInt();
  console.log(`Question: ${randomInt}`);

  // записываем ответ пользователя
  const answer = readlineSync.question('Your answer: ');
  // записываем правильный ответ
  const correctAnswer = isNumberEven(randomInt) ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};

// игра

const playEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = getUserName();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // необходимое количество правильных ответов
  const answersRequired = 3;
  let answersCount = 0;

  while (answersCount < answersRequired) {
    if (playRound()) {
      answersCount += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playEven;
