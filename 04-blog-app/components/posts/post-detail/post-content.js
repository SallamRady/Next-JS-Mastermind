import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";

function PostContent(props) {
  let { post } = props;
  const imagePath = `/images/posts/${post?.slug}/${post?.image}`;

  // create custom renders for show markdown lang.
  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.url}`}
          className='markdownImg'
          alt={image.alt}
          width={600}
          height={400}
          layout="responsive"
        />
      );
    },
    
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post?.title} image={imagePath} />
      <ReactMarkdown renders={customRenderers}>{post?.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
