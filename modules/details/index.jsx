import CardProduct from "./components/details";
import ScrollToTop from "/hooks/components/ScrollToTop";
import { ProductDetails } from "./styled";
import PaymentsMethods from "./components/methods";
import Reviews from "./components/reviews";

const DeatilsModule = ({ product }) => {
  return (
    <ProductDetails>
      <ScrollToTop />
      <CardProduct product={product} />
      <PaymentsMethods />
      <Reviews reviews={product?.reviews} />
    </ProductDetails>
  );
};

export default DeatilsModule;
