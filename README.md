# Brain Games

[![Actions Status](https://github.com/amalumian/js-starter-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/amalumian/js-starter-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/30928f631ef8e8221951/maintainability)](https://codeclimate.com/github/amalumian/js-starter-project-44/maintainability)

"Brain Games" - a set of five console games, built on the principle of popular mobile applications for brain pumping. Each game asks questions to which you have to give correct answers. After three correct answers, the game is considered to be completed. Incorrect answers end the game and prompt you to go through it again.

Games:

- Calculator. Arithmetic expressions to be calculated.
- Progression. Finding missing numbers in a sequence of numbers.
- Determining an even number.
- Determining the greatest common divisor.
- Determining a prime number.

Example:

```
brain-progression
Welcome to the Brain Game!
What number is missing in the progression?
May I have your name? Roman
Hello, Roman!
Question: 14 .. 18 20 22 24 26 28
Your answer: 16
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24
Correct!
Congratulations, Roman!
```

## Setup

```bash
git clone https://github.com/amalumian/js-starter-project-44.git
make install
sudo npm link

# Or instead of npm link, run games from the bin directory, for example
node bin/brain-calc.js
```

## How to play

### Determining an even number

```bash
brain-even
```

[![asciicast](https://asciinema.org/a/rBtk9DjSlIZ6KUkmAVJOGl8ms.svg)](https://asciinema.org/a/rBtk9DjSlIZ6KUkmAVJOGl8ms)

### Calculator

```bash
brain-calc
```

[![asciicast](https://asciinema.org/a/0qLmjW2qMwdXis0aJ42BBCj4C.svg)](https://asciinema.org/a/0qLmjW2qMwdXis0aJ42BBCj4C)

### Determining the greatest common divisor

```bash
brain-gcd
```

[![asciicast](https://asciinema.org/a/ReZ4Pe53fnoydIZea2koDXUit.svg)](https://asciinema.org/a/ReZ4Pe53fnoydIZea2koDXUit)

### Progression

```bash
brain-progression
```

[![asciicast](https://asciinema.org/a/efTxtJ6TCPlXKkT8M6zyHtshl.svg)](https://asciinema.org/a/efTxtJ6TCPlXKkT8M6zyHtshl)

### Determining a prime number

```bash
brain-prime
```

[![asciicast](https://asciinema.org/a/yM4eHLTdqUKiKD6qHQct9nGGb.svg)](https://asciinema.org/a/yM4eHLTdqUKiKD6qHQct9nGGb)
