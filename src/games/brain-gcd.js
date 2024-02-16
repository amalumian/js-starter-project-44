import gameEngine, { roundsCount } from '../index.js';
import getRandomNum from '../get-random-num.js';

const findGCD = (a, b) => {
  if (b === 0) return a;

  return findGCD(b, a % b);
};

export default () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';
  const gameData = [];

  for (let round = 0; round < roundsCount; round += 1) {
    const a = getRandomNum(0, 100);
    const b = getRandomNum(0, 100);

    const question = `${a} ${b}`;
    const correctAnswer = findGCD(a, b);

    gameData.push([question, correctAnswer.toString()]);
  }

  gameEngine(gameTask, gameData);
};
