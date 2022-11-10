import { Container, Content, Header, Link, Logo, Title } from "./styles";
import LogoImg from "@assets/images/logo_pigz.png";
import { Button } from "@components/Button";
import { Input, InputPassword } from "@components/Input";
import { TextProps } from "react-native";

export function SignIn({ ...rest }: TextProps) {
  return (
    <Container>
      {/* <Logo source={LogoImg} /> */}
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

      <Content style={{ marginTop: 36, alignSelf: "center" }}>
        Não tem uma conta?
        <Link onClick={() => {}} {...rest}>
          {" "}
          Criar agora
        </Link>
      </Content>
    </Container>
  );
}
