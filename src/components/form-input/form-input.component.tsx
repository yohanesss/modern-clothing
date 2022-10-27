import { InputHTMLAttributes, FC } from "react";
import "./form-input.styles.js";
import { FormInputLabel, Group, Input } from "./form-input.styles.js";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === "string" &&
              otherProps.value.length
          )}
          htmlFor={otherProps["name"]}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;