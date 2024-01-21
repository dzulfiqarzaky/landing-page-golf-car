import { Text } from "@/style/component";
import { MainWrapper, SectionTitle, SectionWrapper } from "./styles";
import { MainContent } from "../../constant";

interface ISecondSection {
  title: string;
  description: string;
  last?: boolean;
}
export const SecondSection = ({ title, description, last }: ISecondSection) => {
  return (
    <MainWrapper>
      <SectionWrapper last={last}>
        <SectionTitle>{title}</SectionTitle>
        <Text>{description}</Text>
      </SectionWrapper>
    </MainWrapper>
  );
};
