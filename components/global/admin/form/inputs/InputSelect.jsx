import { useId } from "react";
import Select from "react-select";

export default function InputSelect(props) {
  return (
    <Select
      {...props}
      instanceId={useId()}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          borderColor: "#B8BDCC",
          fontSize: "12px",
        }),
      }}
    />
  );
}
