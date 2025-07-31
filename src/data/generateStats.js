/* 

Stats we intend to extract

Number of Posters
Number of Participants
Number of Entries
Number of Patricipants per Poster
Largest number of entries for a single poster
Posters with the smallest amount of entries
Top 3 most popular posters

Stats we already know:

141 comments
66 Happy Birthday wishes


*/

import { generateContestants } from './generateContestants.js';

async function generateStats() {
  try {
    const data = await generateContestants();

    const numberOfPosters = getNumberOfPosters(data);
    const numberOfParticipants = getNumberOfParticipants(data);
    const numberOfEntries = getNumberOfEntries(data);
    const participantsPerPoster = getParticipantsPerPoster(data);
    const largestEntry = getLargestEntry(data);
    const smallestEntries = getSmallestEntries(data);
    const top3Popular = getTop3PopularPosters(data);

    console.log('Number of Posters:', numberOfPosters);
    console.log('Number of Participants:', numberOfParticipants);
    console.log('Number of entries:', numberOfEntries);
    console.log('Participants per poster:', participantsPerPoster);
    console.log('Largest entry count:', largestEntry);
    console.log('Posters with smallest entries:', smallestEntries);
    console.log('Top 3 most popular posters:', top3Popular);
  } catch (error) {
    console.error('Error generating stats:', error);
  }
}

generateStats();

function getNumberOfPosters(data) {
  return Object.keys(data).length;
}

function getNumberOfParticipants(data) {
  let participants = new Set();

  for (const entryGroup of Object.values(data)) {
    for (const participant of entryGroup) {
      participants.add(participant);
    }
  }
  return participants.size;
}

function getNumberOfEntries(data) {
  let entriesCount = 0;
  for (const entryGroup of Object.values(data)) {
    entriesCount += entryGroup.length;
  }
  return entriesCount;
}

function getParticipantsPerPoster(data) {
  const result = {};
  for (const [poster, participants] of Object.entries(data)) {
    result[poster] = participants.length;
  }
  return result;
}

function getLargestEntry(data) {
  let maxCount = 0;
  let maxPoster = '';

  for (const [poster, participants] of Object.entries(data)) {
    if (participants.length > maxCount) {
      maxCount = participants.length;
      maxPoster = poster;
    }
  }

  return { poster: maxPoster, count: maxCount };
}

function getSmallestEntries(data) {
  let minCount = Infinity;

  // First pass: find minimum count
  for (const participants of Object.values(data)) {
    if (participants.length < minCount) {
      minCount = participants.length;
    }
  }

  // Second pass: collect all posters with minimum count
  const smallestPosters = [];
  for (const [poster, participants] of Object.entries(data)) {
    if (participants.length === minCount) {
      smallestPosters.push(poster);
    }
  }

  return { posters: smallestPosters, count: minCount };
}

function getTop3PopularPosters(data) {
  // Convert to array of [poster, count] pairs
  const posterCounts = Object.entries(data).map(([poster, participants]) => ({
    poster,
    count: participants.length,
  }));

  // Sort by count descending and take top 3
  return posterCounts.sort((a, b) => b.count - a.count).slice(0, 3);
}
