import { Pressable, TextInputProps, View } from "react-native";

import { Container, IconF } from "./styles";
import { useTogglePasswordVisibility } from "../hooks/useTogglePassword";

export function Input({ ...rest }: TextInputProps) {
  return <Container selectionColor={"orange"} {...rest} />;
}

export function InputPassword({ ...rest }: TextInputProps) {
  const { secure, icon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  return (
    <View style={{ position: "relative" }}>
      <Container
        selectionColor={"orange"}
        keyboardType="default"
        secureTextEntry={secure}
        {...rest}
      />
      <Pressable
        onPress={handlePasswordVisibility}
        style={{ position: "absolute", top: 13, right: 16 }}
      >
        <IconF name={icon} />
      </Pressable>
    </View>
  );
}
