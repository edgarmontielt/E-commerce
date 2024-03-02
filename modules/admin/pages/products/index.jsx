import { useGetGlobalState } from "hooks";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import InputText from "../../components/inputs/InputText";
import Card from "../../components/products/card";
import ToolbarAdmin from "../../components/toolbar";
import { Button } from "./styled";

export default function ProductsAdminModule({ handleViewModal, user }) {
  const { products } = useGetGlobalState("product");
  const [state, setState] = useState([]);

  const searchProduct = (e) => {
    e.preventDefault();
    const letter = e.target.value;
    const data = products.filter((item) => {
      const itemName = item.name.toUpperCase();
      const field = itemName;
      const textData = letter.toUpperCase();
      return field.indexOf(textData) > -1;
    });

    setState(data);
  };

  useEffect(() => {
    setState(products);
  }, [products]);

  return (
    <>
      <ToolbarAdmin title={"Products"} user={user} />
      <div className="px-4 laptop:px-10 py-4 border-b-[1px] border-[#B3B3B3] min-h-[80px] flex items-center">
        <form className="w-[70%] laptop:w-[40%]">
          <InputText
            name={"search"}
            placeholder={"Search a product"}
            icon={<AiOutlineSearch />}
            event={searchProduct}
          />
        </form>
        <section className="ml-auto">
          <Button onClick={handleViewModal}>New Product</Button>
        </section>
      </div>
      <div className="mt-10 mx-5 tabletS:mx-8 laptop:mx-10 flex flex-wrap justify-center phoneL:grid grid-cols-2 tabletS:grid-cols-3 laptop:grid-cols-4 laptop:flex gap-6 laptop:justify-start">
        {state.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </>
  );
}
