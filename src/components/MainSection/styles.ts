import { theme } from "@/style/theme/theme";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  scroll-snap-type: mandatory;
  scroll-snap-align: start;
  @media (max-width: ${theme.mediaQuery.tablet}) {
    flex-direction: column;
  }
`;
