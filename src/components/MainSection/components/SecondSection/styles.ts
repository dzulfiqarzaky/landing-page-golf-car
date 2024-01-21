import { Title } from "@/style/component";
import { theme } from "@/style/theme/theme";
import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  background-color: ${theme.colors.oceanDeep};
  color: ${theme.colors.white};
  width: 50%;
  @media (max-width: ${theme.mediaQuery.tablet}) {
    width: 100%;
  }
`;

export const SectionTitle = styled(Title)`
  margin-bottom: 24px;
  line-height: normal;
`;

interface ISectionWrapper {
  last?: boolean;
}

export const SectionWrapper = styled.div<ISectionWrapper>`
  max-width: 489px;
  margin-left: 96px;
  padding-top: 272px;
  padding-bottom: ${(props) => (props.last ? "272px" : 0)};

  @media (max-width: ${theme.mediaQuery.tablet}) {
    margin: 272px auto;
    padding: 10px;
  }
`;
