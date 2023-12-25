import { getData } from "@/utils/data.worker";

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
  console.log("getStaticProps");
  let { pid } = context.params;
  let data = await getData();
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
  console.log("getStaticPaths");
  let data = await getData();
  let ids = data?.products?.map((p) => p.id);
  let paramsArr = ids.map((id) => ({ params: { pid: id } }));
  return {
    paths: paramsArr,
    // paths: [
    // { params: { pid: "p1" } },
    //   { params: { pid: "p2" } },
    //   { params: { pid: "p3" } },
    //   { params: { pid: "p4" } },
    //   { params: { pid: "p5" } },
    //   { params: { pid: "p6" } },
    // ],
    fallback: false,
    // fallback: true,
    // fallback: "blocking",
  };
}
