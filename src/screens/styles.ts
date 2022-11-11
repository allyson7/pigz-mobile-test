import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;

  padding: 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS_SEMIB};

  padding-bottom: 37px;
`;

export const Header = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS_SEMIB};

  padding-bottom: 16px;
  align-self: flex-start;
`;

export const Content = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS_REG};

  padding-bottom: 6px;
  align-self: flex-start;
`;

export const Link = styled.Text`
  color: ${({ theme }) => theme.COLORS.ORANGE_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS_REG};
`;

export const BottomText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS_SEMIB};
`;

export const LineStyle = styled.View`
  flex: 1;
  height: 1px;
  margin-left: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const GoogleButton = styled.TouchableOpacity``;

export const Logo = styled.Image`
  margin-top: 100px;
`;
