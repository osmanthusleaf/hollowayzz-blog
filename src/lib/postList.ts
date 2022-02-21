import fs from 'fs';
import process, { dateFMT } from '$lib/Infrastructure/fileReader';
import dayjs from 'dayjs';

const isMarkdownFile = (fileName) => /.+\.md$/.test(fileName);

const dateComparison = ({ metadata: { date: aDate } }: Post, { metadata: { date: bDate } }: Post) =>
  dayjs(bDate, dateFMT).unix() - dayjs(aDate, dateFMT).unix();

export default (blog: string) =>
  fs
    .readdirSync(`post/${blog}`)
    .filter(isMarkdownFile)
    .map((fileName) => {
      const { metadata } = process(`post/${blog}/${fileName}`);
      return {
        metadata,
        slug: fileName.slice(0, -3)
      };
    })
    .sort(dateComparison);