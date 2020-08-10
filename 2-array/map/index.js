export default function numberMapToWord(collection) {
  return collection.map(n => String.fromCharCode(97 + n - 1));
}
