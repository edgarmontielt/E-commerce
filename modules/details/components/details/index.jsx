import ActionsButtons from "./actions";
import ImageSlider from "./images";
import { Card, Details, Price } from "./styled";
import TitleProduct from "./tittle";

function CardProduct({ product }) {
  return (
    <div className="bg-white flex flex-col tabletL:grid tabletL:grid-cols-2 gap-10 p-4">
      <ImageSlider images={product?.imgURL} />
      <Card>
        <TitleProduct productName={product?.name} />
        <Price>
          <span>$ </span>
          {product?.price?.$numberDecimal || product?.price}
        </Price>
        <Details>
          <p>
            <span>Description: </span>
            {product?.description}
          </p>
        </Details>
        <ActionsButtons product={product} />
      </Card>
    </div>
  );
}

export default CardProduct;
