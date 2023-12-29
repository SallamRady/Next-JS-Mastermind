import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/utils/posts-util";
import Head from "next/head";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Sallam' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
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
