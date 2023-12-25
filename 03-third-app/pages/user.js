export default function UserProfile(props) {
  return <h1>User Name :{props?.username}</h1>;
}

export async function getServerSideProps(context) {
  return {
    props: {
      username: "Sallam Rady",
    },
  };
}
