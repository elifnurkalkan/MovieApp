export function getColor(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

export function getPopularity(popularity) {
  if (popularity > 3800) {
    return 'green';
  } else {
    return 'red';
  }
}
