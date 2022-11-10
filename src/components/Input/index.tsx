import { TextInputProps } from "react-native";

import { Container } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  return <Container {...rest} />;
}

export function InputPassword({ ...rest }: TextInputProps) {
  return (
    <Container keyboardType="default" secureTextEntry={true} {...rest}>
      {/* <Image></Image> */}
    </Container>
  );
}
