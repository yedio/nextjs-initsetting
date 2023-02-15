import { css } from "styled-components";

export const scroll = css`
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    -webkit-overflow-scrolling: auto;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #e0e0e0;
  }
  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
`;

export const textEllipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
