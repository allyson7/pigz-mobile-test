import {
  BottomText,
  Container,
  Content,
  Header,
  LineStyle,
  Link,
  Logo,
  Title,
} from "./styles";
import LogoImg from "@assets/images/logo_pigz.png";
import { Button, GoogleButton } from "@components/Button";
import { Input, InputPassword } from "@components/Input";
import { TextProps, View } from "react-native";

export function SignIn() {
  return (
    <Container>
      <Logo source={LogoImg} />
      <Title>Para entregadores</Title>

      <Header>Login</Header>
      <Content>Email ou telefone</Content>
      <Input style={{ marginBottom: 17 }} />

      <Content>Senha</Content>
      <InputPassword style={{ marginBottom: 24 }} />

      <Content style={{ textDecorationLine: "underline", marginBottom: 24 }}>
        Esqueci minha senha
      </Content>
      <Button title="Entrar" />

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 36,
        }}
      >
        <Content>Não tem uma conta? </Content>
        <Link onPress={() => {}}>Criar agora</Link>
      </View>

      <View
        style={{ flexDirection: "row", marginTop: 97, alignItems: "center" }}
      >
        <BottomText>Entrar com</BottomText>
        <LineStyle />
      </View>

      <GoogleButton style={{ marginTop: 24 }} title="Continuar com o Google" />
    </Container>
  );
}
