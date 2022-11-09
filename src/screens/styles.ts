import theme from "@theme/index";
import styled from "styled-components/native";

// const { FONT_FAMILY } = useTheme();

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS_SEMIB};
`;

export const Header = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS_SEMIB};
`;

export const Content = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS};
  font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS_REG};
`;

export const Logo = styled.Image``;
