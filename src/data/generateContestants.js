import fs from 'fs/promises';

export async function generateContestants() {
  let contestantData = {};

  try {
    const data = await fs.readFile('./processed_comments.json', 'utf8');
    const parsedData = JSON.parse(data);
    contestantData = parsedData;
  } catch (error) {
    console.error('Error reading file:', error);
  }

  const posterList = [
    'Raver',
    'Frank',
    'Goldenboy',
    'Igormaniac',
    'Hoodie Gurl',
    'Cench',
    'DOOM',
    'Boat Boy',
    'Rrrocky',
    'Ashley',
    'Spideryachty',
    'Subaru Boy',
    'Tyler',
    'Tyla',
    'Teenx',
    'Fashion Roadman',
    'AZAMAN',
  ];

  // Convert to Set for O(1) lookups instead of O(n)
  const posterSet = new Set(posterList);

  let contestants = {};

  // let birthdayWishCount = 0;

  // Pre-initialize with Sets instead of arrays
  for (const poster of posterList) {
    contestants[poster] = new Set();
  }

  for (const comment of contestantData) {
    // Skip birthday wishes
    if (comment.comment === 'HAPPY BIRTHDAY') {
      // birthdayWishCount++;
      continue;
    }

    const participant = comment.username || comment.user;

    // Handle comma-separated entries
    const entries = comment.comment.split(',').map(entry => entry.trim());

    for (const entry of entries) {
      if (posterSet.has(entry)) {
        contestants[entry].add(participant); // Set automatically prevents duplicates
      }
    }
  }

  // Convert Sets back to Arrays for easier consumption by next module
  const finalContestants = {};
  for (const [poster, participantSet] of Object.entries(contestants)) {
    finalContestants[poster] = Array.from(participantSet);
  }

  //   console.log(finalContestants);
  //   console.log(birthdayWishCount);

  return finalContestants;
}
