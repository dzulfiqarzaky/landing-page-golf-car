import { SecondSection } from "./components/SecondSection/SecondSection";
import { FirstSection } from "./components/FirstSection/FirstSection";
import { MainContent } from "./constant";
import { Container, ContentWrapper } from "./styles";

export const MainSection = () => {
  const sectionKeys = MainContent.map((_) => window.crypto.randomUUID());

  return (
    <Container>
      {MainContent?.map((content, index) => (
        <ContentWrapper key={sectionKeys[index]}>
          <FirstSection background={content.image} index={index} />
          <SecondSection
            title={content.title}
            description={content.description}
            last={index === MainContent.length - 1}
          />
        </ContentWrapper>
      ))}
    </Container>
  );
};
