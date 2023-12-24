// import our packages
import fs from "fs/promises";
import path from "path";

export default function ProductDetails(props) {
  let { product } = props;
  return (
    <div>
      <h1>{product.title}</h1>
      <p>Product details . . . </p>
    </div>
  );
}

export async function getStaticProps(context) {
  let { pid } = context.params;
  let filePath = path.join(process.cwd(), "data", "product-data.json");
  let jsonData = await fs.readFile(filePath);
  let data = JSON.parse(jsonData);
  let product = data?.products?.find((p) => p.id == pid);

  if (!product) {
    return { notFound: true };
  }
  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "p1" } },
      //   { params: { pid: "p2" } },
      //   { params: { pid: "p3" } },
      //   { params: { pid: "p4" } },
      //   { params: { pid: "p5" } },
      //   { params: { pid: "p6" } },
    ],
    // fallback: false,
    // fallback: true,
    fallback: 'blocking',
  };
}
