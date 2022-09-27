import React from "react";
import "./form-input.styles.js";
import { FormInputLabel, Group, Input } from "./form-input.styles.js";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={otherProps.value.length}
          htmlFor={otherProps["name"]}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
