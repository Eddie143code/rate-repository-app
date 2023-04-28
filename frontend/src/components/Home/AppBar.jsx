import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import Text from "../style/Text";
import AuthStorage from "../../utils/AuthStorage";
import { useEffect } from "react";
import Button from "../style/BarButton";
import { useApolloClient } from "@apollo/client";

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
  signOutButton: {
    backgroundColor: "red",
    // add this to change the background color
  },
});

const authStorage = new AuthStorage();

const AppBar = () => {
  const apolloClient = useApolloClient();
  let SignedIn = null;
  let test = null;
  useEffect(() => {
    test = authStorage.getAccessToken();
    if (test._z) {
      SignedIn = test._z;
    }
  }, []);

  const signOutClicked = async () => {
    console.log(SignedIn);
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    SignedIn = null;
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.text}>Repository</Text>
        </Link>
        {SignedIn ? (
          <Link to="/signin">
            <Text style={styles.text}>Signin</Text>
          </Link>
        ) : (
          <Button
            style={styles.signOutButton}
            onPress={signOutClicked}
            title="signout"
          />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
