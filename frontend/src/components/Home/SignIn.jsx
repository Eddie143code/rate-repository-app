import { View, StyleSheet, Button } from "react-native";
import FormkikTextInput from "./form/FormikTextInput";
import { Formik } from "formik";
import Text from "../style/Text";
import * as yup from "yup";
import useSignIn from "../../hooks/useSignIn";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    height: "1%",
    backgroundColor: "#000000",
    opacity: 0.7,

    // ...
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    marginLeft: 10,
  },
  // ...
  submitView: {
    marginTop: 10,
    height: 38,
    backgroundColor: "blue",
  },
  submitButton: {
    backgroundColor: "blue",
  },
});

const LoginForm = ({ onSubmit }) => {
  return (
    <>
      <FormkikTextInput name="username" placeholder="Username" />
      <FormkikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <View style={styles.submitView}>
        <Button style={styles.submitButton} onPress={onSubmit} title="Submit" />
      </View>
    </>
  );
};

const SignIn = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(4, "username atleast 4 characters")
      .required("username is required"),
    password: yup.string().min(4).required("password is required"),
  });
  const navigate = useNavigate();
  const [signIn, result] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const response = await signIn({ username, password });

      if (response) {
        navigate("/");
      }
    } catch (error) {
      console.log("in onsubmit:", error);
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
