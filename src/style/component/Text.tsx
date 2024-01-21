import styled from "@emotion/styled";
import { theme } from "../theme/theme";

const { fontFamily, fontSize, lineHeight, mediaQuery } = theme;

export const Text = styled.div`
  font-size: ${fontSize["content-xl"]};
  line-height: ${lineHeight["content-xl"]};
  font-weight: 400;
  font-family: ${fontFamily.primary};

  @media (max-width: ${mediaQuery.desktop}) {
    font-size: ${fontSize["content-lg"]};
    line-height: ${lineHeight["content-lg"]};
  }

  @media (max-width: ${mediaQuery.tablet}) {
    font-size: ${fontSize["content-m"]};
    line-height: ${lineHeight["content-m"]};
  }

  @media (max-width: ${mediaQuery.mobile}) {
    font-size: ${fontSize["content-sm"]};
    line-height: ${lineHeight["content-sm"]};
  }
`;
