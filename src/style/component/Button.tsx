import styled from "@emotion/styled";
import { theme } from "../theme/theme";

const { colors, fontSize, fontFamily, lineHeight } = theme;

export const Button = styled.button`
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: ${fontSize["btn-xl"]};
  line-height: ${lineHeight["btn-xl"]};
  padding: 12px 40px;

  border: none;
  background-color: ${colors.purple};
  color: ${colors.white};

  @media (max-width: ${theme.mediaQuery.desktop}) {
    font-size: ${theme.fontSize["btn-lg"]};
    line-height: ${theme.lineHeight["btn-lg"]};
  }

  @media (max-width: ${theme.mediaQuery.tablet}) {
    font-size: ${theme.fontSize["btn-m"]};
    line-height: ${theme.lineHeight["btn-m"]};
  }

  @media (max-width: ${theme.mediaQuery.mobile}) {
    font-size: ${theme.fontSize["btn-sm"]};
    line-height: ${theme.lineHeight["btn-sm"]};
  }
`;
