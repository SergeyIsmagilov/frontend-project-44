import startBrain, { getRandomInt } from '../index.js';

const progressionDescription = 'What number is missing in the progression?';

const progressionLogic = () => {
  // количество чисел в прогрессии
  const progressionLength = getRandomInt(5, 10);
  // начальное число
  const initNumber = getRandomInt(1, 20);
  // шаг прогрессии
  const progressionStep = getRandomInt(1, 10);

  const progressionNumbers = [];
  let currentNumber = initNumber;

  for (let i = 0; i < progressionLength; i += 1) {
    progressionNumbers.push(currentNumber);
    currentNumber += progressionStep;
  }

  // случайным образом выберем индекс числа, которое спрячем от пользователя
  const randomIndex = Math.floor(Math.random() * progressionNumbers.length);

  // сначала запишем его
  const progressionAnswer = progressionNumbers[randomIndex];

  // затем спрячем
  progressionNumbers[randomIndex] = '..';

  // преобразуем массив в строку
  const progressionStr = progressionNumbers.join(' ');

  // теперь мы можем показать прогрессию пользователю
  console.log(`Question: ${progressionStr}`);

  return progressionAnswer;
};

const playProgression = () => {
  startBrain(progressionDescription, progressionLogic);
};

export default playProgression;
