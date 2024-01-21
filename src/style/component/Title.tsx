import styled from "@emotion/styled";
import { theme } from "../theme/theme";

const { fontFamily, fontSize, lineHeight, mediaQuery } = theme;

export const Title = styled.div`
  font-size: ${fontSize["head-xl"]};
  line-height: ${lineHeight["head-xl"]};
  font-weight: 700;
  font-family: ${fontFamily.primary};

  @media (max-width: ${mediaQuery.desktop}) {
    font-size: ${fontSize["head-lg"]};
    line-height: ${lineHeight["head-lg"]};
  }

  @media (max-width: ${mediaQuery.tablet}) {
    font-size: ${fontSize["head-m"]};
    line-height: ${lineHeight["head-m"]};
  }

  @media (max-width: ${mediaQuery.mobile}) {
    font-size: ${fontSize["head-sm"]};
    line-height: ${lineHeight["head-sm"]};
  }
`;
