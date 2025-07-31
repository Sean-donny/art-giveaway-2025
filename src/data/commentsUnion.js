import fs from 'fs';
import { parsePostComments } from './art-giveaway-2025/src/postCommentsParser.js';
import { parseReelComments } from './art-giveaway-2025/src/reelCommentsParser.js';
import { parseTiktokComments } from './art-giveaway-2025/src/tiktokCommentsParser.js';

const allComments = [
  ...parsePostComments(),
  ...parseReelComments(),
  ...parseTiktokComments(),
];

console.log(allComments);

fs.writeFileSync('allComments.json', JSON.stringify(allComments, null, 2));
