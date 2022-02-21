import read from "$lib/Infrastructure/fileReader";

export const get = ({ params: { blog, slug } }) => {
  const { metadata, content } = read(`post/$slug}.md`);
  return { body: JSON.stringify({ metadata, content }) };
};