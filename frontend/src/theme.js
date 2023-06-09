import { Platform } from "react-native";

const mainFontPlatform = Platform.select({
  android: "Roboto",
  ios: "Arial",
  default: "System",
});

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: mainFontPlatform,
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
