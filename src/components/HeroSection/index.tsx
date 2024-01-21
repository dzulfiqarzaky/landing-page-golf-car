import { CONTENT } from "./constant";
import {
  HeroContent,
  MainButton,
  MainSubTitle,
  MainText,
  MainTitle,
} from "./styles";

export const HeroSection = () => (
  <HeroContent>
    <MainTitle>{CONTENT.title}</MainTitle>
    <MainSubTitle>{CONTENT.subTitle}</MainSubTitle>
    <MainText>{CONTENT.description}</MainText>
    <MainButton>{CONTENT.button}</MainButton>
  </HeroContent>
);
