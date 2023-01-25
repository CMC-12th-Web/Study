export default function TextTruncate(text) {
  const replaced = text.replace(/\n/g, '');
  if (replaced.length <= 100) {
    return replaced;
  }
  return replaced.slice(0, 100).concat('...');
}
