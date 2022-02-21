import { getTags } from '$lib/tagReader';

export const get = async ({ params: { blog } }) => ({ body: Object.keys(await getTags(blog)) });