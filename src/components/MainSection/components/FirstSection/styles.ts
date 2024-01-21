import { theme } from "@/style/theme/theme";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

interface IContainer {
  backgroundColor?: string;
}
export const Container = styled(motion.div)<IContainer>`
  width: 50%;
  box-sizing: border-box;
  height: 100vh;
  transition: backrgound-color 0.5s ease-in-out;

  @media (max-width: ${theme.mediaQuery.tablet}) {
    width: 100%;
  }
`;

export const MotionWrapper = styled(motion.div)``;
export const ImageWrapper = styled.div`
  margin: 210px auto;
  text-align: center;
`;

export const Image = styled.img`
  border: 6px double ${theme.colors.white};
  border-radius: 30px;
  width: 720px;
  aspect-ratio: auto 720 / 512;
  height: 512px;

  @media (max-width: ${theme.mediaQuery.mobile}) {
    width: 516px;
    aspect-ratio: auto 516 / 387;
    height: 387px;
  }
`;
