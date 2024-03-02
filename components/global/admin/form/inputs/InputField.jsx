import { Field, useField } from "formik";

/**
 * Input field component to admin modules
 * @param {HTMLInputElement &&  React.ComponentType<FieldProps>} params
 * @returns
 */
export default function InputField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs">{label}</label>
      <Field
        className={`outline-primary-300 rounded text-xs p-2 w-[100%] border-[1px] transition duration-500 ${
          meta.error
            ? " border-secondary_red-400"
            : " border-primary_variant-100"
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <span className="text-[11px] text-secondary_red-400">{meta.error}</span>
      ) : null}
    </div>
  );
}
