// import our packages
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirPath = path.join(process.cwd(), "posts-articales");

export function getPostsFiles() {
  return fs.readdirSync(postsDirPath);
}

export function extractPostData(postIdentifier) {
  // remove file extention
  let postSlug = postIdentifier.replace(/\.md$/, "");
  let filePath = path.join(postsDirPath, `${postSlug}.md`);
  let fileContent = fs.readFileSync(filePath);
  let { data, content } = matter(fileContent);
  let postContent = {
    slug: postSlug,
    ...data,
    content,
  };
  return postContent;
}

export function getAllPosts() {
  let postsFiles = getPostsFiles();
  let allPosts = postsFiles
    .map((postFile) => {
      return extractPostData(postFile);
    })
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return allPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
