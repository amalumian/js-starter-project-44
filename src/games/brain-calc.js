import gameEngine, { roundsCount } from '../index.js';
import getRandomNum from '../get-random-num.js';

const calculate = (operand1, operator, operand2) => {
  if (operator === '+') {
    return operand1 + operand2;
  }
  if (operator === '-') {
    return operand1 - operand2;
  }
  if (operator === '*') {
    return operand1 * operand2;
  }

  return null;
};

export default () => {
  const gameTask = 'What is the result of the expression?';
  const gameData = [];
  const operators = ['+', '-', '*'];

  for (let round = 0; round < roundsCount; round += 1) {
    const operand1 = getRandomNum(0, 10);
    const operand2 = getRandomNum(0, 10);
    const operator = operators[getRandomNum(0, operators.length - 1)];

    const question = `${operand1} ${operator} ${operand2}`;
    const correntAnswer = calculate(operand1, operator, operand2);

    gameData.push([question, correntAnswer.toString()]);
  }

  gameEngine(gameTask, gameData);
};
