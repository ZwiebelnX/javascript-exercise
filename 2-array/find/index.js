export default function find00OldPerson(collection) {
  return collection.find(p => p.age <= 20).name;
}
