export default function countTypesNumber(source) {
  let sum = 0;
  const valueArray = Object.values(source);
  valueArray.forEach(value => {
    sum += Number(value);
  });
  return sum;
}
