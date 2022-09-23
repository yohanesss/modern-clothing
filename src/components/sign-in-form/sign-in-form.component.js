import React, { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.util";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles.js";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log({ error });
      }
    }
  };

  const signInWithGoogle = async () => {
    signInWithGooglePopup();
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmitForm}>
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
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={"google"}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
