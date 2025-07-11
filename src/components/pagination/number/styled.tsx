import styled, { css } from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  .active {
    color: #ffff !important;
    background-color: #ea580c;
  }
`;

const HoverStyle = css`
  &:hover {
    color: #ea580c;
    border-color: #ea580c;
    svg {
      path {
        transition: all 0.2s ease-in-out;
        fill: #ea580c;
      }
    }
  }
`;

const PaginationButton = css<{ dot?: boolean }>`
  width: 32px;
  height: 32px;

  color: #636566;

  border: 1px solid transparent;
  border-radius: 4px;

  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

  transition: all 0.3s ease-in-out;

  position: relative;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :not(:last-child) {
    margin-right: 8px;
  }

  &:focus {
    box-shadow: none;
  }
  ${({ dot }) => (dot ? null : HoverStyle)}

  &:disabled {
    cursor: not-allowed;
    :hover {
      border-color: #d1d5db;
    }
  }
`;

// const Shape = css`
//   display: block;
//   position: relative;

//   &:disabled {
//     svg {
//       path {
//         stroke: #d1d5db;
//       }
//     }
//   }
// `;

export const Previous = styled.button<{ dot?: boolean }>`
  ${PaginationButton}
`;

export const PageNumber = styled.button<{ dot?: boolean }>`
  ${PaginationButton}
`;

export const Next = styled.button<{ dot?: boolean }>`
  ${PaginationButton}
`;

export const ContentListPageNumber = styled.div`
  display: flex;
  align-items: center;
`;
