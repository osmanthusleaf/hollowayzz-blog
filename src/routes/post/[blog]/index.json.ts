import posts from "$lib/postList";
export const get = async ({ params: { blog } }) => ({ body: JSON.stringify(posts(blog)) });