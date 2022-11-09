import { StatusBar } from "expo-status-bar";
import { SignIn } from "@screens/signin";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";

import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Roboto_400Regular,
    "Sf-Pro": require("./src/assets/fonts/SF-Pro-Text-Semibold.otf"),
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      {fontsLoaded ? <SignIn /> : <Loading />}
    </ThemeProvider>
  );
}
