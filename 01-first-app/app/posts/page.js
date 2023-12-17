import Link from "next/link";

const PostsPage = () => {
  return <main>
  <h1>Posts Pages</h1>
  <Link href='/posts/post-1'>Post 1 Details</Link>
  <span> | </span>
  <Link href='/posts/post-2'>Post 2 Details</Link>
  <span> | </span>
  <Link href='/posts/post-3'>Post 3 Details</Link>
  </main>;
};

export default PostsPage;
