import { Button, SubTitle, Text, Title } from "@/style/component";
import { theme } from "@/style/theme/theme";
import styled from "@emotion/styled";

export const HeroContent = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 120px 24px 80px;
  background: ${theme.colors.white};
  height: 100vh;

  @media (max-width: ${theme.mediaQuery.desktop}) {
    padding: 80px 24px 60px;
  }

  @media (max-width: ${theme.mediaQuery.mobile}) {
    padding: 60px 24px 40px;
  }
`;

export const MainTitle = styled(Title)`
  margin-bottom: 24px;

  @media (max-width: ${theme.mediaQuery.mobile}) {
    margin-bottom: 16px;
  }
`;

export const MainSubTitle = styled(SubTitle)`
  margin-bottom: 24px;
`;

export const MainText = styled(Text)`
  margin-bottom: 48px;

  @media (max-width: ${theme.mediaQuery.desktop}) {
    margin-bottom: 32px;
  }
`;

export const MainButton = styled(Button)``;
