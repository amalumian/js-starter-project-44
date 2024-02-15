import gameEngine, { roundsCount } from '../index.js';
import getRandomNum from '../get-random-num.js';

const isEven = (num) => num % 2 === 0;

export default () => {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameData = [];

  for (let round = 0; round < roundsCount; round += 1) {
    const question = getRandomNum(0, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    gameData.push([question, correctAnswer]);
  }

  gameEngine(gameTask, gameData);
};
