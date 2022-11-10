import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 50px;
  max-height: 50px;
  width: 365px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

  border: 1px ${({ theme }) => theme.COLORS.ORANGE_600};

  border-radius: 17px;
  padding: 16px;
`;
