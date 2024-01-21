import { theme } from "@/style/theme/theme";
import { Container, Image, ImageWrapper, MotionWrapper } from "./styles";

import { useScrollAnimation } from "./hooks/useScrollAnimation";

interface IFirstSection {
  background: string;
  index: number;
}

export const FirstSection = ({ background, index }: IFirstSection) => {
  const { imageRef, scaleProgress, opacityProgress, opacity } =
    useScrollAnimation(index);

  return (
    <Container
      style={{
        backgroundColor: opacity,
        transition: "background-color 0.5s ease",
      }}
    >
      <MotionWrapper
        ref={imageRef}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
          originX: "center",
          originY: "center",
        }}
      >
        <ImageWrapper>
          <Image src={background} alt={background} />
        </ImageWrapper>
      </MotionWrapper>
    </Container>
  );
};
