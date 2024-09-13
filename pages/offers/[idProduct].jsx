import { HeadComponent } from "components/utils/head";
import DeatilsModule from "modules/details";
import data from "../../data/products.json";

export default function ProductOffert({ product }) {
  return (
    <>
      <HeadComponent title={`${product?.name || "Details"} | Fixly`} />
      <DeatilsModule product={product} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { idProduct } = context.params;

  const found = data[1].products?.find((item) => {
    const uuid = item.route.split("/")[2];
    if (uuid === idProduct) {
      return item;
    }
  });

  if (!found) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return { props: { product: found } };
}
