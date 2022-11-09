import { Container, Content, Header, Logo, Title } from "./styles";
import LogoImg from "@assets/images/logo_pigz.png";

export function SignIn() {
  return (
    <Container>
      <Logo source={LogoImg} />
      <Title>Para programadores</Title>
      <Header>Login</Header>
      <Content>Email ou telefone</Content>
    </Container>
  );
}
