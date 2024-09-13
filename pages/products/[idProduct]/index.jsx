import React from "react";
import { HeadComponent } from "components/utils/head";
import DeatilsModule from "modules/details";
import { getProductById } from "services/products";

export default function ProductDetails({ product }) {
  return (
    <React.Fragment>
      <HeadComponent title={`${product?.name || "Details"} | Fixly`} />
      <DeatilsModule product={product} />
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  const { idProduct } = context.params;

  const response = await getProductById(idProduct);

  if (!response.data?.success) {
    return null;
  }

  return { props: { product: response.data?.product } };
}
