import fs from 'fs';
import { parse } from 'csv-parse/sync';

export function parsePostComments() {
  const csvData = fs.readFileSync('postComments.csv', 'utf8');

  // Parse the CSV properly (handles commas in quoted fields)
  const records = parse(csvData, {
    skip_empty_lines: true,
  });

  const row = records[0]; // only 1 row of data
  const userComments = [];

  for (let i = 0; i < row.length; i += 2) {
    const username = row[i]?.trim();
    const comment = row[i + 1]?.trim();
    if (username && comment) {
      userComments.push({ username, comment });
    }
  }

  console.log(
    userComments.length,
    userComments.length !== 1 ? 'comments found' : 'comment found',
  );
  console.log(userComments);

  return userComments;
}
