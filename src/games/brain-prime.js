import gameEngine, { roundsCount } from '../index.js';
import getRandomNum from '../get-random-num.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export default () => {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameData = [];

  for (let round = 0; round < roundsCount; round += 1) {
    const randomNum = getRandomNum(0, 100);
    const question = `${randomNum}`;
    const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';

    gameData.push([question, correctAnswer]);
  }

  gameEngine(gameTask, gameData);
};
