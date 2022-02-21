import { base } from '$app/paths';

const json = (f, path) => f(`${path}.json`).then((r) => r.json());
const pageLoader = (fetch) => (page: string) => json(fetch, `page/${page}`);
const blogPageLoader = (fetch) => (blogResources: string[]) =>
  Promise.all(blogResources.map((r) => json(fetch, `${base}/${r}`)));

export const asBody = (provider) => ({ body: provider() });

export default (fetch) => ({
  blogPageLoader: blogPageLoader(fetch),
  pageLoader: pageLoader(fetch),
  json
});