import { createGlobalStyle } from "styled-components";

const theme = {
    colors: {
        darkGrey: "#1b1323",
        bodyBackground: "#f9f9f9",
        grey: "#B7B3C1",
        orange: "#f07d42",
        darkBlue: "#022249",
        lightBlue: "#56bdca",
        grayBlue: "#c6eef5",
        white: "#ffffff",
    },
    screenWidth: {
        mobile: "700px",
    },
};

const GlobalStyle = createGlobalStyle`
  body {
    .scrolling {
        overflow: scroll !important;
    }
    background-color: #f9f9f9;
    font-weight: normal;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    padding: 0;
    margin: 0;
    line-height: 24px;
    background: ${theme.colors.bodyBackground};
    color: ${theme.colors.darkGrey};
    /* 4K */
    @media (max-width: 3840px) {
      font-size: 36px;
    }
    /* 3K - QHD+ */
    @media (max-width: 3200px) {
      font-size: 34px;
    }
    /* MS SURFACE */
    @media (max-width: 3000px) {
      font-size: 32px;
    }
    /* APPLE RETINA */
    @media (max-width: 2880px) {
      font-size: 30px;
    }
    /* 2K - QHD */
    @media (max-width: 2560px) {
      font-size: 20px;
    }
    /* HD+ */
    @media (max-width: 1600px) {
      font-size: 17px;
    }
    /* HD */
    @media (max-width: 1366px) {
      font-size: 15px;
    }
    /* IPAD PRO */
    @media (max-width: 1112px) {
      font-size: 13px;
    }
    /* IPAD */
    @media (max-width: 1024px) {
      font-size: 12px;
    }
    /* WORST CASE SCENARIO */
    @media (max-width: 860px) {
      font-size: 10px;
    }
  }
  h1 {
    font-size: 2em;
    margin-top: 1em;
    text-align: left;
  }
  h2 {
    font-size: 1.5em;
    margin-top: 1em;
    text-align: left;
  }
  h3 {
    font-size: 1.125em;
    margin-top: 1em;
    text-align: left;
  }
  a {
    text-decoration: none;
  }
  p {
    margin-top: 1em;
    text-align: left;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  b, strong {
      font-family: Poppins-medium, sans-serif;
      font-weight: normal;
  }
  
  a:hover {
    text-decoration: none;
  }
  
  h1, h2, h3, h4, h5 {
    font-family: Poppins, sans-serif;
    color: ${theme.colors.darkGrey};
  }
`;

export { theme, GlobalStyle };
