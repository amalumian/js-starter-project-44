import readlineSync from 'readline-sync';

const brainEven = () => {
  const roundsCount = 3;

  const isEven = (num) => num % 2 === 0;

  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < roundsCount; i += 1) {
    const randomNum = getRandomNum(0, 100);
    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';

    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default brainEven;
