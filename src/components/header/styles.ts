import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  padding: 1.5rem 0;
`;

export const Title = styled.div(
  ({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.blue[600]};
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes["3xl"]};
  `
);
