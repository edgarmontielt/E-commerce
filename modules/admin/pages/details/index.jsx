import { useGetItem } from "hooks";
import { Field, Form, Formik } from "formik";
import ToolbarAdmin from "../../components/toolbar";
import ButtonUpload from "components/global/admin/form/buttons/Button";
import InputField from "components/global/admin/form/inputs/InputField";
import Image from "next/image";
import { useMutation } from "react-query";
import { PRODUCTS_ADMIN } from "config/constants/admin/products";
import { put } from "api";

export default function DetailsToAdmin({ id }) {
  const [product, loading] = useGetItem(id, 100);

  const mutation = useMutation({
    mutationFn: (data) => {
      return put(PRODUCTS_ADMIN.updateProduct, data);
    },
    onSuccess: (res) => {
      alert(res.data?.message);
    },
  });

  const handleSubmit = (values) => {
    if (product === values) {
      alert("The data is the same");
      return;
    }
    mutation.mutate({ _id: id, imgURL: [...product.imgURL], ...values });
  };

  return (
    <>
      <ToolbarAdmin title={loading ? "Loading..." : product.name} />
      <div className="mt-10 mx-10 flex gap-12">
        <section className="w-full pr-20">
          <h2 className="font-semibold text-primary-400">Product details</h2>
          <Formik
            enableReinitialize
            initialValues={{
              name: product.name,
              description: product.description,
              price: product?.price?.$numberDecimal,
              amount: product.amount,
              categories: [],
            }}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col gap-7 mt-10 w-full">
              <InputField
                name="name"
                type="text"
                placeholder="Name"
                label="Product Name"
              />
              <Field
                as="textarea"
                name="description"
                type="text"
                placeholder="Description here..."
                label="Description"
                className="outline-primary-300 rounded text-xs p-2 w-[100%] border-[1px] transition duration-500 min-h-[150px]"
              />
              <InputField
                name="price"
                type="number"
                placeholder="Write the product price..."
                label="Price"
                min={1}
              />
              <InputField
                name="amount"
                type="number"
                placeholder="Write the amount price..."
                label="Amount"
                min={1}
              />
              <ButtonUpload isPending={mutation.isLoading}>
                {mutation.isLoading ? "Updating..." : "Update"}
              </ButtonUpload>
            </Form>
          </Formik>
        </section>
        <section className="w-2/3">
          <h2 className="font-semibold text-primary-400">Images</h2>
          <div className="flex flex-wrap gap-5 mt-10">
            {product?.imgURL?.map((img, index) => {
              return (
                <Image
                  key={index}
                  src={img}
                  width={200}
                  height={200}
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  alt={product?.name + index}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
