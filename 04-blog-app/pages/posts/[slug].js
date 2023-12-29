import PostContent from "@/components/posts/post-detail/post-content";
import { extractPostData, getPostsFiles } from "@/utils/posts-util";
import Head from "next/head";
import React from "react";

const PostDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props?.post?.title}</title>
        <meta
          name="description"
          content={props?.post?.excerpt}
        />
      </Head>
      <PostContent post={props?.post} />
    </>
  );
};

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export function getStaticProps(context) {
  let { slug } = context.params;
  let post = extractPostData(slug);
  return {
    props: {
      post,
    },
  };
}
export default PostDetails;
