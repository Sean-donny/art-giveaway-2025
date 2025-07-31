import fs from 'fs';

export function parseReelComments() {
  const rawData = fs.readFileSync('reelComments.txt', 'utf8');

  const COMMENTS_REGEX = /^([\w.]+)\s(.+)$/gm;

  const userComments = [];

  for (const match of rawData.matchAll(COMMENTS_REGEX)) {
    const username = match[1];
    const comment = match[2];
    if (username && comment) {
      userComments.push({ username, comment });
    }
  }

  console.log(
    userComments.length,
    userComments.length != 1 ? ' comments found' : ' comment found',
  );
  console.log(userComments);

  return userComments;
}
