import readlineSync from 'readline-sync';

// функции

const getUserName = () => readlineSync.question('May I have your name? ');

// случайное целое в диапазоне от 0 до 100 включительно
const getRandomInt = () => Math.floor(Math.random() * 101);

const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
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
  let answersСount = 0;

  while (answersСount < answersRequired) {
    const randomInt = getRandomInt();
    console.log(`Question: ${randomInt}`);

    // записываем ответ пользователя
    const answer = readlineSync.question('Your answer: ');

    // записываем правильный ответ
    let correctAnswer = '';
    if (isNumberEven(randomInt)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    if (answer === correctAnswer) {
      console.log('Correct!');
      answersСount += 1;
    } else {
      // неправильный ответ
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playEven;
