import { TouchableOpacityProps } from "react-native";

import {
  Container,
  Title,
  ButtonTypeStyleProps,
  Gradient,
  GoogleBtn,
  Logo,
} from "./styles";
import LogoImg from "@assets/images/logo_google.png";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Gradient>
        <Title type={type}>{title}</Title>
      </Gradient>
    </Container>
  );
}

export function GoogleButton({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <GoogleBtn {...rest}>
      <Logo source={LogoImg} />
      <Title style={{ color: "#676767" }} type={type}>
        {title}
      </Title>
    </GoogleBtn>
  );
}
