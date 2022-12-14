import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const lightTheme: DefaultTheme = {
  mainColor: "#0095f6",
  borderColor: "rgb(219,219,219)",
  bgColor: "#FAFAFA",
};
export const darkTheme: DefaultTheme = {
  mainColor: "#0095f6",
  borderColor: "rgb(219,219,219)",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    input {
      all: unset;
    }
    * {
      box-sizing: border-box;
    }
    body {
        background-color: ${(props) => props.theme.bgColor};
        font-size: 14px;
        font-family:'Open Sans', sans-serif;
        color: rgb(38,38,38)
    }
    a {
      text-decoration: none;
    }
`;
