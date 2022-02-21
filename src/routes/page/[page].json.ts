import read from '$lib/Infrastructure/fileReader';
import { asBody } from '$lib/fetchUtilities';

export const get = ({ params: { page } }) =>
  ((page) => asBody(() => JSON.stringify(page)))(read(`pages/${page}.md`));