// import packages
import fs from "fs/promises";
import Link from "next/link";
import path from "path";

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
  let filePath = path.join(process.cwd(), "data", "product-data.json");
  let jsonData = await fs.readFile(filePath);
  let data = JSON.parse(jsonData);

  return {
    props: {
      products: data?.products,
    },
    revalidate: 10,
  };
}
