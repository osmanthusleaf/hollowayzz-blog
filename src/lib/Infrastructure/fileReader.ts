import { readSync } from 'to-vfile';
import { unified } from 'unified';
import parse from 'remark-parse';
import gfm from 'remark-gfm';
import remark2rehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import frontmatter from 'remark-frontmatter';
import prism from '@mapbox/rehype-prism';
import yaml from 'js-yaml';
import dayjs from 'dayjs';

export const dateFMT = 'MM, DD, YYYY';
export const parser = unified().use(parse).use(gfm).use(frontmatter, ['yaml']);
const runner = unified().use(remark2rehype).use(prism).use(rehypeStringify);
const isFrontMatter = (child): child is { value: string } => child.type === 'yaml';

export default (filename) => {
  const tree = parser.parse(readSync(filename));
  return isFrontMatter(tree.children[0])
    ? ({
      metadata: (({ date, tags, ...rest }) => ({
        ...rest,
        tags: tags.split(','),
        date: dayjs(date).format(dateFMT)
      }))(yaml.load(tree.children[0].value)),
      content: runner.stringify(runner.runSync(tree))
    } as { metadata: Metadata; content: string })
    : ({
      metadata: {
        title: 'Error!',
        date: '?',
        excerpt: 'Missing Frontmatter! Expected at least a title and a date!',
        tags: []
      },
      content: 'Missing Frontmatter! Expected at least a title and a date!'
    } as { metadata: Metadata; content: string });
};
