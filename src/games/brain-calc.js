import gameEngine, { roundsCount } from '../index.js';
import getRandomNum from '../get-random-num.js';

const calculate = (a, operator, b) => {
  if (operator === '+') {
    return a + b;
  }
  if (operator === '-') {
    return a - b;
  }
  if (operator === '*') {
    return a * b;
  }

  return null;
};

export default () => {
  const gameTask = 'What is the result of the expression?';
  const gameData = [];
  const operators = ['+', '-', '*'];

  for (let round = 0; round < roundsCount; round += 1) {
    const a = getRandomNum(0, 10);
    const b = getRandomNum(0, 10);
    const operator = operators[getRandomNum(0, operators.length - 1)];

    const question = `${a} ${operator} ${b}`;
    const correntAnswer = calculate(a, operator, b);

    gameData.push([question, correntAnswer.toString()]);
  }

  gameEngine(gameTask, gameData);
};
