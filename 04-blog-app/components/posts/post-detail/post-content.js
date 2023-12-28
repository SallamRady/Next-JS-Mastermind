import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";

const DummyPost = {
  slug: "getting-started-nextjs",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  content: "#  My First POST",
  date: "2024-12-28",
};

function PostContent() {
  const imagePath = `/images/posts/${DummyPost.slug}/${DummyPost.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DummyPost.title} image={imagePath} />
      <ReactMarkdown>{DummyPost.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
