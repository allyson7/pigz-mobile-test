import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Gradient = styled(LinearGradient).attrs({
  colors: ["#FF881F", "#FA641E"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  flex: 1;

  min-height: 48px;
  max-height: 48px;
  width: 365px;

  border-radius: 17px;

  justify-content: center;
  align-items: center;
`;

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 48px;
  max-height: 48px;
  width: 365px;

  /* background-color: transparent; */
  background-color: ${({ theme, type }) =>
    type === "SECONDARY" && theme.COLORS.WHITE};

  border: 1px
    ${({ theme, type }) =>
      type === "SECONDARY" ? theme.COLORS.ORANGE_700 : theme.COLORS.WHITE};

  border-radius: 17px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<Props>`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS_MED};

  color: ${({ theme, type }) =>
    type === "SECONDARY" ? theme.COLORS.ORANGE_700 : theme.COLORS.WHITE};
`;
