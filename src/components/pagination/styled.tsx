import { device } from "@/styles/media";
import styled from "styled-components";


export const WrapperPagination = styled.div<{ $showLimit?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $showLimit }) =>
    $showLimit ? "space-between" : "center"};

  @media ${device.mobile} {
    flex-direction: column;
    gap: 16px;
  }
`;

export const WrapperListNumber = styled.div``;
