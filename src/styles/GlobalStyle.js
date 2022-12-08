import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-size: 1rem;
    font-weight: 700;
    font-style: normal;
  }
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
  body{
    font-family:  'Noto Sans KR', sans-serif;
  }
  html {
    --color-main:  #06c387; //main point color
    --color-border: #d1cccc; //border color
  }
`;

export default GlobalStyle;
