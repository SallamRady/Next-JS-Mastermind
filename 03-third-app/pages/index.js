// import packages
import { getData } from "@/utils/data.worker";
import Link from "next/link";

export default function Home(props) {
  let singleProduct = props?.products?.map((ele) => (
    <li key={ele.id}>
      <Link href={`/${ele.id}`}>{ele.title}</Link>
    </li>
  ));
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Fetch data module</h2>
      <ul>{singleProduct}</ul>
    </div>
  );
}

export async function getStaticProps() {
  // declaration...
  console.log("Re-generating...");
  let data = await getData();

  return {
    props: {
      products: data?.products,
    },
    revalidate: 10,
  };
}
