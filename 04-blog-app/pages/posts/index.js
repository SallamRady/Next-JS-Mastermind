import PostsGrid from "@/components/posts/posts-grid";
import classes from './page.module.css';

const demmy_data = [
  {
    slug: "getting-started-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2024-12-28",
  },
  {
    slug: "getting-started-nextjs2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2024-12-28",
  },
  {
    slug: "getting-started-nextjs3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2024-12-28",
  },
  {
    slug: "getting-started-nextjs4",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2024-12-28",
  },
  {
    slug: "getting-started-nextjs5",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2024-12-28",
  },
];
const PostsPage = () => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={demmy_data} />
    </section>
  );
};

export default PostsPage;
