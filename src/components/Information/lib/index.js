export const LINKS = [
  'all',
  'job and education',
  'living places',
  'contact and basic information',
  'family and relationships',
  // 'details about you',
  // 'life events',
];

export function generateName(candidate) {
  return candidate
    .split(' ')
    .map((peace, i) => {
      if (i === 0) return peace;
      else if (i !== 0) return peace[0].toUpperCase() + peace.slice(1, peace.length);
    })
    .join('');
}
