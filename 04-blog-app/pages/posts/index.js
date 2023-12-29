import PostsGrid from "@/components/posts/posts-grid";
import classes from "./page.module.css";
import { getAllPosts } from "@/utils/posts-util";
import Head from "next/head";

const PostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="Explore and see a great posts about programming and web development."
        />
      </Head>
      <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={props?.posts} />
      </section>
    </>
  );
};

export function getStaticProps() {
  let posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;
