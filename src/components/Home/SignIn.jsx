import { View, StyleSheet, Button } from "react-native";
import FormkikTextInput from "./form/FormikTextInput";
import { Formik } from "formik";
import Text from "../style/Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    height: "5%",
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
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    height: 60,
    width: "100%",
    fontWeight: "bold",
  },
  submit: { color: "white" },
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
        <Text style={styles.submit}>submit</Text>
      </View>
    </>
  );
};

const SignIn = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = () => {};
  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
