import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props?.gap ?? 0.5 + "rem"};
  justify-content: ${(props) => props?.justify ?? "flex-start"};
`;
export const Image = styled.img`
  width: ${(props) => props?.size ?? 1 + "rem"};
  aspect-ratio: 1;
`;
