import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer } from "./sign-up-form.styles.js";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password and confirm password does not match");
      return;
    }

    if (!displayName || !email || !password || !confirmPassword) {
      alert("Please fill all the required fields");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error: ", error);
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmitForm}>
        <FormInput
          label="Display Name"
          name="displayName"
          type="text"
          required
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          required
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          required
          minLength={6}
          value={password}
          onChange={handleChange}
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          required
          minLength={6}
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
