import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/utils/posts-util";

export default function Home(props) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props?.posts} />
    </>
  );
}

export function getStaticProps() {
  let _posts = getFeaturedPosts();
  return {
    props: {
      posts: _posts,
    },
  };
}
