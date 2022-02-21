import posts from '$lib/postList';
import { curry, defaultTo, update } from 'lodash-es';

const defaultToEmptyArray = (arr) => defaultTo(arr, []);
const addPostToTag = curry((post, n) => [...defaultToEmptyArray(n), post]);

export const getTags = async (blog) =>
  posts(blog).reduce((tags, post) => {
    post.metadata.tags.forEach((tag) => update(tags, tag, addPostToTag(post)));
    return tags;
  }, {});