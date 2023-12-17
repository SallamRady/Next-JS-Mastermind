const PostDetails = ({ params }) => {
  // declaration...
  let { id } = params;

  return (
    <main>
      <h1>Post Details : </h1>
      <p>Post Id : #{id}</p>
    </main>
  );
};

export default PostDetails;
