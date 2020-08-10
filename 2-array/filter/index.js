function chooseMultiplesOfThree(collection) {
  return collection.filter(n => n % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  return collection.filter((word, index) => collection.indexOf(word) === index);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
