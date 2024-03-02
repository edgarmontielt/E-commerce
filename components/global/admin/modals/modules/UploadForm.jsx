import { Form, Formik } from "formik";
import { useUploadProduct } from "modules/admin/hooks";
import { CATEGORIES_OPTIONS } from "../models/categories";
import InputField from "../../form/inputs/InputField";
import Button from "../../form/buttons/Button";
import InputSelect from "../../form/inputs/InputSelect";
import DragAndDrop from "../../dnd/DragAndDrop";
import { useGetGlobalState } from "hooks";
import UploadProductSchema from "../../helpers/validationUploadProduct";
import { CgSpinner } from "react-icons/cg";

export default function UploadForm({ handleNotViewModal }) {
  const { onHandleSubmit, onChangeCategories, onChangeImages, images } =
    useUploadProduct(handleNotViewModal);

  const { loading } = useGetGlobalState("product");
  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        imgURL: [],
        price: 0,
        amount: 0,
        categories: [],
      }}
      onSubmit={onHandleSubmit}
      validationSchema={UploadProductSchema}
    >
      <Form className="flex flex-col gap-7 mt-10 w-full">
        <InputField
          name="name"
          type="text"
          placeholder="Name"
          label="Product Name"
        />
        <InputField
          name="description"
          type="text"
          placeholder="Description here..."
          label="Description"
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
        <InputSelect
          {...{
            id: "categories",
            name: "categories",
            placeholder: "Categories",
            isMulti: true,
            options: CATEGORIES_OPTIONS,
            onChange: onChangeCategories,
            label: "Categories",
          }}
        />
        <DragAndDrop handleChangeImages={onChangeImages} image={images} />
        <Button>
          {loading ? (
            <CgSpinner size={28} className="animate-spin" />
          ) : (
            "Create product"
          )}
        </Button>
      </Form>
    </Formik>
  );
}
