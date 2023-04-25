import { StyleSheet, TextInput } from "react-native";
import { useField } from "formik";

import Text from "../../style/Text";

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderColor: "black",
    color: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    padding: 20,
  },
  inputError: {
    borderColor: "black",
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
