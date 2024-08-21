import readlineSync from 'readline-sync';

// общие функции
// можно вынести в отдельный модуль, если их будет больше

// случайное целое в диапазоне от 0 до 100 включительно
const getRandomInt = () => Math.floor(Math.random() * 101);

// функции

// функция смотрит, является ли ответ числом, и преобразовывает строку в число при необходимости
const getUserAnswerToCompare = (userAnswer) => {
  const userAnswerToNum = Number(userAnswer);
  if (Number.isNaN(userAnswerToNum)) {
    return userAnswer;
  }
  return userAnswerToNum;
};

// игра

const startBrain = (gameDescription, gameLogic) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);

  // необходимое количество правильных ответов
  const answersRequired = 3;
  let answersCount = 0;

  while (answersCount < answersRequired) {
    // функция задаёт вопрос и возвращает правильный ответ
    const correctAnswer = gameLogic();

    // записываем ответ пользователя
    const userAnswer = readlineSync.question('Your answer: ');

    // ответ пользователя для сравнения
    const userAnswerToCompare = getUserAnswerToCompare(userAnswer);

    // сравниваем ответы
    if (userAnswerToCompare === correctAnswer) {
      console.log('Correct!');
      answersCount += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export { getRandomInt };
export default startBrain;
