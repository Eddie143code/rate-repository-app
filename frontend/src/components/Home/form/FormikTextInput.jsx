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
    marginTop: 2,
    padding: 20,
  },
  inputError: {
    borderColor: "black",
  },
  errorContainer: {
    color: "red",
    marginTop: 2,
    height: 20,
  },
  errorText: {
    color: "red",
  },
});

const FormikTextInput = ({ name }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={meta.error}
      />
      <Text style={styles.errorContainer}>
        {showError && <Text style={styles.errorText}>{meta.error}</Text>}
      </Text>
    </>
  );
};

export default FormikTextInput;
