import gameEngine, { roundsCount } from '../index.js';
import getRandomNum from '../get-random-num.js';

const getProgression = (size, initialNum, step) => {
  const progression = [];

  for (let i = 0; i < size; i += 1) {
    progression.push(initialNum + step * i);
  }

  return progression;
};

export default () => {
  const gameTask = 'What number is missing in the progression?';
  const gameData = [];

  for (let round = 0; round < roundsCount; round += 1) {
    const progressionSize = getRandomNum(5, 10);
    const initialNum = getRandomNum(1, 99);
    const step = getRandomNum(1, 9);
    const progression = getProgression(progressionSize, initialNum, step);
    const hiddenNumIndex = getRandomNum(1, progressionSize - 2);

    const correctAnswer = progression[hiddenNumIndex];
    progression[hiddenNumIndex] = '..';
    const question = progression.join(' ');

    gameData.push([question, correctAnswer.toString()]);
  }

  gameEngine(gameTask, gameData);
};
