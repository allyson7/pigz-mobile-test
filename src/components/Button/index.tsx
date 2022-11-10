import { TouchableOpacityProps } from "react-native";

import { Container, Title, ButtonTypeStyleProps, Gradient } from "./styles";

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
