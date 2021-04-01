import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsPath = path.join(process.cwd(), 'posts');

function getPostData(fileName) {
  // Given a fileName, construct the full path,
  //   read it's contents separating meta from markdown,
  //   and return a JS object containing the data
  const filePath = path.join(postsPath, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ''); // removes file extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  // Return a sorted array of all posts.
  const postFiles = fs.readdirSync(postsPath);

  // Return an array of all Post data
  const allPost = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  // Sorting posts recent to older by date
  const sortedPosts = allPost.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getRecentPosts() {
  const allPost = getAllPosts();

  return allPost.slice(0, 2);
}
