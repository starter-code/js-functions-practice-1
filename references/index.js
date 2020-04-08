// idea 1: creating a function
// example 1:

const giveMe10 = () => {
  return 10;
};

giveMe10(); // evaluates to 10

// idea 2: creating a function with parameters
// example 2:

const giveMe10More = (number) => {
  return 10 + number;
};

giveMe10More(20); // evaluates to 30

// idea 3: function with array argument
// example 3:

const getLastItem = (arrayArg) => {
  return arrayArg[arrayArg.length - 1];
};

getLastItem([1, 2, 3, 4]); // evaluates to 4

// idea 3.5: function targeting item at index
// example 3.5:

const getTargetFromArray = (arrayArg, targetArg) => {
  return arrayArg[targetArg];
};

getTargetFromArray([1, 4, 2, 6, 3], 1); // evaluates to 4
getTargetFromArray([1, 4, 2, 6, 3], 3); // evaluates to 6

// idea 4: looping through an array
// example 4

const getAllEvenNumbers = (arrayArg) => {
  const outputArray = [];
  for (let i = 0; i < arrayArg; i++) {
    if (arrayArg[i] % 2 === 0) {
      outputArray.push(arrayArg[i]);
    }
  }

  return outputArray;
};

getAllEvenNumbers([1, 2, 3, 5, 11, 6, 2]); // evaluates to [2,6,2]
