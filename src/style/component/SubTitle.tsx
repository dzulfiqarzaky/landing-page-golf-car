import styled from "@emotion/styled";
import { theme } from "../theme/theme";

const { fontFamily, fontSize, lineHeight, mediaQuery } = theme;

export const SubTitle = styled.div`
  font-size: ${fontSize["subHead-xl"]};
  line-height: ${lineHeight["subHead-xl"]};
  font-weight: 500;
  font-family: ${fontFamily.primary};

  @media (max-width: ${mediaQuery.desktop}) {
    font-size: ${fontSize["subHead-lg"]};
    line-height: ${lineHeight["subHead-lg"]};
  }

  @media (max-width: ${mediaQuery.tablet}) {
    font-size: ${fontSize["subHead-m"]};
    line-height: ${lineHeight["subHead-m"]};
  }

  @media (max-width: ${mediaQuery.tablet}) {
    font-size: ${fontSize["subHead-sm"]};
    line-height: ${lineHeight["subHead-sm"]};
  }
`;
