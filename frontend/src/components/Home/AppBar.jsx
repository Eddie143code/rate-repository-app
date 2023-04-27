import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import Text from "../style/Text";

const styles = StyleSheet.create({
  container: {
    height: Constants.statusBarHeight + 30, // fixed height
    paddingTop: 30,
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
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.text}>Repository</Text>
        </Link>
        <Link to="/signin">
          <Text style={styles.text}>Signin</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
