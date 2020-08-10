export default function addSerialNumber(source) {
  const number = { serialNumber: '12345' };
  Object.assign(source, number);
  source.properties.status = 'processed';
  return source;
}
