import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Home/Main";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";
const apolloClient = createApolloClient();
import Constants from "expo-constants";
import { AuthStorageContext } from "./src/hooks/useAuthStorage";
import AuthStorage from "./src/utils/AuthStorage";
const authStorage = new AuthStorage();
const App = () => {
  // console.log(Constants.manifest.extra);
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;
