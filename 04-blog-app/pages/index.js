import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";

const demmy_data = [
  {
    slug: "getting-started-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2024-12-28",
  },
];
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={demmy_data} />
    </>
  );
}
