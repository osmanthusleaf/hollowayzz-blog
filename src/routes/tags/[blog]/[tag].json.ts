import { getTags } from '$lib/tagReader';

export const get = async ({ params: { blog, tag } }) => ({
  body: JSON.stringify((await getTags(blog))[tag])
});