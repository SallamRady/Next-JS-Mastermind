import PostsGrid from "@/components/posts/posts-grid";
import classes from "./page.module.css";
import { getAllPosts } from "@/utils/posts-util";

const PostsPage = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props?.posts} />
    </section>
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
