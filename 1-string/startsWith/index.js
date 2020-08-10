export default function collectCarNumberCount(collection) {
  return collection.filter(s => s.startsWith('粤A')).length;
}
