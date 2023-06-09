export const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

export const isEven = (num) => num % 2 === 0;

export const getGcd = (num1, num2) => {
  if (num1 === num2 || num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

export const getProgression = (start, delta, numOfElems) => {
  const progression = [];

  for (let i = 1; i < numOfElems; i += 1) {
    progression.push(start + delta * i - 1);
  }

  return progression;
};

export const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};
